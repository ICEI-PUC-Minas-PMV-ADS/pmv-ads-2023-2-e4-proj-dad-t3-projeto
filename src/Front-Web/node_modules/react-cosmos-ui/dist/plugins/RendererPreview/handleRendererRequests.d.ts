import { MessageType } from 'react-cosmos-core';
import { RendererPreviewContext } from './shared.js';
export declare function createRendererRequestHandler(): {
    postRendererRequest: (pluginContext: RendererPreviewContext, msg: MessageType) => void;
    setIframeRef: (pluginContext: RendererPreviewContext, iframeRef: null | HTMLIFrameElement) => void;
};
