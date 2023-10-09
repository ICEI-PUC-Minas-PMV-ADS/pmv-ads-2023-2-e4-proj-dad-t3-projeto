import React from 'react';
import styled from 'styled-components';
export function Space(props) {
    return React.createElement(StyledSpace, { style: props });
}
const StyledSpace = styled.div `
  flex-shrink: 0;
`;
