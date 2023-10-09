import { isPlainObject } from 'lodash-es';
import { isElement } from 'react-is';
export function isString(value) {
    return typeof value === 'string';
}
export function isNumber(value) {
    return typeof value === 'number';
}
export function isBoolean(value) {
    return typeof value === 'boolean';
}
export function isNull(value) {
    return value === null;
}
export function isUndefined(value) {
    return value === undefined;
}
export function isPrimitiveData(data) {
    return (isString(data) ||
        isNumber(data) ||
        isBoolean(data) ||
        isNull(data) ||
        isUndefined(data));
}
export function isObject(data) {
    return isPlainObject(data) && !isElement(data);
}
export function isArray(data) {
    return Array.isArray(data);
}
