import React, { useMemo } from 'react';
import { createFixtureTree } from 'react-cosmos-core';
import styled from 'styled-components';
import { grey32 } from '../../style/colors.js';
import { BlankState } from './BlankState.js';
import { FixtureTree } from './FixtureTree/FixtureTree.js';
import { FixtureTreeHeader } from './FixtureTreeHeader.js';
import { useScrollToSelected } from './useScrollToSelected.js';
export function FixtureTreeContainer({ fixturesDir, fixtureFileSuffix, selectedFixtureId, fixtures, expansion, selectFixture, setExpansion, }) {
    const rootNode = useMemo(() => createFixtureTree({ fixtures, fixturesDir, fixtureFileSuffix }), [fixtures, fixturesDir, fixtureFileSuffix]);
    const { containerRef, selectedRef } = useScrollToSelected(selectedFixtureId);
    if (Object.keys(fixtures).length === 0) {
        return (React.createElement(TreeContainer, null,
            React.createElement(BlankState, { fixturesDir: fixturesDir, fixtureFileSuffix: fixtureFileSuffix })));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(FixtureTreeHeader, { fixturesDir: fixturesDir, fixtureFileSuffix: fixtureFileSuffix, fixtures: fixtures, expansion: expansion, setExpansion: setExpansion }),
        React.createElement(TreeContainer, { ref: containerRef },
            React.createElement(FixtureTree, { rootNode: rootNode, selectedFixtureId: selectedFixtureId, expansion: expansion, selectedRef: selectedRef, setExpansion: setExpansion, onSelect: selectFixture }))));
}
// The background color is required for the proper scroll bar color theme
const TreeContainer = styled.div `
  flex: 1;
  background: ${grey32};
  overflow: auto;
`;
