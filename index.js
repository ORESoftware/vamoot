'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var freeze_existing_props_1 = require("freeze-existing-props");
var VamootProxy = (function () {
    function VamootProxy(v, $alreadySet) {
        var internalValue = v || {};
        var alreadySet = $alreadySet || {};
        this.get = this.read = function (prop) {
            return internalValue[prop];
        };
        this.getAll = function () {
            return internalValue;
        };
        this.set = function (prop, val) {
            if (!alreadySet[prop]) {
                alreadySet[prop] = true;
                Object.defineProperty(internalValue, prop, {
                    writable: false,
                    value: (val && typeof val === 'object') ? freeze_existing_props_1.freezeExistingProps(val) : val
                });
                return true;
            }
            throw new Error("property '" + prop + "' has already been set.");
        };
        this.clone = function () {
            return new VamootProxy(Object.create(internalValue));
        };
        Object.freeze(this);
    }
    return VamootProxy;
}());
exports.VamootProxy = VamootProxy;
