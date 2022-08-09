export declare class ContextCache {
    private readonly contexts;
    for<T extends Record<string, any>>(ctx: string): {
        set: <R>(key: keyof T, val: R) => R;
        get: <R_1>(key: keyof T) => R_1;
        has: (key: keyof T) => boolean;
    };
}
