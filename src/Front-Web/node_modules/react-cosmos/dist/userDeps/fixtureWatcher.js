import { watch } from 'chokidar';
import { debounce } from 'lodash-es';
import { getDecoratorPatterns, getFixturePatterns } from './shared.js';
const DEBOUNCE_INTERVAL = 50;
export async function startFixtureWatcher(cosmosConfig, event, callback) {
    const { fixturesDir, fixtureFileSuffix, ignore } = cosmosConfig;
    const FILE_PATTERNS = [
        ...getFixturePatterns(fixturesDir, fixtureFileSuffix),
        ...getDecoratorPatterns(),
    ];
    return new Promise(resolve => {
        const watcher = watch(FILE_PATTERNS, {
            ignored: ignore,
            ignoreInitial: true,
            cwd: cosmosConfig.rootDir,
        })
            .on('ready', () => resolve(watcher))
            .on(event, debounce(() => callback(), DEBOUNCE_INTERVAL));
    });
}
