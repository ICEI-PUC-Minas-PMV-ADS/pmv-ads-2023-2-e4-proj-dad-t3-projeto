import { CosmosPluginConfig } from 'react-cosmos-core';
import { CosmosServerPlugin } from '../cosmosPlugin/types.js';
export declare function importServerPlugins(pluginConfigs: CosmosPluginConfig[], rootDir: string): Promise<CosmosServerPlugin[]>;
