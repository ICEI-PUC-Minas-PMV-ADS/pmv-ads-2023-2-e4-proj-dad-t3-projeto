import { globSync } from 'glob';
import { readCosmosPluginConfig } from './readCosmosPluginConfig.js';
export async function findCosmosPluginConfigs({ rootDir, relativePaths, ignore, }) {
    const configPaths = findCosmosPluginConfigPaths(rootDir, ignore);
    return Promise.all(configPaths.map(configPath => readCosmosPluginConfig({ rootDir, configPath, relativePaths })));
}
const defaultIgnore = ['**/node_modules/**'];
function findCosmosPluginConfigPaths(rootDir, ignore = defaultIgnore) {
    return globSync('**/cosmos.plugin.json', {
        cwd: rootDir,
        absolute: true,
        ignore,
    });
}
