import React from 'react';
import styled from 'styled-components';
import { grey8 } from '../../../style/colors.js';
import { FixtureLink } from './FixtureLink.js';
import { FixtureTreeItem } from './FixtureTreeItem.js';
import { MultiFixtureChildButton } from './MultiFixtureChildButton.js';
export function MultiFixtureButton({ name, fixturePath, fixtureNames, indentLevel, selected, selectedFixtureId, selectedRef, onSelect, }) {
    if (!selected) {
        const [firstFixtureName] = fixtureNames;
        const fixtureId = firstFixtureName
            ? { path: fixturePath, name: firstFixtureName }
            : { path: fixturePath };
        return (React.createElement(FixtureLink, { fixtureId: fixtureId, onSelect: onSelect },
            React.createElement(FixtureTreeItem, { indentLevel: indentLevel, selected: false },
                React.createElement(Name, null, name),
                React.createElement(Count, null, fixtureNames.length))));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(FixtureTreeItem, { indentLevel: indentLevel, selected: true },
            React.createElement(Name, null, name),
            React.createElement(Count, null, fixtureNames.length)),
        fixtureNames.map((fixtureName, index) => {
            const fixtureId = { path: fixturePath, name: fixtureName };
            // Select first child when only the path of a multi fixture is selected
            const childSelected = selectedFixtureId !== null &&
                selectedFixtureId.path === fixturePath &&
                (selectedFixtureId.name === undefined
                    ? index === 0
                    : fixtureName === selectedFixtureId.name);
            return (React.createElement(MultiFixtureChildButton, { key: fixtureName, name: fixtureName, fixtureId: fixtureId, indentLevel: indentLevel + 1, selected: childSelected, selectedRef: selectedRef, onSelect: onSelect }));
        }),
        React.createElement(FooterPadding, null)));
}
const Name = styled.span `
  flex-shrink: 0;
  padding: 0 8px 0 16px;
  white-space: nowrap;
`;
const Count = styled.span `
  margin: 0 8px 0 -3px;
  padding: 0 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  line-height: 18px;
`;
const FooterPadding = styled.div `
  height: 2px;
  background-color: ${grey8};
`;
