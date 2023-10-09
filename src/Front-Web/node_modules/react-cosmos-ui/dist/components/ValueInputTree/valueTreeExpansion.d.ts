import { FixtureElementId, FixtureId } from 'react-cosmos-core';
import { TreeExpansion } from '../../shared/treeExpansion.js';
export type FixtureExpansion = Record<string, void | TreeExpansion>;
export type FixtureExpansionGroup = Record<string, void | FixtureExpansion>;
export type OnElementExpansionChange = (elementId: FixtureElementId, treeExpansion: TreeExpansion) => unknown;
export declare function getFixtureExpansion(groupExpansion: FixtureExpansionGroup, fixtureId: FixtureId): FixtureExpansion;
export declare function updateElementExpansion(groupExpansion: FixtureExpansionGroup, fixtureId: FixtureId, elementId: FixtureElementId, treeExpansion: TreeExpansion): FixtureExpansionGroup;
