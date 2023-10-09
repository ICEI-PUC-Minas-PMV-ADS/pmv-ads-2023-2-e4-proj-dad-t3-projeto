import React from 'react';
import { grey144, grey176, grey216, grey24, grey248, grey32, grey8, } from '../../style/colors.js';
import { Label, StyledButton, StyledIcon } from './shared.js';
export function Button8({ icon, label, title, disabled = false, selected = false, onClick, }) {
    return (React.createElement(StyledButton, { bg: grey8, bgSelect: grey32, bgHover: grey24, color: grey216, colorSelect: grey248, title: title, selected: selected, disabled: disabled, onClick: onClick },
        icon && (React.createElement(StyledIcon, { color: selected ? grey176 : grey144 }, icon)),
        React.createElement(Label, null, label)));
}
