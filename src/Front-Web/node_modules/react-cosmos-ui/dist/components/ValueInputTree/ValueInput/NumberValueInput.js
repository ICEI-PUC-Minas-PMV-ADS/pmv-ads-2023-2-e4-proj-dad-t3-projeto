import React from 'react';
import { blue, grey248, grey8 } from '../../../style/colors.js';
import { NumberInput } from '../../inputs/NumberInput.js';
import { Label, ValueDataContainer } from './shared.js';
export function NumberValueInput({ id, name, data, onChange }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, { title: name, htmlFor: id }, name),
        React.createElement(ValueDataContainer, null,
            React.createElement(NumberInput, { id: id, value: data, styles: {
                    focusedColor: grey248,
                    focusedBg: grey8,
                    focusedBoxShadow: `0 0 0.5px 1px ${blue}`,
                }, onChange: onChange }))));
}
