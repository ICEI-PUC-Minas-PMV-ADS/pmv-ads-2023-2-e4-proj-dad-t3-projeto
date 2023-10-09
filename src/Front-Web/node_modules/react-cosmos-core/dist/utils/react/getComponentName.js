const componentNames = new WeakMap();
export function getComponentName(type) {
    if (typeof type === 'string') {
        return type;
    }
    if (!componentNames.has(type)) {
        const name = type.displayName || type.name || '';
        componentNames.set(type, name);
    }
    return componentNames.get(type);
}
