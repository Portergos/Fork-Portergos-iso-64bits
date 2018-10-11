!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.normalizeAclkUrl = normalizeAclkUrl;
  /* eslint-disable import/prefer-default-export */

  /**
   * Google pagead aclk look like this:
   * https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjNi5bcsbPWAhUW4BsKHUePBAwYABARGgJ3bA&ohost=www.google.de&cid=CAASEuRo7v8yDlI1j5_Xe3oAtyANqQ&sig=AOD64_0I3As2z06whZRtfqOC3PGdhk9SIQ&ctype=5&q=&ved=0ahUKEwjc7JLcsbPWAhVLuhQKHQWpCRcQ9aACCKIB&adurl=
   *
   * This function takes such an url and returns a normalized string
   * (which is no longer an url). Links to identical ads should be
   * normalized to the same string while links to different ads
   * should be mapped to different keys.
   */
  function normalizeAclkUrl(url) {
    var parts = url.split('aclk?');
    if (parts.length !== 2) {
      throw new Error('Expected Google pagead "aclk" URL. Instead got: ' + String(url));
    }

    // Ignore the "ved" code, as it seems to change between clicks.
    //
    // For background information about the "ved" code, see
    // https://deedpolloffice.com/blog/articles/decoding-ved-parameter
    var noVed = parts[1].replace(/ved=.*&/, '');

    // TODO: hack, needs to be replaced by a more robust solution
    return noVed.replace(/&q=&adurl=$/, '').replace(/&adurl=&q=$/, '');
  }
});
$__System.registerDynamic("c", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* global chrome, window */

  // For ghostery compatibility
  if (!chrome) {
    var _chrome = browser;
  }

  exports.chrome = chrome;
  exports.window = window;
});
$__System.registerDynamic('d', ['c'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _globals = $__require('c');

  exports['default'] = _globals.window.console;
});
$__System.registerDynamic("e", ["f", "10"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subscribe = undefined;

  var _console = $__require("f");

  var _console2 = _interopRequireDefault(_console);

  var _decorators = $__require("10");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /*
   * This method implements the publish subscribe design pattern
   *
   * Event naming scheme:
   *    cliqz.module_name.event_name
   *
   *  single sender -> multiple potential recipients
   *    for example: cliqz.core.urlbar_focus (inform others about urlbar focus)
   *    module_name describes sender
   *  multiple potential senders -> single recipient
   *    for example: cliqz.msg_center.show_message (tell the message center to show a message)
   *    module_name describes recipient (this is more like a RPC)
   */

  var CliqzEvents = CliqzEvents || {
    //use a javascript object to push the message ids and the callbacks
    cache: {},
    tickCallbacks: [],
    /*
     * Publish events of interest with a specific id
     */
    queue: [],

    pub: function () {
      function pub(id) {
        var _this = this;

        var args = Array.prototype.slice.call(arguments, 1);

        var callbacks = (CliqzEvents.cache[id] || []).map(function (ev) {
          return (0, _decorators.nextTick)(function () {
            ev.apply(null, args);
          })["catch"](function (e) {
            _console2["default"].error("CliqzEvents error: " + String(id), e);
          });
        });

        var finishedPromise = Promise.all(callbacks).then(function () {
          var index = _this.queue.indexOf(finishedPromise);
          _this.queue.splice(index, 1);
          if (_this.queue.length === 0) {
            _this.triggerNextTick();
          }
        });
        this.queue.push(finishedPromise);
      }

      return pub;
    }(),

    triggerNextTick: function () {
      function triggerNextTick() {
        this.tickCallbacks.forEach(function (cb) {
          try {
            cb();
          } catch (e) {}
        });
        this.tickCallbacks = [];
      }

      return triggerNextTick;
    }(),
    nextTick: function () {
      function nextTick() {
        var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

        this.tickCallbacks = this.tickCallbacks || [];
        this.tickCallbacks.push(cb);
      }

      return nextTick;
    }(),

    /* Subscribe to events of interest
     * with a specific id and a callback
     * to be executed when the event is observed
     */
    sub: function () {
      function sub(id, fn) {
        CliqzEvents.cache[id] = CliqzEvents.cache[id] || [];
        CliqzEvents.cache[id].push(fn);
      }

      return sub;
    }(),

    subscribe: function () {
      function subscribe(eventName, callback, that) {
        var cb = void 0;
        if (that) {
          cb = callback.bind(that);
        } else {
          cb = callback;
        }

        CliqzEvents.sub(eventName, cb);

        return {
          unsubscribe: function () {
            function unsubscribe() {
              CliqzEvents.un_sub(eventName, cb);
            }

            return unsubscribe;
          }()
        };
      }

      return subscribe;
    }(),

    un_sub: function () {
      function un_sub(id, fn) {
        if (!CliqzEvents.cache[id] || CliqzEvents.cache[id].length === 0) {
          _console2["default"].error(id, "Trying to unsubscribe event that had no subscribers");
          return;
        }

        var index = CliqzEvents.cache[id].indexOf(fn);
        if (index > -1) {
          CliqzEvents.cache[id].splice(index, 1);
        } else {
          _console2["default"].error(id, "Trying to unsubscribe an unknown listener");
        }
      }

      return un_sub;
    }(),

    clean_channel: function () {
      function clean_channel(id) {
        if (!CliqzEvents.cache[id]) {
          throw "Trying to unsubscribe an unknown channel";
        }
        CliqzEvents.cache[id] = [];
      }

      return clean_channel;
    }(),

    /**
     * Adds a listener to eventTarget for events of type eventType, and republishes them
     *  through CliqzEvents with id cliqzEventName.
     */
    proxyEvent: function () {
      function proxyEvent(cliqzEventName, eventTarget, eventType) {
        var propagate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var transform = arguments[4];

        var publisher = CliqzEvents.pub.bind(CliqzEvents, cliqzEventName);

        function handler() {
          var args = transform ? transform.apply(null, arguments) : arguments;
          publisher.apply(null, args);
        }

        eventTarget.addEventListener(eventType, handler, propagate);
        return {
          unsubscribe: function () {
            function unsubscribe() {
              eventTarget.removeEventListener(eventType, handler);
            }

            return unsubscribe;
          }()
        };
      }

      return proxyEvent;
    }(),

    nextId: function () {
      function nextId() {
        nextId.id = nextId.id || 0;
        nextId.id += 1;
        return nextId.id;
      }

      return nextId;
    }()
  };

  exports["default"] = CliqzEvents;
  var subscribe = exports.subscribe = CliqzEvents.subscribe;
});
$__System.registerDynamic('11', ['e', '12'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.init = init;
  exports.getPref = getPref;
  exports.setPref = setPref;
  exports.hasPref = hasPref;
  exports.clearPref = clearPref;
  exports.enableChangeEvents = enableChangeEvents;
  exports.disableChangeEvents = disableChangeEvents;

  var _events = $__require('e');

  var _events2 = _interopRequireDefault(_events);

  var _config = $__require('12');

  var _config2 = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var PREFS_KEY = 'cliqzprefs';
  var initialised = false;
  var prefs = {};

  function init() {
    return new Promise(function (resolve) {
      chrome.storage.local.get(PREFS_KEY, function (result) {
        Object.assign(prefs, result[PREFS_KEY] || {});
        initialised = true;
        resolve();
      });
    });
  }

  function syncToStorage() {
    chrome.storage.local.set(_defineProperty({}, PREFS_KEY, prefs));
  }

  function getPref(prefKey, notFound) {
    if (!initialised) {
      console.warn('loading pref ' + String(prefKey) + ' before prefs were initialised, you will not get the correct result');
      return prefs[prefKey] || notFound;
    }
    if (prefs && prefs[prefKey] !== undefined) {
      return prefs[prefKey];
    } else {
      return notFound;
    }
  }

  function setPref(prefKey, value) {
    var changed = prefs[prefKey] !== value;

    if (changed) {
      prefs[prefKey] = value;
      syncToStorage();
      // trigger prefchange event
      _events2['default'].pub('prefchange', prefKey);
    }
  }

  function hasPref(pref) {
    return pref in prefs;
  }

  function clearPref(pref) {
    delete prefs[pref];
    syncToStorage();
  }

  function enableChangeEvents() {
    throw new Error('not implemented - prefs.enableChangeEvents');
  }

  function disableChangeEvents() {
    throw new Error('not implemented - prefs.disableChangeEvents');
  }
});
$__System.registerDynamic("13", ["11"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _prefs = $__require("11");

  exports['default'] = {
    /**
     * Get a value from preferences db
     * @param {string}  pref - preference identifier
     * @param {*=}      defautlValue - returned value in case pref is not defined
     * @param {string=} prefix - prefix for pref
     */
    get: _prefs.getPref,
    /**
     * Set a value in preferences db
     * @param {string}  pref - preference identifier
     * @param {string=} prefix - prefix for pref
     */
    set: _prefs.setPref,
    /**
     * Check if there is a value in preferences db
     * @param {string}  pref - preference identifier
     * @param {string=} prefix - prefix for pref
     */
    has: _prefs.hasPref,
    /**
     * Clear value in preferences db
     * @param {string}  pref - preference identifier
     * @param {string=} prefix - prefix for pref
     */
    clear: _prefs.clearPref,

    enableChangeEvents: _prefs.enableChangeEvents,

    disableChangeEvents: _prefs.disableChangeEvents,

    /**
     * Set a value of type object in preferences db
     * @param {string}  pref - preference identifier
     */
    getObject: function () {
      function getObject(key) {
        return JSON.parse(this.get(key, '{}'));
      }

      return getObject;
    }(),

    /**
     * Set a value in preferences db
     * @param {string}  pref - preference identifier
     * @param {object|function}
     */
    setObject: function () {
      function setObject(key, value) {
        if (value instanceof Function) {
          var prevValue = this.getObject(key);
          var newValue = value(prevValue);
          this.setObject(key, newValue);
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          this.set(key, JSON.stringify(value));
        } else {
          throw new TypeError();
        }
      }

      return setObject;
    }(),

    init: _prefs.init

  };
});
$__System.registerDynamic("f", ["d", "13"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _console = $__require("d");

  var _console2 = _interopRequireDefault(_console);

  var _prefs = $__require("13");

  var _prefs2 = _interopRequireDefault(_prefs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  // detect dev flag on react-native
  /* globals __DEV__ */
  var devMode = typeof global !== 'undefined' && global.__DEV__ === true;
  // either take flag from prefs, or global dev mode flag
  var isLoggingEnabled = _prefs2["default"].get('showConsoleLogs', devMode || false);

  var log = void 0;
  var error = void 0;
  var debug = void 0;
  var warn = void 0;

  if (isLoggingEnabled) {
    log = _console2["default"].log.bind(_console2["default"], 'Cliqz');
    error = _console2["default"].error.bind(_console2["default"], 'Cliqz error');
    warn = _console2["default"].warn.bind(_console2["default"], 'Cliqz warning');
    if (_prefs2["default"].get('developer', devMode || false)) {
      debug = log;
    } else {
      debug = function debug() {};
    }
  } else {
    log = function log() {};
    error = function error() {};
    debug = function debug() {};
    warn = function warn() {};
  }

  exports["default"] = {
    log: log,
    error: error,
    debug: debug,
    warn: warn
  };
});
$__System.registerDynamic('14', ['f'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = Logger;

  var _console = $__require('f');

  var _console2 = _interopRequireDefault(_console);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  /**
   * No-op function.
   */
  function noop() {}

  function multiArgsDump() {
    if (arguments.length > 0) {
      dump(arguments.length <= 0 ? undefined : arguments[0]);

      for (var i = 1; i < arguments.length; i += 1) {
        dump(' ');
        dump(arguments.length <= i ? undefined : arguments[i]);
      }

      dump('\n');
    }
  }

  function Logger(options) {
    var useDump = options.useDump === true;
    var level = options.level || 'log';
    var prefix = options.prefix;

    var debug = _console2['default'].debug;
    var log = _console2['default'].log;
    var error = _console2['default'].error;

    if (useDump) {
      debug = multiArgsDump.bind(null, '[DEBUG]');
      log = multiArgsDump.bind(null, '[LOG]');
      error = multiArgsDump.bind(null, '[ERROR]');
    }

    if (prefix) {
      debug = debug.bind(null, prefix);
      log = log.bind(null, prefix);
      error = error.bind(null, prefix);
    }

    if (level === 'log') {
      debug = noop;
    }

    if (level === 'error') {
      debug = noop;
      log = noop;
    }

    return {
      debug: debug,
      log: log,
      error: error
    };
  }
});
$__System.registerDynamic('15', ['14'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _logger = $__require('14');

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  exports['default'] = (0, _logger2['default'])({
    useDump: false,
    level: 'error',
    prefix: '[human-web]'
  });
});
$__System.registerDynamic('16', ['17', 'b', '15'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseDom = parseDom;

  var _helpers = $__require('17');

  var _adDetection = $__require('b');

  var _logger = $__require('15');

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  function logException(e) {
    _logger2['default'].error('Exception caught:', e, e.stack);
  }

  function parseDom(url, window, windowId) {
    var document = window.document;

    // Let's try and get META refresh to detect javascript redirects.
    try {
      var jsRef = null;
      jsRef = document.querySelector('script');
      if (jsRef && jsRef.innerHTML.indexOf('location.replace') > -1) {
        var location = document.querySelector('title').textContent;
        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          windowId: windowId,
          payload: {
            module: 'human-web',
            action: 'jsRedirect',
            args: [{
              message: {
                location: location,
                url: document.location.href
              }
            }]
          }
        });
      }
    } catch (ee) {
      logException(ee);
    }

    try {
      var _ad = '';
      var _h = false;

      if (document.querySelector('#s0p1c0')) {
        _ad = document.querySelector('#s0p1c0').href;
      }

      if (document.querySelector('#tads .ads-ad')) {
        if (document.querySelector('#tads .ads-ad').offsetParent === null) _h = true;
      }

      var additionalInfo = {
        type: 'dom',
        ad: _ad,
        hidden: _h
      };

      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        windowId: windowId,
        payload: {
          module: 'human-web',
          action: 'contentScriptTopAds',
          args: [{
            message: additionalInfo
          }]
        }
      });
    } catch (ee) {
      logException(ee);
    }

    // We need to get all the ADS from this page.
    try {
      var adDetails = {};
      var doc = window.document;
      var noAdsOnThisPage = 0;
      var detectAdRules = {
        query: {
          element: '#ires',
          attribute: 'data-async-context'
        },
        adSections: ['.ads-ad', '.pla-unit-container', '.pla-hovercard-content-ellip', '.cu-container tr'],
        0: {
          cu: ".ad_cclk h3 a[id^='s0p'],.ad_cclk h3 a[id^='n1s0p'],.ad_cclk h3 a[id^='s3p']",
          fu: ".ad_cclk h3 a[id^='vs0p'],.ad_cclk h3 a[id^='vn1s0p'],.ad_cclk h3 a[id^='vs3p']"
        },
        1: {
          cu: "a[id^='plaurlg']",
          fu: "a[id^='vplaurlg']"
        },
        2: {
          cu: "a[id^='plaurlh']",
          fu: "a[id^='vplaurlh']"
        },
        3: {
          cu: "a[id^='plaurlt']",
          fu: "a[id^='vplaurlt']"
        }
      };

      // We need to scrape the query too.
      var queryElement = doc.querySelector(detectAdRules.query.element);
      var query = '';

      if (queryElement) {
        query = queryElement.getAttribute(detectAdRules.query.attribute).replace('query:', '');

        try {
          query = decodeURIComponent(query);
        } catch (ee) {}
      }

      // Let's iterate over each possible section of the ads.
      detectAdRules.adSections.forEach(function (eachAdSection, idx) {
        var adNodes = Array.prototype.slice.call(doc.querySelectorAll(eachAdSection));

        adNodes.forEach(function (eachAd) {
          var cuRule = detectAdRules[idx].cu;
          var fuRule = detectAdRules[idx].fu;

          var clink = eachAd.querySelector(cuRule);
          var flink = eachAd.querySelector(fuRule);

          if (clink && flink) {
            var clickPattern = (0, _adDetection.normalizeAclkUrl)(clink.href);

            adDetails[clickPattern] = {
              ts: Date.now(),
              query: query,
              furl: [flink.getAttribute('data-preconnect-urls'), flink.href] // At times there is a redirect chain, we only want the final domain.
            };

            noAdsOnThisPage += 1;
          }
        });
      });

      if (noAdsOnThisPage > 0) {
        chrome.runtime.sendMessage({
          source: _helpers.CHROME_MSG_SOURCE,
          windowId: windowId,
          payload: {
            module: 'human-web',
            action: 'adClick',
            args: [{
              ads: adDetails
            }]
          }
        });
      }
    } catch (ee) {
      logException(ee);
    }
  }

  (0, _helpers.registerContentScript)('http*', function (window, chrome, windowId) {
    var url = window.location.href;

    // Only add for main pages.
    if (window.top === window) {
      window.addEventListener('DOMContentLoaded', function () {
        parseDom(url, window, windowId);
      });
    }
  });
});
$__System.registerDynamic("18", [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function injectCSSRule(rule, doc) {
    var css = doc.createElement('style');
    css.type = 'text/css';
    css.id = 'cliqz-adblokcer-css-rules';
    var parent = doc.head || doc.documentElement;
    parent.appendChild(css);
    css.appendChild(doc.createTextNode(rule));
  }

  function injectScript(s, doc) {
    // Wrap script so that it removes itself when the execution is over.
    var autoRemoveScript = '\n    ' + String(s) + '\n\n    (function() {\n      var currentScript = document.currentScript;\n      var parent = currentScript && currentScript.parentNode;\n\n      if (parent) {\n        parent.removeChild(currentScript);\n      }\n    })();\n  ';

    // Create node
    var script = doc.createElement('script');
    script.type = 'text/javascript';
    script.id = 'cliqz-adblocker-script';
    script.appendChild(doc.createTextNode(autoRemoveScript));

    // Insert node
    var parent = doc.head || doc.documentElement;
    parent.appendChild(script);
  }

  function blockScript(filter, document) {
    var filterRE = new RegExp(filter);
    document.addEventListener('beforescriptexecute', function (ev) {
      if (filterRE.test(ev.target.textContent)) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    });
  }

  /**
   * Takes care of injecting cosmetic filters in a given window. Responsabilities:
   * - Inject scripts.
   * - Block scripts.
   * - Inject CSS rules.
   * - Monitor changes using a mutation observer and inject new rules if needed.
   *
   * All this happens by communicating with the background through the
   * `backgroundAction` function (to trigger request the sending of new rules
   * based on a domain or node selectors) and the `handleResponseFromBackground`
   * callback to apply new rules.
   */

  var _class = function () {
    function _class(url, window, backgroundAction) {
      _classCallCheck(this, _class);

      this.url = url;
      this.window = window;
      this.backgroundAction = backgroundAction;

      this.mutationObserver = null;
      this.injectedRules = new Set();
      this.injectedScripts = new Set();
      this.blockedScripts = new Set();

      // Get domain rules as soon as possible
      if (this.isMainDocument()) {
        this.backgroundAction('getCosmeticsForDomain', this.url);
      }
    }

    _createClass(_class, [{
      key: 'unload',
      value: function () {
        function unload() {
          if (this.mutationObserver) {
            try {
              this.mutationObserver.disconnect();
            } catch (e) {
              /* in case the page is closed */
            }
          }
        }

        return unload;
      }()
    }, {
      key: 'isMainDocument',
      value: function () {
        function isMainDocument() {
          return this.window === this.window.parent;
        }

        return isMainDocument;
      }()

      /**
       * When one or several mutations occur in the window, extract caracteristics
       * (node name, class, tag) from the modified nodes and request matching
       * cosmetic filters to inject in the page.
       */

    }, {
      key: 'onMutation',
      value: function () {
        function onMutation(mutations) {
          var targets = new Set(mutations.map(function (m) {
            return m.target;
          }).filter(function (t) {
            return t;
          }));

          // TODO - it might be necessary to inject scripts, CSS and block scripts
          // from here into iframes with no src. We could first inject/block
          // everything already present in `this.injectedRules`,
          // `this.injectedScripts` and `this.blockedScripts`. Then we could register
          // the iframe to be subjected to the same future injections as the current
          // window.
          //   targets.forEach((target) => {
          //     if (target.localName === 'iframe') {}
          //     if (target.childElementCount !== 0) {
          //       const iframes = target.getElementsByTagName('iframe');
          //       if (iframes.length !== 0) {}
          //     }
          //   });

          if (targets.size > 100) {
            // In case there are too many mutations we will only check once the whole document
            targets = new Set([this.window.document.body]);
          }

          if (targets.size === 0) {
            return;
          }

          // Collect nodes of targets
          var nodeInfo = new Set();
          targets.forEach(function (target) {
            var nodes = target.querySelectorAll('*');
            for (var i = 0; i < nodes.length; i += 1) {
              var node = nodes[i];

              // Ignore hidden nodes
              if (node.offsetWidth === 0 && node.offsetHeight === 0) {
                /* eslint-disable no-continue */
                continue;
              }

              if (node.id) {
                nodeInfo.add('#' + String(node.id));
              }

              if (node.tagName) {
                nodeInfo.add(node.tagName);
              }

              if (node.className && node.className.split) {
                node.className.split(' ').forEach(function (name) {
                  nodeInfo.add('.' + String(name));
                });
              }
            }
          });

          // Send node info to background to request corresponding cosmetic filters
          if (nodeInfo.size > 0) {
            this.backgroundAction('getCosmeticsForNodes', [[].concat(_toConsumableArray(nodeInfo))]);
          }
        }

        return onMutation;
      }()
    }, {
      key: 'onDOMContentLoaded',
      value: function () {
        function onDOMContentLoaded() {
          var _this = this;

          // TODO - is this necessary? Can a cosmetic filter apply to an element of
          // the DOM?
          // Trigger sending of the cosmetic fitlers for the full page
          // this.onMutation([{ target: this.window.document.body }]);

          // attach mutation obsever in case new nodes are added
          this.mutationObserver = new this.window.MutationObserver(function (mutations) {
            return _this.onMutation(mutations);
          });
          this.mutationObserver.observe(this.window.document, { childList: true, subtree: true });
        }

        return onDOMContentLoaded;
      }()
    }, {
      key: 'handleRules',
      value: function () {
        function handleRules(rules) {
          /* eslint-disable no-continue */
          var rulesToInject = [];

          // Check which rules should be injected in the page.
          for (var i = 0; i < rules.length; i += 1) {
            var rule = rules[i];

            if (!this.injectedRules.has(rule)) {
              // Check if the selector would match
              try {
                if (!this.window.document.querySelector(rule)) {
                  continue;
                }
              } catch (e) {
                // invalid selector
                continue;
              }

              this.injectedRules.add(rule);
              rulesToInject.push(' :root ' + String(rule));
            }
          }

          // Inject selected rules
          if (rulesToInject.length > 0) {
            injectCSSRule(String(rulesToInject.join(' ,')) + ' {display:none !important;}', this.window.document);
          }
        }

        return handleRules;
      }()
    }, {
      key: 'handleResponseFromBackground',
      value: function () {
        function handleResponseFromBackground(_ref) {
          var active = _ref.active,
              scripts = _ref.scripts,
              blockedScripts = _ref.blockedScripts,
              styles = _ref.styles;

          if (!active) {
            this.unload();
            return;
          }

          // Inject scripts
          for (var i = 0; i < scripts.length; i += 1) {
            var script = scripts[i];
            if (!this.injectedScripts.has(script)) {
              injectScript(script, this.window.document);
              this.injectedScripts.add(script);
            }
          }

          // Block scripts
          for (var _i = 0; _i < blockedScripts.length; _i += 1) {
            var _script = blockedScripts[_i];
            if (!this.blockedScripts.has(_script)) {
              blockScript(_script, this.window.document);
              this.blockedScripts.add(_script);
            }
          }

          this.handleRules(styles);
        }

        return handleResponseFromBackground;
      }()
    }]);

    return _class;
  }();

  exports['default'] = _class;
});
$__System.registerDynamic('19', ['17', '18', '1a'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _helpers = $__require('17');

  var _cosmeticsInjection = $__require('18');

  var _cosmeticsInjection2 = _interopRequireDefault(_cosmeticsInjection);

  var _platform = $__require('1a');

  var _platform2 = _interopRequireDefault(_platform);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  (0, _helpers.registerContentScript)('http*', function (window, chrome, windowId) {
    var active = true;
    var url = window.location.href;
    if (!url) {
      return;
    }

    /**
     * Helper used to trigger action from the adblocker's background:
     * @param {string} action - name of the action found in the background.
     * @param {array} args - arguments to forward to the action.
     */
    var backgroundAction = function backgroundAction(action) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // if module is diabled, don't call background further
      if (!active) {
        return;
      }
      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        windowId: windowId,
        payload: {
          module: 'adblocker',
          action: action,
          args: args
        }
      });
    };

    /**
     * This class is in charge of managing the adblocking in content script:
     * - Script injection.
     * - Script blocking.
     * - CSS injection.
     * - Observing mutations in the page.
     */
    var cosmeticsInjection = new _cosmeticsInjection2['default'](url, window, backgroundAction);

    // ------------------ //
    // Register listeners //
    // ------------------ //

    var onDOMContentLoaded = function onDOMContentLoaded() {
      cosmeticsInjection.onDOMContentLoaded();
    };

    var onMessage = function onMessage(msg) {
      // On chromium platform the windowid is a fake on (always === 1),
      // instead the message is sent to the tab through `tabs.sendMessage`
      var sameSourceWindow = msg.windowId === windowId || _platform2['default'].isChromium;
      if (msg.module === 'adblocker' && sameSourceWindow) {
        if (msg.payload) {
          // handle push message
          cosmeticsInjection.handleResponseFromBackground(msg.payload);
        }
        if ((0, _helpers.isCliqzContentScriptMsg)(msg) && msg.response) {
          if (msg.response.moduleDisabled || msg.response.active === false) {
            active = false;
            cosmeticsInjection.unload();
            return;
          }
          cosmeticsInjection.handleResponseFromBackground(msg.response);
        }
      }
    };

    var onUnload = function onUnload() {
      cosmeticsInjection.unload();
      window.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
      window.removeEventListener('unload', onUnload);
      chrome.runtime.onMessage.removeListener(onMessage);
    };

    window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    window.addEventListener('unload', onUnload);
    chrome.runtime.onMessage.addListener(onMessage);
  });
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isPlatformAtLeastInVersion = isPlatformAtLeastInVersion;
  exports["default"] = {
    isMobile: false,
    isFirefox: false,
    isChromium: true
  };
  function isPlatformAtLeastInVersion(version) {
    return true;
  }
});
$__System.registerDynamic("12", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    "platform": "chromium",
    "brocfile": "node.Brocfile.js",
    "baseURL": "/cliqz/",
    "pack": "npm pack",
    "publish": "aws s3 cp browser-core-$VERSION.tgz s3://cdncliqz/update/edge/ghostery/$VERSION/$GIT_COMMIT.tgz --acl public-read && aws s3 cp s3://cdncliqz/update/edge/ghostery/$VERSION/$GIT_COMMIT.tgz s3://cdncliqz/update/edge/ghostery/$VERSION/latest.tgz --acl public-read",
    "sourceMaps": true,
    "format": "common",
    "settings": {
      "channel": "CH80",
      "triggers-root": "ghostery-root",
      "CONFIG_PROVIDER": "https://safe-browsing.ghostery.com/config",
      "ENDPOINT_BLIND_SIGNER": "https://ghostery-sign.ghostery.com/sign",
      "ENDPOINT_USER_REG": "https://ghostery-sign.ghostery.com/register",
      "ENDPOINT_SOURCE_MAP_PROVIDER": "https://ghostery-collector.ghostery.com/sourcemapjson",
      "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://ghostery-collector.ghostery.com/v2/lookuptable",
      "ENDPOINT_KEYS_PROVIDER": "https://ghostery-collector.ghostery.com/signerKey",
      "ENDPOINT_PROXY_LIST_PROVIDER": "https://ghostery-collector.ghostery.com/v2/proxyList",
      "ENDPOINT_PATTERNSURL": "https://safe-browsing.ghostery.com/patterns",
      "ENDPOINT_ANONPATTERNSURL": "https://safe-browsing.ghostery.com/patterns-anon",
      "ENDPOINT_CONFIGURL": "https://safe-browsing.ghostery.com/ts-config",
      "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.ghostery.com/",
      "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.ghostery.com/config",
      "MSGCHANNEL": "web-extension",
      "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
      "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
      "HPN_CHANNEL": "ghostery",
      "ATTRACK_TELEMETRY_PROVIDER": "hpn",
      "HW_CHANNEL": "ghostery",
      "CDN_BASEURL": "https://cdn2.ghostery.com",
      "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "se", "be", "se", "dk", "fi", "cz", "gr", "hu", "ro", "no", "ca", "au", "ru", "ua", "in"],
      "frameScriptWhitelist": []
    },
    "default_prefs": {
      "modules.human-web.enabled": true,
      "modules.offers-v2.enabled": false,
      "modules.message-center.enabled": false,
      "modules.antitracking.enabled": true,
      "modules.anti-phishing.enabled": false,
      "modules.adblocker.enabled": true,
      "offers2FeatureEnabled": true,
      "offersLogsEnabled": true,
      "showConsoleLogs": false,
      "cliqz-adb": true,
      "cliqz-adb-abtest": true,
      "attrackBloomFilter": true,
      "humanWeb": true,
      "cliqz-anti-phishing": true,
      "cliqz-anti-phishing-enabled": true,
      "attrackRemoveQueryStringTracking": false,
      "attrackTelemetryMode": 0,
      "attrack.placeHolder": "ghostery",
      "attrack.cliqzHeader": "Ghostery-AntiTracking",
      "attrackDefaultAction": "placeholder",
      "sendAntiTrackingHeader": false
    },
    "bundles": ["core/content-script.bundle.js", "hpn/worker.bundle.js"],
    "modules": ["core", "message-center", "human-web", "hpn", "antitracking", "webrequest-pipeline", "static", "offers-v2", "adblocker", "anti-phishing"],
    "system": {
      "map": {
        "bigint": "bower_components/bigint/index.js",
        "md5": "bower_components/md5/index.js"
      }
    },
    "environment": "production",
    "PRODUCTION": true,
    "debugPages": true,
    "EXTENSION_VERSION": "7.22.2",
    "instrumentFunctions": ""
  };
});
$__System.registerDynamic('1b', ['17', '1a', '12'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _helpers = $__require('17');

  var _platform = $__require('1a');

  var _platform2 = _interopRequireDefault(_platform);

  var _config = $__require('12');

  var _config2 = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  (0, _helpers.registerContentScript)('http*', function (window, chrome, windowId) {
    var url = window.location.href;

    // do not check for iframes
    if (window.parent && window.parent === window) {
      var payload = {
        module: 'anti-phishing',
        action: 'isPhishingURL',
        args: [url]
      };

      chrome.runtime.sendMessage({
        source: _helpers.CHROME_MSG_SOURCE,
        windowId: windowId,
        payload: payload
      });
    }

    chrome.runtime.onMessage.addListener(function (msg) {
      if (!(0, _helpers.isCliqzContentScriptMsg)(msg)) {
        return;
      }

      var WARNINGURL = 'chrome://cliqz/content/anti-phishing/phishing-warning.html?u=';
      // On chromium platform the windowid is a fake on (always === 1),
      // instead the message is sent to the tab through `tabs.sendMessage`
      var sameSourceWindow = msg.windowId === windowId || _platform2['default'].isChromium;
      if (sameSourceWindow) {
        if (msg && msg.response && msg.response.type === 'phishingURL') {
          if (msg.response.block) {
            if (!_platform2['default'].isChromium) {
              window.location = WARNINGURL + encodeURIComponent(window.location);
            }
          }
        }
      }
    });
  });
});
$__System.registerDynamic('1c', ['1d', '16', '19', '1b'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  $__require('1d');

  $__require('16');

  $__require('19');

  $__require('1b');
});
$__System.registerDynamic("1e", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getWindowId = getWindowId;
  function getWindowId(window) {
    return 1;
  }
});
$__System.registerDynamic('1f', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = globToRegexp;
  /* eslint-disable */
  /*
   Copyright (c) 2013, Nick Fitzgerald
  
    All rights reserved.
  
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
        Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  
        Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  // https://developer.chrome.com/extensions/content_scripts#match-patterns-globs
  // source: https://github.com/fitzgen/glob-to-regexp
  function globToRegexp(glob, opts) {
    if (typeof glob !== 'string') {
      throw new TypeError('Expected a string');
    }

    var str = String(glob);

    // The regexp we are building, as a string.
    var reStr = "";

    // Whether we are matching so called "extended" globs (like bash) and should
    // support single character matching, matching ranges of characters, group
    // matching, etc.
    var extended = opts ? !!opts.extended : false;

    // When globstar is _false_ (default), '/foo/*' is translated a regexp like
    // '^\/foo\/.*$' which will match any string beginning with '/foo/'
    // When globstar is _true_, '/foo/*' is translated to regexp like
    // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
    // which does not have a '/' to the right of it.
    // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
    // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
    // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
    // globstar is _false_
    var globstar = opts ? !!opts.globstar : false;

    // If we are doing extended matching, this boolean is true when we are inside
    // a group (eg {*.html,*.js}), and false otherwise.
    var inGroup = false;

    // RegExp flags (eg "i" ) to pass in to RegExp constructor.
    var flags = opts && typeof opts.flags === "string" ? opts.flags : "";

    var c;
    for (var i = 0, len = str.length; i < len; i++) {
      c = str[i];

      switch (c) {
        case "\\":
        case "/":
        case "$":
        case "^":
        case "+":
        case ".":
        case "(":
        case ")":
        case "=":
        case "!":
        case "|":
          reStr += "\\" + c;
          break;

        case "?":
          if (extended) {
            reStr += ".";
            break;
          }

        case "[":
        case "]":
          if (extended) {
            reStr += c;
            break;
          }

        case "{":
          if (extended) {
            inGroup = true;
            reStr += "(";
            break;
          }

        case "}":
          if (extended) {
            inGroup = false;
            reStr += ")";
            break;
          }

        case ",":
          if (inGroup) {
            reStr += "|";
            break;
          }
          reStr += "\\" + c;
          break;

        case "*":
          // Move over all consecutive "*"'s.
          // Also store the previous and next characters
          var prevChar = str[i - 1];
          var starCount = 1;
          while (str[i + 1] === "*") {
            starCount++;
            i++;
          }
          var nextChar = str[i + 1];

          if (!globstar) {
            // globstar is disabled, so treat any number of "*" as one
            reStr += ".*";
          } else {
            // globstar is enabled, so determine if this is a globstar segment
            var isGlobstar = starCount > 1 // multiple "*"'s
            && (prevChar === "/" || prevChar === undefined) // from the start of the segment
            && (nextChar === "/" || nextChar === undefined); // to the end of the segment

            if (isGlobstar) {
              // it's a globstar, so match zero or more path segments
              reStr += "((?:[^/]*(?:\/|$))*)";
              i++; // move over the "/"
            } else {
              // it's not a globstar, so only match one path segment
              reStr += "([^/]*)";
            }
          }
          break;

        default:
          reStr += c;
      }
    }

    // When regexp 'g' flag is specified don't
    // constrain the regular expression with ^ & $
    if (!flags || !~flags.indexOf('g')) {
      reStr = "^" + reStr + "$";
    }

    return new RegExp(reStr, flags);
  };
  /* eslint-enable */
});
$__System.registerDynamic('17', ['1e', '1f'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CHROME_MSG_SOURCE = exports.getWindowId = undefined;

  var _helpers = $__require('1e');

  Object.defineProperty(exports, 'getWindowId', {
    enumerable: true,
    get: function () {
      function get() {
        return _helpers.getWindowId;
      }

      return get;
    }()
  });
  exports.registerContentScript = registerContentScript;
  exports.runContentScripts = runContentScripts;
  exports.getWindowTreeInformation = getWindowTreeInformation;
  exports.isCliqzContentScriptMsg = isCliqzContentScriptMsg;

  var _glob = $__require('1f');

  var _glob2 = _interopRequireDefault(_glob);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  var CONTENT_SCRIPTS = {};

  function registerContentScript(urlPattern, script) {
    CONTENT_SCRIPTS[urlPattern] = CONTENT_SCRIPTS[urlPattern] || [];
    CONTENT_SCRIPTS[urlPattern].push(script);
  }

  function runContentScripts(window, chrome, windowId) {
    var currentUrl = window.location.href;
    var matchingPatterns = Object.keys(CONTENT_SCRIPTS).filter(function (pattern) {
      var regexp = (0, _glob2['default'])(pattern);
      return regexp.test(currentUrl);
    });
    matchingPatterns.forEach(function (pattern) {
      CONTENT_SCRIPTS[pattern].forEach(function (contentScript) {
        try {
          contentScript(window, chrome, windowId);
        } catch (e) {
          window.console.error('CLIQZ content-script failed: ' + String(e) + ' ' + String(e.stack));
        }
      });
    });
  }

  function getWindowTreeInformation(window) {
    var currentWindow = window;

    // Keep track of window IDs
    var currentId = (0, _helpers.getWindowId)(window);
    var windowId = currentId;
    var parentFrameId = void 0;

    while (currentId !== (0, _helpers.getWindowId)(currentWindow.parent)) {
      // Go up one level
      parentFrameId = currentId;
      currentWindow = currentWindow.parent;
      currentId = (0, _helpers.getWindowId)(currentWindow);
    }

    return {
      tabId: currentId,
      parentFrameId: parentFrameId,
      frameId: windowId
    };
  }

  var CHROME_MSG_SOURCE = exports.CHROME_MSG_SOURCE = 'cliqz-content-script';

  function isCliqzContentScriptMsg(msg) {
    return msg.source && msg.source === CHROME_MSG_SOURCE;
  }
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.throttle = throttle;
  exports.nextTick = nextTick;
  function throttle(window, fn, threshhold) {
    var last = void 0;
    var timer = void 0;
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var now = Date.now();
      if (last && now < last + threshhold) {
        // reset timeout
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
          last = now;
          fn.apply(undefined, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(undefined, args);
      }
    };
  }

  function nextTick(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return Promise.resolve().then(function () {
      return fn.apply(undefined, args);
    });
  }
});
$__System.registerDynamic('1d', ['12', '1c', '17', '10'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _config = $__require('12');

  var _config2 = _interopRequireDefault(_config);

  $__require('1c');

  var _helpers = $__require('17');

  var _decorators = $__require('10');

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  /* global window, chrome */
  if (typeof windowId === 'undefined') {
    window.windowId = (0, _helpers.getWindowId)();
  }
  // Load content scripts from modules


  function getContextHTML(ev) {
    var target = ev.target,
        count = 0,
        html;

    try {
      while (true) {
        html = target.innerHTML;

        if (html.indexOf('http://') !== -1 || html.indexOf('https://') !== -1) {

          return html;
        }

        target = target.parentNode;

        count += 1;
        if (count > 4) break;
      }
    } catch (ee) {}
  }

  var whitelist = ['chrome://cliqz/', 'resource://cliqz/'].concat(_config2['default'].settings.frameScriptWhitelist);

  (function () {
    function onDOMWindowCreated() {
      try {
        var onCallback = function () {
          function onCallback(msg) {
            if (isDead()) {
              return;
            }

            if (!whitelist.some(function (url) {
              return currentURL().indexOf(url) === 0;
            })) {
              return;
            }

            if (msg.origin === 'content') {
              window.postMessage(JSON.stringify({
                target: 'cliqz',
                type: 'response',
                response: msg.response,
                action: msg.action,
                module: msg.module,
                requestId: msg.requestId
              }), '*');
            }
          }

          return onCallback;
        }();

        var onCore = function () {
          function onCore(msg) {
            var payload = void 0;

            if (isDead()) {
              return;
            }

            if (msg.action === 'unload') {
              stop();
              return;
            }

            if (msg.action === 'getHTML') {
              msg.url = decodeURIComponent(msg.url);
            }

            var matchesCurrentUrl = msg.url === currentURL();
            // wild card for cliqz URLS
            if (msg.url && (msg.url.indexOf('resource://cliqz') === 0 || msg.url.indexOf('chrome://cliqz') === 0)) {
              if (currentURL().indexOf(msg.url) === 0) {
                matchesCurrentUrl = true;
              }
            }

            if (!matchesCurrentUrl) {
              return;
            }

            if (!(msg.action in fns)) {
              return;
            }

            try {
              payload = fns[msg.action].apply(null, msg.args || []);
              if (payload === null) {
                return;
              }
            } catch (e) {
              window.console.error('cliqz framescript:', e);
            }

            chrome.runtime.sendMessage({
              source: _helpers.CHROME_MSG_SOURCE,
              origin: 'content',
              payload: payload,
              requestId: msg.requestId
            });
          }

          return onCore;
        }();

        var proxyWindowEvent = function () {
          function proxyWindowEvent(action) {
            return function (ev) {
              chrome.runtime.sendMessage({
                source: _helpers.CHROME_MSG_SOURCE,
                windowId: windowId,
                payload: {
                  module: 'core',
                  action: action,
                  args: [{
                    target: {
                      baseURI: ev.target.baseURI,
                      windowTreeInformation: windowTreeInformation
                    }
                  }]
                }
              });
            };
          }

          return proxyWindowEvent;
        }();

        var onBackgroundMessage = function () {
          function onBackgroundMessage(message) {
            if (!(0, _helpers.isCliqzContentScriptMsg)(message)) {
              return;
            }
            if (message.windowId === windowId) {
              onCallback(message);
            } else {
              onCore(message);
            }
          }

          return onBackgroundMessage;
        }();

        var stop = function () {
          function stop(ev) {
            if (ev && ev.target !== window.document) {
              return;
            }

            // detect dead windows
            // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Errors/Dead_object
            try {
              String(window);
            } catch (e) {
              return;
            }

            chrome.runtime.onMessage.removeListener(onBackgroundMessage);
            window.removeEventListener('message', onMessage);
            window.removeEventListener('keypress', onKeyPress);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('copy', onCopy);
            window.removeEventListener('DOMContentLoaded', onReady);
          }

          return stop;
        }();

        var isDead = function () {
          function isDead() {
            try {
              currentURL();
              return false;
            } catch (e) {
              stop();
              return true;
            }
          }

          return isDead;
        }();

        // we only handle HTML documents for now
        if (window.document.documentElement.nodeName.toLowerCase() !== 'html') {
          return;
        }

        (0, _helpers.runContentScripts)(window, chrome, windowId);

        var windowTreeInformation = (0, _helpers.getWindowTreeInformation)(window);
        var currentURL = function () {
          function currentURL() {
            return window.location.href;
          }

          return currentURL;
        }();
        var url = currentURL();

        var onMessage = function () {
          function onMessage(ev) {
            var href = ev.target.location.href;

            var message = {};

            try {
              message = JSON.parse(ev.data);
            } catch (e) {
              // non Cliqz or invalid message should be ignored
            }

            if (!whitelist.some(function (url) {
              return href.indexOf(url) === 0;
            })) {
              return;
            }

            if (message.target !== 'cliqz') {
              return;
            }

            if (message.type === 'response') {
              return;
            }

            chrome.runtime.sendMessage({
              source: _helpers.CHROME_MSG_SOURCE,
              origin: 'content',
              windowId: windowId,
              payload: message
            });
          }

          return onMessage;
        }();

        var fns = {
          postMessage: function () {
            function postMessage(message) {
              window.postMessage(message, '*');
            }

            return postMessage;
          }(),
          getHTML: function () {
            function getHTML() {
              return window.document.documentElement.outerHTML;
            }

            return getHTML;
          }(),
          queryHTML: function () {
            function queryHTML(selector, attribute) {
              var attributes = attribute.split(',');

              return Array.prototype.map.call(window.document.querySelectorAll(selector), function (el) {
                if (attributes.length > 1) {
                  return attributes.reduce(function (hash, attr) {
                    hash[attr] = el[attr];
                    return hash;
                  }, {});
                } else {
                  return el[attribute];
                }
              });
            }

            return queryHTML;
          }(),
          getCookie: function () {
            function getCookie() {
              try {
                return window.document.cookie;
              } catch (e) {
                if (e instanceof DOMException && e.name == 'SecurityError') {
                  return null;
                } else {
                  throw e; // let others bubble up
                }
              }
            }

            return getCookie;
          }()
        };

        var onMouseDown = function () {
          function onMouseDown(ev) {
            var linksSrc = [];
            if (window.parent !== window) {
              // collect srcipt links only for frames
              if (window.document && window.document.scripts) {
                for (var i = 0; i < window.document.scripts.length; i += 1) {
                  var src = window.document.scripts[i].src;
                  if (src.startsWith('http')) {
                    linksSrc.push(src);
                  }
                }
              }
            }

            var node = ev.target;
            if (node.nodeType !== 1) {
              node = node.parentNode;
            }

            var href = null;

            if (node.closest('a[href]')) {
              href = node.closest('a[href]').getAttribute('href');
            }

            chrome.runtime.sendMessage({
              source: _helpers.CHROME_MSG_SOURCE,
              windowId: windowId,
              payload: {
                module: 'core',
                action: 'recordMouseDown',
                args: [{
                  target: {
                    windowTreeInformation: windowTreeInformation,
                    baseURI: ev.target.baseURI,
                    value: ev.target.value,
                    href: ev.target.href,
                    parentNode: {
                      href: ev.target.parentNode.href
                    },
                    linksSrc: linksSrc
                  }
                }, getContextHTML(ev), href]
              }
            });
          }

          return onMouseDown;
        }();

        var onReady = function () {
          function onReady(event) {
            // ReportLang
            var lang = window.document.getElementsByTagName('html').item(0).getAttribute('lang');
            // don't analyse language for (i)frames
            var isTopWindow = !event.target.defaultView.frameElement;

            if (isTopWindow && lang) {
              chrome.runtime.sendMessage({
                source: _helpers.CHROME_MSG_SOURCE,
                windowId: windowId,
                payload: {
                  module: 'core',
                  action: 'recordLang',
                  args: [currentURL(), lang]
                }
              });
            }

            // ReportMeta
            var title = window.document.querySelector('title'),
                description = window.document.querySelector('meta[name=description]'),
                ogTitle = window.document.querySelector('meta[property="og:title"]'),
                ogDescription = window.document.querySelector('meta[property="og:description"]'),
                ogImage = window.document.querySelector('meta[property="og:image"]');

            if (isTopWindow) {
              chrome.runtime.sendMessage({
                source: _helpers.CHROME_MSG_SOURCE,
                windowId: windowId,
                payload: {
                  module: 'core',
                  action: 'recordMeta',
                  args: [currentURL(), {
                    title: title && title.innerHTML,
                    description: description && description.content,
                    ogTitle: ogTitle && ogTitle.content,
                    ogDescription: ogDescription && ogDescription.content,
                    ogImage: ogImage && ogImage.content
                  }]
                }
              });
            }
          }

          return onReady;
        }();

        window.addEventListener('message', onMessage);

        var onKeyPress = (0, _decorators.throttle)(window, proxyWindowEvent('recordKeyPress'), 250);
        var onMouseMove = (0, _decorators.throttle)(window, proxyWindowEvent('recordMouseMove'), 250);
        var onScroll = (0, _decorators.throttle)(window, proxyWindowEvent('recordScroll'), 250);
        var onCopy = (0, _decorators.throttle)(window, proxyWindowEvent('recordCopy'), 250);

        window.addEventListener('keypress', onKeyPress);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('scroll', onScroll);
        window.addEventListener('copy', onCopy);
        window.addEventListener('DOMContentLoaded', onReady);
        chrome.runtime.onMessage.addListener(onBackgroundMessage);

        window.addEventListener('unload', stop);
      } catch (e) {
        window.console.error('Content Script error', e);
      }
    }

    return onDOMWindowCreated;
  })()(undefined);
});
$__System.registerDynamic('a', ['1d'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  $__require('1d');
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});