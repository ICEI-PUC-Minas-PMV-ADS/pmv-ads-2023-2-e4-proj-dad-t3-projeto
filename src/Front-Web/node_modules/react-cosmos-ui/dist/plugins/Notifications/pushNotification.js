import { removeItemMatch, replaceOrAddItem } from 'react-cosmos-core';
const TIMEOUT = 3000;
export function pushStickyNotification(context, notification) {
    context.setState(prevState => ({
        ...prevState,
        stickyNotifications: replaceOrAddItem(prevState.stickyNotifications, i => i.id === notification.id, notification),
    }));
}
export function removeStickyNotification(context, notificationId) {
    context.setState(prevState => ({
        ...prevState,
        stickyNotifications: removeItemMatch(prevState.stickyNotifications, i => i.id === notificationId),
    }));
}
export function pushTimedNotification(context, notification) {
    const { timedNotifications } = context.getState();
    if (timedNotifications !== null) {
        window.clearTimeout(timedNotifications.timeoutId);
    }
    context.setState(prevState => ({
        ...prevState,
        timedNotifications: {
            timeoutId: createNotificationTimeout(context),
            items: replaceOrAddItem(getTimedNotifications(prevState), i => i.id === notification.id, notification),
        },
    }));
}
export function clearTimedNotification(context) {
    context.setState(prevState => ({
        ...prevState,
        timedNotifications: null,
    }));
}
function createNotificationTimeout(context) {
    return window.setTimeout(() => clearTimedNotification(context), TIMEOUT);
}
function getTimedNotifications(prevState) {
    const { timedNotifications } = prevState;
    return timedNotifications !== null ? timedNotifications.items : [];
}
