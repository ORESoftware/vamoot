"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vamoot = (function () {
    function Vamoot() {
        var value = {};
        var alreadySet = {};
        this.get = function (prop) {
            return value[prop];
        };
        this.set = function (prop, value) {
            if (!alreadySet[prop]) {
                alreadySet[prop] = true;
                value[prop] = value;
            }
            else {
                console.error(new Error("property '" + prop + "' has already been set."));
            }
        };
        Object.freeze(this);
    }
    return Vamoot;
}());
exports.Vamoot = Vamoot;
