import { GoogleGenerativeAI } from '@google/generative-ai';
import { EmailThread, LLMAnalysisResult } from '../types';

const apiKey = process.env.GOOGLE_GEMINI_API_KEY || '';

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function analyzeEmailThread(thread: EmailThread): Promise<LLMAnalysisResult> {
  if (!genAI) {
    return getMockAnalysis(thread);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = buildPrompt(thread);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return parseLLMResponse(text);
  } catch (error) {
    console.error('LLM API error:', error);
    return getMockAnalysis(thread);
  }
}

function buildPrompt(thread: EmailThread): string {
  const messagesText = thread.messages
    .map(msg => `From: ${msg.from}\nTo: ${msg.to}\nTime: ${msg.timestamp}\nBody: ${msg.body}`)
    .join('\n\n---\n\n');

  return `You are a CRM assistant. Analyze this email conversation and extract deal information.

Email Thread:
Subject: ${thread.subject}
Thread ID: ${thread.threadId}

Messages:
${messagesText}

Extract and return ONLY valid JSON (no markdown, no code blocks):
{
  "contact_name": "Name from email",
  "detected_intent": "proposal sent" | "reviewing" | "follow-up needed" | "interested" | "not interested",
  "deal_stage": "prospecting" | "qualification" | "proposal" | "negotiation" | "closed-won" | "closed-lost",
  "key_quote": "Most relevant quote showing deal status",
  "confidence": 0.85
}`;
}

function parseLLMResponse(text: string): LLMAnalysisResult {
  try {
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const parsed = JSON.parse(cleaned);
    
    return {
      contact_name: parsed.contact_name || 'Unknown',
      detected_intent: parsed.detected_intent || 'unknown',
      deal_stage: parsed.deal_stage || 'prospecting',
      key_quote: parsed.key_quote || '',
      confidence: parsed.confidence || 0.5
    };
  } catch (error) {
    console.error('Failed to parse LLM response:', error);
    throw new Error('Invalid LLM response format');
  }
}

function getMockAnalysis(thread: EmailThread): LLMAnalysisResult {
  const firstMessage = thread.messages[0] || { from: 'unknown@example.com', body: '' };
  const emailName = firstMessage.from.split('@')[0].split('.')[0];
  const contactName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
  
  const bodyText = thread.messages.map(m => m.body).join(' ').toLowerCase();
  
  let intent = 'follow-up needed';
  let stage = 'prospecting';
  
  if (bodyText.includes('not interested') || bodyText.includes('decline')) {
    intent = 'not interested';
    stage = 'closed-lost';
  } else if (bodyText.includes('review') || bodyText.includes('reviewing')) {
    intent = 'reviewing';
    stage = 'negotiation';
  } else if (bodyText.includes('sent') && bodyText.includes('proposal')) {
    intent = 'proposal sent';
    stage = 'proposal';
  } else if (bodyText.includes('very interested') || (bodyText.includes('yes') && bodyText.includes('interested'))) {
    intent = 'interested';
    stage = 'qualification';
  } else if (bodyText.includes('interested')) {
    intent = 'interested';
    stage = 'qualification';
  } else if (bodyText.includes('proposal')) {
    intent = 'proposal sent';
    stage = 'proposal';
  }
  
  const keyQuote = thread.messages[thread.messages.length - 1]?.body.substring(0, 150) || '';
  
  return {
    contact_name: contactName,
    detected_intent: intent,
    deal_stage: stage,
    key_quote: keyQuote,
    confidence: 0.7
  };
}

