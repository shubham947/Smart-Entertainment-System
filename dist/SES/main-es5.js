(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/hammerjs/hammer.js": 
        /*!*****************************************!*\
          !*** ./node_modules/hammerjs/hammer.js ***!
          \*****************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__; /*! Hammer.JS - v2.0.7 - 2016-04-22
             * http://hammerjs.github.io/
             *
             * Copyright (c) 2016 Jorik Tangelder;
             * Licensed under the MIT license */
            (function (window, document, exportName, undefined) {
                'use strict';
                var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
                var TEST_ELEMENT = document.createElement('div');
                var TYPE_FUNCTION = 'function';
                var round = Math.round;
                var abs = Math.abs;
                var now = Date.now;
                /**
                 * set a timeout with a given scope
                 * @param {Function} fn
                 * @param {Number} timeout
                 * @param {Object} context
                 * @returns {number}
                 */
                function setTimeoutContext(fn, timeout, context) {
                    return setTimeout(bindFn(fn, context), timeout);
                }
                /**
                 * if the argument is an array, we want to execute the fn on each entry
                 * if it aint an array we don't want to do a thing.
                 * this is used by all the methods that accept a single and array argument.
                 * @param {*|Array} arg
                 * @param {String} fn
                 * @param {Object} [context]
                 * @returns {Boolean}
                 */
                function invokeArrayArg(arg, fn, context) {
                    if (Array.isArray(arg)) {
                        each(arg, context[fn], context);
                        return true;
                    }
                    return false;
                }
                /**
                 * walk objects and arrays
                 * @param {Object} obj
                 * @param {Function} iterator
                 * @param {Object} context
                 */
                function each(obj, iterator, context) {
                    var i;
                    if (!obj) {
                        return;
                    }
                    if (obj.forEach) {
                        obj.forEach(iterator, context);
                    }
                    else if (obj.length !== undefined) {
                        i = 0;
                        while (i < obj.length) {
                            iterator.call(context, obj[i], i, obj);
                            i++;
                        }
                    }
                    else {
                        for (i in obj) {
                            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
                        }
                    }
                }
                /**
                 * wrap a method with a deprecation warning and stack trace
                 * @param {Function} method
                 * @param {String} name
                 * @param {String} message
                 * @returns {Function} A new function wrapping the supplied method.
                 */
                function deprecate(method, name, message) {
                    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
                    return function () {
                        var e = new Error('get-stack-trace');
                        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
                            .replace(/^\s+at\s+/gm, '')
                            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
                        var log = window.console && (window.console.warn || window.console.log);
                        if (log) {
                            log.call(window.console, deprecationMessage, stack);
                        }
                        return method.apply(this, arguments);
                    };
                }
                /**
                 * extend object.
                 * means that properties in dest will be overwritten by the ones in src.
                 * @param {Object} target
                 * @param {...Object} objects_to_assign
                 * @returns {Object} target
                 */
                var assign;
                if (typeof Object.assign !== 'function') {
                    assign = function assign(target) {
                        if (target === undefined || target === null) {
                            throw new TypeError('Cannot convert undefined or null to object');
                        }
                        var output = Object(target);
                        for (var index = 1; index < arguments.length; index++) {
                            var source = arguments[index];
                            if (source !== undefined && source !== null) {
                                for (var nextKey in source) {
                                    if (source.hasOwnProperty(nextKey)) {
                                        output[nextKey] = source[nextKey];
                                    }
                                }
                            }
                        }
                        return output;
                    };
                }
                else {
                    assign = Object.assign;
                }
                /**
                 * extend object.
                 * means that properties in dest will be overwritten by the ones in src.
                 * @param {Object} dest
                 * @param {Object} src
                 * @param {Boolean} [merge=false]
                 * @returns {Object} dest
                 */
                var extend = deprecate(function extend(dest, src, merge) {
                    var keys = Object.keys(src);
                    var i = 0;
                    while (i < keys.length) {
                        if (!merge || (merge && dest[keys[i]] === undefined)) {
                            dest[keys[i]] = src[keys[i]];
                        }
                        i++;
                    }
                    return dest;
                }, 'extend', 'Use `assign`.');
                /**
                 * merge the values from src in the dest.
                 * means that properties that exist in dest will not be overwritten by src
                 * @param {Object} dest
                 * @param {Object} src
                 * @returns {Object} dest
                 */
                var merge = deprecate(function merge(dest, src) {
                    return extend(dest, src, true);
                }, 'merge', 'Use `assign`.');
                /**
                 * simple class inheritance
                 * @param {Function} child
                 * @param {Function} base
                 * @param {Object} [properties]
                 */
                function inherit(child, base, properties) {
                    var baseP = base.prototype, childP;
                    childP = child.prototype = Object.create(baseP);
                    childP.constructor = child;
                    childP._super = baseP;
                    if (properties) {
                        assign(childP, properties);
                    }
                }
                /**
                 * simple function bind
                 * @param {Function} fn
                 * @param {Object} context
                 * @returns {Function}
                 */
                function bindFn(fn, context) {
                    return function boundFn() {
                        return fn.apply(context, arguments);
                    };
                }
                /**
                 * let a boolean value also be a function that must return a boolean
                 * this first item in args will be used as the context
                 * @param {Boolean|Function} val
                 * @param {Array} [args]
                 * @returns {Boolean}
                 */
                function boolOrFn(val, args) {
                    if (typeof val == TYPE_FUNCTION) {
                        return val.apply(args ? args[0] || undefined : undefined, args);
                    }
                    return val;
                }
                /**
                 * use the val2 when val1 is undefined
                 * @param {*} val1
                 * @param {*} val2
                 * @returns {*}
                 */
                function ifUndefined(val1, val2) {
                    return (val1 === undefined) ? val2 : val1;
                }
                /**
                 * addEventListener with multiple events at once
                 * @param {EventTarget} target
                 * @param {String} types
                 * @param {Function} handler
                 */
                function addEventListeners(target, types, handler) {
                    each(splitStr(types), function (type) {
                        target.addEventListener(type, handler, false);
                    });
                }
                /**
                 * removeEventListener with multiple events at once
                 * @param {EventTarget} target
                 * @param {String} types
                 * @param {Function} handler
                 */
                function removeEventListeners(target, types, handler) {
                    each(splitStr(types), function (type) {
                        target.removeEventListener(type, handler, false);
                    });
                }
                /**
                 * find if a node is in the given parent
                 * @method hasParent
                 * @param {HTMLElement} node
                 * @param {HTMLElement} parent
                 * @return {Boolean} found
                 */
                function hasParent(node, parent) {
                    while (node) {
                        if (node == parent) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                    return false;
                }
                /**
                 * small indexOf wrapper
                 * @param {String} str
                 * @param {String} find
                 * @returns {Boolean} found
                 */
                function inStr(str, find) {
                    return str.indexOf(find) > -1;
                }
                /**
                 * split string on whitespace
                 * @param {String} str
                 * @returns {Array} words
                 */
                function splitStr(str) {
                    return str.trim().split(/\s+/g);
                }
                /**
                 * find if a array contains the object using indexOf or a simple polyFill
                 * @param {Array} src
                 * @param {String} find
                 * @param {String} [findByKey]
                 * @return {Boolean|Number} false when not found, or the index
                 */
                function inArray(src, find, findByKey) {
                    if (src.indexOf && !findByKey) {
                        return src.indexOf(find);
                    }
                    else {
                        var i = 0;
                        while (i < src.length) {
                            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                                return i;
                            }
                            i++;
                        }
                        return -1;
                    }
                }
                /**
                 * convert array-like objects to real arrays
                 * @param {Object} obj
                 * @returns {Array}
                 */
                function toArray(obj) {
                    return Array.prototype.slice.call(obj, 0);
                }
                /**
                 * unique array with objects based on a key (like 'id') or just by the array's value
                 * @param {Array} src [{id:1},{id:2},{id:1}]
                 * @param {String} [key]
                 * @param {Boolean} [sort=False]
                 * @returns {Array} [{id:1},{id:2}]
                 */
                function uniqueArray(src, key, sort) {
                    var results = [];
                    var values = [];
                    var i = 0;
                    while (i < src.length) {
                        var val = key ? src[i][key] : src[i];
                        if (inArray(values, val) < 0) {
                            results.push(src[i]);
                        }
                        values[i] = val;
                        i++;
                    }
                    if (sort) {
                        if (!key) {
                            results = results.sort();
                        }
                        else {
                            results = results.sort(function sortUniqueArray(a, b) {
                                return a[key] > b[key];
                            });
                        }
                    }
                    return results;
                }
                /**
                 * get the prefixed property
                 * @param {Object} obj
                 * @param {String} property
                 * @returns {String|Undefined} prefixed
                 */
                function prefixed(obj, property) {
                    var prefix, prop;
                    var camelProp = property[0].toUpperCase() + property.slice(1);
                    var i = 0;
                    while (i < VENDOR_PREFIXES.length) {
                        prefix = VENDOR_PREFIXES[i];
                        prop = (prefix) ? prefix + camelProp : property;
                        if (prop in obj) {
                            return prop;
                        }
                        i++;
                    }
                    return undefined;
                }
                /**
                 * get a unique id
                 * @returns {number} uniqueId
                 */
                var _uniqueId = 1;
                function uniqueId() {
                    return _uniqueId++;
                }
                /**
                 * get the window object of an element
                 * @param {HTMLElement} element
                 * @returns {DocumentView|Window}
                 */
                function getWindowForElement(element) {
                    var doc = element.ownerDocument || element;
                    return (doc.defaultView || doc.parentWindow || window);
                }
                var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
                var SUPPORT_TOUCH = ('ontouchstart' in window);
                var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
                var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
                var INPUT_TYPE_TOUCH = 'touch';
                var INPUT_TYPE_PEN = 'pen';
                var INPUT_TYPE_MOUSE = 'mouse';
                var INPUT_TYPE_KINECT = 'kinect';
                var COMPUTE_INTERVAL = 25;
                var INPUT_START = 1;
                var INPUT_MOVE = 2;
                var INPUT_END = 4;
                var INPUT_CANCEL = 8;
                var DIRECTION_NONE = 1;
                var DIRECTION_LEFT = 2;
                var DIRECTION_RIGHT = 4;
                var DIRECTION_UP = 8;
                var DIRECTION_DOWN = 16;
                var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
                var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
                var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
                var PROPS_XY = ['x', 'y'];
                var PROPS_CLIENT_XY = ['clientX', 'clientY'];
                /**
                 * create new input type manager
                 * @param {Manager} manager
                 * @param {Function} callback
                 * @returns {Input}
                 * @constructor
                 */
                function Input(manager, callback) {
                    var self = this;
                    this.manager = manager;
                    this.callback = callback;
                    this.element = manager.element;
                    this.target = manager.options.inputTarget;
                    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
                    // so when disabled the input events are completely bypassed.
                    this.domHandler = function (ev) {
                        if (boolOrFn(manager.options.enable, [manager])) {
                            self.handler(ev);
                        }
                    };
                    this.init();
                }
                Input.prototype = {
                    /**
                     * should handle the inputEvent data and trigger the callback
                     * @virtual
                     */
                    handler: function () { },
                    /**
                     * bind the events
                     */
                    init: function () {
                        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
                        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
                        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
                    },
                    /**
                     * unbind the events
                     */
                    destroy: function () {
                        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
                        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
                        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
                    }
                };
                /**
                 * create new input type manager
                 * called by the Manager constructor
                 * @param {Hammer} manager
                 * @returns {Input}
                 */
                function createInputInstance(manager) {
                    var Type;
                    var inputClass = manager.options.inputClass;
                    if (inputClass) {
                        Type = inputClass;
                    }
                    else if (SUPPORT_POINTER_EVENTS) {
                        Type = PointerEventInput;
                    }
                    else if (SUPPORT_ONLY_TOUCH) {
                        Type = TouchInput;
                    }
                    else if (!SUPPORT_TOUCH) {
                        Type = MouseInput;
                    }
                    else {
                        Type = TouchMouseInput;
                    }
                    return new (Type)(manager, inputHandler);
                }
                /**
                 * handle input events
                 * @param {Manager} manager
                 * @param {String} eventType
                 * @param {Object} input
                 */
                function inputHandler(manager, eventType, input) {
                    var pointersLen = input.pointers.length;
                    var changedPointersLen = input.changedPointers.length;
                    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
                    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
                    input.isFirst = !!isFirst;
                    input.isFinal = !!isFinal;
                    if (isFirst) {
                        manager.session = {};
                    }
                    // source event is the normalized value of the domEvents
                    // like 'touchstart, mouseup, pointerdown'
                    input.eventType = eventType;
                    // compute scale, rotation etc
                    computeInputData(manager, input);
                    // emit secret event
                    manager.emit('hammer.input', input);
                    manager.recognize(input);
                    manager.session.prevInput = input;
                }
                /**
                 * extend the data with some usable properties like scale, rotate, velocity etc
                 * @param {Object} manager
                 * @param {Object} input
                 */
                function computeInputData(manager, input) {
                    var session = manager.session;
                    var pointers = input.pointers;
                    var pointersLength = pointers.length;
                    // store the first input to calculate the distance and direction
                    if (!session.firstInput) {
                        session.firstInput = simpleCloneInputData(input);
                    }
                    // to compute scale and rotation we need to store the multiple touches
                    if (pointersLength > 1 && !session.firstMultiple) {
                        session.firstMultiple = simpleCloneInputData(input);
                    }
                    else if (pointersLength === 1) {
                        session.firstMultiple = false;
                    }
                    var firstInput = session.firstInput;
                    var firstMultiple = session.firstMultiple;
                    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
                    var center = input.center = getCenter(pointers);
                    input.timeStamp = now();
                    input.deltaTime = input.timeStamp - firstInput.timeStamp;
                    input.angle = getAngle(offsetCenter, center);
                    input.distance = getDistance(offsetCenter, center);
                    computeDeltaXY(session, input);
                    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
                    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
                    input.overallVelocityX = overallVelocity.x;
                    input.overallVelocityY = overallVelocity.y;
                    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
                    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
                    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
                    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
                        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
                    computeIntervalInputData(session, input);
                    // find the correct target
                    var target = manager.element;
                    if (hasParent(input.srcEvent.target, target)) {
                        target = input.srcEvent.target;
                    }
                    input.target = target;
                }
                function computeDeltaXY(session, input) {
                    var center = input.center;
                    var offset = session.offsetDelta || {};
                    var prevDelta = session.prevDelta || {};
                    var prevInput = session.prevInput || {};
                    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
                        prevDelta = session.prevDelta = {
                            x: prevInput.deltaX || 0,
                            y: prevInput.deltaY || 0
                        };
                        offset = session.offsetDelta = {
                            x: center.x,
                            y: center.y
                        };
                    }
                    input.deltaX = prevDelta.x + (center.x - offset.x);
                    input.deltaY = prevDelta.y + (center.y - offset.y);
                }
                /**
                 * velocity is calculated every x ms
                 * @param {Object} session
                 * @param {Object} input
                 */
                function computeIntervalInputData(session, input) {
                    var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
                    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
                        var deltaX = input.deltaX - last.deltaX;
                        var deltaY = input.deltaY - last.deltaY;
                        var v = getVelocity(deltaTime, deltaX, deltaY);
                        velocityX = v.x;
                        velocityY = v.y;
                        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
                        direction = getDirection(deltaX, deltaY);
                        session.lastInterval = input;
                    }
                    else {
                        // use latest velocity info if it doesn't overtake a minimum period
                        velocity = last.velocity;
                        velocityX = last.velocityX;
                        velocityY = last.velocityY;
                        direction = last.direction;
                    }
                    input.velocity = velocity;
                    input.velocityX = velocityX;
                    input.velocityY = velocityY;
                    input.direction = direction;
                }
                /**
                 * create a simple clone from the input used for storage of firstInput and firstMultiple
                 * @param {Object} input
                 * @returns {Object} clonedInputData
                 */
                function simpleCloneInputData(input) {
                    // make a simple copy of the pointers because we will get a reference if we don't
                    // we only need clientXY for the calculations
                    var pointers = [];
                    var i = 0;
                    while (i < input.pointers.length) {
                        pointers[i] = {
                            clientX: round(input.pointers[i].clientX),
                            clientY: round(input.pointers[i].clientY)
                        };
                        i++;
                    }
                    return {
                        timeStamp: now(),
                        pointers: pointers,
                        center: getCenter(pointers),
                        deltaX: input.deltaX,
                        deltaY: input.deltaY
                    };
                }
                /**
                 * get the center of all the pointers
                 * @param {Array} pointers
                 * @return {Object} center contains `x` and `y` properties
                 */
                function getCenter(pointers) {
                    var pointersLength = pointers.length;
                    // no need to loop when only one touch
                    if (pointersLength === 1) {
                        return {
                            x: round(pointers[0].clientX),
                            y: round(pointers[0].clientY)
                        };
                    }
                    var x = 0, y = 0, i = 0;
                    while (i < pointersLength) {
                        x += pointers[i].clientX;
                        y += pointers[i].clientY;
                        i++;
                    }
                    return {
                        x: round(x / pointersLength),
                        y: round(y / pointersLength)
                    };
                }
                /**
                 * calculate the velocity between two points. unit is in px per ms.
                 * @param {Number} deltaTime
                 * @param {Number} x
                 * @param {Number} y
                 * @return {Object} velocity `x` and `y`
                 */
                function getVelocity(deltaTime, x, y) {
                    return {
                        x: x / deltaTime || 0,
                        y: y / deltaTime || 0
                    };
                }
                /**
                 * get the direction between two points
                 * @param {Number} x
                 * @param {Number} y
                 * @return {Number} direction
                 */
                function getDirection(x, y) {
                    if (x === y) {
                        return DIRECTION_NONE;
                    }
                    if (abs(x) >= abs(y)) {
                        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    }
                    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                }
                /**
                 * calculate the absolute distance between two points
                 * @param {Object} p1 {x, y}
                 * @param {Object} p2 {x, y}
                 * @param {Array} [props] containing x and y keys
                 * @return {Number} distance
                 */
                function getDistance(p1, p2, props) {
                    if (!props) {
                        props = PROPS_XY;
                    }
                    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
                    return Math.sqrt((x * x) + (y * y));
                }
                /**
                 * calculate the angle between two coordinates
                 * @param {Object} p1
                 * @param {Object} p2
                 * @param {Array} [props] containing x and y keys
                 * @return {Number} angle
                 */
                function getAngle(p1, p2, props) {
                    if (!props) {
                        props = PROPS_XY;
                    }
                    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
                    return Math.atan2(y, x) * 180 / Math.PI;
                }
                /**
                 * calculate the rotation degrees between two pointersets
                 * @param {Array} start array of pointers
                 * @param {Array} end array of pointers
                 * @return {Number} rotation
                 */
                function getRotation(start, end) {
                    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
                }
                /**
                 * calculate the scale factor between two pointersets
                 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
                 * @param {Array} start array of pointers
                 * @param {Array} end array of pointers
                 * @return {Number} scale
                 */
                function getScale(start, end) {
                    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
                }
                var MOUSE_INPUT_MAP = {
                    mousedown: INPUT_START,
                    mousemove: INPUT_MOVE,
                    mouseup: INPUT_END
                };
                var MOUSE_ELEMENT_EVENTS = 'mousedown';
                var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
                /**
                 * Mouse events input
                 * @constructor
                 * @extends Input
                 */
                function MouseInput() {
                    this.evEl = MOUSE_ELEMENT_EVENTS;
                    this.evWin = MOUSE_WINDOW_EVENTS;
                    this.pressed = false; // mousedown state
                    Input.apply(this, arguments);
                }
                inherit(MouseInput, Input, {
                    /**
                     * handle mouse events
                     * @param {Object} ev
                     */
                    handler: function MEhandler(ev) {
                        var eventType = MOUSE_INPUT_MAP[ev.type];
                        // on start we want to have the left mouse button down
                        if (eventType & INPUT_START && ev.button === 0) {
                            this.pressed = true;
                        }
                        if (eventType & INPUT_MOVE && ev.which !== 1) {
                            eventType = INPUT_END;
                        }
                        // mouse must be down
                        if (!this.pressed) {
                            return;
                        }
                        if (eventType & INPUT_END) {
                            this.pressed = false;
                        }
                        this.callback(this.manager, eventType, {
                            pointers: [ev],
                            changedPointers: [ev],
                            pointerType: INPUT_TYPE_MOUSE,
                            srcEvent: ev
                        });
                    }
                });
                var POINTER_INPUT_MAP = {
                    pointerdown: INPUT_START,
                    pointermove: INPUT_MOVE,
                    pointerup: INPUT_END,
                    pointercancel: INPUT_CANCEL,
                    pointerout: INPUT_CANCEL
                };
                // in IE10 the pointer types is defined as an enum
                var IE10_POINTER_TYPE_ENUM = {
                    2: INPUT_TYPE_TOUCH,
                    3: INPUT_TYPE_PEN,
                    4: INPUT_TYPE_MOUSE,
                    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
                };
                var POINTER_ELEMENT_EVENTS = 'pointerdown';
                var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
                // IE10 has prefixed support, and case-sensitive
                if (window.MSPointerEvent && !window.PointerEvent) {
                    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
                    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
                }
                /**
                 * Pointer events input
                 * @constructor
                 * @extends Input
                 */
                function PointerEventInput() {
                    this.evEl = POINTER_ELEMENT_EVENTS;
                    this.evWin = POINTER_WINDOW_EVENTS;
                    Input.apply(this, arguments);
                    this.store = (this.manager.session.pointerEvents = []);
                }
                inherit(PointerEventInput, Input, {
                    /**
                     * handle mouse events
                     * @param {Object} ev
                     */
                    handler: function PEhandler(ev) {
                        var store = this.store;
                        var removePointer = false;
                        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
                        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
                        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
                        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
                        // get index of the event in the store
                        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
                        // start and mouse must be down
                        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                            if (storeIndex < 0) {
                                store.push(ev);
                                storeIndex = store.length - 1;
                            }
                        }
                        else if (eventType & (INPUT_END | INPUT_CANCEL)) {
                            removePointer = true;
                        }
                        // it not found, so the pointer hasn't been down (so it's probably a hover)
                        if (storeIndex < 0) {
                            return;
                        }
                        // update the event in the store
                        store[storeIndex] = ev;
                        this.callback(this.manager, eventType, {
                            pointers: store,
                            changedPointers: [ev],
                            pointerType: pointerType,
                            srcEvent: ev
                        });
                        if (removePointer) {
                            // remove from the store
                            store.splice(storeIndex, 1);
                        }
                    }
                });
                var SINGLE_TOUCH_INPUT_MAP = {
                    touchstart: INPUT_START,
                    touchmove: INPUT_MOVE,
                    touchend: INPUT_END,
                    touchcancel: INPUT_CANCEL
                };
                var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
                var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
                /**
                 * Touch events input
                 * @constructor
                 * @extends Input
                 */
                function SingleTouchInput() {
                    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
                    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
                    this.started = false;
                    Input.apply(this, arguments);
                }
                inherit(SingleTouchInput, Input, {
                    handler: function TEhandler(ev) {
                        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
                        // should we handle the touch events?
                        if (type === INPUT_START) {
                            this.started = true;
                        }
                        if (!this.started) {
                            return;
                        }
                        var touches = normalizeSingleTouches.call(this, ev, type);
                        // when done, reset the started state
                        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
                            this.started = false;
                        }
                        this.callback(this.manager, type, {
                            pointers: touches[0],
                            changedPointers: touches[1],
                            pointerType: INPUT_TYPE_TOUCH,
                            srcEvent: ev
                        });
                    }
                });
                /**
                 * @this {TouchInput}
                 * @param {Object} ev
                 * @param {Number} type flag
                 * @returns {undefined|Array} [all, changed]
                 */
                function normalizeSingleTouches(ev, type) {
                    var all = toArray(ev.touches);
                    var changed = toArray(ev.changedTouches);
                    if (type & (INPUT_END | INPUT_CANCEL)) {
                        all = uniqueArray(all.concat(changed), 'identifier', true);
                    }
                    return [all, changed];
                }
                var TOUCH_INPUT_MAP = {
                    touchstart: INPUT_START,
                    touchmove: INPUT_MOVE,
                    touchend: INPUT_END,
                    touchcancel: INPUT_CANCEL
                };
                var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
                /**
                 * Multi-user touch events input
                 * @constructor
                 * @extends Input
                 */
                function TouchInput() {
                    this.evTarget = TOUCH_TARGET_EVENTS;
                    this.targetIds = {};
                    Input.apply(this, arguments);
                }
                inherit(TouchInput, Input, {
                    handler: function MTEhandler(ev) {
                        var type = TOUCH_INPUT_MAP[ev.type];
                        var touches = getTouches.call(this, ev, type);
                        if (!touches) {
                            return;
                        }
                        this.callback(this.manager, type, {
                            pointers: touches[0],
                            changedPointers: touches[1],
                            pointerType: INPUT_TYPE_TOUCH,
                            srcEvent: ev
                        });
                    }
                });
                /**
                 * @this {TouchInput}
                 * @param {Object} ev
                 * @param {Number} type flag
                 * @returns {undefined|Array} [all, changed]
                 */
                function getTouches(ev, type) {
                    var allTouches = toArray(ev.touches);
                    var targetIds = this.targetIds;
                    // when there is only one touch, the process can be simplified
                    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
                        targetIds[allTouches[0].identifier] = true;
                        return [allTouches, allTouches];
                    }
                    var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
                    // get target touches from touches
                    targetTouches = allTouches.filter(function (touch) {
                        return hasParent(touch.target, target);
                    });
                    // collect touches
                    if (type === INPUT_START) {
                        i = 0;
                        while (i < targetTouches.length) {
                            targetIds[targetTouches[i].identifier] = true;
                            i++;
                        }
                    }
                    // filter changed touches to only contain touches that exist in the collected target ids
                    i = 0;
                    while (i < changedTouches.length) {
                        if (targetIds[changedTouches[i].identifier]) {
                            changedTargetTouches.push(changedTouches[i]);
                        }
                        // cleanup removed touches
                        if (type & (INPUT_END | INPUT_CANCEL)) {
                            delete targetIds[changedTouches[i].identifier];
                        }
                        i++;
                    }
                    if (!changedTargetTouches.length) {
                        return;
                    }
                    return [
                        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
                        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
                        changedTargetTouches
                    ];
                }
                /**
                 * Combined touch and mouse input
                 *
                 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
                 * This because touch devices also emit mouse events while doing a touch.
                 *
                 * @constructor
                 * @extends Input
                 */
                var DEDUP_TIMEOUT = 2500;
                var DEDUP_DISTANCE = 25;
                function TouchMouseInput() {
                    Input.apply(this, arguments);
                    var handler = bindFn(this.handler, this);
                    this.touch = new TouchInput(this.manager, handler);
                    this.mouse = new MouseInput(this.manager, handler);
                    this.primaryTouch = null;
                    this.lastTouches = [];
                }
                inherit(TouchMouseInput, Input, {
                    /**
                     * handle mouse and touch events
                     * @param {Hammer} manager
                     * @param {String} inputEvent
                     * @param {Object} inputData
                     */
                    handler: function TMEhandler(manager, inputEvent, inputData) {
                        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH), isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
                        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
                            return;
                        }
                        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
                        if (isTouch) {
                            recordTouches.call(this, inputEvent, inputData);
                        }
                        else if (isMouse && isSyntheticEvent.call(this, inputData)) {
                            return;
                        }
                        this.callback(manager, inputEvent, inputData);
                    },
                    /**
                     * remove the event listeners
                     */
                    destroy: function destroy() {
                        this.touch.destroy();
                        this.mouse.destroy();
                    }
                });
                function recordTouches(eventType, eventData) {
                    if (eventType & INPUT_START) {
                        this.primaryTouch = eventData.changedPointers[0].identifier;
                        setLastTouch.call(this, eventData);
                    }
                    else if (eventType & (INPUT_END | INPUT_CANCEL)) {
                        setLastTouch.call(this, eventData);
                    }
                }
                function setLastTouch(eventData) {
                    var touch = eventData.changedPointers[0];
                    if (touch.identifier === this.primaryTouch) {
                        var lastTouch = { x: touch.clientX, y: touch.clientY };
                        this.lastTouches.push(lastTouch);
                        var lts = this.lastTouches;
                        var removeLastTouch = function () {
                            var i = lts.indexOf(lastTouch);
                            if (i > -1) {
                                lts.splice(i, 1);
                            }
                        };
                        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
                    }
                }
                function isSyntheticEvent(eventData) {
                    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
                    for (var i = 0; i < this.lastTouches.length; i++) {
                        var t = this.lastTouches[i];
                        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
                        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
                            return true;
                        }
                    }
                    return false;
                }
                var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
                var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
                // magical touchAction value
                var TOUCH_ACTION_COMPUTE = 'compute';
                var TOUCH_ACTION_AUTO = 'auto';
                var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
                var TOUCH_ACTION_NONE = 'none';
                var TOUCH_ACTION_PAN_X = 'pan-x';
                var TOUCH_ACTION_PAN_Y = 'pan-y';
                var TOUCH_ACTION_MAP = getTouchActionProps();
                /**
                 * Touch Action
                 * sets the touchAction property or uses the js alternative
                 * @param {Manager} manager
                 * @param {String} value
                 * @constructor
                 */
                function TouchAction(manager, value) {
                    this.manager = manager;
                    this.set(value);
                }
                TouchAction.prototype = {
                    /**
                     * set the touchAction value on the element or enable the polyfill
                     * @param {String} value
                     */
                    set: function (value) {
                        // find out the touch-action by the event handlers
                        if (value == TOUCH_ACTION_COMPUTE) {
                            value = this.compute();
                        }
                        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
                            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
                        }
                        this.actions = value.toLowerCase().trim();
                    },
                    /**
                     * just re-set the touchAction value
                     */
                    update: function () {
                        this.set(this.manager.options.touchAction);
                    },
                    /**
                     * compute the value for the touchAction property based on the recognizer's settings
                     * @returns {String} value
                     */
                    compute: function () {
                        var actions = [];
                        each(this.manager.recognizers, function (recognizer) {
                            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                                actions = actions.concat(recognizer.getTouchAction());
                            }
                        });
                        return cleanTouchActions(actions.join(' '));
                    },
                    /**
                     * this method is called on each input cycle and provides the preventing of the browser behavior
                     * @param {Object} input
                     */
                    preventDefaults: function (input) {
                        var srcEvent = input.srcEvent;
                        var direction = input.offsetDirection;
                        // if the touch action did prevented once this session
                        if (this.manager.session.prevented) {
                            srcEvent.preventDefault();
                            return;
                        }
                        var actions = this.actions;
                        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
                        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
                        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
                        if (hasNone) {
                            //do not prevent defaults if this is a tap gesture
                            var isTapPointer = input.pointers.length === 1;
                            var isTapMovement = input.distance < 2;
                            var isTapTouchTime = input.deltaTime < 250;
                            if (isTapPointer && isTapMovement && isTapTouchTime) {
                                return;
                            }
                        }
                        if (hasPanX && hasPanY) {
                            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
                            return;
                        }
                        if (hasNone ||
                            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
                            (hasPanX && direction & DIRECTION_VERTICAL)) {
                            return this.preventSrc(srcEvent);
                        }
                    },
                    /**
                     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
                     * @param {Object} srcEvent
                     */
                    preventSrc: function (srcEvent) {
                        this.manager.session.prevented = true;
                        srcEvent.preventDefault();
                    }
                };
                /**
                 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
                 * @param {String} actions
                 * @returns {*}
                 */
                function cleanTouchActions(actions) {
                    // none
                    if (inStr(actions, TOUCH_ACTION_NONE)) {
                        return TOUCH_ACTION_NONE;
                    }
                    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
                    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
                    // if both pan-x and pan-y are set (different recognizers
                    // for different directions, e.g. horizontal pan but vertical swipe?)
                    // we need none (as otherwise with pan-x pan-y combined none of these
                    // recognizers will work, since the browser would handle all panning
                    if (hasPanX && hasPanY) {
                        return TOUCH_ACTION_NONE;
                    }
                    // pan-x OR pan-y
                    if (hasPanX || hasPanY) {
                        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
                    }
                    // manipulation
                    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
                        return TOUCH_ACTION_MANIPULATION;
                    }
                    return TOUCH_ACTION_AUTO;
                }
                function getTouchActionProps() {
                    if (!NATIVE_TOUCH_ACTION) {
                        return false;
                    }
                    var touchMap = {};
                    var cssSupports = window.CSS && window.CSS.supports;
                    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
                        // If css.supports is not supported but there is native touch-action assume it supports
                        // all values. This is the case for IE 10 and 11.
                        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
                    });
                    return touchMap;
                }
                /**
                 * Recognizer flow explained; *
                 * All recognizers have the initial state of POSSIBLE when a input session starts.
                 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
                 * Example session for mouse-input: mousedown -> mousemove -> mouseup
                 *
                 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
                 * which determines with state it should be.
                 *
                 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
                 * POSSIBLE to give it another change on the next cycle.
                 *
                 *               Possible
                 *                  |
                 *            +-----+---------------+
                 *            |                     |
                 *      +-----+-----+               |
                 *      |           |               |
                 *   Failed      Cancelled          |
                 *                          +-------+------+
                 *                          |              |
                 *                      Recognized       Began
                 *                                         |
                 *                                      Changed
                 *                                         |
                 *                                  Ended/Recognized
                 */
                var STATE_POSSIBLE = 1;
                var STATE_BEGAN = 2;
                var STATE_CHANGED = 4;
                var STATE_ENDED = 8;
                var STATE_RECOGNIZED = STATE_ENDED;
                var STATE_CANCELLED = 16;
                var STATE_FAILED = 32;
                /**
                 * Recognizer
                 * Every recognizer needs to extend from this class.
                 * @constructor
                 * @param {Object} options
                 */
                function Recognizer(options) {
                    this.options = assign({}, this.defaults, options || {});
                    this.id = uniqueId();
                    this.manager = null;
                    // default is enable true
                    this.options.enable = ifUndefined(this.options.enable, true);
                    this.state = STATE_POSSIBLE;
                    this.simultaneous = {};
                    this.requireFail = [];
                }
                Recognizer.prototype = {
                    /**
                     * @virtual
                     * @type {Object}
                     */
                    defaults: {},
                    /**
                     * set options
                     * @param {Object} options
                     * @return {Recognizer}
                     */
                    set: function (options) {
                        assign(this.options, options);
                        // also update the touchAction, in case something changed about the directions/enabled state
                        this.manager && this.manager.touchAction.update();
                        return this;
                    },
                    /**
                     * recognize simultaneous with an other recognizer.
                     * @param {Recognizer} otherRecognizer
                     * @returns {Recognizer} this
                     */
                    recognizeWith: function (otherRecognizer) {
                        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
                            return this;
                        }
                        var simultaneous = this.simultaneous;
                        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                        if (!simultaneous[otherRecognizer.id]) {
                            simultaneous[otherRecognizer.id] = otherRecognizer;
                            otherRecognizer.recognizeWith(this);
                        }
                        return this;
                    },
                    /**
                     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
                     * @param {Recognizer} otherRecognizer
                     * @returns {Recognizer} this
                     */
                    dropRecognizeWith: function (otherRecognizer) {
                        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
                            return this;
                        }
                        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                        delete this.simultaneous[otherRecognizer.id];
                        return this;
                    },
                    /**
                     * recognizer can only run when an other is failing
                     * @param {Recognizer} otherRecognizer
                     * @returns {Recognizer} this
                     */
                    requireFailure: function (otherRecognizer) {
                        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
                            return this;
                        }
                        var requireFail = this.requireFail;
                        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                        if (inArray(requireFail, otherRecognizer) === -1) {
                            requireFail.push(otherRecognizer);
                            otherRecognizer.requireFailure(this);
                        }
                        return this;
                    },
                    /**
                     * drop the requireFailure link. it does not remove the link on the other recognizer.
                     * @param {Recognizer} otherRecognizer
                     * @returns {Recognizer} this
                     */
                    dropRequireFailure: function (otherRecognizer) {
                        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
                            return this;
                        }
                        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                        var index = inArray(this.requireFail, otherRecognizer);
                        if (index > -1) {
                            this.requireFail.splice(index, 1);
                        }
                        return this;
                    },
                    /**
                     * has require failures boolean
                     * @returns {boolean}
                     */
                    hasRequireFailures: function () {
                        return this.requireFail.length > 0;
                    },
                    /**
                     * if the recognizer can recognize simultaneous with an other recognizer
                     * @param {Recognizer} otherRecognizer
                     * @returns {Boolean}
                     */
                    canRecognizeWith: function (otherRecognizer) {
                        return !!this.simultaneous[otherRecognizer.id];
                    },
                    /**
                     * You should use `tryEmit` instead of `emit` directly to check
                     * that all the needed recognizers has failed before emitting.
                     * @param {Object} input
                     */
                    emit: function (input) {
                        var self = this;
                        var state = this.state;
                        function emit(event) {
                            self.manager.emit(event, input);
                        }
                        // 'panstart' and 'panmove'
                        if (state < STATE_ENDED) {
                            emit(self.options.event + stateStr(state));
                        }
                        emit(self.options.event); // simple 'eventName' events
                        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
                            emit(input.additionalEvent);
                        }
                        // panend and pancancel
                        if (state >= STATE_ENDED) {
                            emit(self.options.event + stateStr(state));
                        }
                    },
                    /**
                     * Check that all the require failure recognizers has failed,
                     * if true, it emits a gesture event,
                     * otherwise, setup the state to FAILED.
                     * @param {Object} input
                     */
                    tryEmit: function (input) {
                        if (this.canEmit()) {
                            return this.emit(input);
                        }
                        // it's failing anyway
                        this.state = STATE_FAILED;
                    },
                    /**
                     * can we emit?
                     * @returns {boolean}
                     */
                    canEmit: function () {
                        var i = 0;
                        while (i < this.requireFail.length) {
                            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                                return false;
                            }
                            i++;
                        }
                        return true;
                    },
                    /**
                     * update the recognizer
                     * @param {Object} inputData
                     */
                    recognize: function (inputData) {
                        // make a new copy of the inputData
                        // so we can change the inputData without messing up the other recognizers
                        var inputDataClone = assign({}, inputData);
                        // is is enabled and allow recognizing?
                        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
                            this.reset();
                            this.state = STATE_FAILED;
                            return;
                        }
                        // reset when we've reached the end
                        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
                            this.state = STATE_POSSIBLE;
                        }
                        this.state = this.process(inputDataClone);
                        // the recognizer has recognized a gesture
                        // so trigger an event
                        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
                            this.tryEmit(inputDataClone);
                        }
                    },
                    /**
                     * return the state of the recognizer
                     * the actual recognizing happens in this method
                     * @virtual
                     * @param {Object} inputData
                     * @returns {Const} STATE
                     */
                    process: function (inputData) { },
                    /**
                     * return the preferred touch-action
                     * @virtual
                     * @returns {Array}
                     */
                    getTouchAction: function () { },
                    /**
                     * called when the gesture isn't allowed to recognize
                     * like when another is being recognized or it is disabled
                     * @virtual
                     */
                    reset: function () { }
                };
                /**
                 * get a usable string, used as event postfix
                 * @param {Const} state
                 * @returns {String} state
                 */
                function stateStr(state) {
                    if (state & STATE_CANCELLED) {
                        return 'cancel';
                    }
                    else if (state & STATE_ENDED) {
                        return 'end';
                    }
                    else if (state & STATE_CHANGED) {
                        return 'move';
                    }
                    else if (state & STATE_BEGAN) {
                        return 'start';
                    }
                    return '';
                }
                /**
                 * direction cons to string
                 * @param {Const} direction
                 * @returns {String}
                 */
                function directionStr(direction) {
                    if (direction == DIRECTION_DOWN) {
                        return 'down';
                    }
                    else if (direction == DIRECTION_UP) {
                        return 'up';
                    }
                    else if (direction == DIRECTION_LEFT) {
                        return 'left';
                    }
                    else if (direction == DIRECTION_RIGHT) {
                        return 'right';
                    }
                    return '';
                }
                /**
                 * get a recognizer by name if it is bound to a manager
                 * @param {Recognizer|String} otherRecognizer
                 * @param {Recognizer} recognizer
                 * @returns {Recognizer}
                 */
                function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
                    var manager = recognizer.manager;
                    if (manager) {
                        return manager.get(otherRecognizer);
                    }
                    return otherRecognizer;
                }
                /**
                 * This recognizer is just used as a base for the simple attribute recognizers.
                 * @constructor
                 * @extends Recognizer
                 */
                function AttrRecognizer() {
                    Recognizer.apply(this, arguments);
                }
                inherit(AttrRecognizer, Recognizer, {
                    /**
                     * @namespace
                     * @memberof AttrRecognizer
                     */
                    defaults: {
                        /**
                         * @type {Number}
                         * @default 1
                         */
                        pointers: 1
                    },
                    /**
                     * Used to check if it the recognizer receives valid input, like input.distance > 10.
                     * @memberof AttrRecognizer
                     * @param {Object} input
                     * @returns {Boolean} recognized
                     */
                    attrTest: function (input) {
                        var optionPointers = this.options.pointers;
                        return optionPointers === 0 || input.pointers.length === optionPointers;
                    },
                    /**
                     * Process the input and return the state for the recognizer
                     * @memberof AttrRecognizer
                     * @param {Object} input
                     * @returns {*} State
                     */
                    process: function (input) {
                        var state = this.state;
                        var eventType = input.eventType;
                        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
                        var isValid = this.attrTest(input);
                        // on cancel input and we've recognized before, return STATE_CANCELLED
                        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
                            return state | STATE_CANCELLED;
                        }
                        else if (isRecognized || isValid) {
                            if (eventType & INPUT_END) {
                                return state | STATE_ENDED;
                            }
                            else if (!(state & STATE_BEGAN)) {
                                return STATE_BEGAN;
                            }
                            return state | STATE_CHANGED;
                        }
                        return STATE_FAILED;
                    }
                });
                /**
                 * Pan
                 * Recognized when the pointer is down and moved in the allowed direction.
                 * @constructor
                 * @extends AttrRecognizer
                 */
                function PanRecognizer() {
                    AttrRecognizer.apply(this, arguments);
                    this.pX = null;
                    this.pY = null;
                }
                inherit(PanRecognizer, AttrRecognizer, {
                    /**
                     * @namespace
                     * @memberof PanRecognizer
                     */
                    defaults: {
                        event: 'pan',
                        threshold: 10,
                        pointers: 1,
                        direction: DIRECTION_ALL
                    },
                    getTouchAction: function () {
                        var direction = this.options.direction;
                        var actions = [];
                        if (direction & DIRECTION_HORIZONTAL) {
                            actions.push(TOUCH_ACTION_PAN_Y);
                        }
                        if (direction & DIRECTION_VERTICAL) {
                            actions.push(TOUCH_ACTION_PAN_X);
                        }
                        return actions;
                    },
                    directionTest: function (input) {
                        var options = this.options;
                        var hasMoved = true;
                        var distance = input.distance;
                        var direction = input.direction;
                        var x = input.deltaX;
                        var y = input.deltaY;
                        // lock to axis?
                        if (!(direction & options.direction)) {
                            if (options.direction & DIRECTION_HORIZONTAL) {
                                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                                hasMoved = x != this.pX;
                                distance = Math.abs(input.deltaX);
                            }
                            else {
                                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                                hasMoved = y != this.pY;
                                distance = Math.abs(input.deltaY);
                            }
                        }
                        input.direction = direction;
                        return hasMoved && distance > options.threshold && direction & options.direction;
                    },
                    attrTest: function (input) {
                        return AttrRecognizer.prototype.attrTest.call(this, input) &&
                            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
                    },
                    emit: function (input) {
                        this.pX = input.deltaX;
                        this.pY = input.deltaY;
                        var direction = directionStr(input.direction);
                        if (direction) {
                            input.additionalEvent = this.options.event + direction;
                        }
                        this._super.emit.call(this, input);
                    }
                });
                /**
                 * Pinch
                 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
                 * @constructor
                 * @extends AttrRecognizer
                 */
                function PinchRecognizer() {
                    AttrRecognizer.apply(this, arguments);
                }
                inherit(PinchRecognizer, AttrRecognizer, {
                    /**
                     * @namespace
                     * @memberof PinchRecognizer
                     */
                    defaults: {
                        event: 'pinch',
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [TOUCH_ACTION_NONE];
                    },
                    attrTest: function (input) {
                        return this._super.attrTest.call(this, input) &&
                            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
                    },
                    emit: function (input) {
                        if (input.scale !== 1) {
                            var inOut = input.scale < 1 ? 'in' : 'out';
                            input.additionalEvent = this.options.event + inOut;
                        }
                        this._super.emit.call(this, input);
                    }
                });
                /**
                 * Press
                 * Recognized when the pointer is down for x ms without any movement.
                 * @constructor
                 * @extends Recognizer
                 */
                function PressRecognizer() {
                    Recognizer.apply(this, arguments);
                    this._timer = null;
                    this._input = null;
                }
                inherit(PressRecognizer, Recognizer, {
                    /**
                     * @namespace
                     * @memberof PressRecognizer
                     */
                    defaults: {
                        event: 'press',
                        pointers: 1,
                        time: 251,
                        threshold: 9 // a minimal movement is ok, but keep it low
                    },
                    getTouchAction: function () {
                        return [TOUCH_ACTION_AUTO];
                    },
                    process: function (input) {
                        var options = this.options;
                        var validPointers = input.pointers.length === options.pointers;
                        var validMovement = input.distance < options.threshold;
                        var validTime = input.deltaTime > options.time;
                        this._input = input;
                        // we only allow little movement
                        // and we've reached an end event, so a tap is possible
                        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
                            this.reset();
                        }
                        else if (input.eventType & INPUT_START) {
                            this.reset();
                            this._timer = setTimeoutContext(function () {
                                this.state = STATE_RECOGNIZED;
                                this.tryEmit();
                            }, options.time, this);
                        }
                        else if (input.eventType & INPUT_END) {
                            return STATE_RECOGNIZED;
                        }
                        return STATE_FAILED;
                    },
                    reset: function () {
                        clearTimeout(this._timer);
                    },
                    emit: function (input) {
                        if (this.state !== STATE_RECOGNIZED) {
                            return;
                        }
                        if (input && (input.eventType & INPUT_END)) {
                            this.manager.emit(this.options.event + 'up', input);
                        }
                        else {
                            this._input.timeStamp = now();
                            this.manager.emit(this.options.event, this._input);
                        }
                    }
                });
                /**
                 * Rotate
                 * Recognized when two or more pointer are moving in a circular motion.
                 * @constructor
                 * @extends AttrRecognizer
                 */
                function RotateRecognizer() {
                    AttrRecognizer.apply(this, arguments);
                }
                inherit(RotateRecognizer, AttrRecognizer, {
                    /**
                     * @namespace
                     * @memberof RotateRecognizer
                     */
                    defaults: {
                        event: 'rotate',
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [TOUCH_ACTION_NONE];
                    },
                    attrTest: function (input) {
                        return this._super.attrTest.call(this, input) &&
                            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
                    }
                });
                /**
                 * Swipe
                 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
                 * @constructor
                 * @extends AttrRecognizer
                 */
                function SwipeRecognizer() {
                    AttrRecognizer.apply(this, arguments);
                }
                inherit(SwipeRecognizer, AttrRecognizer, {
                    /**
                     * @namespace
                     * @memberof SwipeRecognizer
                     */
                    defaults: {
                        event: 'swipe',
                        threshold: 10,
                        velocity: 0.3,
                        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
                        pointers: 1
                    },
                    getTouchAction: function () {
                        return PanRecognizer.prototype.getTouchAction.call(this);
                    },
                    attrTest: function (input) {
                        var direction = this.options.direction;
                        var velocity;
                        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
                            velocity = input.overallVelocity;
                        }
                        else if (direction & DIRECTION_HORIZONTAL) {
                            velocity = input.overallVelocityX;
                        }
                        else if (direction & DIRECTION_VERTICAL) {
                            velocity = input.overallVelocityY;
                        }
                        return this._super.attrTest.call(this, input) &&
                            direction & input.offsetDirection &&
                            input.distance > this.options.threshold &&
                            input.maxPointers == this.options.pointers &&
                            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
                    },
                    emit: function (input) {
                        var direction = directionStr(input.offsetDirection);
                        if (direction) {
                            this.manager.emit(this.options.event + direction, input);
                        }
                        this.manager.emit(this.options.event, input);
                    }
                });
                /**
                 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
                 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
                 * a single tap.
                 *
                 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
                 * multi-taps being recognized.
                 * @constructor
                 * @extends Recognizer
                 */
                function TapRecognizer() {
                    Recognizer.apply(this, arguments);
                    // previous time and center,
                    // used for tap counting
                    this.pTime = false;
                    this.pCenter = false;
                    this._timer = null;
                    this._input = null;
                    this.count = 0;
                }
                inherit(TapRecognizer, Recognizer, {
                    /**
                     * @namespace
                     * @memberof PinchRecognizer
                     */
                    defaults: {
                        event: 'tap',
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10 // a multi-tap can be a bit off the initial position
                    },
                    getTouchAction: function () {
                        return [TOUCH_ACTION_MANIPULATION];
                    },
                    process: function (input) {
                        var options = this.options;
                        var validPointers = input.pointers.length === options.pointers;
                        var validMovement = input.distance < options.threshold;
                        var validTouchTime = input.deltaTime < options.time;
                        this.reset();
                        if ((input.eventType & INPUT_START) && (this.count === 0)) {
                            return this.failTimeout();
                        }
                        // we only allow little movement
                        // and we've reached an end event, so a tap is possible
                        if (validMovement && validTouchTime && validPointers) {
                            if (input.eventType != INPUT_END) {
                                return this.failTimeout();
                            }
                            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
                            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                            this.pTime = input.timeStamp;
                            this.pCenter = input.center;
                            if (!validMultiTap || !validInterval) {
                                this.count = 1;
                            }
                            else {
                                this.count += 1;
                            }
                            this._input = input;
                            // if tap count matches we have recognized it,
                            // else it has began recognizing...
                            var tapCount = this.count % options.taps;
                            if (tapCount === 0) {
                                // no failing requirements, immediately trigger the tap event
                                // or wait as long as the multitap interval to trigger
                                if (!this.hasRequireFailures()) {
                                    return STATE_RECOGNIZED;
                                }
                                else {
                                    this._timer = setTimeoutContext(function () {
                                        this.state = STATE_RECOGNIZED;
                                        this.tryEmit();
                                    }, options.interval, this);
                                    return STATE_BEGAN;
                                }
                            }
                        }
                        return STATE_FAILED;
                    },
                    failTimeout: function () {
                        this._timer = setTimeoutContext(function () {
                            this.state = STATE_FAILED;
                        }, this.options.interval, this);
                        return STATE_FAILED;
                    },
                    reset: function () {
                        clearTimeout(this._timer);
                    },
                    emit: function () {
                        if (this.state == STATE_RECOGNIZED) {
                            this._input.tapCount = this.count;
                            this.manager.emit(this.options.event, this._input);
                        }
                    }
                });
                /**
                 * Simple way to create a manager with a default set of recognizers.
                 * @param {HTMLElement} element
                 * @param {Object} [options]
                 * @constructor
                 */
                function Hammer(element, options) {
                    options = options || {};
                    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
                    return new Manager(element, options);
                }
                /**
                 * @const {string}
                 */
                Hammer.VERSION = '2.0.7';
                /**
                 * default settings
                 * @namespace
                 */
                Hammer.defaults = {
                    /**
                     * set if DOM events are being triggered.
                     * But this is slower and unused by simple implementations, so disabled by default.
                     * @type {Boolean}
                     * @default false
                     */
                    domEvents: false,
                    /**
                     * The value for the touchAction property/fallback.
                     * When set to `compute` it will magically set the correct value based on the added recognizers.
                     * @type {String}
                     * @default compute
                     */
                    touchAction: TOUCH_ACTION_COMPUTE,
                    /**
                     * @type {Boolean}
                     * @default true
                     */
                    enable: true,
                    /**
                     * EXPERIMENTAL FEATURE -- can be removed/changed
                     * Change the parent input target element.
                     * If Null, then it is being set the to main element.
                     * @type {Null|EventTarget}
                     * @default null
                     */
                    inputTarget: null,
                    /**
                     * force an input class
                     * @type {Null|Function}
                     * @default null
                     */
                    inputClass: null,
                    /**
                     * Default recognizer setup when calling `Hammer()`
                     * When creating a new Manager these will be skipped.
                     * @type {Array}
                     */
                    preset: [
                        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
                        [RotateRecognizer, { enable: false }],
                        [PinchRecognizer, { enable: false }, ['rotate']],
                        [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
                        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
                        [TapRecognizer],
                        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
                        [PressRecognizer]
                    ],
                    /**
                     * Some CSS properties can be used to improve the working of Hammer.
                     * Add them to this method and they will be set when creating a new Manager.
                     * @namespace
                     */
                    cssProps: {
                        /**
                         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
                         * @type {String}
                         * @default 'none'
                         */
                        userSelect: 'none',
                        /**
                         * Disable the Windows Phone grippers when pressing an element.
                         * @type {String}
                         * @default 'none'
                         */
                        touchSelect: 'none',
                        /**
                         * Disables the default callout shown when you touch and hold a touch target.
                         * On iOS, when you touch and hold a touch target such as a link, Safari displays
                         * a callout containing information about the link. This property allows you to disable that callout.
                         * @type {String}
                         * @default 'none'
                         */
                        touchCallout: 'none',
                        /**
                         * Specifies whether zooming is enabled. Used by IE10>
                         * @type {String}
                         * @default 'none'
                         */
                        contentZooming: 'none',
                        /**
                         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
                         * @type {String}
                         * @default 'none'
                         */
                        userDrag: 'none',
                        /**
                         * Overrides the highlight color shown when the user taps a link or a JavaScript
                         * clickable element in iOS. This property obeys the alpha value, if specified.
                         * @type {String}
                         * @default 'rgba(0,0,0,0)'
                         */
                        tapHighlightColor: 'rgba(0,0,0,0)'
                    }
                };
                var STOP = 1;
                var FORCED_STOP = 2;
                /**
                 * Manager
                 * @param {HTMLElement} element
                 * @param {Object} [options]
                 * @constructor
                 */
                function Manager(element, options) {
                    this.options = assign({}, Hammer.defaults, options || {});
                    this.options.inputTarget = this.options.inputTarget || element;
                    this.handlers = {};
                    this.session = {};
                    this.recognizers = [];
                    this.oldCssProps = {};
                    this.element = element;
                    this.input = createInputInstance(this);
                    this.touchAction = new TouchAction(this, this.options.touchAction);
                    toggleCssProps(this, true);
                    each(this.options.recognizers, function (item) {
                        var recognizer = this.add(new (item[0])(item[1]));
                        item[2] && recognizer.recognizeWith(item[2]);
                        item[3] && recognizer.requireFailure(item[3]);
                    }, this);
                }
                Manager.prototype = {
                    /**
                     * set options
                     * @param {Object} options
                     * @returns {Manager}
                     */
                    set: function (options) {
                        assign(this.options, options);
                        // Options that need a little more setup
                        if (options.touchAction) {
                            this.touchAction.update();
                        }
                        if (options.inputTarget) {
                            // Clean up existing event listeners and reinitialize
                            this.input.destroy();
                            this.input.target = options.inputTarget;
                            this.input.init();
                        }
                        return this;
                    },
                    /**
                     * stop recognizing for this session.
                     * This session will be discarded, when a new [input]start event is fired.
                     * When forced, the recognizer cycle is stopped immediately.
                     * @param {Boolean} [force]
                     */
                    stop: function (force) {
                        this.session.stopped = force ? FORCED_STOP : STOP;
                    },
                    /**
                     * run the recognizers!
                     * called by the inputHandler function on every movement of the pointers (touches)
                     * it walks through all the recognizers and tries to detect the gesture that is being made
                     * @param {Object} inputData
                     */
                    recognize: function (inputData) {
                        var session = this.session;
                        if (session.stopped) {
                            return;
                        }
                        // run the touch-action polyfill
                        this.touchAction.preventDefaults(inputData);
                        var recognizer;
                        var recognizers = this.recognizers;
                        // this holds the recognizer that is being recognized.
                        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
                        // if no recognizer is detecting a thing, it is set to `null`
                        var curRecognizer = session.curRecognizer;
                        // reset when the last recognizer is recognized
                        // or when we're in a new session
                        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
                            curRecognizer = session.curRecognizer = null;
                        }
                        var i = 0;
                        while (i < recognizers.length) {
                            recognizer = recognizers[i];
                            // find out if we are allowed try to recognize the input for this one.
                            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                            //      that is being recognized.
                            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                            //      this can be setup with the `recognizeWith()` method on the recognizer.
                            if (session.stopped !== FORCED_STOP && ( // 1
                            !curRecognizer || recognizer == curRecognizer || // 2
                                recognizer.canRecognizeWith(curRecognizer))) { // 3
                                recognizer.recognize(inputData);
                            }
                            else {
                                recognizer.reset();
                            }
                            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                            // current active recognizer. but only if we don't already have an active recognizer
                            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                                curRecognizer = session.curRecognizer = recognizer;
                            }
                            i++;
                        }
                    },
                    /**
                     * get a recognizer by its event name.
                     * @param {Recognizer|String} recognizer
                     * @returns {Recognizer|Null}
                     */
                    get: function (recognizer) {
                        if (recognizer instanceof Recognizer) {
                            return recognizer;
                        }
                        var recognizers = this.recognizers;
                        for (var i = 0; i < recognizers.length; i++) {
                            if (recognizers[i].options.event == recognizer) {
                                return recognizers[i];
                            }
                        }
                        return null;
                    },
                    /**
                     * add a recognizer to the manager
                     * existing recognizers with the same event name will be removed
                     * @param {Recognizer} recognizer
                     * @returns {Recognizer|Manager}
                     */
                    add: function (recognizer) {
                        if (invokeArrayArg(recognizer, 'add', this)) {
                            return this;
                        }
                        // remove existing
                        var existing = this.get(recognizer.options.event);
                        if (existing) {
                            this.remove(existing);
                        }
                        this.recognizers.push(recognizer);
                        recognizer.manager = this;
                        this.touchAction.update();
                        return recognizer;
                    },
                    /**
                     * remove a recognizer by name or instance
                     * @param {Recognizer|String} recognizer
                     * @returns {Manager}
                     */
                    remove: function (recognizer) {
                        if (invokeArrayArg(recognizer, 'remove', this)) {
                            return this;
                        }
                        recognizer = this.get(recognizer);
                        // let's make sure this recognizer exists
                        if (recognizer) {
                            var recognizers = this.recognizers;
                            var index = inArray(recognizers, recognizer);
                            if (index !== -1) {
                                recognizers.splice(index, 1);
                                this.touchAction.update();
                            }
                        }
                        return this;
                    },
                    /**
                     * bind event
                     * @param {String} events
                     * @param {Function} handler
                     * @returns {EventEmitter} this
                     */
                    on: function (events, handler) {
                        if (events === undefined) {
                            return;
                        }
                        if (handler === undefined) {
                            return;
                        }
                        var handlers = this.handlers;
                        each(splitStr(events), function (event) {
                            handlers[event] = handlers[event] || [];
                            handlers[event].push(handler);
                        });
                        return this;
                    },
                    /**
                     * unbind event, leave emit blank to remove all handlers
                     * @param {String} events
                     * @param {Function} [handler]
                     * @returns {EventEmitter} this
                     */
                    off: function (events, handler) {
                        if (events === undefined) {
                            return;
                        }
                        var handlers = this.handlers;
                        each(splitStr(events), function (event) {
                            if (!handler) {
                                delete handlers[event];
                            }
                            else {
                                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
                            }
                        });
                        return this;
                    },
                    /**
                     * emit event to the listeners
                     * @param {String} event
                     * @param {Object} data
                     */
                    emit: function (event, data) {
                        // we also want to trigger dom events
                        if (this.options.domEvents) {
                            triggerDomEvent(event, data);
                        }
                        // no handlers, so skip it all
                        var handlers = this.handlers[event] && this.handlers[event].slice();
                        if (!handlers || !handlers.length) {
                            return;
                        }
                        data.type = event;
                        data.preventDefault = function () {
                            data.srcEvent.preventDefault();
                        };
                        var i = 0;
                        while (i < handlers.length) {
                            handlers[i](data);
                            i++;
                        }
                    },
                    /**
                     * destroy the manager and unbinds all events
                     * it doesn't unbind dom events, that is the user own responsibility
                     */
                    destroy: function () {
                        this.element && toggleCssProps(this, false);
                        this.handlers = {};
                        this.session = {};
                        this.input.destroy();
                        this.element = null;
                    }
                };
                /**
                 * add/remove the css properties as defined in manager.options.cssProps
                 * @param {Manager} manager
                 * @param {Boolean} add
                 */
                function toggleCssProps(manager, add) {
                    var element = manager.element;
                    if (!element.style) {
                        return;
                    }
                    var prop;
                    each(manager.options.cssProps, function (value, name) {
                        prop = prefixed(element.style, name);
                        if (add) {
                            manager.oldCssProps[prop] = element.style[prop];
                            element.style[prop] = value;
                        }
                        else {
                            element.style[prop] = manager.oldCssProps[prop] || '';
                        }
                    });
                    if (!add) {
                        manager.oldCssProps = {};
                    }
                }
                /**
                 * trigger dom event
                 * @param {String} event
                 * @param {Object} data
                 */
                function triggerDomEvent(event, data) {
                    var gestureEvent = document.createEvent('Event');
                    gestureEvent.initEvent(event, true, true);
                    gestureEvent.gesture = data;
                    data.target.dispatchEvent(gestureEvent);
                }
                assign(Hammer, {
                    INPUT_START: INPUT_START,
                    INPUT_MOVE: INPUT_MOVE,
                    INPUT_END: INPUT_END,
                    INPUT_CANCEL: INPUT_CANCEL,
                    STATE_POSSIBLE: STATE_POSSIBLE,
                    STATE_BEGAN: STATE_BEGAN,
                    STATE_CHANGED: STATE_CHANGED,
                    STATE_ENDED: STATE_ENDED,
                    STATE_RECOGNIZED: STATE_RECOGNIZED,
                    STATE_CANCELLED: STATE_CANCELLED,
                    STATE_FAILED: STATE_FAILED,
                    DIRECTION_NONE: DIRECTION_NONE,
                    DIRECTION_LEFT: DIRECTION_LEFT,
                    DIRECTION_RIGHT: DIRECTION_RIGHT,
                    DIRECTION_UP: DIRECTION_UP,
                    DIRECTION_DOWN: DIRECTION_DOWN,
                    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
                    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
                    DIRECTION_ALL: DIRECTION_ALL,
                    Manager: Manager,
                    Input: Input,
                    TouchAction: TouchAction,
                    TouchInput: TouchInput,
                    MouseInput: MouseInput,
                    PointerEventInput: PointerEventInput,
                    TouchMouseInput: TouchMouseInput,
                    SingleTouchInput: SingleTouchInput,
                    Recognizer: Recognizer,
                    AttrRecognizer: AttrRecognizer,
                    Tap: TapRecognizer,
                    Pan: PanRecognizer,
                    Swipe: SwipeRecognizer,
                    Pinch: PinchRecognizer,
                    Rotate: RotateRecognizer,
                    Press: PressRecognizer,
                    on: addEventListeners,
                    off: removeEventListeners,
                    each: each,
                    merge: merge,
                    extend: extend,
                    assign: assign,
                    inherit: inherit,
                    bindFn: bindFn,
                    prefixed: prefixed
                });
                // this prevents errors when Hammer is loaded in the presence of an AMD
                //  style loader but by script tag, not by the loader.
                var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
                freeGlobal.Hammer = Hammer;
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                        return Hammer;
                    }).call(exports, __webpack_require__, exports, module),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
                else { }
            })(window, document, 'Hammer');
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <span class=\"navbar-brand ml-2\" (click)=\"sidenav.toggle()\">\n    <fa-icon [icon]=\"faBars\"></fa-icon>\n  </span>\n  <a class=\"navbar-brand ml-2\" href=\"/\">SES</a>\n  <form class=\"form-inline ml-2\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text bg-dark text-light\" id=\"basic-addon1\">\n            <fa-icon [icon]=\"faSearch\"></fa-icon>\n        </span>\n      </div>\n      <input type=\"text\" (keyup)=\"onKey($event)\"  cdkOverlayOrigin #searchDialog=\"cdkOverlayOrigin\"\n       class=\"form-control bg-dark text-light\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n       <ng-template cdkConnectedOverlay\n                    [cdkConnectedOverlayOrigin]=\"searchDialog\"\n                    [cdkConnectedOverlayOpen]=\"searchDialogOpen\">\n        <div class=\"dialog\" role=\"dialog\" aria-label=\"Search Results\">\n          <div *ngFor=\"let searchResult of searchResults\">\n            <small>{{searchResult}}</small>\n            <br><hr>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </form>\n  <div class=\"ml-auto col-md-2 text-right h4 my-auto\">\n    <div class=\"row\">\n      <div class=\"col-md-3 offset-3\" cdkOverlayOrigin #notificationDialog=\"cdkOverlayOrigin\"\n      (click)=\"notificationDialogOpen=!notificationDialogOpen\">\n        <a class=\"text-light\"><fa-icon [icon]=\"faBell\"></fa-icon>\n          <span class=\"badge badge-info\" *ngIf=\"numNotification > 0\">\n            <small>{{numNotification}}</small>\n          </span>\n        </a>\n      </div>\n      <ng-template cdkConnectedOverlay\n      [cdkConnectedOverlayOrigin]=\"notificationDialog\"\n      [cdkConnectedOverlayOpen]=\"notificationDialogOpen\">\n        <div class=\"dialog\" role=\"dialog\" aria-label=\"Notifications\">\n            <p class=\"text-center m-0\">Notifications</p>\n          <hr>\n          <div *ngFor=\"let notification of notifications\">\n            <small>{{notification}}</small>\n            <br><hr>\n          </div>\n        </div>\n      </ng-template>\n      <div class=\"col-md-3\">\n        <a class=\"text-light\" [routerLink]=\"['/settings']\" (click)=\"tab=''\">\n          <fa-icon [icon]=\"faCog\"></fa-icon>\n        </a>\n      </div>\n      <div class=\"col-md-3\"\n      cdkOverlayOrigin #userDialog=\"cdkOverlayOrigin\"\n      (click)=\"userDialogOpen=!userDialogOpen\">\n        <a class=\"text-light\">\n          <fa-icon [icon]=\"faUserCircle\"></fa-icon>\n        </a>\n      </div>\n      <ng-template cdkConnectedOverlay\n      [cdkConnectedOverlayOrigin]=\"userDialog\"\n      [cdkConnectedOverlayOpen]=\"userDialogOpen\">\n        <div *ngIf=\"!ticket\" class=\"dialog text-center text-light\" role=\"dialog\" aria-label=\"User Menu\">\n          <small>Anonymous</small>\n          <br><hr>\n          <a class=\"text-light\" [routerLink]=\"['/login']\" (click)=\"tab=''\">\n            <small><strong>Login</strong></small>\n          </a>\n        </div>\n        <div *ngIf=\"ticket\" class=\"dialog text-center text-light\" role=\"dialog\" aria-label=\"User Menu\">\n          <small>Welcome {{ticket.guest.name}}</small>\n          <br><hr>\n          <a class=\"text-light\" href=\"/logout\" (onclick)=\"clearSession()\">\n            <small><strong>Logout</strong></small>\n          </a>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</nav>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"menuOpened\">\n    <a [routerLink]=\"['/']\" class=\"text-light my-auto\">\n      <div class=\"h2 text-center menu\" (click)=\"tab='home'\" [ngClass]=\"tab=='home' ? 'active' : ''\">\n        <fa-icon [icon]=\"faHome\"></fa-icon>\n      </div>\n    </a>\n    <a [routerLink]=\"['/video']\" class=\"text-light my-auto\">\n      <div class=\"h2 text-center menu\" (click)=\"tab='video'\" [ngClass]=\"tab=='video' ? 'active' : ''\">\n        <fa-icon [icon]=\"faFilm\"></fa-icon>\n      </div>\n    </a>\n    <a [routerLink]=\"['/audio']\" class=\"text-light my-auto\">\n      <div class=\"h2 text-center menu\" (click)=\"tab='audio'\" [ngClass]=\"tab=='audio' ? 'active' : ''\">\n        <fa-icon [icon]=\"faItunesNote\"></fa-icon>\n      </div>\n    </a>\n    <a [routerLink]=\"['/map']\" class=\"text-light my-auto\">\n      <div class=\"h2 text-center menu\" (click)=\"tab='map'\" [ngClass]=\"tab=='map' ? 'active' : ''\">\n        <fa-icon [icon]=\"faMapMarkedAlt\"></fa-icon>\n      </div>\n    </a>\n    <a [routerLink]=\"['/info']\" class=\"text-light my-auto\">\n      <div class=\"h2 text-center menu\" (click)=\"tab='info'\" [ngClass]=\"tab=='info' ? 'active' : ''\">\n        <fa-icon [icon]=\"faInfo\"></fa-icon>\n      </div>\n    </a>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <app-player *ngIf=\"playerOpen\" (messageEvent)=\"closePlayer($event)\"></app-player>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio/audio.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio/audio.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<audio controls>\n    <source src=\"C:/Users/Shubham Kumar/Downloads/DJ NYK - Bollywood Sunset Set at Lake Pichola (Udaipur)Electronyk Podcast Specials.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n</audio>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home works</p>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-4\">\n    <div class=\"row text-center\" *ngIf=\"!ticket\">\n        <div class=\"text-center display-3 col-12\">Please Login to view your details.</div>\n        <div class=\"col-4 offset-4 my-4\">\n            <button [routerLink]=\"['/login']\" class=\"btn btn-primary btn-block btn-lg\">LOGIN</button>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"ticket\">\n        <div class=\"card col-6 offset-3 bg-dark p-3\">\n            <div class=\"d-flex\">\n                <div>{{ticket.departure | date}}</div>\n                <div class=\"ml-auto\">\n                    <small>PNR:</small><br>\n                    <span class=\"pnr\">{{ticket.no}}</span>\n                </div>\n            </div>\n            <hr>\n            <div class=\"mt-2\">\n                <h2 class=\"h2\">{{ticket.guest.name}}</h2>\n                <p>Gender: {{ticket.guest.gender}}</p>\n                <p>Source: {{ticket.from}}</p>\n                <p>Destination: {{ticket.to}}</p>\n                <p>Boarding Time: {{ticket.departure | date:'shortTime'}}</p>\n                <p>Arrival Time: {{ticket.arrival | date:'shortTime'}}</p>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"display-2 text-center text-light my-4\">Welcome to SES</p>\n\n<div class=\"card m-auto col-6 offset-3 my-4\">\n  <div class=\"row\">\n    <div class=\"card-header col-lg-3 h1 text-center bg-primary text-light mx-0\">\n      <div *ngIf=\"largeScreen\">\n        <fa-icon [icon]=\"faSignInAlt\"></fa-icon><br>\n        <span class=\"h4\">Login</span>\n      </div>\n      <span class=\"my-auto h2\" *ngIf=\"!largeScreen\">Login</span>\n    </div>\n    <div class=\"card-body\">\n      <form novalidate [formGroup]=\"loginForm\" (submit)=\"login()\">\n        <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"no\" class=\"form-control\" id=\"pnr\" aria-describedby=\"pnrHelp\" placeholder=\"Enter PNR\" required>\n          <small id=\"pnrHelp\" class=\"form-text text-muted\">* Required</small>\n        </div>\n        <!-- <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"mobNo\" placeholder=\"Enter Mobile Number\" required>\n          <small id=\"pnrHelp\" class=\"form-text text-muted\">* Required</small>\n        </div> -->\n        <button type=\"submit\" class=\"btn btn-primary btn-block\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\"\n     leaflet\n     [leafletOptions]=\"options\">\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-3\">\n    <h4 class=\"h4 d-flex\">\n        <div>Now Playing</div>\n        <div class=\"ml-auto\" (click)=\"closePlayer()\"><fa-icon [icon]=\"faTimes\"></fa-icon></div>\n    </h4>\n    <hr>\n    <div class=\"px-auto\">\n        <video class=\"my-4 offset-md-2 col-md-8 p-0\" src=\"http://localhost:3000/video/sample\" controls></video>\n    </div>\n    <div class=\"mediaDetails\">\n        \n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-3\">\n    <h2 class=\"h2 text-center\">Settings</h2>\n    <hr>\n    <div class=\"row my-4\">\n        <div class=\"col-md-6 offset-md-3\">\n            <div class=\"row\">\n                <div class=\"col-9 setName\">\n                    <span *ngIf=\"!childMode\">Turn on Child Mode:</span>\n                    <span *ngIf=\"childMode\">Turn off Child Mode:</span>\n                </div>\n                <div class=\"col-3\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" name=\"childMode\" [checked]=\"childMode\" (change)=\"childModeToggle()\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <hr>\n    <div class=\"col-md-4 offset-4 text-center my-4\">\n        <button [routerLink]=\"['/login']\" class=\"btn btn-primary btn-block\" *ngIf=\"!ticket\">LOGIN</button>\n        <button [routerLink]=\"['/logout']\" (click)=\"clearSession()\" class=\"btn btn-primary btn-block\" *ngIf=\"ticket\">LOGOUT</button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-3\">\n    <h3 class=\"h3 heading\">Movies</h3><hr>\n    <div class=\"row overflow-auto\">\n        <div class=\"card mr-3 my-4\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\">\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n            <div class=\"card-footer\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container mb-3\">\n    <h3 class=\"h3 heading\">TV Series</h3><hr>\n    <div class=\"row overflow-auto\">\n        <div class=\"card mr-3 my-4\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\">\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n            <div class=\"card-footer\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container mb-4\">\n    <h3 class=\"h3 heading\">Tutorials</h3><hr>\n    <div class=\"row overflow-auto\">\n        <div class=\"card mr-3 my-4\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\">\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n            <div class=\"card-footer\">\n                <p class=\"card-text\">movieName</p>\n                <p class=\"card-text\">movieYear</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<br>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/audio.component */ "./src/app/audio/audio.component.ts");
            /* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
            /* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
            /* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'audio', component: _audio_audio_component__WEBPACK_IMPORTED_MODULE_4__["AudioComponent"] },
                { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"] },
                { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"] },
                { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] },
                { path: 'logout', redirectTo: '' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control:focus,.form-control:active {\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    background-color: rgb(170, 192, 224) !important;\r\n }\r\n\r\n .badge{\r\n    background: rgba(226, 145, 222, 0.7);\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    border-radius: 50%;\r\n    position:absolute;\r\n    top:-13px;\r\n    right:-5px;\r\n    padding: 4px;\r\n    margin-top: 3px;\r\n}\r\n\r\n mat-sidenav-container {\r\n    height: 100%;\r\n}\r\n\r\n mat-sidenav {\r\n    width: 60px;\r\n}\r\n\r\n mat-sidenav-content {\r\n    padding: 5px;\r\n}\r\n\r\n hr {\r\n    margin: 3px;\r\n}\r\n\r\n .menu {\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 12px;\r\n    margin: 0;\r\n}\r\n\r\n .dialog {\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    max-width: 250px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    max-height: 500px;\r\n    background-color: rgba(141, 103, 139, 0.8);\r\n    border-radius: 15px;\r\n    padding: 5px 10px;\r\n    color: white;\r\n    scroll-behavior: auto;\r\n}\r\n\r\n .dialog a {\r\n    text-decoration: none;\r\n}\r\n\r\n .active {\r\n    border-left: 4px solid yellowgreen !important;\r\n    background-color: #a37d7d50 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7Q0FDbEQ7O0NBRUE7SUFDRyxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztDQUVBO0lBQ0ksWUFBWTtBQUNoQjs7Q0FFQTtJQUNJLFdBQVc7QUFDZjs7Q0FFQTtJQUNJLFlBQVk7QUFDaEI7O0NBRUE7SUFDSSxXQUFXO0FBQ2Y7O0NBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0NBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0NBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0NBRUE7SUFDSSw2Q0FBNkM7SUFDN0Msc0NBQXNDO0FBQzFDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbDpmb2N1cywuZm9ybS1jb250cm9sOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTkyLCAyMjQpICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjYsIDE0NSwgMjIyLCAwLjcpO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotMTNweDtcclxuICAgIHJpZ2h0Oi01cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kaWFsb2cge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQxLCAxMDMsIDEzOSwgMC44KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcclxufVxyXG5cclxuLmRpYWxvZyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHllbGxvd2dyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM3ZDdkNTAgIWltcG9ydGFudDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'SES';
                    this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
                    this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
                    this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
                    this.faBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBell"];
                    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
                    this.notifications = ['kbdshcbzsbsbb validateVerticalPosition hvbvvvvvy', 'gvdsgv a vsvb', 'gvgb'];
                    this.numNotification = this.notifications.length;
                    this.menuOpened = true;
                    this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"];
                    this.faMapMarkedAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkedAlt"];
                    this.faInfo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfo"];
                    this.faItunesNote = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faItunesNote"];
                    this.faFilm = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFilm"];
                    this.tab = '';
                    this.userDialogOpen = false;
                    this.notificationDialogOpen = false;
                    this.searchResults = [];
                    this.searchDialogOpen = false;
                    this.playerOpen = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
                };
                AppComponent.prototype.onKey = function (event) {
                    this.searchResults.splice(0);
                    if (event.target.value.length > 0)
                        this.searchResults.push(event.target.value);
                    if (this.searchResults.length > 0) {
                        this.searchDialogOpen = true;
                    }
                    else {
                        this.searchDialogOpen = false;
                    }
                };
                AppComponent.prototype.closePlayer = function ($event) {
                    this.playerOpen = $event;
                };
                AppComponent.prototype.clearSession = function () {
                    sessionStorage.clear();
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
            /* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm2015/mat-video.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./audio/audio.component */ "./src/app/audio/audio.component.ts");
            /* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
            /* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
            /* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
            /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
            /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                        _audio_audio_component__WEBPACK_IMPORTED_MODULE_14__["AudioComponent"],
                        _video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
                        _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
                        _info_info_component__WEBPACK_IMPORTED_MODULE_17__["InfoComponent"],
                        _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
                        _player_player_component__WEBPACK_IMPORTED_MODULE_19__["PlayerComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"].forRoot(),
                        mat_video__WEBPACK_IMPORTED_MODULE_8__["MatVideoModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/audio/audio.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/audio/audio.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpby9hdWRpby5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/audio/audio.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/audio/audio.component.ts ***!
          \******************************************/
        /*! exports provided: AudioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function () { return AudioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AudioComponent = /** @class */ (function () {
                function AudioComponent() {
                }
                AudioComponent.prototype.ngOnInit = function () {
                };
                return AudioComponent;
            }());
            AudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-audio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio/audio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio.component.css */ "./src/app/audio/audio.component.css")).default]
                })
            ], AudioComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-top: 1px solid white;\r\n    margin: 4px 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7QUFDakIiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                    this.videoName = 'Captain.Marvel.2019.1080p.mp4';
                    this.nowPlaying = 'C:/Users/Shubham Kumar/Downloads/Movies/' + this.videoName;
                }
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/info/info.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/info/info.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    min-height: 300px;\r\n}\r\n\r\n.pnr {\r\n    font-size: 1.5em;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8vaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7QUFDYiIsImZpbGUiOiJpbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ucG5yIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/info/info.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/info/info.component.ts ***!
          \****************************************/
        /*! exports provided: InfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function () { return InfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InfoComponent = /** @class */ (function () {
                function InfoComponent() {
                }
                InfoComponent.prototype.ngOnInit = function () {
                    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
                };
                return InfoComponent;
            }());
            InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")).default]
                })
            ], InfoComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 992px) {\r\n    .card-header div {\r\n        margin-top: 50px;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtFQUNGIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY2FyZC1oZWFkZXIgZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _service_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/ticket.service */ "./src/app/service/ticket.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(ticketService) {
                    this.ticketService = ticketService;
                    this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (window.innerWidth >= 992) {
                        this.largeScreen = true;
                    }
                    else {
                        this.largeScreen = false;
                    }
                    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
                    });
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    var no = this.loginForm.controls['no'].value;
                    this.ticketService.getTicket(no).subscribe(function (res) {
                        sessionStorage.setItem('ticket', JSON.stringify(res));
                        _this.ticket = res;
                    }, function (err) {
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _service_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/map/map.component.css": 
        /*!***************************************!*\
          !*** ./src/app/map/map.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".map {\r\n    height: 100%;\r\n    padding: 0;\r\n}\r\n  \r\nhtml, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJtYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuICBcclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/map/map.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/map/map.component.ts ***!
          \**************************************/
        /*! exports provided: MapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function () { return MapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
            /* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
            var MapComponent = /** @class */ (function () {
                function MapComponent() {
                    this.start = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([18.57272, 73.68893], {
                        icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                            iconSize: [35, 40],
                            // iconAnchor: [ 13, 41 ],
                            iconUrl: 'assets/icons/house.png'
                        })
                    });
                    this.end = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([18.51778, 73.93265], {
                        icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                            iconSize: [35, 40],
                            // iconAnchor: [ 13, 41 ],
                            iconUrl: 'assets/icons/pin.png'
                        })
                    });
                    this.currentLocation = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([18.5064, 73.89419], {
                        icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                            iconSize: [25, 25],
                            iconUrl: 'assets/icons/flight.png'
                        })
                    });
                    this.routeCovered = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["polyline"])([[18.57272, 73.68893],
                        [18.57438, 73.70633],
                        [18.57991, 73.71938],
                        [18.59162, 73.7393],
                        [18.59259, 73.75682],
                        [18.56918, 73.76506],
                        [18.56202, 73.78464],
                        [18.55487, 73.79666],
                        [18.54251, 73.82688],
                        [18.53177, 73.84336],
                        [18.52917, 73.85092],
                        [18.52689, 73.85057],
                        [18.52266, 73.85675],
                        [18.52722, 73.86362],
                        [18.52396, 73.86843],
                        [18.52071, 73.8729],
                        [18.51843, 73.87908],
                        [18.50835, 73.88011],
                        [18.50770, 73.8856],
                        [18.5064, 73.89419],
                    ], { color: 'purple' });
                    this.routeRemaining = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["polyline"])([
                        [18.50705, 73.9014],
                        [18.50542, 73.91376],
                        [18.50412, 73.92475],
                        [18.50314, 73.92819],
                        [18.51778, 73.93265]
                    ], { color: 'grey', dashArray: [7] });
                    this.options = {
                        layers: [
                            Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                maxZoom: 19,
                                attribution: '&copy; OpenStreetMap contributors'
                            }),
                            this.start, this.end, this.currentLocation, this.routeCovered, this.routeRemaining
                        ],
                        zoom: 12,
                        center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])([18.52266, 73.85675])
                    };
                }
                return MapComponent;
            }());
            MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")).default]
                })
            ], MapComponent);
            /***/ 
        }),
        /***/ "./src/app/player/player.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/player/player.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-top: 1px solid white;\r\n    margin: 4px 0;\r\n}\r\n\r\ndiv fa-icon {\r\n    font-size: 0.9em;\r\n    color: rgb(150, 180, 180);\r\n}\r\n\r\ndiv fa-icon:hover {\r\n    font-size: 1em;\r\n    color: white;\r\n}\r\n\r\n.mediaDetails {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InBsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbmRpdiBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTgwLCAxODApO1xyXG59XHJcblxyXG5kaXYgZmEtaWNvbjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lZGlhRGV0YWlscyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/player/player.component.ts ***!
          \********************************************/
        /*! exports provided: PlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () { return PlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            var PlayerComponent = /** @class */ (function () {
                function PlayerComponent() {
                    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
                    this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                PlayerComponent.prototype.closePlayer = function () {
                    this.playerOpen = false;
                    this.messageEvent.emit(this.playerOpen);
                };
                return PlayerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PlayerComponent.prototype, "messageEvent", void 0);
            PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
                })
            ], PlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/service/ticket.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/service/ticket.service.ts ***!
          \*******************************************/
        /*! exports provided: TicketService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function () { return TicketService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TicketService = /** @class */ (function () {
                function TicketService(http) {
                    this.http = http;
                    this.baseUrl = '/api/ticket/';
                }
                TicketService.prototype.getTicket = function (no) {
                    return this.http.get(this.baseUrl + "/get/" + no);
                };
                return TicketService;
            }());
            TicketService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TicketService);
            /***/ 
        }),
        /***/ "./src/app/settings/settings.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/settings/settings.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-top: 1px solid white;\r\n    margin: 4px 0;\r\n}\r\n\r\n.setName {\r\n    font-size: 1.5em;\r\n}\r\n\r\n/* slider */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n.switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\ninput:checked + .slider:before {\r\n    transform: translateX(26px);\r\n  }\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBR0UsMkJBQTJCO0VBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbi5zZXROYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi8qIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4gIC5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/settings/settings.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/settings/settings.component.ts ***!
          \************************************************/
        /*! exports provided: SettingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () { return SettingsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SettingsComponent = /** @class */ (function () {
                function SettingsComponent() {
                    this.childMode = false;
                }
                SettingsComponent.prototype.childModeToggle = function () {
                    this.childMode = !this.childMode;
                    sessionStorage.setItem('childMode', JSON.stringify(this.childMode));
                };
                SettingsComponent.prototype.clearSession = function () {
                    sessionStorage.clear();
                };
                SettingsComponent.prototype.ngOnInit = function () {
                    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
                };
                return SettingsComponent;
            }());
            SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-settings',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
                })
            ], SettingsComponent);
            /***/ 
        }),
        /***/ "./src/app/video/video.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/video/video.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-top: 1px solid white;\r\n    margin: 4px 0;\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .card {\r\n        width: 15% !important;\r\n        min-width: 15% !important;\r\n        height: 250px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .card {\r\n        width: 18.4% !important;\r\n        min-width: 18.4% !important;\r\n        height: 220px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .card {\r\n        width: 23.4% !important;\r\n        min-width: 23.4% !important;\r\n        height: 220px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 609px) {\r\n    .card {\r\n        width: 32% !important;\r\n        min-width: 32% !important;\r\n        height: 220px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 609px) {\r\n    .card {\r\n        width: 32% !important;\r\n        min-width: 32% !important;\r\n        height: 220px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .card {\r\n        width: 115px !important;\r\n        min-width: 115px !important;\r\n        height: 220px;\r\n        margin-right: 6% !important;\r\n    }\r\n  }\r\n\r\n.card {\r\n    margin-right: 2% !important;\r\n}\r\n\r\n.row {\r\n    margin: 0;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvL3ZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixhQUFhO0lBQ2pCO0VBQ0Y7O0FBRUY7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsYUFBYTtJQUNqQjtFQUNGOztBQUVGO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLGFBQWE7SUFDakI7RUFDRjs7QUFFRjtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixhQUFhO0lBQ2pCO0VBQ0Y7O0FBRUY7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsYUFBYTtJQUNqQjtFQUNGOztBQUVGO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLGFBQWE7UUFDYiwyQkFBMkI7SUFDL0I7RUFDRjs7QUFFRjtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InZpZGVvL3ZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDE4LjQlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxOC40JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAyMy40JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjMuNCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA5cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA5cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/video/video.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/video/video.component.ts ***!
          \******************************************/
        /*! exports provided: VideoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function () { return VideoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VideoComponent = /** @class */ (function () {
                function VideoComponent() {
                }
                VideoComponent.prototype.ngOnInit = function () {
                };
                return VideoComponent;
            }());
            VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-video',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")).default]
                })
            ], VideoComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Shubham Kumar\Desktop\Smart Entertainment System\SES\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map