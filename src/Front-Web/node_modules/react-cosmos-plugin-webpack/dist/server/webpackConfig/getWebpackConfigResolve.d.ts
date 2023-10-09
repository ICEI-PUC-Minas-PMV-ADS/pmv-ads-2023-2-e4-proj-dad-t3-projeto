import { CosmosConfig } from 'react-cosmos';
import webpack from 'webpack';
export declare function getWebpackConfigResolve(cosmosConfig: CosmosConfig, webpackConfig: webpack.Configuration): webpack.ResolveOptions;
export declare function isInstanceOfResolvePlugin(plugin: webpack.ResolvePluginInstance | '...', constructorName: string): boolean;
