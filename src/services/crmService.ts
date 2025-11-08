import { db } from '../config/firebase';
import { Deal, LLMAnalysisResult } from '../types';

const COLLECTION_NAME = 'crm_deals';

export async function createOrUpdateDeal(
  analysis: LLMAnalysisResult,
  threadId: string
): Promise<string> {
  if (!db) {
    throw new Error('Firebase not initialized. Please provide serviceAccountKey.json');
  }
  const dealData: Omit<Deal, 'id'> = {
    contact_name: analysis.contact_name,
    deal_stage: analysis.deal_stage,
    last_interaction: new Date().toISOString(),
    key_quote: analysis.key_quote,
    email_thread_id: threadId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const existingDeal = await findDealByThreadId(threadId);
  
  if (existingDeal) {
    const dealRef = db.collection(COLLECTION_NAME).doc(existingDeal.id);
    await dealRef.update({
      ...dealData,
      updated_at: new Date().toISOString()
    });
    return existingDeal.id!;
  } else {
    const docRef = await db.collection(COLLECTION_NAME).add(dealData);
    return docRef.id;
  }
}

async function findDealByThreadId(threadId: string): Promise<Deal | null> {
  const snapshot = await db
    .collection(COLLECTION_NAME)
    .where('email_thread_id', '==', threadId)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data()
  } as Deal;
}

export async function getAllDeals(stage?: string): Promise<Deal[]> {
  if (!db) {
    throw new Error('Firebase not initialized. Please provide serviceAccountKey.json');
  }
  
  let query = db.collection(COLLECTION_NAME);
  
  if (stage) {
    query = query.where('deal_stage', '==', stage);
  }
  
  const snapshot = await query.get();
  
  const deals = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Deal));
  
  return deals.sort((a, b) => {
    const timeA = new Date(a.updated_at || a.created_at || 0).getTime();
    const timeB = new Date(b.updated_at || b.created_at || 0).getTime();
    return timeB - timeA;
  });
}

export async function getDealById(id: string): Promise<Deal | null> {
  if (!db) {
    throw new Error('Firebase not initialized. Please provide serviceAccountKey.json');
  }
  
  const doc = await db.collection(COLLECTION_NAME).doc(id).get();
  
  if (!doc.exists) {
    return null;
  }
  
  return {
    id: doc.id,
    ...doc.data()
  } as Deal;
}

