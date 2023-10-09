import React from 'react';
import { CosmosGlobalStyle, GlobalStyle } from './style/globalStyle.js';
export default ({ children }) => (React.createElement(React.Fragment, null,
    React.createElement(GlobalStyle, null),
    React.createElement(CosmosGlobalStyle, null),
    children));
