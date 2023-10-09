import React from 'react';
import { NoFixtureSelected } from './NoFixtureSelected.js';
import { WelcomeCosmos } from './WelcomeCosmos.js';
export function HomeOverlay({ welcomeDismissed, onDismissWelcome, onShowWelcome, }) {
    return welcomeDismissed ? (React.createElement(NoFixtureSelected, { onShowWelcome: onShowWelcome })) : (React.createElement(WelcomeCosmos, { onDismissWelcome: onDismissWelcome }));
}
