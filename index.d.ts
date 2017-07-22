export interface IAlreadySet {
    [key: string]: boolean;
}
export interface IVamootValue {
    [key: string]: any;
}
export declare class Vamoot {
    get: Function;
    set: Function;
    read: Function;
    constructor(v: any);
}
export declare class VamootProxy {
    get: Function;
    set: Function;
    read: Function;
    constructor(v: any);
}
