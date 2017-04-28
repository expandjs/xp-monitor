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
 * A class used to provide count measuring functionality.
 *
 * @class Counter
 * @since 1.0.0
 * @description A class used to provide count measuring functionality.
 * @keywords nodejs, expandjs
 * @source https://github.com/expandjs/xp-monitor/blob/master/lib/counter.js
 */
module.exports = new XP.Class('Counter', {

    /**
     * @constructs
     * @param {Object} [options] The counter options
     *   @param {number} [options.default = 0] The counter's initial value
     */
    initialize(options) {

        // Setting
        this.options = options;
        this.default = this.options.default || 0;

        // Adapting
        this.adaptee = new measured.Counter({
            count: this.default
        });
    },

    /*********************************************************************/

    /**
     * Decrement the measured data.
     *
     * @method decrement
     * @param {number} [amount = 1]
     */
    decrement(amount = 1) {

        // Asserting
        XP.assertArgument(XP.isFinite(amount), 1, 'number');

        // Decrementing
        this.adaptee.dec(amount);
    },

    /**
     * Increment the measured data.
     *
     * @method increment
     * @param {number} [amount = 1]
     */
    increment(amount = 1) {

        // Asserting
        XP.assertArgument(XP.isFinite(amount), 1, 'number');

        // Incrementing
        this.adaptee.inc(amount);
    },

    /**
     * Resets the measured data.
     *
     * @method reset
     * @param {number} [count = 0]
     */
    reset(count = 0) {

        // Asserting
        XP.assertArgument(XP.isFinite(count), 1, 'number');

        // Resetting
        this.adaptee.reset(count);
    },

    /*********************************************************************/

    /**
     * Returns the measured data.
     *
     * @method measure
     * @returns {number}
     */
    measure() {

        // Returning
        return this.adaptee.toJSON();
    },

    /*********************************************************************/

    /**
     * The counter's instance.
     *
     * @property adaptee
     * @type Object
     */
    adaptee: {
        set(val) { return this.adaptee || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The counter's initial value.
     *
     * @property default
     * @type number
     * @default 0
     */
    default: {
        set(val) { return XP.isDefined(this.default) ? this.default : val; },
        validate(val) { return !XP.isFinite(val) && 'number'; }
    }
});
