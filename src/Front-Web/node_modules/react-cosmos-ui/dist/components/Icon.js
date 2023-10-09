import React from 'react';
import { BaseSvg } from './BaseSvg.js';
export function Icon({ children, size = '100%', strokeWidth = 1.5 }) {
    return (React.createElement(BaseSvg, { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }, children));
}
