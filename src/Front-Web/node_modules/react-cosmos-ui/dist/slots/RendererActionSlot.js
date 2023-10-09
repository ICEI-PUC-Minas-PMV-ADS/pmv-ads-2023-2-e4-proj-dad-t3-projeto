import React from 'react';
import { ArraySlot } from 'react-plugin';
export function RendererActionSlot({ slotProps, plugOrder }) {
    return (React.createElement(ArraySlot, { name: "rendererAction", slotProps: slotProps, plugOrder: plugOrder }));
}
