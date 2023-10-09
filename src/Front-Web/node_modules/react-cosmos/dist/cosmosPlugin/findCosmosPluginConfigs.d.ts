import { CosmosPluginConfig } from 'react-cosmos-core';
type Args = {
    rootDir: string;
    relativePaths: boolean;
    ignore?: string[];
};
export declare function findCosmosPluginConfigs({ rootDir, relativePaths, ignore, }: Args): Promise<CosmosPluginConfig[]>;
export {};
