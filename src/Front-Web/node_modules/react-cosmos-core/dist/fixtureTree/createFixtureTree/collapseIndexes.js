export function collapseIndexes(treeNode) {
    const { data, children } = treeNode;
    if (data.type !== 'fileDir' || !children)
        return treeNode;
    const indexChild = Object.keys(children).length === 1 && children.index;
    if (indexChild && indexChild.data.type !== 'fileDir')
        return children.index;
    return {
        ...treeNode,
        children: Object.keys(children).reduce((newChildren, childName) => ({
            ...newChildren,
            [childName]: collapseIndexes(children[childName]),
        }), {}),
    };
}
