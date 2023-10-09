import { MessageType } from 'react-cosmos-core';
import { MessageHandlerContext } from './shared.js';
export declare function initSocket(context: MessageHandlerContext): (() => void) | undefined;
export declare function postRendererRequest(context: MessageHandlerContext, msg: MessageType): void;
