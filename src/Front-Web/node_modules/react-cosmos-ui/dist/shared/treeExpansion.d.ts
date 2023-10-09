import { TreeNode } from 'react-cosmos-core';
export type TreeExpansion = {
    [nodePath: string]: boolean;
};
export declare function isTreeFullyCollapsed(treeExpansion: TreeExpansion): boolean;
export declare function getFullTreeExpansion(rootNode: TreeNode<any>): Record<string, boolean>;
export declare function hasExpandableNodes(rootNode: TreeNode<any>): boolean;
