export interface IAlreadySet {
  [key: string]: boolean
}

export interface IVamootValue {
  [key: string]: any
}

export class Vamoot {

  get: Function;
  set: Function;

  constructor(v: any) {

    const internalValue: IVamootValue = {};
    const alreadySet: IAlreadySet = {};

    this.get = function (prop: string) {
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



