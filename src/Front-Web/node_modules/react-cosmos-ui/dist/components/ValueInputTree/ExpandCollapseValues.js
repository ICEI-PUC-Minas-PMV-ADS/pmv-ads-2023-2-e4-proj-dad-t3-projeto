import React from 'react';
import { getFullTreeExpansion, hasExpandableNodes, isTreeFullyCollapsed, } from '../../shared/treeExpansion.js';
import { IconButton32 } from '../buttons/index.js';
import { MinusSquareIcon, PlusSquareIcon } from '../icons/index.js';
import { createValueTree } from './valueTree.js';
export function ExpandCollapseValues({ values, expansion, setExpansion, }) {
    const rootNode = createValueTree(values);
    if (!hasExpandableNodes(rootNode))
        return null;
    return isTreeFullyCollapsed(expansion) ? (React.createElement(IconButton32, { title: "Expand all fixture tree folders", icon: React.createElement(PlusSquareIcon, null), onClick: () => setExpansion(getFullTreeExpansion(rootNode)) })) : (React.createElement(IconButton32, { title: "Collapse all fixture tree folders", icon: React.createElement(MinusSquareIcon, null), onClick: () => setExpansion({}) }));
}
