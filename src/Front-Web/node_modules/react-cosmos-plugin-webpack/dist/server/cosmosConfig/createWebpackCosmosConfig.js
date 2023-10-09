import path from 'path';
import { fileExists } from 'react-cosmos';
import { resolveLoose } from '../utils/resolveLoose.js';
export function createWebpackCosmosConfig(cosmosConfig) {
    const { rootDir } = cosmosConfig;
    const configInput = cosmosConfig.webpack || {};
    return {
        configPath: getWebpackConfigPath(configInput, rootDir),
        overridePath: getWebpackOverridePath(configInput, rootDir),
        includeHashInOutputFilename: getIncludeHashInOutputFilename(configInput),
        hotReload: getHotReload(configInput),
        reloadOnFail: getReloadOnFail(configInput),
    };
}
function getWebpackConfigPath({ configPath }, rootDir) {
    if (typeof configPath === 'undefined') {
        return resolveLoose(rootDir, 'webpack.config.js');
    }
    // User can choose to prevent automatical use of an existing webpack.config.js
    // file (relative to the root dir) by setting configPath to null
    if (!configPath) {
        return null;
    }
    const absPath = resolveLoose(rootDir, configPath);
    if (!fileExists(absPath)) {
        const relPath = path.relative(process.cwd(), absPath);
        throw new Error(`Webpack config not found at path: ${relPath}`);
    }
    return absPath;
}
function getWebpackOverridePath({ overridePath }, rootDir) {
    if (typeof overridePath === 'undefined') {
        return resolveLoose(rootDir, 'webpack.override.js');
    }
    // User can choose to prevent automatical use of an existing webpack.override.js
    // file (relative to the root dir) by setting overridePath to null
    if (!overridePath) {
        return null;
    }
    const absPath = resolveLoose(rootDir, overridePath);
    if (!fileExists(absPath)) {
        const relPath = path.relative(process.cwd(), absPath);
        throw new Error(`Webpack override module not found at path: ${relPath}`);
    }
    return absPath;
}
// Default value is False to not break backwards compatibility
// In future releases it's better to mark this as @deprecated and set
// output.filename to "[name].[contenthash].js" by default
function getIncludeHashInOutputFilename({ includeHashInOutputFilename = false, }) {
    return includeHashInOutputFilename;
}
function getHotReload({ hotReload = true }) {
    return hotReload;
}
function getReloadOnFail({ reloadOnFail = false }) {
    return reloadOnFail;
}
