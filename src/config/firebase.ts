import admin from 'firebase-admin';
import * as path from 'path';

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './serviceAccountKey.json';

let db: admin.firestore.Firestore | null = null;

try {
  const serviceAccount = require(path.resolve(serviceAccountPath));
  
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
  
  db = admin.firestore();
  console.log('Firebase initialized successfully');
} catch (error) {
  console.warn('Firebase initialization warning:', (error as Error).message);
  console.warn('Server will continue but database operations will fail');
}

export { db };
export default admin;

