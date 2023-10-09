import path from 'path';
import { importJson } from '../utils/fs.js';
import { resolveSilent } from '../utils/resolveSilent.js';
export async function readCosmosPluginConfig({ rootDir, configPath, relativePaths, }) {
    const rawConfig = await importJson(configPath);
    const pluginRootDir = path.dirname(configPath);
    const config = {
        name: rawConfig.name,
        rootDir: relativePaths
            ? path.relative(rootDir, pluginRootDir)
            : pluginRootDir,
    };
    if (rawConfig.ui) {
        config.ui = resolvePluginPath(config.name, rootDir, pluginRootDir, rawConfig.ui, relativePaths);
    }
    if (rawConfig.server) {
        config.server = resolvePluginPath(config.name, rootDir, pluginRootDir, rawConfig.server, relativePaths);
    }
    return config;
}
function resolvePluginPath(pluginName, rootDir, pluginRootDir, filePath, relativePath) {
    const absolutePath = path.join(pluginRootDir, filePath);
    const resolvedPath = resolveSilent(absolutePath);
    if (!resolvedPath) {
        throw new Error(`Invalid path in plugin "${pluginName}": ${filePath}`);
    }
    return relativePath ? path.relative(rootDir, resolvedPath) : resolvedPath;
}
