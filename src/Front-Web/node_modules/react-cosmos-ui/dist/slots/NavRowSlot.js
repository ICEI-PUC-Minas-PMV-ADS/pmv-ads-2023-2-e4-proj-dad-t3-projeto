import React from 'react';
import { ArraySlot } from 'react-plugin';
export function NavRowSlot({ slotProps, plugOrder }) {
    return (React.createElement(ArraySlot, { name: "navRow", slotProps: slotProps, plugOrder: plugOrder }));
}
