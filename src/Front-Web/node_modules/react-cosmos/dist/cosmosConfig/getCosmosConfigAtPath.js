import path from 'path';
import { createCosmosConfig } from './createCosmosConfig.js';
import { importConfigFile } from './shared.js';
export async function getCosmosConfigAtPath(cosmosConfigPath) {
    const cosmosConfigInput = await importConfigFile(cosmosConfigPath);
    const rootDir = deriveRootDir(cosmosConfigPath, cosmosConfigInput);
    return createCosmosConfig(rootDir, cosmosConfigInput);
}
function deriveRootDir(cosmosConfigPath, { rootDir }) {
    const configDir = path.dirname(cosmosConfigPath);
    return rootDir ? path.resolve(configDir, rootDir) : configDir;
}
