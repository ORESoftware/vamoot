'use strict';

//core
import assert = require('assert');

//npm
import {freezeExistingProps, freezeAllProps} from 'freeze-existing-props';

////////////////////////////////////////////////////////////////

export interface IAlreadySet {
  [key: string]: boolean
}

export interface IVamootValue {
  [key: string]: any
}

/////////////////////////////////////////////////////////////////

export class VamootProxy {
  
  private __internalValue: IVamootValue;
  private __alreadySet: IAlreadySet;
  private __vamootProxyInstance: true;
  
  constructor(v?: Object) {
    
    this.__vamootProxyInstance = true;
    this.__internalValue = v || {} as IVamootValue;
    this.__alreadySet = {} as IAlreadySet;
    
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


