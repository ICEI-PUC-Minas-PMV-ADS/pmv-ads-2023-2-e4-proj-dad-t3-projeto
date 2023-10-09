import { findIndex } from 'lodash-es';
export function updateItem(items, item, update) {
    const index = items.indexOf(item);
    return [
        ...items.slice(0, index),
        { ...item, ...update },
        ...items.slice(index + 1),
    ];
}
export function replaceOrAddItem(items, matcher, item) {
    const index = findIndex(items, matcher);
    return index !== -1
        ? [...items.slice(0, index), item, ...items.slice(index + 1)]
        : [...items, item];
}
export function removeItemMatch(items, matcher) {
    const index = findIndex(items, matcher);
    return index === -1
        ? [...items]
        : [...items.slice(0, index), ...items.slice(index + 1)];
}
