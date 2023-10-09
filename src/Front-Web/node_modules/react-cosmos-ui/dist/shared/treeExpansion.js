export function isTreeFullyCollapsed(treeExpansion) {
    return Object.keys(treeExpansion).every(childPath => treeExpansion[childPath] === false);
}
export function getFullTreeExpansion(rootNode) {
    const childPaths = getExpandableNodes(rootNode);
    return childPaths.reduce((treeExpansion, dirName) => ({ ...treeExpansion, [dirName]: true }), {});
}
export function hasExpandableNodes(rootNode) {
    return getExpandableNodes(rootNode).length > 0;
}
function getExpandableNodes(treeNode, parents = []) {
    const { children } = treeNode;
    if (!children)
        return [];
    const nodePaths = [];
    Object.keys(children).forEach(childName => {
        const childNode = children[childName];
        if (childNode.children && Object.keys(childNode.children).length > 0) {
            nodePaths.push([...parents, childName].join('/'));
            nodePaths.push(...getExpandableNodes(childNode, [...parents, childName]));
        }
    });
    return nodePaths;
}
