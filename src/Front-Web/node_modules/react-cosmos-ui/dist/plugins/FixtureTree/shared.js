const TREE_EXPANSION_STORAGE_KEY = 'fixtureTreeExpansion';
const DEFAULT_TREE_EXPANSION = {};
export function getTreeExpansion({ getItem }) {
    return (getItem(TREE_EXPANSION_STORAGE_KEY) || DEFAULT_TREE_EXPANSION);
}
export function setTreeExpansion({ setItem }, treeExpansion) {
    setItem(TREE_EXPANSION_STORAGE_KEY, treeExpansion);
}
