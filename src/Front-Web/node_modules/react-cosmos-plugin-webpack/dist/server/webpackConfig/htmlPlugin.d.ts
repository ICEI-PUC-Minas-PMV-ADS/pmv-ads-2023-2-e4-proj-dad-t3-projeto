import { Options as HtmlWebpackPluginOptions } from 'html-webpack-plugin';
import { CosmosConfig } from 'react-cosmos';
import webpack from 'webpack';
export type HtmlWebpackPlugin = webpack.WebpackPluginInstance & {
    constructor: HtmlWebpackPluginConstructor;
} & ({
    options: HtmlWebpackPluginOptions;
    userOptions: undefined;
} | {
    userOptions: HtmlWebpackPluginOptions;
    options: undefined;
});
type HtmlWebpackPluginConstructor = new (options?: HtmlWebpackPluginOptions) => HtmlWebpackPlugin;
export declare function ensureHtmlWebackPlugin({ rootDir }: CosmosConfig, plugins: webpack.WebpackPluginInstance[]): webpack.WebpackPluginInstance[];
export declare function getHtmlWebpackPlugin(rootDir: string): HtmlWebpackPluginConstructor;
export {};
