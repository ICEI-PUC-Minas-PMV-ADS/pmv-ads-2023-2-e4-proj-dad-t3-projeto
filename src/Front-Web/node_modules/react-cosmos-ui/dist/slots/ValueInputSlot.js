import React from 'react';
import { Slot } from 'react-plugin';
export function ValueInputSlot({ children, slotProps }) {
    return (React.createElement(Slot, { name: "valueInput", slotProps: slotProps }, children));
}
