import React, { useCallback } from 'react';
import { createPlugin } from 'react-plugin';
import { FixtureTreeContainer } from './FixtureTreeContainer.js';
import { revealFixture } from './revealFixture.js';
import { getTreeExpansion, setTreeExpansion } from './shared.js';
const { namedPlug, register } = createPlugin({
    name: 'fixtureTree',
    methods: {
        revealFixture,
    },
});
namedPlug('navRow', 'fixtureTree', ({ pluginContext }) => {
    const { getMethodsOf } = pluginContext;
    const storage = pluginContext.getMethodsOf('storage');
    const router = getMethodsOf('router');
    const core = getMethodsOf('core');
    const { fixturesDir, fixtureFileSuffix } = core.getFixtureFileVars();
    const rendererCore = getMethodsOf('rendererCore');
    const expansion = getTreeExpansion(storage);
    const setExpansionMemo = useCallback((newExpansion) => setTreeExpansion(storage, newExpansion), [storage]);
    return (React.createElement(FixtureTreeContainer, { fixturesDir: fixturesDir, fixtureFileSuffix: fixtureFileSuffix, selectedFixtureId: router.getSelectedFixtureId(), fixtures: rendererCore.getFixtures(), expansion: expansion, selectFixture: router.selectFixture, setExpansion: setExpansionMemo }));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
