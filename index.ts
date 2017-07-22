//core


//npm
import {createMcProxy} from 'proxy-mcproxy';

export interface IAlreadySet {
  [key: string]: boolean
}

export interface IVamootValue {
  [key: string]: any
}

export class Vamoot {

  get: Function;
  set: Function;
  read: Function;

  constructor(v: any) {

    const internalValue: IVamootValue = {};
    const alreadySet: IAlreadySet = {};

    this.get = this.read = function (prop: string) {
      return internalValue[prop];
    };

    this.set = function (prop: string, $value: any) {
      if (!alreadySet[prop]) {
        alreadySet[prop] = true;
        internalValue[prop] = $value;
      }
      else{
        console.error(new Error(`property '${prop}' has already been set.`));
      }
      return this;
    };

    Object.freeze(this);
  }

}


export class VamootProxy {

  get: Function;
  set: Function;
  read: Function;

  constructor(v: any) {

    const internalValue: IVamootValue = {};
    const alreadySet: IAlreadySet = {};

    this.get = this.read = function (prop: string) {
      return internalValue[prop];
    };

    this.set = function (prop: string, val: any) {
      if (!alreadySet[prop]) {
        alreadySet[prop] = true;
        internalValue[prop] = (val && typeof val === 'object'? createMcProxy(val) : val);
        return true;
      }
      else{
        console.error(new Error(`property '${prop}' has already been set.`));
        return false;
      }
    };

    Object.freeze(this);
  }

}


