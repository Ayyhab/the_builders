export interface EmailMessage {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

export interface EmailThread {
  threadId: string;
  subject: string;
  messages: EmailMessage[];
}

export interface LLMAnalysisResult {
  contact_name: string;
  detected_intent: string;
  deal_stage: string;
  key_quote: string;
  confidence: number;
}

export interface Deal {
  id?: string;
  contact_name: string;
  deal_stage: string;
  last_interaction: string;
  key_quote: string;
  email_thread_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AnalyzeConvoRequest {
  thread: EmailThread;
}

export interface AnalyzeConvoResponse {
  success: boolean;
  deal_id?: string;
  deal_data?: Deal;
  error?: string;
}

