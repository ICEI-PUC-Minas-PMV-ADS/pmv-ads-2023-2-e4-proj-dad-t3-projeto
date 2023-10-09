import React from 'react';
import { RemoteRendererConnected } from './RemoteRendererConnected.js';
import { WaitingForRenderer } from './WaitingForRenderer.js';
export function RemoteRendererOverlay({ rendererConnected }) {
    return rendererConnected ? (React.createElement(RemoteRendererConnected, null)) : (React.createElement(WaitingForRenderer, null));
}
