export declare function importModule<T>(filePath: string): Promise<T>;
export declare function importJson<T>(filePath: string): Promise<T>;
export declare function moduleExists(moduleId: string): boolean;
export declare function fileExists(filePath: string): boolean;
export declare function dirExists(dirPath: string): boolean;
