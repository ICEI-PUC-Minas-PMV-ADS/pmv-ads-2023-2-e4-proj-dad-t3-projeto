import React from 'react';
import { createPlugin, PluginsConsumer } from 'react-plugin';
import { PluginList } from './PluginList.js';
const { plug, register } = createPlugin({
    name: 'pluginList',
});
plug('sidePanelRow', () => {
    return (React.createElement(PluginsConsumer, null, ({ plugins, enable }) => (React.createElement(PluginList, { plugins: plugins.map(p => ({ name: p.name, enabled: p.enabled })), enable: enable }))));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
