import React from 'react';
export type ElRefs = {
    [elPath: string]: React.Component;
};
export type InitialStates = {
    [elPath: string]: {
        type: React.ComponentClass<any>;
        state: {};
    };
};
export type CachedRefHandler = {
    origRef: null | React.Ref<any>;
    handler: (elRef: null | React.Component) => unknown;
};
export type CachedRefHandlers = {
    [elPath: string]: CachedRefHandler;
};
export declare function replaceState(elRef: React.Component, nextState: {}): void;
