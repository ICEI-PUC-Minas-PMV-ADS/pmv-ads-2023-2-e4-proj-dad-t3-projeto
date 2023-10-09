export function serverSocketMessage(message) {
    return { channel: 'server', message };
}
export function rendererSocketMessage(message) {
    return { channel: 'renderer', message };
}
