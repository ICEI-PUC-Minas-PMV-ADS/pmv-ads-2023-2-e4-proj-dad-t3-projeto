import { cloneElement, } from 'react';
import { findRelevantElementPaths } from '../../shared/findRelevantElementPaths.js';
import { setElementAtPath } from '../../shared/nodeTree/index.js';
import { isRefSupported } from './isRefSupported.js';
export function decorateFixtureRefs(fixture, spyRef, cachedRefHandlers) {
    const elPaths = findRelevantElementPaths(fixture);
    return elPaths.reduce((decoratedFixture, elPath) => {
        return setElementAtPath(decoratedFixture, elPath, element => {
            if (!isRefSupported(element.type)) {
                return element;
            }
            return cloneElement(element, {
                ref: getDecoratedRef(element.ref, spyRef, elPath, cachedRefHandlers),
            });
        });
    }, fixture);
}
function getDecoratedRef(origRef, spyRef, elPath, cachedRefHandlers) {
    const found = cachedRefHandlers[elPath];
    if (found && found.origRef === origRef) {
        return found.handler;
    }
    const handler = decorateRefWithSpy(origRef, spyRef, elPath);
    cachedRefHandlers[elPath] = { origRef, handler };
    return handler;
}
function decorateRefWithSpy(origRef, spyRef, elPath) {
    return (elRef) => {
        if (origRef) {
            callOriginalRef(origRef, elRef);
        }
        spyRef(elPath, elRef);
    };
}
function callOriginalRef(ref, elRef) {
    if (typeof ref === 'string') {
        console.warn('[decorateFixtureRefs] String refs are not supported');
        return;
    }
    if (typeof ref === 'function') {
        ref(elRef);
        return;
    }
    const refObj = ref;
    refObj.current = elRef;
}
