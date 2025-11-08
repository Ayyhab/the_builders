import axios from 'axios';
import { EmailThread } from '../types';

const BASE_URL = 'http://localhost:3000';

interface TestCase {
  name: string;
  thread: EmailThread;
  expectedStage?: string;
}

const testCases: TestCase[] = [
  {
    name: 'Reviewing Proposal - Should detect negotiation stage',
    expectedStage: 'negotiation',
    thread: {
      threadId: 'thread_001',
      subject: 'Project Proposal Review',
      messages: [
        {
          id: 'msg_001',
          from: 'john.smith@acmecorp.com',
          to: 'sales@company.com',
          subject: 'Project Proposal Review',
          body: 'Hi, we received your proposal and are currently reviewing it. Our team is interested in moving forward with the project.',
          timestamp: '2024-01-15T10:00:00Z'
        },
        {
          id: 'msg_002',
          from: 'john.smith@acmecorp.com',
          to: 'sales@company.com',
          subject: 'Re: Project Proposal Review',
          body: 'We are reviewing the contract terms and should have a decision by next week. The terms look reasonable.',
          timestamp: '2024-01-16T14:20:00Z'
        }
      ]
    }
  },
  {
    name: 'Proposal Sent - Should detect proposal stage',
    expectedStage: 'proposal',
    thread: {
      threadId: 'thread_002',
      subject: 'New Partnership Opportunity',
      messages: [
        {
          id: 'msg_003',
          from: 'sales@company.com',
          to: 'jane.doe@startupco.com',
          subject: 'New Partnership Opportunity',
          body: 'I sent you the proposal yesterday. Let me know your thoughts on the pricing and terms.',
          timestamp: '2024-01-17T09:00:00Z'
        },
        {
          id: 'msg_004',
          from: 'jane.doe@startupco.com',
          to: 'sales@company.com',
          subject: 'Re: New Partnership Opportunity',
          body: 'Thanks for sending the proposal. We received it and will get back to you this week.',
          timestamp: '2024-01-17T11:00:00Z'
        }
      ]
    }
  },
  {
    name: 'Not Interested - Should detect closed-lost stage',
    expectedStage: 'closed-lost',
    thread: {
      threadId: 'thread_003',
      subject: 'Collaboration Discussion',
      messages: [
        {
          id: 'msg_005',
          from: 'bob.wilson@enterprise.com',
          to: 'sales@company.com',
          subject: 'Collaboration Discussion',
          body: 'Thank you for reaching out, but we are not interested at this time. We will decline the proposal.',
          timestamp: '2024-01-18T15:00:00Z'
        }
      ]
    }
  },
  {
    name: 'Interested Customer - Should detect qualification stage',
    expectedStage: 'qualification',
    thread: {
      threadId: 'thread_004',
      subject: 'Product Inquiry',
      messages: [
        {
          id: 'msg_006',
          from: 'alice.chen@techfirm.com',
          to: 'sales@company.com',
          subject: 'Product Inquiry',
          body: 'Yes, we are very interested in your product. Can we schedule a demo call this week?',
          timestamp: '2024-01-19T10:00:00Z'
        }
      ]
    }
  }
];

async function testHealthEndpoint(): Promise<boolean> {
  console.log('\n========================================');
  console.log('TEST 1: Health Endpoint');
  console.log('========================================');
  
  try {
    const response = await axios.get(`${BASE_URL}/health`);
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    if (response.status === 200 && response.data.status === 'ok') {
      console.log('RESULT: PASSED');
      return true;
    } else {
      console.log('RESULT: FAILED - Unexpected response');
      return false;
    }
  } catch (error: any) {
    console.log('RESULT: FAILED');
    console.error('Error:', error.message);
    return false;
  }
}

async function testAnalyzeConvo(testCase: TestCase, index: number): Promise<boolean> {
  console.log('\n========================================');
  console.log(`TEST ${index + 2}: Analyze Convo - ${testCase.name}`);
  console.log('========================================');
  
  try {
    const response = await axios.post(`${BASE_URL}/analyze_convo`, {
      thread: testCase.thread
    });
    
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    if (response.data.success && response.data.deal_id) {
      if (testCase.expectedStage) {
        const actualStage = response.data.deal_data?.deal_stage;
        if (actualStage === testCase.expectedStage) {
          console.log(`RESULT: PASSED - Stage matches (${actualStage})`);
          return true;
        } else {
          console.log(`RESULT: FAILED - Expected stage: ${testCase.expectedStage}, Got: ${actualStage}`);
          return false;
        }
      } else {
        console.log('RESULT: PASSED');
        return true;
      }
    } else {
      console.log('RESULT: FAILED - No success or deal_id in response');
      return false;
    }
  } catch (error: any) {
    console.log('RESULT: FAILED');
    console.error('Error:', error.response?.data || error.message);
    return false;
  }
}

async function testGetAllDeals(): Promise<boolean> {
  console.log('\n========================================');
  console.log(`TEST ${testCases.length + 2}: Get All Deals`);
  console.log('========================================');
  
  try {
    const response = await axios.get(`${BASE_URL}/api/deals`);
    console.log('Status:', response.status);
    console.log(`Found ${response.data.length} deals`);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    if (response.status === 200 && Array.isArray(response.data)) {
      console.log('RESULT: PASSED');
      return true;
    } else {
      console.log('RESULT: FAILED - Invalid response format');
      return false;
    }
  } catch (error: any) {
    console.log('RESULT: FAILED');
    console.error('Error:', error.response?.data || error.message);
    return false;
  }
}

async function testGmailAuth(): Promise<boolean> {
  console.log('\n========================================');
  console.log(`TEST ${testCases.length + 3}: Gmail Auth URL`);
  console.log('========================================');
  
  try {
    const response = await axios.get(`${BASE_URL}/gmail/auth`);
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    if (response.status === 200 && response.data.authUrl) {
      console.log('RESULT: PASSED');
      return true;
    } else {
      console.log('RESULT: FAILED - No auth URL in response');
      return false;
    }
  } catch (error: any) {
    console.log('RESULT: FAILED');
    console.error('Error:', error.response?.data || error.message);
    return false;
  }
}

async function runAllTests(): Promise<void> {
  console.log('\n');
  console.log('################################################');
  console.log('#  AUTONOMOUS DEAL TRACKER - TEST SUITE       #');
  console.log('################################################');
  
  const results: boolean[] = [];
  
  const healthOk = await testHealthEndpoint();
  results.push(healthOk);
  
  if (!healthOk) {
    console.log('\n\nSERVER NOT RUNNING');
    console.log('Start server with: npm run dev');
    process.exit(1);
  }
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  for (let i = 0; i < testCases.length; i++) {
    const passed = await testAnalyzeConvo(testCases[i], i);
    results.push(passed);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  const dealsOk = await testGetAllDeals();
  results.push(dealsOk);
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const gmailOk = await testGmailAuth();
  results.push(gmailOk);
  
  console.log('\n\n################################################');
  console.log('#  TEST SUMMARY                               #');
  console.log('################################################');
  
  const passed = results.filter(r => r).length;
  const total = results.length;
  const failed = total - passed;
  
  console.log(`Total Tests: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);
  
  if (failed === 0) {
    console.log('\nALL TESTS PASSED');
  } else {
    console.log(`\n${failed} TESTS FAILED`);
    process.exit(1);
  }
}

runAllTests().catch((error: Error) => {
  console.error('\nTEST SUITE CRASHED:', error.message);
  process.exit(1);
});

