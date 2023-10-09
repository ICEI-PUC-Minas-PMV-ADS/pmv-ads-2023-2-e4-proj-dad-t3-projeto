type ConsoleMockApi = {
    expectLog: (msg: string) => void;
};
export declare function mockConsole<R>(cb: (api: ConsoleMockApi) => Promise<R>): Promise<R>;
export {};
