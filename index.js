'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var freeze_existing_props_1 = require("freeze-existing-props");
var VamootProxy = (function () {
    function VamootProxy(v) {
        this.__vamootProxyInstance = true;
        this.__internalValue = v || {};
        this.__alreadySet = {};
        Object.freeze(this);
    }
    VamootProxy.prototype.get = function (prop) {
        return this.__internalValue[prop];
    };
    VamootProxy.prototype.read = function (prop) {
        return this.__internalValue[prop];
    };
    VamootProxy.prototype.getAll = function () {
        return this.__internalValue;
    };
    VamootProxy.prototype.clone = function () {
        return new VamootProxy(Object.create(this.__internalValue));
    };
    VamootProxy.prototype.set = function (prop, val) {
        if (!this.__alreadySet[prop]) {
            this.__alreadySet[prop] = true;
            Object.defineProperty(this.__internalValue, prop, {
                writable: false,
                value: (val && typeof val === 'object') ? freeze_existing_props_1.freezeExistingProps(val) : val
            });
            return true;
        }
        throw new Error("property '" + prop + "' has already been set.");
    };
    ;
    return VamootProxy;
}());
exports.VamootProxy = VamootProxy;
