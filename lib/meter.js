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
 * A class used to provide meter measuring functionality.
 *
 * @class Meter
 * @since 1.0.0
 * @description A class used to provide meter measuring functionality
 * @keywords nodejs, expandjs
 * @source https://github.com/expandjs/xp-monitor/blob/master/lib/meter.js
 */
module.exports = new XP.Class('Meter', {

    /**
     * @constructs
     * @param {Object} [options] The meter options
     *   @param {number} [options.interval = 5000] The meter's interval in which the averages are updated
     *   @param {number} [options.rate = 1000] The meter's rate unit
     */
    initialize(options) {

        // Setting
        this.options  = options;
        this.interval = this.options.interval || 5000;
        this.rate     = this.options.rate || 1000;

        // Adapting
        this.adaptee = new measured.Meter({
            rateUnit: this.rate,
            tickInterval: this.interval
        });
    },

    /*********************************************************************/

    /**
     * Register an amount.
     *
     * @method mark
     * @param {number} [amount = 1]
     */
    mark(amount = 1) {

        // Asserting
        XP.assertArgument(XP.isFinite(amount), 1, 'number');

        // Marking
        this.adaptee.mark(amount);
    },

    /**
     * Restarts the meter.
     *
     * @method ref
     */
    ref() {

        // Referring
        this.adaptee.ref();
    },

    /**
     * Resets the measured data.
     *
     * @method reset
     */
    reset() {

        // Resetting
        this.adaptee.reset();
    },

    /**
     * Stops the meter from measuring.
     *
     * @method unref
     */
    unref() {

        // Unreferring
        this.adaptee.unref();
    },

    /*********************************************************************/

    /**
     * Returns the measured data.
     *
     * @method measure
     * @returns {Object}
     */
    measure() {

        // Returning
        return this.adaptee.toJSON();
    },

    /*********************************************************************/

    /**
     * The meter's instance.
     *
     * @property adaptee
     * @type Object
     */
    adaptee: {
        set(val) { return this.adaptee || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The meter's interval in which the averages are updated.
     *
     * @property interval
     * @type number
     * @default 5000
     */
    interval: {
        set(val) { return this.interval || val; },
        validate(val) { return !XP.isInt(val, true) && 'number'; }
    },

    /**
     * The meter's rate unit.
     *
     * @property rate
     * @type number
     * @default 1000
     */
    rate: {
        set(val) { return this.rate || val; },
        validate(val) { return !XP.isInt(val, true) && 'number'; }
    }
});
