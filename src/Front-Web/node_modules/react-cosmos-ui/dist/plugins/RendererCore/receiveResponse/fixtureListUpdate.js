export function receiveFixtureListUpdateResponse(context, { payload }) {
    const { rendererId, fixtures } = payload;
    const { primaryRendererId } = context.getState();
    // Discard updates from secondary renderers
    if (rendererId === primaryRendererId) {
        context.setState(prevState => ({
            ...prevState,
            fixtures,
        }));
    }
}
