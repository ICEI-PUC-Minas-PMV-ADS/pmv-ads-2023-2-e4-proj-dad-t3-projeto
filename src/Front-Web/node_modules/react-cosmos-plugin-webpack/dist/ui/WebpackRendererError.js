import React from 'react';
import { createPlugin } from 'react-plugin';
const { register, plug } = createPlugin({
    name: 'webpackRendererError',
});
plug('rendererError', () => {
    return (React.createElement(React.Fragment, null,
        "If you use a custom webpack config,",
        ' ',
        React.createElement("strong", null,
            "make sure",
            React.createElement("br", null),
            "your build is generating an index.html page.")));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
