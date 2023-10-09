import { PluginContext } from 'react-plugin';
import { TreeExpansion } from '../../shared/treeExpansion.js';
import { StorageSpec } from '../Storage/spec.js';
import { FixtureTreeSpec } from './spec.js';
export type FixtureTreeContext = PluginContext<FixtureTreeSpec>;
export declare function getTreeExpansion({ getItem }: StorageSpec['methods']): {};
export declare function setTreeExpansion({ setItem }: StorageSpec['methods'], treeExpansion: TreeExpansion): void;
