import { importJson } from '../utils/fs.js';
export function getCurrentDir() {
    return process.cwd();
}
export async function importConfigFile(cosmosConfigPath) {
    return importJson(cosmosConfigPath);
}
