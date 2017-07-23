export interface IAlreadySet {
    [key: string]: boolean;
}
export interface IVamootValue {
    [key: string]: any;
}
export declare class VamootProxy {
    get: Function;
    getAll: Function;
    set: Function;
    read: Function;
    clone: Function;
    constructor(v?: any, $alreadySet?: IAlreadySet);
}
