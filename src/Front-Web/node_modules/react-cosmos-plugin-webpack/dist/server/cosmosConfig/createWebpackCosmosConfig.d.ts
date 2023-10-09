import { CosmosConfig } from 'react-cosmos';
type WebpackCosmosConfig = {
    configPath: null | string;
    overridePath: null | string;
    includeHashInOutputFilename: boolean;
    hotReload: boolean;
    reloadOnFail: boolean;
};
export declare function createWebpackCosmosConfig(cosmosConfig: CosmosConfig): WebpackCosmosConfig;
export {};
