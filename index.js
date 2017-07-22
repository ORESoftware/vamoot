"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vamoot = (function () {
    function Vamoot(v) {
        var internalValue = {};
        var alreadySet = {};
        this.get = function (prop) {
            return internalValue[prop];
        };
        this.set = function (prop, $value) {
            if (!alreadySet[prop]) {
                alreadySet[prop] = true;
                internalValue[prop] = $value;
            }
            else {
                console.error(new Error("property '" + prop + "' has already been set."));
            }
            return this;
        };
        Object.freeze(this);
    }
    return Vamoot;
}());
exports.Vamoot = Vamoot;
