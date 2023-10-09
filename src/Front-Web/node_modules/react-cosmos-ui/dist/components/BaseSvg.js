import React from 'react';
import styled from 'styled-components';
export function BaseSvg({ children, ...attrs }) {
    return (React.createElement(StyledSvg, { xmlns: "http://www.w3.org/2000/svg", ...attrs }, children));
}
const StyledSvg = styled.svg `
  display: block;
`;
