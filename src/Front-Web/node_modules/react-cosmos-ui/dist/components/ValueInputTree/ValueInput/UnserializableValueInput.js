import React from 'react';
import { Label, UneditableInput, ValueDataContainer } from './shared.js';
export function UnserializableValueInput({ name, data }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, { title: name, disabled: true }, name),
        React.createElement(ValueDataContainer, null,
            React.createElement(UneditableInput, { title: data }, trimMultilineValue(data)))));
}
function trimMultilineValue(data) {
    return data.indexOf(`\n`) !== -1 ? `${data.split(`\n`)[0]}...` : data;
}
