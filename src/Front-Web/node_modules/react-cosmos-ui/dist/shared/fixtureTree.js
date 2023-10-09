export function fixtureTreeNodeContainsFixtureId({ data, children }, fixtureId) {
    if (data.type === 'fixture' || data.type === 'multiFixture') {
        return data.path === fixtureId.path;
    }
    return (children !== undefined &&
        Object.keys(children).some(childName => fixtureTreeNodeContainsFixtureId(children[childName], fixtureId)));
}
