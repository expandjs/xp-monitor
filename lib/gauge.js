/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

// Const
const measured = require('measured'),
    XP         = require('expandjs');

/*********************************************************************/

/**
 * A class used to provide gauge measuring functionality.
 *
 * @class Gauge
 * @since 1.0.0
 * @description A class used to provide gauge measuring functionality.
 * @keywords nodejs, expandjs
 * @source https://github.com/expandjs/xp-monitor/blob/master/lib/gauge.js
 */
module.exports = new XP.Class('Gauge', {

    /**
     * @constructs
     * @param {Object} options The gauge options
     *   @param {Function} options.computer The gauge's value computer
     */
    initialize(options) {

        // Setting
        this.options  = options;
        this.computer = this.options.computer;

        // Adapting
        this.adaptee = new measured.Gauge(this.computer);
    },

    /*********************************************************************/

    /**
     * Returns the measured data.
     *
     * @method measure
     * @returns {*}
     */
    measure() {

        // Returning
        return this.adaptee.toJSON();
    },

    /*********************************************************************/

    /**
     * The gauge's instance.
     *
     * @property adaptee
     * @type Object
     */
    adaptee: {
        set(val) { return this.adaptee || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The gauge's value computer.
     *
     * @property computer
     * @type Function
     */
    computer: {
        set(val) { return this.computer || val; },
        validate(val) { return !XP.isFunction(val) && 'Function'; }
    }
});
