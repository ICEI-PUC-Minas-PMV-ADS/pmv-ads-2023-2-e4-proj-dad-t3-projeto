export function ensureWebpackConfigTopLevelAwait(baseWebpackConfig) {
    const experiments = baseWebpackConfig.experiments || {};
    if (!experiments.topLevelAwait) {
        experiments.topLevelAwait = true;
    }
    return experiments;
}
