/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

// Const
const env     = typeof window !== "undefined" ? window : global,
    XP        = env.XP || require('expandjs'),
    Counter   = require('./classes/Counter'),
    Gauge     = require('./classes/Gauge'),
    Histogram = require('./classes/Histogram'),
    Meter     = require('./classes/Meter');

/*********************************************************************/

/**
 * A class used to provide monitoring functionality.
 *
 * @class XPMonitor
 * @description A class used to provide monitoring functionality
 * @keywords nodejs, expandjs
 * @source https://github.com/expandjs/xp-monitor/blob/master/lib/index.js
 */
module.exports = new XP.Class('XPMonitor', {

    /**
     * @constructs
     */
    initialize() {

        // Setting
        this.counters   = {};
        this.gauges     = {};
        this.histograms = {};
        this.meters     = {};
    },

    /*********************************************************************/

    /**
     * Ensures and returns a counter measurer.
     *
     * @method counter
     * @param {string} name
     * @param {Object} [options]
     * @returns {Object}
     */
    counter(name, options) {

        // Returning
        return this.counters[name] = this.counters[name] || new Counter(options);
    },

    /**
     * Ensures and returns a gauge measurer.
     *
     * @method gauge
     * @param {string} name
     * @param {Object} [options]
     * @returns {Object}
     */
    gauge(name, options) {

        // Returning
        return this.gauges[name] = this.gauges[name] || new Gauge(options);
    },

    /**
     * Ensures and returns a histogram measurer.
     *
     * @method histogram
     * @param {string} name
     * @param {Object} [options]
     * @returns {Object}
     */
    histogram(name, options) {

        // Returning
        return this.histograms[name] = this.histograms[name] || new Histogram(options);
    },

    /**
     * Ensures and returns a meter measurer.
     *
     * @method meter
     * @param {string} name
     * @param {Object} [options]
     * @returns {Object}
     */
    meter(name, options) {

        // Returning
        return this.meters[name] = this.meters[name] || new Meter(options);
    },

    /*********************************************************************/

    /**
     * The monitor's counters.
     *
     * @property counters
     * @type Object
     */
    counters: {
        set(val) { return this.counters || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The monitor's gauges.
     *
     * @property gauges
     * @type Object
     */
    gauges: {
        set(val) { return this.gauges || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The monitor's histograms.
     *
     * @property histograms
     * @type Object
     */
    histograms: {
        set(val) { return this.histograms || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    },

    /**
     * The monitor's meters.
     *
     * @property meters
     * @type Object
     */
    meters: {
        set(val) { return this.meters || val; },
        validate(val) { return !XP.isObject(val) && 'Object'; }
    }
});

/*********************************************************************/

// Globalizing
if (typeof window !== "undefined") { window.XPMonitor = module.exports; }
