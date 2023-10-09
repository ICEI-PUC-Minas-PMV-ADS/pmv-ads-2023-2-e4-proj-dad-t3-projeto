import { createFixtureTree, } from 'react-cosmos-core';
import { fixtureTreeNodeContainsFixtureId } from '../../shared/fixtureTree.js';
import { getTreeExpansion, setTreeExpansion, } from './shared.js';
export function revealFixture(context, fixtureId) {
    const { getMethodsOf } = context;
    const storage = context.getMethodsOf('storage');
    const core = getMethodsOf('core');
    const rendererCore = getMethodsOf('rendererCore');
    const { fixturesDir, fixtureFileSuffix } = core.getFixtureFileVars();
    const fixtures = rendererCore.getFixtures();
    const rootNode = createFixtureTree({
        fixtures,
        fixturesDir,
        fixtureFileSuffix,
    });
    const dirPath = findDirPath(rootNode, fixtureId);
    if (dirPath) {
        const treeExpansion = getTreeExpansion(storage);
        const curDirPath = [];
        const curTreeExpansion = { ...treeExpansion };
        for (let pathIndex = 0; pathIndex < dirPath.length; pathIndex++) {
            curDirPath.push(dirPath[pathIndex]);
            curTreeExpansion[curDirPath.join('/')] = true;
        }
        setTreeExpansion(storage, curTreeExpansion);
    }
}
function findDirPath({ data, children }, fixtureId, parents = []) {
    if (data.type !== 'fileDir' || !children)
        return null;
    const childNames = Object.keys(children);
    for (let childName of childNames) {
        const childNode = children[childName];
        if (childNode.data.type !== 'fileDir') {
            if (fixtureTreeNodeContainsFixtureId(childNode, fixtureId))
                return parents;
        }
        else {
            const dirPath = findDirPath(childNode, fixtureId, [
                ...parents,
                childName,
            ]);
            if (dirPath)
                return dirPath;
        }
    }
    return null;
}
