export function getChildrenPath(elPath) {
    return isRootPath(elPath) ? 'props.children' : `${elPath}.props.children`;
}
export function isRootPath(elPath) {
    return elPath === '';
}
