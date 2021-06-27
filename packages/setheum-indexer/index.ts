/* eslint-disable */

import Indexer from '@open-web3/indexer';
import dotenv from 'dotenv';
import { types as setheumTypes } from '@setheum-js/types';

dotenv.config();

const run = async (): Promise<void> => {
  const dbUrl = process.env.DB_URI as string;
  const wsUrl = process.env.WS_URL || 'wss://node-1234567890.blabla.onfinality.io/ws';
  const indexer = await Indexer.create({ dbUrl, wsUrl, types: setheumTypes as any, sync: true });
  await indexer.start();
};

run().catch((err) => {
  console.error(err);
});
