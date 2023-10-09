import React from 'react';
import { createPlugin } from 'react-plugin';
import styled from 'styled-components';
const { plug, register } = createPlugin({
    name: 'rendererSelect',
});
plug('sidePanelRow', ({ pluginContext }) => {
    const { getMethodsOf } = pluginContext;
    const rendererCore = getMethodsOf('rendererCore');
    const primaryRendererId = rendererCore.getPrimaryRendererId();
    const connectedRendererIds = rendererCore.getConnectedRendererIds();
    if (!primaryRendererId) {
        return null;
    }
    return (React.createElement(Container, null, connectedRendererIds.map(rendererId => (React.createElement("li", { key: rendererId },
        React.createElement("small", { onClick: () => rendererCore.selectPrimaryRenderer(rendererId), style: {
                cursor: 'pointer',
                fontWeight: rendererId === primaryRendererId ? 'bold' : 'normal',
            } }, rendererId))))));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
const Container = styled.ul `
  padding: 8px 12px;
  list-style: none;
`;
