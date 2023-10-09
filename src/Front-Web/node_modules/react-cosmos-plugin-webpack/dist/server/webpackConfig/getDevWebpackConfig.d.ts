import { CosmosConfig } from 'react-cosmos';
import webpack from 'webpack';
export declare function getDevWebpackConfig(cosmosConfig: CosmosConfig, userWebpack: typeof webpack): Promise<webpack.Configuration>;
