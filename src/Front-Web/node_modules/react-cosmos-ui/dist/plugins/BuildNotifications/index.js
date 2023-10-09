import { createPlugin } from 'react-plugin';
const { on, register } = createPlugin({
    name: 'buildNotifications',
});
on('messageHandler', {
    serverMessage: onServerMessage,
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
function onServerMessage(context, msg) {
    const { getMethodsOf } = context;
    const notifications = getMethodsOf('notifications');
    const serverMessage = msg;
    switch (serverMessage.type) {
        case 'buildStart':
            return notifications.pushStickyNotification({
                id: 'build',
                type: 'loading',
                title: 'Rebuilding...',
                info: 'Your code is updating.',
            });
        case 'buildError':
            return notifications.pushStickyNotification({
                id: 'build',
                type: 'error',
                title: 'Build failed',
                info: 'Check your terminal for more information.',
            });
        case 'buildDone':
            return notifications.removeStickyNotification('build');
        default:
        // Nada
    }
}
