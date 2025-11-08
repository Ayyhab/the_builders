import { Deal, LLMAnalysisResult } from '../types';

const mockDeals: Map<string, Deal> = new Map();
let dealCounter = 1;

export async function createOrUpdateDeal(
  analysis: LLMAnalysisResult,
  threadId: string
): Promise<string> {
  const existingDeal = await findDealByThreadId(threadId);
  
  if (existingDeal) {
    const updatedDeal: Deal = {
      ...existingDeal,
      contact_name: analysis.contact_name,
      deal_stage: analysis.deal_stage,
      last_interaction: new Date().toISOString(),
      key_quote: analysis.key_quote,
      updated_at: new Date().toISOString()
    };
    mockDeals.set(existingDeal.id!, updatedDeal);
    return existingDeal.id!;
  } else {
    const dealId = `mock_deal_${dealCounter++}`;
    const newDeal: Deal = {
      id: dealId,
      contact_name: analysis.contact_name,
      deal_stage: analysis.deal_stage,
      last_interaction: new Date().toISOString(),
      key_quote: analysis.key_quote,
      email_thread_id: threadId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    mockDeals.set(dealId, newDeal);
    return dealId;
  }
}

async function findDealByThreadId(threadId: string): Promise<Deal | null> {
  for (const deal of mockDeals.values()) {
    if (deal.email_thread_id === threadId) {
      return deal;
    }
  }
  return null;
}

export async function getAllDeals(stage?: string): Promise<Deal[]> {
  let deals = Array.from(mockDeals.values());
  
  if (stage) {
    deals = deals.filter(d => d.deal_stage === stage);
  }
  
  return deals.sort((a, b) => {
    const timeA = new Date(a.updated_at || a.created_at || 0).getTime();
    const timeB = new Date(b.updated_at || b.created_at || 0).getTime();
    return timeB - timeA;
  });
}

export async function getDealById(id: string): Promise<Deal | null> {
  return mockDeals.get(id) || null;
}

