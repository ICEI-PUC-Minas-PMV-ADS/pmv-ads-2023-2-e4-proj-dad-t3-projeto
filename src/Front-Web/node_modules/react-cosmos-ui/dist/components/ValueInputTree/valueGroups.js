import { stringifyElementId } from './shared.js';
export function hasFsValues(valueGroup) {
    return Object.keys(valueGroup.values).length > 0;
}
export function sortFsValueGroups(valueGroups) {
    // Sort by elementId
    return valueGroups
        .slice()
        .sort((g1, g2) => stringifyElementId(g1.elementId).localeCompare(stringifyElementId(g2.elementId)));
}
