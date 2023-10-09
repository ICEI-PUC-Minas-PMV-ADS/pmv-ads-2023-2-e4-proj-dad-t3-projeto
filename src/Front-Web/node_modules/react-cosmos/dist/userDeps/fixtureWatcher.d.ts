import { FSWatcher } from 'chokidar';
import { CosmosConfig } from '../cosmosConfig/types.js';
export declare function startFixtureWatcher(cosmosConfig: CosmosConfig, event: 'all' | 'add', callback: () => unknown): Promise<FSWatcher>;
