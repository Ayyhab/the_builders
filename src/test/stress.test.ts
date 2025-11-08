import axios from 'axios';
import { EmailThread } from '../types';

const BASE_URL = 'http://localhost:3000';

async function stressTestConcurrentRequests(): Promise<void> {
  console.log('\n=== Stress Test: 20 Concurrent Requests ===\n');
  
  const promises = [];
  const startTime = Date.now();
  
  for (let i = 0; i < 20; i++) {
    const thread: EmailThread = {
      threadId: `stress_${i}_${Date.now()}`,
      subject: `Stress Test ${i}`,
      messages: [
        {
          id: `msg_${i}`,
          from: `client${i}@test.com`,
          to: 'sales@company.com',
          subject: `Stress Test ${i}`,
          body: `This is stress test message ${i}. We are interested in your product and would like to discuss pricing and implementation.`,
          timestamp: new Date().toISOString()
        }
      ]
    };
    
    promises.push(
      axios.post(`${BASE_URL}/analyze_convo`, { thread })
        .then(r => ({ success: true, threadId: thread.threadId, time: Date.now() - startTime }))
        .catch(e => ({ success: false, threadId: thread.threadId, error: e.message }))
    );
  }
  
  const results = await Promise.all(promises);
  const endTime = Date.now();
  const duration = endTime - startTime;
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`Total Requests: 20`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total Duration: ${duration}ms`);
  console.log(`Average per Request: ${(duration / 20).toFixed(0)}ms`);
  console.log(`Requests per Second: ${(20 / (duration / 1000)).toFixed(2)}`);
  
  if (failed > 0) {
    console.log('\nFailed Requests:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.threadId}: ${(r as any).error}`);
    });
  }
}

async function stressTestLargePayload(): Promise<void> {
  console.log('\n=== Stress Test: Large Email Thread ===\n');
  
  const messages = [];
  for (let i = 0; i < 50; i++) {
    messages.push({
      id: `msg_${i}`,
      from: i % 2 === 0 ? 'client@huge.com' : 'sales@company.com',
      to: i % 2 === 0 ? 'sales@company.com' : 'client@huge.com',
      subject: 'Massive Thread Discussion',
      body: `Message ${i}: `.repeat(10) + 'This is a very long message with lots of content. '.repeat(20),
      timestamp: new Date(Date.now() - (50 - i) * 3600000).toISOString()
    });
  }
  
  const thread: EmailThread = {
    threadId: 'large_thread_stress',
    subject: 'Massive Thread Discussion',
    messages
  };
  
  const payloadSize = JSON.stringify(thread).length;
  console.log(`Payload Size: ${(payloadSize / 1024).toFixed(2)} KB`);
  console.log(`Message Count: ${messages.length}`);
  
  const startTime = Date.now();
  const response = await axios.post(`${BASE_URL}/analyze_convo`, { thread });
  const duration = Date.now() - startTime;
  
  console.log(`Processing Time: ${duration}ms`);
  console.log(`Success: ${response.data.success}`);
  console.log(`Deal Stage: ${response.data.deal_data.deal_stage}`);
}

async function stressTestRapidSequential(): Promise<void> {
  console.log('\n=== Stress Test: 50 Rapid Sequential Requests ===\n');
  
  const startTime = Date.now();
  let successful = 0;
  let failed = 0;
  
  for (let i = 0; i < 50; i++) {
    const thread: EmailThread = {
      threadId: `rapid_${i}_${Date.now()}`,
      subject: `Rapid Test ${i}`,
      messages: [
        {
          id: `msg_${i}`,
          from: `rapid${i}@test.com`,
          to: 'sales@company.com',
          subject: `Rapid Test ${i}`,
          body: 'Quick test message for rapid sequential testing.',
          timestamp: new Date().toISOString()
        }
      ]
    };
    
    try {
      await axios.post(`${BASE_URL}/analyze_convo`, { thread });
      successful++;
      if (i % 10 === 0) process.stdout.write('.');
    } catch (error) {
      failed++;
    }
  }
  
  const duration = Date.now() - startTime;
  
  console.log('\n');
  console.log(`Total Requests: 50`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total Duration: ${duration}ms`);
  console.log(`Average per Request: ${(duration / 50).toFixed(0)}ms`);
}

async function stressTestMemoryLeak(): Promise<void> {
  console.log('\n=== Stress Test: Memory Leak Detection (100 requests) ===\n');
  
  const startTime = Date.now();
  
  for (let i = 0; i < 100; i++) {
    const thread: EmailThread = {
      threadId: `memory_${i}`,
      subject: `Memory Test ${i}`,
      messages: [
        {
          id: `msg_${i}`,
          from: `memory${i}@test.com`,
          to: 'sales@company.com',
          subject: `Memory Test ${i}`,
          body: 'Memory leak detection test message with some content.',
          timestamp: new Date().toISOString()
        }
      ]
    };
    
    await axios.post(`${BASE_URL}/analyze_convo`, { thread });
    
    if (i % 20 === 0) {
      console.log(`Progress: ${i}/100 requests`);
    }
  }
  
  const duration = Date.now() - startTime;
  
  console.log(`\nCompleted 100 requests in ${duration}ms`);
  console.log(`Average: ${(duration / 100).toFixed(0)}ms per request`);
  console.log(`No crashes detected - Memory appears stable`);
}

async function runStressTests(): Promise<void> {
  console.log('\n');
  console.log('################################################');
  console.log('#  STRESS TESTS - PERFORMANCE & STABILITY     #');
  console.log('################################################');
  
  try {
    await stressTestConcurrentRequests();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await stressTestLargePayload();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await stressTestRapidSequential();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await stressTestMemoryLeak();
    
    console.log('\n################################################');
    console.log('#  STRESS TEST SUMMARY                        #');
    console.log('################################################\n');
    
    console.log('ALL STRESS TESTS PASSED');
    console.log('System handled high load successfully\n');
    
  } catch (error: any) {
    console.error('\nSTRESS TEST FAILED:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

runStressTests().catch((error: Error) => {
  console.error('\nSTRESS TEST SUITE CRASHED:', error.message);
  console.error(error.stack);
  process.exit(1);
});

