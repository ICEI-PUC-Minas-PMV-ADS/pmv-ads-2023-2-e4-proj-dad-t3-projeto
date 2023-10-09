import React from 'react';
import { IconButton32 } from '../../../components/buttons/index.js';
import { SmartphoneIcon } from '../../../components/icons/index.js';
export function ToggleButton({ selected, onToggle }) {
    return (React.createElement(IconButton32, { icon: React.createElement(SmartphoneIcon, null), title: "Toggle responsive mode", selected: selected, onClick: onToggle }));
}
