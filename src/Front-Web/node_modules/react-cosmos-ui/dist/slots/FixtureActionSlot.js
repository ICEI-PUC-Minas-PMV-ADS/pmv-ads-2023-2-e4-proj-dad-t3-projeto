import React from 'react';
import { ArraySlot } from 'react-plugin';
export function FixtureActionSlot({ slotProps, plugOrder }) {
    return (React.createElement(ArraySlot, { name: "fixtureAction", slotProps: slotProps, plugOrder: plugOrder }));
}
