import { isMultiFixture } from './isMultiFixture.js';
export function getFixtureListFromWrappers(wrappers) {
    return Object.keys(wrappers.fixtures).reduce((acc, fixturePath) => {
        return {
            ...acc,
            [fixturePath]: wrappers.lazy
                ? { type: 'single' }
                : getFixtureItemFromExport(wrappers.fixtures[fixturePath].module.default),
        };
    }, {});
}
export function getFixtureListFromExports(exports) {
    return Object.keys(exports).reduce((acc, fixturePath) => {
        return {
            ...acc,
            [fixturePath]: getFixtureItemFromExport(exports[fixturePath]),
        };
    }, {});
}
export function getFixtureItemFromExport(fixtureExport) {
    return isMultiFixture(fixtureExport)
        ? { type: 'multi', fixtureNames: Object.keys(fixtureExport) }
        : { type: 'single' };
}
