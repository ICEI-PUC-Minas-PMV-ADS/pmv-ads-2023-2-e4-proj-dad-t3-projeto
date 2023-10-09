import React from 'react';
import styled from 'styled-components';
import { TreeView } from '../../../components/TreeView.js';
import { fixtureTreeNodeContainsFixtureId } from '../../../shared/fixtureTree.js';
import { grey32 } from '../../../style/colors.js';
import { FixtureButton } from './FixtureButton.js';
import { FixtureDir } from './FixtureDir.js';
import { MultiFixtureButton } from './MultiFixtureButton.js';
export const FixtureTree = React.memo(function FixtureTree({ rootNode, selectedFixtureId, selectedRef, expansion, setExpansion, onSelect, }) {
    return (React.createElement(Container, null,
        React.createElement(TreeView, { node: rootNode, expansion: expansion, setExpansion: setExpansion, renderNode: ({ node, name, parents, expanded, onToggle }) => {
                const { data, children } = node;
                if (data.type === 'fixture') {
                    const selected = selectedFixtureId?.path === data.path;
                    return (React.createElement(FixtureButton, { name: name, fixturePath: data.path, indentLevel: parents.length, selected: selected, selectedRef: selectedRef, onSelect: onSelect }));
                }
                if (data.type === 'multiFixture') {
                    const selected = selectedFixtureId?.path === data.path;
                    return (React.createElement(MultiFixtureButton, { name: name, fixturePath: data.path, fixtureNames: data.names, indentLevel: parents.length, selected: selected, selectedFixtureId: selectedFixtureId, selectedRef: selectedRef, onSelect: onSelect }));
                }
                if (!children)
                    return null;
                const selected = !expanded &&
                    selectedFixtureId !== null &&
                    fixtureTreeNodeContainsFixtureId(node, selectedFixtureId);
                return (React.createElement(FixtureDir, { name: name, indentLevel: parents.length, expanded: expanded, selected: selected, onToggle: onToggle }));
            } })));
});
// Reason for inline-block: https://stackoverflow.com/a/53895622/128816
const Container = styled.div `
  display: inline-block;
  min-width: 100%;
  padding: 0 0 8px 0;
  background: ${grey32};
`;
