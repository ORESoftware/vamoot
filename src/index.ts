'use strict';

//core
import assert = require('assert');

//npm
import {freezeExistingProps, freezeAllProps} from 'freeze-existing-props';

////////////////////////////////////////////////////////////////

export interface VamootAlreadySet {
  [key: string]: boolean
}

export interface VamootValue {
  [key: string]: any
}

/////////////////////////////////////////////////////////////////

export class VamootProxy {
  
  private __internalValue: VamootValue;
  private __alreadySet: VamootAlreadySet;
  private __vamootProxyInstance: true;
  
  constructor(v?: Object) {

    if(arguments.length > 0){
      assert(v && typeof v === 'object', 'First argument to constructor must be a non-null object.');
    }
    
    this.__vamootProxyInstance = true;
    this.__internalValue = v || {} as VamootValue;
    this.__alreadySet = {} as VamootAlreadySet;
    
    Object.freeze(this);
  }
  
  get(prop: string) {
    return this.__internalValue[prop];
  }
  
  read(prop: string) {
    return this.__internalValue[prop];
  }
  
  getAll() {
    return this.__internalValue;
  }
  
  clone() {
    return new VamootProxy(Object.create(this.__internalValue));
  }
  
  set(prop: string, val: any) {
    if (!this.__alreadySet[prop]) {
      this.__alreadySet[prop] = true;
      Object.defineProperty(this.__internalValue, prop, {
        writable: false,
        value: (val && typeof val === 'object' ) ? freezeExistingProps(val) : val
      });
      return true;
    }
    
    throw new Error(`property '${prop}' has already been set.`);
  };
  
}


export const r2gSmokeTest = function () {
  return true;
};

