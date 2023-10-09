import { CosmosPluginConfig } from 'react-cosmos-core';
type ReadCosmosPluginConfigArgs = {
    rootDir: string;
    configPath: string;
    relativePaths: boolean;
};
export declare function readCosmosPluginConfig({ rootDir, configPath, relativePaths, }: ReadCosmosPluginConfigArgs): Promise<CosmosPluginConfig>;
export {};
