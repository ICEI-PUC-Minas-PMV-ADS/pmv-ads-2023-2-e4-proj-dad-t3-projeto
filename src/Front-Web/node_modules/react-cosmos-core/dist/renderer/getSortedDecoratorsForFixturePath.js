export function getSortedDecoratorsForFixturePath(fixturePath, decoratorsByPath) {
    return getSortedDecorators(getDecoratorsForFixturePath(decoratorsByPath, fixturePath));
}
function getDecoratorsForFixturePath(decoratorsByPath, fixturePath) {
    return Object.keys(decoratorsByPath)
        .filter(dPath => isParentDir(getParentPath(dPath), fixturePath))
        .reduce((acc, dPath) => ({ ...acc, [dPath]: decoratorsByPath[dPath] }), {});
}
function isParentDir(parentPath, filePath) {
    return parentPath === '' || filePath.indexOf(`${parentPath}/`) === 0;
}
function getParentPath(nestedPath) {
    // Remove everything right of the right-most forward slash, or return an
    // empty string if path has no forward slash
    return nestedPath.replace(/^((.+)\/)?.+$/, '$2');
}
function getSortedDecorators(decoratorsByPath) {
    return sortPathsByDepthAsc(Object.keys(decoratorsByPath)).map(decoratorPath => decoratorsByPath[decoratorPath]);
}
function sortPathsByDepthAsc(paths) {
    return [...paths].sort((a, b) => getPathNestingLevel(a) - getPathNestingLevel(b) || a.localeCompare(b));
}
function getPathNestingLevel(path) {
    return path.split('/').length;
}
