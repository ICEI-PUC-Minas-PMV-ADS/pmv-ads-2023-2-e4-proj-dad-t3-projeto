import React from 'react';
import styled from 'styled-components';
import { quick } from '../../../style/vars.js';
import { FixtureLink } from './FixtureLink.js';
import { FixtureTreeItem } from './FixtureTreeItem.js';
export function FixtureButton({ name, fixturePath, indentLevel, selected, selectedRef, onSelect, }) {
    return (React.createElement(FixtureLink, { fixtureId: { path: fixturePath }, onSelect: onSelect },
        React.createElement(FixtureTreeItem, { ref: selected ? selectedRef : undefined, indentLevel: indentLevel, selected: selected },
            React.createElement(Name, null, name))));
}
const Name = styled.span `
  flex-shrink: 0;
  padding: 0 8px 0 16px;
  white-space: nowrap;
  transition: opacity ${quick}s;
`;
