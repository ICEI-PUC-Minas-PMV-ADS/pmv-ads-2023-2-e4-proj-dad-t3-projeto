import React from 'react';
import { Label, UneditableInput, ValueDataContainer } from './shared.js';
export function NullValueInput({ name }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, { title: name, disabled: true }, name),
        React.createElement(ValueDataContainer, null,
            React.createElement(UneditableInput, null,
                React.createElement("em", null, "null")))));
}
