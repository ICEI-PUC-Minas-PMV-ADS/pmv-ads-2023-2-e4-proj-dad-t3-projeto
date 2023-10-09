import React from 'react';
import { RuntimeStatus } from './spec.js';
export type OnIframeRef = (elRef: null | HTMLIFrameElement) => void;
type Props = {
    rendererUrl: null | string;
    rendererConnected: boolean;
    runtimeStatus: RuntimeStatus;
    onIframeRef: OnIframeRef;
};
export declare const RendererPreview: React.NamedExoticComponent<Props>;
export {};
