import React from 'react';
import { BaseSvg } from './BaseSvg.js';
export function Illustration({ children, viewBox, size = '100%' }) {
    return (React.createElement(BaseSvg, { width: size, height: size, viewBox: viewBox }, children));
}
