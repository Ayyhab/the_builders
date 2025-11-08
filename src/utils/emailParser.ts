import { EmailThread, EmailMessage } from '../types';

export function parseGmailThread(gmailData: any): EmailThread {
  const messages: EmailMessage[] = [];
  
  if (gmailData.messages && Array.isArray(gmailData.messages)) {
    for (const msg of gmailData.messages) {
      const headers = msg.payload?.headers || [];
      const subject = headers.find((h: any) => h.name === 'Subject')?.value || '';
      const from = headers.find((h: any) => h.name === 'From')?.value || '';
      const to = headers.find((h: any) => h.name === 'To')?.value || '';
      const date = headers.find((h: any) => h.name === 'Date')?.value || new Date().toISOString();
      
      let body = '';
      if (msg.payload?.body?.data) {
        body = Buffer.from(msg.payload.body.data, 'base64').toString('utf-8');
      } else if (msg.payload?.parts) {
        for (const part of msg.payload.parts) {
          if (part.body?.data) {
            body += Buffer.from(part.body.data, 'base64').toString('utf-8');
          }
        }
      }
      
      messages.push({
        id: msg.id || '',
        from,
        to,
        subject,
        body,
        timestamp: date
      });
    }
  }
  
  return {
    threadId: gmailData.threadId || gmailData.id || '',
    subject: messages[0]?.subject || '',
    messages
  };
}

export function parseMockThread(mockData: any): EmailThread {
  if (mockData.thread) {
    return mockData.thread;
  }
  
  if (mockData.threadId && mockData.messages) {
    return {
      threadId: mockData.threadId,
      subject: mockData.subject || '',
      messages: mockData.messages
    };
  }
  
  throw new Error('Invalid mock data format');
}

export function normalizeEmailThread(data: any): EmailThread {
  if (data.threadId && data.messages) {
    return data as EmailThread;
  }
  
  if (data.thread) {
    return data.thread;
  }
  
  if (data.messages && Array.isArray(data.messages)) {
    return parseGmailThread(data);
  }
  
  return parseMockThread(data);
}

