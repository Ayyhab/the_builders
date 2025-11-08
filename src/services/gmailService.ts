import { google } from 'googleapis';
import * as path from 'path';
import * as fs from 'fs';
import { EmailThread, EmailMessage } from '../types';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

let oauth2Client: any = null;

function initializeOAuth2() {
  const clientSecretPath = process.env.GMAIL_CLIENT_SECRET_PATH || 
    path.join(process.cwd(), 'client_secret_814575069237-aqh7kbb1bt69v9t05vp0vatj74bfn77l.apps.googleusercontent.com.json');
  
  try {
    const resolvedPath = path.resolve(clientSecretPath);
    const content = fs.readFileSync(resolvedPath, 'utf8');
    const credentials = JSON.parse(content);
    const { client_id, client_secret, redirect_uris } = credentials.web;
    
    oauth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
  } catch (error) {
    console.error('Failed to load Gmail OAuth credentials:', error);
  }
}

initializeOAuth2();

export function getAuthUrl(): string {
  if (!oauth2Client) {
    throw new Error('Gmail OAuth2 not initialized');
  }
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });
}

export function setCredentials(tokens: any) {
  if (!oauth2Client) {
    throw new Error('Gmail OAuth2 not initialized');
  }
  oauth2Client.setCredentials(tokens);
}

export async function getTokenFromCode(code: string) {
  if (!oauth2Client) {
    throw new Error('Gmail OAuth2 not initialized');
  }
  
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}

export async function fetchEmailThread(threadId: string): Promise<EmailThread | null> {
  if (!oauth2Client) {
    throw new Error('Gmail OAuth2 not initialized. Please authenticate first.');
  }
  
  try {
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    
    const thread = await gmail.users.threads.get({
      userId: 'me',
      id: threadId,
      format: 'full'
    });
    
    if (!thread.data.messages) {
      return null;
    }
    
    const messages: EmailMessage[] = [];
    const subjectHeader = thread.data.messages[0]?.payload?.headers?.find(
      (h: any) => h.name === 'Subject'
    );
    const subject = subjectHeader?.value || '';
    
    for (const msg of thread.data.messages) {
      const headers = msg.payload?.headers || [];
      const from = headers.find((h: any) => h.name === 'From')?.value || '';
      const to = headers.find((h: any) => h.name === 'To')?.value || '';
      const date = headers.find((h: any) => h.name === 'Date')?.value || new Date().toISOString();
      
      let body = '';
      if (msg.payload?.body?.data) {
        body = Buffer.from(msg.payload.body.data, 'base64').toString('utf-8');
      } else if (msg.payload?.parts) {
        for (const part of msg.payload.parts) {
          if (part.mimeType === 'text/plain' && part.body?.data) {
            body += Buffer.from(part.body.data, 'base64').toString('utf-8');
          } else if (part.mimeType === 'text/html' && part.body?.data && !body) {
            const htmlBody = Buffer.from(part.body.data, 'base64').toString('utf-8');
            body = htmlBody.replace(/<[^>]*>/g, ' ');
          }
        }
      }
      
      messages.push({
        id: msg.id || '',
        from,
        to,
        subject,
        body: body.trim(),
        timestamp: date
      });
    }
    
    return {
      threadId: threadId,
      subject,
      messages
    };
  } catch (error: any) {
    console.error('Gmail API error:', error.message);
    throw error;
  }
}

export async function listThreads(maxResults: number = 10): Promise<string[]> {
  if (!oauth2Client) {
    throw new Error('Gmail OAuth2 not initialized. Please authenticate first.');
  }
  
  try {
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    
    const response = await gmail.users.threads.list({
      userId: 'me',
      maxResults
    });
    
    return response.data.threads?.map(t => t.id || '') || [];
  } catch (error: any) {
    console.error('Gmail list threads error:', error.message);
    throw error;
  }
}

export function isAuthenticated(): boolean {
  return oauth2Client !== null && oauth2Client.credentials !== undefined;
}

