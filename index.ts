//core
const assert = require('assert');

//npm
import {freezeExistingProps, freezeAllProps} from 'freeze-existing-props';

export interface IAlreadySet {
  [key: string]: boolean
}

export interface IVamootValue {
  [key: string]: any
}


export class VamootProxy {

  get: Function;
  getAll: Function;
  set: Function;
  read: Function;
  clone: Function;

  constructor(v?: any, $alreadySet?: IAlreadySet) {

    let internalValue: IVamootValue = v || {};
    const alreadySet: IAlreadySet = $alreadySet || {};

    this.get = this.read = function (prop: string) {
      return internalValue[prop];
    };

    this.getAll = function () {
      return internalValue;
    };

    this.set = function (prop: string, val: any) {
      if (!alreadySet[prop]) {
        alreadySet[prop] = true;
        // internalValue[prop] = (val && typeof val === 'object' ) ? createMcProxy(val) : val;
        Object.defineProperty(internalValue, prop, {
          writable: false,
          // value: (val && typeof val === 'object' ) ? createMcProxy(val) : val
          value: (val && typeof val === 'object' ) ? freezeExistingProps(val) : val
        });
        return true;
      }

      throw new Error(`property '${prop}' has already been set.`);
    };

    this.clone = function () {
      // return new VamootProxy(Object.assign({}, freezeAllProps(internalValue, 7)), alreadySet);
      // return new VamootProxy(Object.create(internalValue), alreadySet);
      return new VamootProxy(Object.create(internalValue));
    };

    Object.freeze(this);
  }

}


