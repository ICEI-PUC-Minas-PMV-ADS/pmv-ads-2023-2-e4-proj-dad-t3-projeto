export type MessageType = {
    type: string;
    payload?: {};
};
export type SocketMessage<T extends MessageType = MessageType> = {
    channel: 'renderer' | 'server';
    message: T;
};
export declare function serverSocketMessage(message: MessageType): SocketMessage;
export declare function rendererSocketMessage(message: MessageType): SocketMessage;
