import { NotificationsContext } from './shared.js';
import { NotificationItem } from './spec.js';
export declare function pushStickyNotification(context: NotificationsContext, notification: NotificationItem): void;
export declare function removeStickyNotification(context: NotificationsContext, notificationId: string): void;
export declare function pushTimedNotification(context: NotificationsContext, notification: NotificationItem): void;
export declare function clearTimedNotification(context: NotificationsContext): void;
