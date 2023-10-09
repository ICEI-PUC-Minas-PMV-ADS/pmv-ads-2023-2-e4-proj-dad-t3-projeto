import React from 'react';
export const WELCOME_DISMISS_STORAGE_KEY = 'welcomeDismissedAt';
const SHOW_AGAIN_IN = 90 * 86400 * 1000; // ~3 months
export function useWelcomeDismiss(context) {
    const { getMethodsOf } = context;
    const storage = getMethodsOf('storage');
    const onDismissWelcome = React.useCallback(() => storage.setItem(WELCOME_DISMISS_STORAGE_KEY, Date.now()), [storage]);
    const onShowWelcome = React.useCallback(() => storage.setItem(WELCOME_DISMISS_STORAGE_KEY, 0), [storage]);
    function isWelcomeDismissed() {
        const welcomeDismissedAt = storage.getItem(WELCOME_DISMISS_STORAGE_KEY) || 0;
        // Show welcome screen again after a while
        return welcomeDismissedAt > Date.now() - SHOW_AGAIN_IN;
    }
    return {
        isWelcomeDismissed,
        onDismissWelcome,
        onShowWelcome,
    };
}
