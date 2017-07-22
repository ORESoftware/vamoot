"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy_mcproxy_1 = require("proxy-mcproxy");
var Vamoot = (function () {
    function Vamoot(v) {
        var internalValue = {};
        var alreadySet = {};
        this.get = this.read = function (prop) {
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
var VamootProxy = (function () {
    function VamootProxy(v) {
        var internalValue = {};
        var alreadySet = {};
        this.get = this.read = function (prop) {
            return internalValue[prop];
        };
        this.set = function (prop, val) {
            if (!alreadySet[prop]) {
                alreadySet[prop] = true;
                internalValue[prop] = (val && typeof val === 'object' ? proxy_mcproxy_1.createMcProxy(val) : val);
                return true;
            }
            else {
                console.error(new Error("property '" + prop + "' has already been set."));
                return false;
            }
        };
        Object.freeze(this);
    }
    return VamootProxy;
}());
exports.VamootProxy = VamootProxy;
