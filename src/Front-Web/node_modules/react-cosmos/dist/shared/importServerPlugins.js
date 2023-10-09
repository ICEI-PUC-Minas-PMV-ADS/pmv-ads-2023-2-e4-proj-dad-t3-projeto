import path from 'node:path';
import { importModule } from '../utils/fs.js';
export async function importServerPlugins(pluginConfigs, rootDir) {
    return Promise.all(pluginConfigs
        .filter(pluginConfig => pluginConfig.server)
        .map(pluginConfig => importServerModule(pluginConfig, rootDir)));
}
async function importServerModule(pluginConfig, rootDir) {
    const modulePath = pluginConfig.server;
    if (!modulePath) {
        throw new Error(`Server module missing in plugin "${pluginConfig.name}"`);
    }
    const absPath = path.resolve(rootDir, modulePath);
    const module = await importModule(absPath);
    return module.default;
}
