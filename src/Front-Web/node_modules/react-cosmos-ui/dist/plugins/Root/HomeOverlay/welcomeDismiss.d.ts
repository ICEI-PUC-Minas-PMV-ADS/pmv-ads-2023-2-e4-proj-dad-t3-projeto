import { RootContext } from '../shared.js';
export declare const WELCOME_DISMISS_STORAGE_KEY = "welcomeDismissedAt";
export declare function useWelcomeDismiss(context: RootContext): {
    isWelcomeDismissed: () => boolean;
    onDismissWelcome: () => void;
    onShowWelcome: () => void;
};
