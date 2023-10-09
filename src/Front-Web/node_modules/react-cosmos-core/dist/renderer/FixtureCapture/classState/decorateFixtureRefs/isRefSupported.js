import React from 'react';
import { ForwardRef } from 'react-is';
export function isRefSupported(elementType) {
    if (typeof elementType === 'string') {
        return false;
    }
    const { $$typeof, prototype } = elementType;
    return ($$typeof === ForwardRef ||
        // Warning: Some functions don't have the .prototype property
        (prototype &&
            // ES6 Class
            // Warning: This will return false is the component is extending a
            // different copy of React than the one used by Cosmos. This is relevant
            // when running Cosmos from an external location instead of node_modules.
            (prototype instanceof React.Component ||
                // React.createClass
                prototype.getInitialState !== undefined) &&
            true));
}
