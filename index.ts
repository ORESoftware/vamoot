export interface IAlreadySet {
  [key: string]: boolean
}

export interface IVamootValue {
  [key: string]: any
}

export class Vamoot {

  get: Function;
  set: Function;

  constructor() {

    const value: IVamootValue = {};
    const alreadySet: IAlreadySet = {};

    this.get = function (prop: string) {
      return value[prop];
    };

    this.set = function (prop: string, value: any) {
      if (!alreadySet[prop]) {
        alreadySet[prop] = true;
        value[prop] = value;
      }
      else{
        console.error(new Error(`property '${prop}' has already been set.`));
      }
    };

    Object.freeze(this);
  }

}



