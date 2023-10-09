import { CosmosPluginConfig } from 'react-cosmos-core';
import { CosmosConfig } from '../cosmosConfig/types.js';
type GetPluginConfigArgs = {
    cosmosConfig: CosmosConfig;
    relativePaths: boolean;
};
export declare function getPluginConfigs({ cosmosConfig, relativePaths, }: GetPluginConfigArgs): Promise<CosmosPluginConfig[]>;
export {};
