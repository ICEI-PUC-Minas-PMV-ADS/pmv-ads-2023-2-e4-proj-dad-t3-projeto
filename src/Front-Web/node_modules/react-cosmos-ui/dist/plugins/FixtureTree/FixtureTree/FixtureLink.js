import React from 'react';
import styled from 'styled-components';
import { createRelativePlaygroundUrl } from '../../../shared/url.js';
import { blue } from '../../../style/colors.js';
export function FixtureLink({ children, fixtureId, onSelect }) {
    return (React.createElement(Link, { href: createRelativePlaygroundUrl({ fixtureId }), onClick: e => {
            e.preventDefault();
            if (e.metaKey)
                openAnchorInNewTab(e.currentTarget);
            else
                onSelect(fixtureId);
        } }, children));
}
function openAnchorInNewTab(anchorEl) {
    // Allow users to cmd+click to open fixtures in new tab
    window.open(anchorEl.href, '_blank');
}
const Link = styled.a `
  display: block;
  width: 100%;
  font-size: 14px;
  text-decoration: none;

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
