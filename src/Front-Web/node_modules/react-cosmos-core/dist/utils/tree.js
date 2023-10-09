export function addTreeNodeChild(parentNode, childName, childNode) {
    if (!parentNode.children)
        parentNode.children = {};
    parentNode.children[childName] = childNode;
}
export function sortTreeChildren(node) {
    const { children } = node;
    if (!children)
        return node;
    // Group by parent and leaf nodes, and sort alphabetically within each group
    const childNames = Object.keys(children);
    const parentNames = childNames.filter(n => children[n].children);
    const leafNames = childNames.filter(n => !children[n].children);
    return {
        ...node,
        children: [...parentNames.sort(), ...leafNames.sort()].reduce((sortedChildren, childName) => ({
            ...sortedChildren,
            [childName]: sortTreeChildren(children[childName]),
        }), {}),
    };
}
