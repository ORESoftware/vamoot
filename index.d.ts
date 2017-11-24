export interface IAlreadySet {
    [key: string]: boolean;
}
export interface IVamootValue {
    [key: string]: any;
}
export declare class VamootProxy {
    private __internalValue;
    private __alreadySet;
    private __vamootProxyInstance;
    constructor(v?: Object);
    get(prop: string): any;
    read(prop: string): any;
    getAll(): IVamootValue;
    clone(): VamootProxy;
    set(prop: string, val: any): boolean;
}
