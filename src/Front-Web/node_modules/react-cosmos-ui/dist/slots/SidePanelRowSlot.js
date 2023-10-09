import React from 'react';
import { ArraySlot } from 'react-plugin';
export function SidePanelRowSlot({ slotProps, plugOrder }) {
    return (React.createElement(ArraySlot, { name: "sidePanelRow", slotProps: slotProps, plugOrder: plugOrder }));
}
