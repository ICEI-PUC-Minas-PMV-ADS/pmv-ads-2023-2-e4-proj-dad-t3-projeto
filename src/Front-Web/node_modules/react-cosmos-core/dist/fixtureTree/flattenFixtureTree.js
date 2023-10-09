export function flattenFixtureTree(treeNode, parents = []) {
    const { data, children } = treeNode;
    if (data.type === 'fixture' || !children)
        return [];
    const flatFixtureTree = [];
    if (children)
        Object.keys(children).forEach(childName => {
            const childNode = children[childName];
            const { data: childData } = childNode;
            if (childData.type === 'fileDir')
                flatFixtureTree.push(...flattenFixtureTree(childNode, [...parents, childName]));
            if (childData.type === 'multiFixture')
                childData.names.forEach(fixtureName => flatFixtureTree.push({
                    fileName: childName,
                    fixtureId: { path: childData.path, name: fixtureName },
                    parents,
                    name: fixtureName,
                }));
            if (childData.type === 'fixture')
                flatFixtureTree.push({
                    fileName: childName,
                    fixtureId: { path: childData.path },
                    parents,
                    name: null,
                });
        });
    return flatFixtureTree;
}
