import { Router, Request, Response } from 'express';
import { normalizeEmailThread } from '../utils/emailParser';
import { analyzeEmailThread } from '../services/llmService';
import { db } from '../config/firebase';
import * as crmService from '../services/crmService';
import * as mockCrmService from '../services/mockCrmService';
import { AnalyzeConvoRequest, AnalyzeConvoResponse } from '../types';

const useMock = !db;

const router = Router();

router.post('/analyze_convo', async (req: Request, res: Response) => {
  try {
    const body = req.body as AnalyzeConvoRequest | any;
    
    if (!body.thread && !body.threadId && !body.messages) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request: missing thread data'
      } as AnalyzeConvoResponse);
    }

    const thread = normalizeEmailThread(body);
    
    if (!thread.messages || thread.messages.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request: no messages in thread'
      } as AnalyzeConvoResponse);
    }

    const analysis = await analyzeEmailThread(thread);
    const dealId = useMock 
      ? await mockCrmService.createOrUpdateDeal(analysis, thread.threadId)
      : await crmService.createOrUpdateDeal(analysis, thread.threadId);
    const deal = useMock
      ? await mockCrmService.getDealById(dealId)
      : await crmService.getDealById(dealId);

    res.json({
      success: true,
      deal_id: dealId,
      deal_data: deal || undefined
    } as AnalyzeConvoResponse);
  } catch (error: any) {
    console.error('Analyze convo error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    } as AnalyzeConvoResponse);
  }
});

export default router;

