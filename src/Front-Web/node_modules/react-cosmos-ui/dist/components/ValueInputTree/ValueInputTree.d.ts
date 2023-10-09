import React from 'react';
import { FixtureStateValues } from 'react-cosmos-core';
import { TreeExpansion } from '../../shared/treeExpansion.js';
type Props = {
    id: string;
    values: FixtureStateValues;
    expansion: TreeExpansion;
    setExpansion: (expansion: TreeExpansion) => unknown;
    onValueChange: (values: FixtureStateValues) => unknown;
};
export declare const ValueInputTree: React.NamedExoticComponent<Props>;
export {};
