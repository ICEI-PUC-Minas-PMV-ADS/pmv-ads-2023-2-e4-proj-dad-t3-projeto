import React from 'react';
import styled from 'styled-components';
import { blue, lightBlue } from '../../../style/colors.js';
import { Label, ValueDataContainer } from './shared.js';
export function BooleanValueInput({ id, name, data, onChange }) {
    const onToggle = React.useCallback(() => onChange(!data), [onChange, data]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, { title: name, as: "span", onClick: onToggle }, name),
        React.createElement(ValueDataContainer, null,
            React.createElement(BooleanButton, { onClick: onToggle }, data ? 'true' : 'false'))));
}
const BooleanButton = styled.button `
  height: 24px;
  margin: 0;
  padding: 0 5px;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: ${lightBlue};
  font-size: 14px;
  line-height: 24px;
  outline: none;
  user-select: none;

  :focus {
    box-shadow: 0 0 0.5px 1px ${blue};
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;
