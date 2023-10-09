import { Component, ReactNode } from 'react';
import { CachedRefHandlers } from '../shared.js';
type SpyRef = (elPath: string, elRef: null | Component) => unknown;
export declare function decorateFixtureRefs(fixture: ReactNode, spyRef: SpyRef, cachedRefHandlers: CachedRefHandlers): ReactNode;
export {};
