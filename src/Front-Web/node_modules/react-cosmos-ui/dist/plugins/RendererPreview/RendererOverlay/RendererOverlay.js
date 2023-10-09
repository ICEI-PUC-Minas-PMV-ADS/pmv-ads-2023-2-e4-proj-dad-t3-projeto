import React from 'react';
import { WaitingForRenderer } from './WaitingForRenderer.js';
export function RendererOverlay({ runtimeStatus }) {
    if (runtimeStatus === 'pending') {
        return React.createElement(WaitingForRenderer, null);
    }
    // No render overlay is shown in both "connected" and "error" states. In the
    // latter case, the renderer will communicate the error using its own
    // framework-specific UI.
    return null;
}
