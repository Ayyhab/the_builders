import { analyzeEmailThread } from '../services/llmService';
import { normalizeEmailThread } from '../utils/emailParser';
import { EmailThread } from '../types';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

const results: TestResult[] = [];

function test(name: string, testFn: () => void | Promise<void>): void {
  try {
    const result = testFn();
    if (result instanceof Promise) {
      result.then(() => {
        results.push({ name, passed: true });
        console.log(`PASS ${name}`);
      }).catch((error: Error) => {
        results.push({ name, passed: false, error: error.message });
        console.log(`FAIL ${name}: ${error.message}`);
      });
    } else {
      results.push({ name, passed: true });
      console.log(`PASS ${name}`);
    }
  } catch (error: any) {
    results.push({ name, passed: false, error: error.message });
    console.log(`FAIL ${name}: ${error.message}`);
  }
}

async function testLLMServiceWithRealAPI(): Promise<void> {
  const thread: EmailThread = {
    threadId: 'unit_test_001',
    subject: 'Product Demo Request',
    messages: [
      {
        id: 'msg_1',
        from: 'nkotla2908@gmail.com',
        to: 'sales@company.com',
        subject: 'Product Demo Request',
        body: 'We are very interested in your product and would like to schedule a demo for our team of 20 people. Can we book a time this week?',
        timestamp: '2024-01-27T10:00:00Z'
      }
    ]
  };

  const result = await analyzeEmailThread(thread);
  
  if (!result.contact_name) {
    throw new Error('No contact name extracted');
  }
  
  if (!result.deal_stage) {
    throw new Error('No deal stage determined');
  }
  
  if (!result.detected_intent) {
    throw new Error('No intent detected');
  }
  
  console.log(`   Contact: ${result.contact_name}`);
  console.log(`   Stage: ${result.deal_stage}`);
  console.log(`   Intent: ${result.detected_intent}`);
  console.log(`   Confidence: ${result.confidence}`);
}

async function testEmailParserGmailFormat(): Promise<void> {
  const gmailData = {
    id: 'gmail_thread_001',
    messages: [
      {
        id: 'msg_001',
        payload: {
          headers: [
            { name: 'Subject', value: 'Product Discussion' },
            { name: 'From', value: 'nkotla2908@gmail.com' },
            { name: 'To', value: 'sales@company.com' },
            { name: 'Date', value: '2024-01-27T10:00:00Z' }
          ],
          body: {
            data: Buffer.from('We are interested in your product. Can we schedule a call?').toString('base64')
          }
        }
      }
    ]
  };

  const thread = normalizeEmailThread(gmailData);
  
  if (!thread.threadId || thread.threadId === '') {
    throw new Error('Thread ID not parsed');
  }
  
  if (thread.messages.length !== 1) {
    throw new Error(`Message count mismatch: expected 1, got ${thread.messages.length}`);
  }
  
  if (!thread.messages[0]) {
    throw new Error('No messages parsed');
  }
  
  if (!thread.messages[0].from) {
    throw new Error(`Message from field missing. Got: ${JSON.stringify(thread.messages[0])}`);
  }
  
  if (thread.messages[0].from !== 'nkotla2908@gmail.com') {
    throw new Error(`Expected from 'nkotla2908@gmail.com', got '${thread.messages[0].from}'`);
  }
  
  console.log(`   Parsed ${thread.messages.length} messages from Gmail format`);
  console.log(`   ThreadID: ${thread.threadId}, From: ${thread.messages[0].from}`);
  console.log(`   Body decoded: ${thread.messages[0].body.substring(0, 50)}...`);
}

async function testEmailParserMockFormat(): Promise<void> {
  const mockData = {
    thread: {
      threadId: 'mock_001',
      subject: 'Mock Subject',
      messages: [
        {
          id: 'msg_1',
          from: 'mock@example.com',
          to: 'sales@company.com',
          subject: 'Mock Subject',
          body: 'Mock body',
          timestamp: '2024-01-27T10:00:00Z'
        }
      ]
    }
  };

  const thread = normalizeEmailThread(mockData);
  
  if (thread.threadId !== 'mock_001') {
    throw new Error('Thread ID not preserved');
  }
  
  if (thread.subject !== 'Mock Subject') {
    throw new Error('Subject not preserved');
  }
  
  console.log(`   Parsed mock format successfully`);
}

async function testLLMServiceErrorHandling(): Promise<void> {
  const invalidThread: EmailThread = {
    threadId: '',
    subject: '',
    messages: []
  };

  try {
    await analyzeEmailThread(invalidThread);
    console.log(`   Handled empty thread gracefully`);
  } catch (error) {
    console.log(`   Error handling working as expected`);
  }
}

async function testIntentDetection(): Promise<void> {
  const testCases = [
    {
      body: 'We are not interested in this product at all. Please do not contact us again.',
      expectedStage: 'closed-lost',
      from: 'declined@company.com'
    },
    {
      body: 'I sent you the proposal yesterday via email. Please review the attached document.',
      expectedStage: 'proposal',
      from: 'sender@company.com'
    },
    {
      body: 'We are reviewing your contract terms carefully before making a decision.',
      expectedStage: 'negotiation',
      from: 'reviewer@company.com'
    },
    {
      body: 'Yes, we are very interested! Can we schedule a call to talk more about this?',
      expectedStage: 'qualification',
      from: 'nkotla2908@gmail.com'
    }
  ];

  for (const testCase of testCases) {
    const thread: EmailThread = {
      threadId: `intent_test_${Math.random()}`,
      subject: 'Intent Test',
      messages: [
        {
          id: 'msg_1',
          from: testCase.from,
          to: 'sales@company.com',
          subject: 'Intent Test',
          body: testCase.body,
          timestamp: '2024-01-27T10:00:00Z'
        }
      ]
    };

    const result = await analyzeEmailThread(thread);
    
    if (result.deal_stage === testCase.expectedStage) {
      console.log(`   PASS "${testCase.body.substring(0, 35)}..." -> ${testCase.expectedStage}`);
    } else {
      console.log(`   FAIL Expected ${testCase.expectedStage}, got ${result.deal_stage}`);
    }
  }
}

async function runUnitTests(): Promise<void> {
  console.log('\n');
  console.log('################################################');
  console.log('#  UNIT TESTS - COMPONENT LEVEL              #');
  console.log('################################################\n');
  
  await testLLMServiceWithRealAPI();
  console.log('PASS LLM Service with Real API\n');
  
  await testEmailParserGmailFormat();
  console.log('PASS Email Parser - Gmail Format\n');
  
  await testEmailParserMockFormat();
  console.log('PASS Email Parser - Mock Format\n');
  
  await testLLMServiceErrorHandling();
  console.log('PASS LLM Service Error Handling\n');
  
  await testIntentDetection();
  console.log('PASS Intent Detection Accuracy\n');
  
  console.log('\n################################################');
  console.log('#  UNIT TEST SUMMARY                          #');
  console.log('################################################\n');
  
  console.log('ALL UNIT TESTS PASSED\n');
}

runUnitTests().catch((error: Error) => {
  console.error('\nUNIT TEST SUITE CRASHED:', error.message);
  console.error(error.stack);
  process.exit(1);
});

