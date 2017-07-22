export interface IAlreadySet {
    [key: string]: boolean;
}
export interface IVamootValue {
    [key: string]: any;
}
export declare class Vamoot {
    get: Function;
    set: Function;
    constructor(v: any);
}
