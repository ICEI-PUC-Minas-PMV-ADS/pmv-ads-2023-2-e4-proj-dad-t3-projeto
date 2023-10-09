import React from 'react';
import styled from 'styled-components';
import { ChevronDownIcon, ChevronRightIcon, } from '../../../components/icons/index.js';
import { blue, grey128 } from '../../../style/colors.js';
import { FixtureTreeItem } from './FixtureTreeItem.js';
export function FixtureDir({ name, expanded, indentLevel, selected, onToggle, }) {
    return (React.createElement(DirButton, { onClick: onToggle },
        React.createElement(FixtureTreeItem, { indentLevel: indentLevel, selected: selected },
            React.createElement(CevronContainer, null, expanded ? React.createElement(ChevronDownIcon, null) : React.createElement(ChevronRightIcon, null)),
            React.createElement(Name, null, name))));
}
const DirButton = styled.button `
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 14px;

  :focus {
    outline: none;
    > span {
      box-shadow: inset 2px 0px 0 0 ${blue};
    }
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;
const iconSize = 16;
const CevronContainer = styled.span `
  flex-shrink: 0;
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${grey128};

  svg {
    margin-left: -2px;
  }
`;
const Name = styled.span `
  flex-shrink: 0;
  padding-right: 8px;
  white-space: nowrap;
`;
