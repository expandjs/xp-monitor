/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

// Const
const env    = typeof window !== "undefined" ? window : global,
    measured = require('measured'),
    XP       = env.XP || require('expandjs');

/*********************************************************************/

/**
 * A class used to provide histogram measuring functionality.
 *
 * @class Histogram
 * @description A class used to provide histogram measuring functionality.
 * @keywords nodejs, expandjs
 * @source https://github.com/expandjs/xp-monitor/blob/master/lib/histogram.js
 */
module.exports = new XP.Class('Histogram', {

    /**
     * @constructs
     */
    initialize() {

        // Adapting
        this.adaptee = new measured.Histogram();
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

    /**
     * Pushes a new value.
     *
     * @method push
     * @param {number} value
     * @param {number} [timestamp]
     */
    push(value, timestamp) {

        // Asserting
        XP.assertArgument(XP.isFinite(value), 1, 'number');
        XP.assertArgument(XP.isVoid(timestamp) || XP.isInt(timestamp, true), 2, 'number');

        // Pushing
        this.adaptee.update(value, XP.isVoid(timestamp) ? Date.now() : timestamp);
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

    /*********************************************************************/

    /**
     * The histogram's instance.
     *
     * @property adaptee
     * @type Object
     */
    adaptee: {
        set(val) { return this.adaptee || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    }
});
