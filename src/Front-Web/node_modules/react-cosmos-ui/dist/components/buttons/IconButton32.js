import React from 'react';
import { grey160, grey176, grey224, grey24, grey248, grey32, grey8, } from '../../style/colors.js';
import { StyledButton, StyledIcon } from './shared.js';
export function IconButton32({ icon, title, disabled = false, selected = false, onClick, }) {
    return (React.createElement(StyledButton, { bg: grey32, bgSelect: grey8, bgHover: grey24, color: grey224, colorSelect: grey248, title: title, selected: selected, disabled: disabled, onClick: onClick },
        React.createElement(StyledIcon, { color: selected ? grey176 : grey160 }, icon)));
}
