import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const config = {
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
  credentials: {
    username: process.env.TEST_USERNAME || 'testuser@example.com',
    password: process.env.TEST_PASSWORD || 'ValidP@ssw0rd!',
  },
  timeouts: {
    action: parseInt(process.env.ACTION_TIMEOUT || '15000', 10),
    navigation: parseInt(process.env.BROWSER_TIMEOUT || '30000', 10),
  },
  apiPath: {
    health: '/api/health',
    products: '/api/products',
  },
} as const;