import React from 'react';
import styled from 'styled-components';
import { blue, createGreyColor, grey64, selectedColors, } from '../../style/colors.js';
export function FixtureSearchResult({ active, cleanFixturePath, fixtureItem, onSelect, }) {
    const { fixtureId, fileName, name, parents } = fixtureItem;
    const containerRef = useScrollToActive(cleanFixturePath, active);
    const onClick = React.useCallback(() => onSelect(fixtureId, true), [fixtureId, onSelect]);
    return (React.createElement(Container, { ref: containerRef, selected: active, onClick: onClick },
        React.createElement(Text, null,
            React.createElement(Name, { selected: active }, name ? `${fileName} ${name}` : fileName),
            parents.length > 0 && React.createElement(Parents, null, parents.join('/')))));
}
function useScrollToActive(cleanFixturePath, active) {
    const containerRef = React.useRef(null);
    // Scroll to results when they become active
    React.useLayoutEffect(() => {
        const containerNode = containerRef.current;
        if (active && containerNode) {
            scrollIntoView(containerNode);
        }
    }, [cleanFixturePath, active]);
    return containerRef;
}
function scrollIntoView(node) {
    if (typeof node.scrollIntoView === 'function') {
        node.scrollIntoView({ block: 'center' });
    }
}
const Container = styled.div `
  padding: 0 24px 0 48px;
  background: ${selectedColors('transparent', blue)};
  color: ${selectedColors(createGreyColor(64, 0.64), createGreyColor(255, 0.64))};
`;
const Text = styled.div `
  font-size: 14px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`;
const Name = styled.span `
  color: ${selectedColors(grey64, 'white')};
  font-weight: 500;
`;
const Parents = styled.span `
  padding: 0 0 0 8px;
`;
