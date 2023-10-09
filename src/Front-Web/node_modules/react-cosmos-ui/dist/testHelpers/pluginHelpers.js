import { createPlugin, getPluginContext, } from 'react-plugin';
export function getMethodsOf(pluginName) {
    const name = getNewPluginName();
    createPlugin({ name }).register();
    return getPluginContext(name).getMethodsOf(pluginName);
}
export function on(pluginName, handlers) {
    const name = getNewPluginName();
    const testPlugin = createPlugin({ name });
    testPlugin.on(pluginName, handlers);
    testPlugin.register();
}
export function mockMethodsOf(pluginName, methods) {
    createPlugin({ name: pluginName, methods }).register();
}
export function mockPlug(slotName, component) {
    const name = getNewPluginName();
    const testPlugin = createPlugin({ name });
    testPlugin.plug(slotName, component);
    testPlugin.register();
}
let pluginId = 0;
function getNewPluginName() {
    return `test${pluginId++}`;
}
