import { createPlugin } from 'react-plugin';
import { initSocket, postRendererRequest } from './socket.js';
const { onLoad, register } = createPlugin({
    name: 'messageHandler',
    methods: {
        postRendererRequest,
    },
});
onLoad(initSocket);
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
