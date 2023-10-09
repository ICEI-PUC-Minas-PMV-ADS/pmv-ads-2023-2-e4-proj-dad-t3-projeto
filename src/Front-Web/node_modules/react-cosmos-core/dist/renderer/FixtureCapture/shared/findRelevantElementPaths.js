import { findElementPaths, getExpectedElementAtPath, } from './nodeTree/index.js';
export function findRelevantElementPaths(node) {
    const elPaths = findElementPaths(node);
    return elPaths.filter(elPath => {
        const { type } = getExpectedElementAtPath(node, elPath);
        // Ignore symbol types, like StrictMode
        // https://github.com/react-cosmos/react-cosmos/issues/1249
        if (typeof type === 'symbol')
            return false;
        if (typeof type === 'string')
            return isInterestingTag(type);
        const classType = type;
        return classType.cosmosCapture !== false && isInterestingClass(classType);
    });
}
function isInterestingTag(tagName) {
    // TODO: Make this customizable
    return tagName !== 'div' && tagName !== 'span';
}
function isInterestingClass(type) {
    // TODO: Make this customizable
    return type.name !== 'StyledComponent';
}
