import React, { RefObject } from 'react';
import { FixtureId, FixtureTreeNode } from 'react-cosmos-core';
import { TreeExpansion } from '../../../shared/treeExpansion.js';
type Props = {
    rootNode: FixtureTreeNode;
    selectedFixtureId: null | FixtureId;
    selectedRef: RefObject<HTMLElement>;
    expansion: TreeExpansion;
    setExpansion: (expansion: TreeExpansion) => unknown;
    onSelect: (fixtureId: FixtureId) => unknown;
};
export declare const FixtureTree: React.NamedExoticComponent<Props>;
export {};
