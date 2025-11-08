import { Router, Request, Response } from 'express';
import { db } from '../config/firebase';
import * as crmService from '../services/crmService';
import * as mockCrmService from '../services/mockCrmService';

const useMock = !db;

const router = Router();

router.get('/api/deals', async (req: Request, res: Response) => {
  try {
    const stage = req.query.stage as string | undefined;
    const deals = useMock
      ? await mockCrmService.getAllDeals(stage)
      : await crmService.getAllDeals(stage);
    res.json(deals);
  } catch (error: any) {
    console.error('Get deals error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

router.get('/api/deals/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deal = useMock
      ? await mockCrmService.getDealById(id)
      : await crmService.getDealById(id);
    
    if (!deal) {
      return res.status(404).json({ error: 'Deal not found' });
    }
    
    res.json(deal);
  } catch (error: any) {
    console.error('Get deal error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

export default router;

