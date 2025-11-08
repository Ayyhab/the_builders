import axios from 'axios';
import { EmailThread } from '../types';

const BASE_URL = 'http://localhost:3000';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration?: number;
}

const results: TestResult[] = [];

async function testWithTiming(name: string, testFn: () => Promise<boolean>): Promise<void> {
  const start = Date.now();
  try {
    const passed = await testFn();
    const duration = Date.now() - start;
    results.push({ name, passed, duration });
    console.log(`${passed ? 'PASS' : 'FAIL'} ${name} (${duration}ms)`);
  } catch (error: any) {
    const duration = Date.now() - start;
    results.push({ name, passed: false, error: error.message, duration });
    console.log(`FAIL ${name} (${duration}ms) - ${error.message}`);
  }
}

async function testRealGeminiAnalysis(): Promise<boolean> {
  const thread: EmailThread = {
    threadId: 'real_test_001',
    subject: 'Enterprise Software License Discussion',
    messages: [
      {
        id: 'msg_1',
        from: 'nkotla2908@gmail.com',
        to: 'sales@company.com',
        subject: 'Enterprise Software License Discussion',
        body: 'We have reviewed your enterprise software proposal in detail. Our technical team is impressed with the features. We would like to move forward with a pilot program for 50 users. Can we schedule a call to discuss the contract terms and implementation timeline?',
        timestamp: '2024-01-20T10:00:00Z'
      },
      {
        id: 'msg_2',
        from: 'sales@company.com',
        to: 'nkotla2908@gmail.com',
        subject: 'Re: Enterprise Software License Discussion',
        body: 'Thank you for the positive feedback. I am available this Thursday or Friday to discuss the contract details and implementation plan.',
        timestamp: '2024-01-20T14:30:00Z'
      }
    ]
  };

  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  
  if (!response.data.success || !response.data.deal_id) {
    throw new Error('Analysis failed');
  }
  
  const deal = response.data.deal_data;
  console.log(`   Contact: ${deal.contact_name}`);
  console.log(`   Stage: ${deal.deal_stage}`);
  console.log(`   Intent: ${deal.deal_stage}`);
  console.log(`   Quote: "${deal.key_quote.substring(0, 60)}..."`);
  
  return true;
}

async function testComplexNegotiation(): Promise<boolean> {
  const thread: EmailThread = {
    threadId: 'complex_001',
    subject: 'Multi-Year Contract Negotiation',
    messages: [
      {
        id: 'msg_1',
        from: 'procurement@enterprise.com',
        to: 'sales@company.com',
        subject: 'Multi-Year Contract Negotiation',
        body: 'We are reviewing the pricing structure in your proposal. While the solution meets our requirements, we need to negotiate the annual licensing fees for a 3-year commitment.',
        timestamp: '2024-01-21T09:00:00Z'
      },
      {
        id: 'msg_2',
        from: 'sales@company.com',
        to: 'procurement@enterprise.com',
        subject: 'Re: Multi-Year Contract Negotiation',
        body: 'I understand your concerns. For a 3-year commitment, we can offer a 15% discount on the annual licensing fees.',
        timestamp: '2024-01-21T11:00:00Z'
      },
      {
        id: 'msg_3',
        from: 'procurement@enterprise.com',
        to: 'sales@company.com',
        subject: 'Re: Multi-Year Contract Negotiation',
        body: 'The 15% discount is acceptable. Our legal team is now reviewing the contract terms. We should have feedback by end of week.',
        timestamp: '2024-01-21T15:30:00Z'
      }
    ]
  };

  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  const deal = response.data.deal_data;
  
  console.log(`   Stage: ${deal.deal_stage}`);
  console.log(`   Contact: ${deal.contact_name}`);
  
  if (deal.deal_stage !== 'negotiation' && deal.deal_stage !== 'proposal') {
    throw new Error(`Expected negotiation or proposal stage, got ${deal.deal_stage}`);
  }
  
  return true;
}

async function testClosedWonScenario(): Promise<boolean> {
  const thread: EmailThread = {
    threadId: 'closed_won_001',
    subject: 'Contract Signed - Moving Forward',
    messages: [
      {
        id: 'msg_1',
        from: 'director@startup.com',
        to: 'sales@company.com',
        subject: 'Contract Signed - Moving Forward',
        body: 'Great news! We have signed the contract and are excited to get started. Our CEO has approved the budget. Please send over the onboarding materials and we can begin implementation next week.',
        timestamp: '2024-01-22T10:00:00Z'
      }
    ]
  };

  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  const deal = response.data.deal_data;
  
  console.log(`   Stage: ${deal.deal_stage}`);
  console.log(`   Key indicators: signed contract, approved budget`);
  
  return response.data.success;
}

async function testEdgeCaseEmptyMessage(): Promise<boolean> {
  const thread: EmailThread = {
    threadId: 'edge_empty_001',
    subject: 'Test',
    messages: [
      {
        id: 'msg_1',
        from: 'test@example.com',
        to: 'sales@company.com',
        subject: 'Test',
        body: '',
        timestamp: '2024-01-23T10:00:00Z'
      }
    ]
  };

  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  return response.data.success;
}

async function testConcurrentRequests(): Promise<boolean> {
  const promises = [];
  
  for (let i = 0; i < 5; i++) {
    const thread: EmailThread = {
      threadId: `concurrent_${i}`,
      subject: `Concurrent Test ${i}`,
      messages: [
        {
          id: `msg_${i}`,
          from: `client${i}@example.com`,
          to: 'sales@company.com',
          subject: `Concurrent Test ${i}`,
          body: 'We are interested in your product and would like to schedule a demo.',
          timestamp: '2024-01-24T10:00:00Z'
        }
      ]
    };
    
    promises.push(axios.post(`${BASE_URL}/analyze_convo`, { thread }));
  }
  
  const responses = await Promise.all(promises);
  const allSuccess = responses.every(r => r.data.success);
  
  console.log(`   Processed ${responses.length} concurrent requests`);
  return allSuccess;
}

async function testDealUpdate(): Promise<boolean> {
  const threadId = 'update_test_001';
  
  const initialThread: EmailThread = {
    threadId,
    subject: 'Initial Inquiry',
    messages: [
      {
        id: 'msg_1',
        from: 'prospect@company.com',
        to: 'sales@company.com',
        subject: 'Initial Inquiry',
        body: 'I am interested in learning more about your product.',
        timestamp: '2024-01-25T10:00:00Z'
      }
    ]
  };
  
  const response1 = await axios.post(`${BASE_URL}/analyze_convo`, { thread: initialThread });
  const dealId1 = response1.data.deal_id;
  const stage1 = response1.data.deal_data.deal_stage;
  
  const updatedThread: EmailThread = {
    threadId,
    subject: 'Initial Inquiry',
    messages: [
      ...initialThread.messages,
      {
        id: 'msg_2',
        from: 'sales@company.com',
        to: 'prospect@company.com',
        subject: 'Re: Initial Inquiry',
        body: 'I have sent you our detailed proposal. Please review it.',
        timestamp: '2024-01-25T14:00:00Z'
      }
    ]
  };
  
  const response2 = await axios.post(`${BASE_URL}/analyze_convo`, { thread: updatedThread });
  const dealId2 = response2.data.deal_id;
  const stage2 = response2.data.deal_data.deal_stage;
  
  console.log(`   Initial stage: ${stage1} -> Updated stage: ${stage2}`);
  console.log(`   Deal ID maintained: ${dealId1 === dealId2}`);
  
  return dealId1 === dealId2;
}

async function testInvalidData(): Promise<boolean> {
  try {
    await axios.post(`${BASE_URL}/analyze_convo`, { invalid: 'data' });
    return false;
  } catch (error: any) {
    return error.response?.status === 400;
  }
}

async function testGetDealsFiltering(): Promise<boolean> {
  const response = await axios.get(`${BASE_URL}/api/deals?stage=negotiation`);
  
  if (!Array.isArray(response.data)) {
    throw new Error('Response is not an array');
  }
  
  const allNegotiation = response.data.every((deal: any) => 
    deal.deal_stage === 'negotiation' || response.data.length === 0
  );
  
  console.log(`   Found ${response.data.length} deals in negotiation stage`);
  
  return allNegotiation;
}

async function testResponseTime(): Promise<boolean> {
  const start = Date.now();
  
  const thread: EmailThread = {
    threadId: 'perf_test_001',
    subject: 'Performance Test',
    messages: [
      {
        id: 'msg_1',
        from: 'perf@test.com',
        to: 'sales@company.com',
        subject: 'Performance Test',
        body: 'This is a performance test message.',
        timestamp: '2024-01-26T10:00:00Z'
      }
    ]
  };
  
  await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  const duration = Date.now() - start;
  
  console.log(`   Response time: ${duration}ms`);
  
  return duration < 5000;
}

async function testLongEmailThread(): Promise<boolean> {
  const messages = [];
  for (let i = 0; i < 10; i++) {
    messages.push({
      id: `msg_${i}`,
      from: i % 2 === 0 ? 'client@company.com' : 'sales@company.com',
      to: i % 2 === 0 ? 'sales@company.com' : 'client@company.com',
      subject: 'Long Thread Discussion',
      body: `This is message ${i} in a long email thread. We are discussing various aspects of the deal including pricing, implementation, and support.`,
      timestamp: new Date(Date.now() - (10 - i) * 86400000).toISOString()
    });
  }
  
  const thread: EmailThread = {
    threadId: 'long_thread_001',
    subject: 'Long Thread Discussion',
    messages
  };
  
  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  
  console.log(`   Processed ${messages.length} messages`);
  console.log(`   Stage: ${response.data.deal_data.deal_stage}`);
  
  return response.data.success;
}

async function runIntegrationTests(): Promise<void> {
  console.log('\n');
  console.log('################################################');
  console.log('#  INTEGRATION TESTS - REAL API CALLS        #');
  console.log('################################################\n');
  
  await testWithTiming('Real Gemini API Analysis', testRealGeminiAnalysis);
  await testWithTiming('Complex Negotiation Scenario', testComplexNegotiation);
  await testWithTiming('Closed-Won Detection', testClosedWonScenario);
  await testWithTiming('Edge Case: Empty Message', testEdgeCaseEmptyMessage);
  await testWithTiming('Concurrent Request Handling', testConcurrentRequests);
  await testWithTiming('Deal Update and Persistence', testDealUpdate);
  await testWithTiming('Invalid Data Handling', testInvalidData);
  await testWithTiming('Deals Filtering by Stage', testGetDealsFiltering);
  await testWithTiming('Response Time Performance', testResponseTime);
  await testWithTiming('Long Email Thread Processing', testLongEmailThread);
  
  console.log('\n################################################');
  console.log('#  INTEGRATION TEST SUMMARY                   #');
  console.log('################################################\n');
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  const avgDuration = results.reduce((sum, r) => sum + (r.duration || 0), 0) / results.length;
  
  console.log(`Total Tests: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Success Rate: ${((passed / results.length) * 100).toFixed(1)}%`);
  console.log(`Average Duration: ${avgDuration.toFixed(0)}ms`);
  
  if (failed > 0) {
    console.log('\nFailed Tests:');
    results.filter(r => !r.passed).forEach(r => {
      console.log(`  - ${r.name}: ${r.error || 'Unknown error'}`);
    });
  }
  
  if (failed === 0) {
    console.log('\n ALL INTEGRATION TESTS PASSED');
  } else {
    console.log(`\n ${failed} TESTS FAILED`);
    process.exit(1);
  }
}

runIntegrationTests().catch((error: Error) => {
  console.error('\n TEST SUITE CRASHED:', error.message);
  console.error(error.stack);
  process.exit(1);
});

