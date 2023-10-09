import localForage from 'localforage';
import { createPlugin } from 'react-plugin';
const { register } = createPlugin({
    name: 'storage',
    initialState: {
        cache: null,
    },
    methods: {
        loadCache,
        getItem,
        setItem,
    },
});
if (process.env.NODE_ENV !== 'test')
    register();
export { register };
async function loadCache(context, projectId) {
    const items = (await localForage.getItem(getProjectKey(projectId))) || {};
    context.setState({ cache: { projectId, items } });
}
function getItem(context, key) {
    const { cache } = context.getState();
    if (!cache) {
        throw new Error(`Can't retrieve item "${key}" before loading storage`);
    }
    return cache.items[key];
}
function setItem(context, key, value) {
    const { cache } = context.getState();
    if (!cache) {
        throw new Error(`Can't set item "${key}" before loading storage`);
    }
    const { projectId, items } = cache;
    const newItems = { ...items, [key]: value };
    context.setState({ cache: { projectId, items: newItems } });
    localForage.setItem(getProjectKey(projectId), newItems);
}
function getProjectKey(projectId) {
    return `cosmos-${projectId}`;
}
