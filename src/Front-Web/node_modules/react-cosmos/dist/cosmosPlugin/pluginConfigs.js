import { findCosmosPluginConfigs } from './findCosmosPluginConfigs.js';
import { readCosmosPluginConfig } from './readCosmosPluginConfig.js';
export async function getPluginConfigs({ cosmosConfig, relativePaths, }) {
    const { rootDir, detectLocalPlugins, disablePlugins, plugins, exportPath } = cosmosConfig;
    if (disablePlugins)
        return [];
    const moduleConfigs = await Promise.all(plugins.map(configPath => readCosmosPluginConfig({ rootDir, configPath, relativePaths })));
    if (!detectLocalPlugins)
        return moduleConfigs;
    const localConfigs = await findCosmosPluginConfigs({
        rootDir,
        ignore: ['**/node_modules/**', `${exportPath}/**`],
        relativePaths,
    });
    return [...moduleConfigs, ...localConfigs];
}
