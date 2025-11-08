import { Router, Request, Response } from 'express';
import { getAuthUrl, getTokenFromCode, setCredentials, fetchEmailThread, listThreads, isAuthenticated } from '../services/gmailService';
import { analyzeEmailThread } from '../services/llmService';
import { createOrUpdateDeal, getDealById } from '../services/crmService';

const router = Router();

router.get('/gmail/auth', (req: Request, res: Response) => {
  try {
    const authUrl = getAuthUrl();
    res.json({ authUrl });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/gmail/callback', async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: 'Missing authorization code' });
    }
    
    const tokens = await getTokenFromCode(code);
    res.json({ success: true, tokens });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/gmail/set-tokens', (req: Request, res: Response) => {
  try {
    const { tokens } = req.body;
    if (!tokens) {
      return res.status(400).json({ error: 'Missing tokens' });
    }
    
    setCredentials(tokens);
    res.json({ success: true, message: 'Tokens set successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/gmail/threads', async (req: Request, res: Response) => {
  try {
    if (!isAuthenticated()) {
      return res.status(401).json({ error: 'Not authenticated. Please authenticate first.' });
    }
    
    const maxResults = parseInt(req.query.maxResults as string) || 10;
    const threadIds = await listThreads(maxResults);
    res.json({ threadIds });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/gmail/analyze/:threadId', async (req: Request, res: Response) => {
  try {
    if (!isAuthenticated()) {
      return res.status(401).json({ error: 'Not authenticated. Please authenticate first.' });
    }
    
    const { threadId } = req.params;
    const thread = await fetchEmailThread(threadId);
    
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }
    
    const analysis = await analyzeEmailThread(thread);
    const dealId = await createOrUpdateDeal(analysis, thread.threadId);
    const deal = await getDealById(dealId);
    
    res.json({
      success: true,
      deal_id: dealId,
      deal_data: deal || undefined,
      thread: thread
    });
  } catch (error: any) {
    console.error('Gmail analyze error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

export default router;

