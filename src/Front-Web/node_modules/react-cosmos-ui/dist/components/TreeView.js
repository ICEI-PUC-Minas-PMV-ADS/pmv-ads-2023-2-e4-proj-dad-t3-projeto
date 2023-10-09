import React, { useCallback } from 'react';
// The root doesn't have a name and its data isn't rendered
// And the children of the root node are always expanded
export function TreeView({ node, name, parents = [], expansion, setExpansion, renderNode, }) {
    const expanded = name ? expansion[getTreeNodePath(parents, name)] : true;
    const onToggle = useCallback(() => {
        if (name) {
            const nodePath = getTreeNodePath(parents, name);
            setExpansion({ ...expansion, [nodePath]: !expansion[nodePath] });
        }
    }, [expansion, name, parents, setExpansion]);
    const { children } = node;
    return (React.createElement(React.Fragment, null,
        name !== undefined &&
            renderNode({ node, name, parents, expanded, onToggle }),
        children &&
            expanded &&
            Object.keys(children).map(childName => {
                const childNode = children[childName];
                const nextParents = name ? [...parents, name] : parents;
                return (React.createElement(TreeView, { key: childName, node: childNode, name: childName, parents: nextParents, expansion: expansion, setExpansion: setExpansion, renderNode: renderNode }));
            })));
}
function getTreeNodePath(parents, name) {
    return [...parents, name].join('/');
}
