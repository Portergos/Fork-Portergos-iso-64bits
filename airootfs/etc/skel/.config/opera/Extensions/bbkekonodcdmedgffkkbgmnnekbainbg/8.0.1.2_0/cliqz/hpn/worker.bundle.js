!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=0;o<n.length;o++)t[n[o].split(".").pop()]=r(n[o],e);return t}function t(r){if(-1===a.indexOf(r)){try{var n=e[r]}catch(e){a.push(r)}this(r,n)}}var o,i=$__System,a=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.registry.set("@@global-helpers",i.newModule({prepareGlobal:function(r,i,a){var f=e.define;e.define=void 0;var s;if(a){s={};for(var l in a)s[l]=e[l],e[l]=a[l]}return i||(o={},Object.keys(e).forEach(t,function(e,r){o[e]=r})),function(){var r,a=i?n(i):{},l=!!i;if(i||Object.keys(e).forEach(t,function(e,n){o[e]!==n&&void 0!==n&&(i||(a[e]=n,void 0!==r?l||r===n||(l=!0):r=n))}),a=l?a:r,s)for(var c in s)e[c]=s[c];return e.define=f,a}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createProxyList = createProxyList;
  exports.getProxyVerifyUrl = getProxyVerifyUrl;
  /**
   * @param routingTable  array of proxy information (keys: dns, ip, ssl)
   * @returns the proxy list (unique proxies in the routing table)
   */
  function createProxyList(routeTable) {
    var proxyList = [];
    var seenProxies = new Set();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = routeTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var proxy = _step.value;

        var key = [proxy.dns, proxy.ip];
        if (!seenProxies[key]) {
          seenProxies[key] = proxy;
          proxyList.push(proxy);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return proxyList;
  }

  function getProxyVerifyUrl(args) {
    var schema = args.supportsHttps ? 'https' : 'http';
    var host = args.host || args.ip;
    return schema + '://' + String(host) + '/v2/verify';
  }
});
$__System.registerDynamic("c", ["d"], true, function ($__require, exports, module) {
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
  }; // FIXME: remove cirtular dependency


  exports.getRouteHash = getRouteHash;
  exports.createPayloadBlindSignature = createPayloadBlindSignature;
  exports.createPayloadProxy = createPayloadProxy;

  var _index = $__require("d");

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  /*
  Function to clean string for calculating route hash
  */
  var punctuation = '!"\'()*,-./:;?[\\]^_`{|}~%$=&+#';
  var regex = new RegExp("[" + punctuation + "]", "g");
  function cleanStr(s) {
    // Replace all spaces

    // Because in some telemetry message we only create uniqu based on anti-duplicate.
    // Anti-duplicate is not a string, hence converting it to string.
    s = '' + s;

    // Decode uri component
    // Need to find lua equivalent

    try {
      s = decodeURIComponent(s);
    } catch (e) {};

    s = s.replace(/\s+/g, '');

    // Convert to lower
    s = s.toLowerCase();

    // Trim
    s = s.trim();

    // Clean the URL
    s = s.replace(/^http:\/\//, "");
    s = s.replace(/^https:\/\//, "");
    s = s.replace(/^www\./, '');

    // Remove all punctuation marks
    s = s.replace(regex, '');

    return s;
  }

  function getField(obj, path) {
    return path.split(/[\.\[\]]+/).filter(function (x) {
      return x;
    }).reduce(function (o, i) {
      return o[i];
    }, obj);
  }

  function orderedStringify(t, res, onlyKeys) {
    if (!t || (typeof t === 'undefined' ? 'undefined' : _typeof(t)) !== 'object') {
      if (t === undefined) {
        throw 'Found undefined field when trying to calculate msg routehash';
      }
      res.push(cleanStr(t));
    } else {
      var keys = Object.keys(t);
      keys.sort();
      var isArray = Array.isArray(t);
      keys.forEach(function (k) {
        if (!isArray) {
          res.push(cleanStr(k));
        }
        if (!onlyKeys) {
          orderedStringify(t[k], res);
        }
      });
    }
  }

  function getRouteHashStr(obj, sourceMap) {
    var action = obj.action;
    var keys = sourceMap[action].keys;
    var staticKeys = sourceMap[action]['static'] || [];
    var res = [];
    keys.forEach(function (k) {
      return orderedStringify(getField(obj, k), res, staticKeys.some(function (sk) {
        return k.endsWith(sk);
      }));
    });
    return res.join('');
  }

  /* This method will return the string based on mapping of which keys to use to hash for routing.
  */
  function getRouteHash(msg) {
    return getRouteHashStr(msg, _index2['default'].sourceMap);
  }

  /*
  Converts given array to generator like object.
  */
  function trkGen(trk) {
    var trk = trk;
    var idx = -1;
    return {
      next: function () {
        function next() {
          idx += 1;
          if (idx < trk.length) {
            return {
              value: idx, // Return the first yielded value.
              done: false
            };
          } else {
            return {
              value: undefined, // Return undefined.
              done: true
            };
          }
        }

        return next;
      }()
    };
  }

  /**
   * Method to create payload to send for blind signature.
   * The payload needs to consist of <uPK,
                                      {mP}*r1, // BM1
                                      {mP, uPK}*r2, // BM2
                                      {DmC, uPK} * r3, // BM3
                                      SIG(uPK;bm1;bm2;bm3)
                                      >
   * @returns string with payload created.
  */

  function createPayloadBlindSignature(uPK, bm1, bm2, bm3, sig) {
    var payload = {};
    payload["uPK"] = uPK;
    payload["bm1"] = bm1;
    payload["bm2"] = bm2;
    payload["bm3"] = bm3;
    payload["sig"] = sig;
    return payload;
  }

  /**
   * Method to create payload to send to proxy.
   * The payload needs to consist of <uPK,
                                      dmC,
                                      {H{mP}*r1}Dsk, // BlindSigned1
                                      {H(mP, uPK)}Dsk, // BlindSigned2
                                      {H(mP, dmC)}Dsk, // BlindSigned3
                                      SIG(uPK;dmC;bs1;bs2;bs3)
                                      >
   * @returns string with payload created.
   */

  function createPayloadProxy(uPK, suPK, mP, dmC, bs1, bs2, bs3, sig) {
    var payload = {};
    payload["uPK"] = uPK;
    payload["suPK"] = suPK;
    payload["mP"] = mP;
    payload["dmC"] = dmC;
    payload["bs1"] = bs1;
    payload["bs2"] = bs2;
    payload["bs3"] = bs3;
    payload["sig"] = sig;
    return payload;
  }
});
$__System.registerDynamic("e", ["f", "d", "10", "b", "11", "12", "c", "13", "14", "15"], true, function ($__require, exports, module) {
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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }; /**
     * Creates object for message recieved+
     * Only excepts valid JSON messages with the following fields:
     * Type : Humanweb / Antitracking etc.
     * Actions : Valid actions like Page, query etc.
     * @returns string with payload created.
     */

  // FIXME: remove circular dependency


  var _md = $__require("f");

  var _md2 = _interopRequireDefault(_md);

  var _index = $__require("d");

  var _index2 = _interopRequireDefault(_index);

  var _userPk = $__require("10");

  var _userPk2 = _interopRequireDefault(_userPk);

  var _routing = $__require("b");

  var _utils = $__require("11");

  var _encoding = $__require("12");

  var _utils2 = $__require("c");

  var _blindSignature = $__require("13");

  var _httpWorker = $__require("14");

  var _httpWorker2 = _interopRequireDefault(_httpWorker);

  var _crypto = $__require("15");

  var _crypto2 = _interopRequireDefault(_crypto);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /* This method will ensure that we have the same length for all the mesages
  */
  function padMessage(msg) {
    var mxLen = 14000;
    var padLen = mxLen - msg.length + 1;
    if (padLen < 0) {
      throw 'msgtoobig';
    }
    return msg + new Array(padLen).join("\n");
  }

  function isJson(str) {
    // If can be parsed that means it's a str.
    // If cannot be parsed and is an object then it's a JSON.
    try {
      JSON.parse(str);
    } catch (e) {
      if ((typeof str === 'undefined' ? 'undefined' : _typeof(str)) == 'object') return true;
    }
    return false;
  }

  function hexToBinary(s) {
    var i,
        k,
        part,
        ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
      '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
      '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
      'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
      'e': '1110', 'f': '1111',
      'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
      'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
      if (lookupTable.hasOwnProperty(s[i])) {
        ret += lookupTable[s[i]];
      } else {
        return { valid: false };
      }
    }
    return { valid: true, result: ret };
  }

  var _class = function () {
    function _class(msg) {
      _classCallCheck(this, _class);

      // FIXME: isJson is called 3 times on same object
      // TODO: don't use isJSON - try / catch should be sufficient
      if (!msg || !isJson(msg)) return;
      this.orgMessage = isJson(msg) ? JSON.stringify(msg) : msg;
      this.jMessage = isJson(msg) ? msg : JSON.parse(msg);
      this.signed = null;
      this.encrypted = null;
      this.routeHash = null;
      this.type = this.jMessage.type || null;
      this.action = this.jMessage.action || null;
      this.sha256 = null;
      this.interval = null;
      this.rateLimit = null;
      this.endPoint = null;
      this.mE = null;
      this.mK = null;
      this.mP = null;
      this.dm = null;
      this.proxyValidators = null;
    }

    _createClass(_class, [{
      key: 'log',
      value: function () {
        function log(msg) {
          // console.log("Message Context: " + msg);
        }

        return log;
      }()
    }, {
      key: 'getproxyCoordinator',
      value: function () {
        function getproxyCoordinator() {
          var _this = this;
          var msg = _this.jMessage;
          _this.endPoint = _index2['default'].sourceMap[this.action]["endpoint"];
          _this.md5Hash = _md2['default'].md5(this.action);
          var promise = new Promise(function (resolve, reject) {
            var _this2 = this;

            try {
              var stringRouteHash = (0, _utils2.getRouteHash)(msg);
              (0, _utils.sha1)(stringRouteHash).then(function (hashM) {
                _this.sha1 = hashM;
                var dmC = hexToBinary(hashM)['result'].slice(0, 13);
                var routeHash = parseInt(dmC, 2);
                _this.fullHash = hashM;
                _this.dmC = dmC;
                var totalProxies = 4096;
                var modRoute = routeHash % totalProxies;
                var proxy = _index2['default'].routeTable[modRoute];
                var proxyUrl = (0, _routing.getProxyVerifyUrl)({
                  host: proxy.dns,
                  ip: proxy.ip,
                  supportsHttps: proxy.ssl
                });
                _this.proxyCoordinator = proxyUrl;
                resolve(_this2);
              })['catch'](function (err) {
                console.log("ERROR >> " + err);
                reject(err);
              });
            } catch (e) {
              reject(e);
            }
          });
          return promise;
        }

        return getproxyCoordinator;
      }()

      /**
       * Method to generate an AES-CBC 128 bit key.
       * @returns crypto object of AES KEY.
       */

    }, {
      key: 'aesGenerateKey',
      value: function () {
        function aesGenerateKey() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            _crypto2['default'].subtle.generateKey({
              name: "AES-CBC",
              length: 128
            }, true, ["encrypt", "decrypt"]).then(function (key) {
              resolve(key);
            })['catch'](function (err) {
              console.log("Error in generating key: " + err);
              reject(err);
            });
          });
          return promise;
        }

        return aesGenerateKey;
      }()

      /**
       * Method to generate an AES-CBC 128 bit key.
       * @returns crypto object of AES KEY.
       */

    }, {
      key: 'aesExportKey',
      value: function () {
        function aesExportKey(key) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            _crypto2['default'].subtle.exportKey('raw', key).then(function (result) {
              _this.aesKey = (0, _encoding.toHex)(new Uint8Array(result));
              resolve(key);
            })['catch'](function (err) {
              console.log("Error in exporting key: " + err);
              reject(err);
            });
          });
          return promise;
        }

        return aesExportKey;
      }()
      /**
       * Method to parse a message and encrypt with AES.
       * @throws {string} Will throw 'msgtoobig' if message size exceeds a threshold.
       * @returns string of AES encrypted message.
       */

    }, {
      key: 'aesEncryption',
      value: function () {
        function aesEncryption(key, _iv, msgEncrypt) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            _crypto2['default'].subtle.encrypt({
              name: "AES-CBC",
              iv: _iv
            }, key, (0, _encoding.toUTF8)(msgEncrypt) //ArrayBuffer of data you want to encrypt
            ).then(function (encrypted) {
              resolve(encrypted);
            })['catch'](function (err) {
              console.log("Error in aes encryption: " + err);
              reject(err);
            });
          });
          return promise;
        }

        return aesEncryption;
      }()
    }, {
      key: 'rsaEncrypt',
      value: function () {
        function rsaEncrypt(msg) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            //let publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==";
            var publicKey = _index2['default'].secureLogger.publicKeyB64;
            _crypto2['default'].subtle.importKey('spki', (0, _encoding.fromBase64)(publicKey), {
              name: 'RSA-OAEP',
              hash: { name: 'SHA-1' }
            }, false, ['encrypt']).then(function (key) {
              _crypto2['default'].subtle.encrypt({
                name: "RSA-OAEP"
              }, key, (0, _encoding.toUTF8)(msg)).then(function (encrypted) {
                resolve((0, _encoding.toBase64)(new Uint8Array(encrypted)));
              })['catch'](function (err) {
                console.error("Error during rsa encryption: " + err);
                reject(err);
              });
            });
          });
          return promise;
        }

        return rsaEncrypt;
      }()
      /**
       * Method to parse a message and encrypt with AES.
       * @throws {string} Will throw 'msgtoobig' if message size exceeds a threshold.
       * @returns string of AES encrypted message.
       */

    }, {
      key: 'aesEncrypt',
      value: function () {
        function aesEncrypt(type) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _iv = _crypto2['default'].getRandomValues(new Uint8Array(16));
            var eventID = ('' + (0, _encoding.toHex)(_iv)).substring(0, 5);
            var aesKeyBytes;
            // console.log(">> IV: " + toHex(_iv));
            // console.log(">> E" + eventID);
            _this.eventID = eventID;
            _this.iv = (0, _encoding.toHex)(_iv);
            _this.mID = eventID;
            _this.oiv = _iv;

            _this.aesGenerateKey().then(function (key) {
              return _this.aesExportKey(key);
            }).then(function (key) {
              var encryptionPaylod = {};
              encryptionPaylod['msg'] = _this.orgMessage;
              encryptionPaylod['endpoint'] = _this.endPoint;
              var msgEncrypt = JSON.stringify(encryptionPaylod);
              if (type === "telemetry") {
                try {
                  msgEncrypt = padMessage(JSON.stringify(encryptionPaylod));
                } catch (e) {
                  reject(e);
                  return;
                }
              }

              _this.aesEncryption(key, _iv, msgEncrypt).then(function (encryptedResult) {
                _this.mE = (0, _encoding.toBase64)(new Uint8Array(encryptedResult));
                resolve(_this.mE);
              });
            });
          });
          return promise;
        }

        return aesEncrypt;
      }()

      /**
       * Method to parse a message and decrypt with AES.
       * @returns string of AES decrypted message.
       */

    }, {
      key: 'aesDecrypt',
      value: function () {
        function aesDecrypt(msg) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _msg = (0, _encoding.fromBase64)(msg.split(";")[1]);
            var hashKey = _this.aesKey;
            var _iv = _this.iv;
            _crypto2['default'].subtle.importKey("raw", //can be "jwk" or "raw"
            (0, _encoding.fromHex)(hashKey), "AES-CBC", false, //whether the key is extractable (i.e. can be used in exportKey)
            ["decrypt"] //can be "encrypt", "decrypt", "wrapKey", or "unwrapKey"
            ).then(function (key) {
              //returns the symmetric key
              // console.log("key");
              // console.log(key);
              _crypto2['default'].subtle.decrypt({
                name: "AES-CBC",
                iv: (0, _encoding.fromHex)(_iv) //The initialization vector you used to encrypt
              }, key, //from generateKey or importKey above
              _msg //ArrayBuffer of the data
              ).then(function (decrypted) {
                //returns an ArrayBuffer containing the decrypted data
                // console.log("Decrypted>>> " + fromUTF8(new Uint8Array(decrypted)));
                resolve((0, _encoding.fromUTF8)(new Uint8Array(decrypted)));
              })['catch'](function (err) {
                console.error(err);
              });
            })['catch'](function (err) {
              console.error(err);
            });
          });

          return promise;
        }

        return aesDecrypt;
      }()

      /**
       * Method to sign the AES encryptiong key with Aggregator Public key.
       * Calculate mK = {AESKey;iv;endPoint}
       * @returns string of encrypted key.
       */

    }, {
      key: 'signKey',
      value: function () {
        function signKey() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            try {
              // To protect from padding oracle attacks, we need to send the hash of
              // mE.
              var mI = _md2['default'].md5(_this.mE); // replace it with web-crypto md5.
              var messageToSign = _this.aesKey + ";" + _this.iv + ";endPoint;" + mI;
              _this.rsaEncrypt(messageToSign).then(function (encryptedResponse) {
                _this.signedKey = encryptedResponse;
                _this.mK = encryptedResponse;
                resolve(encryptedResponse);
              });
            } catch (e) {
              reject(e);
            }
          });
          return promise;
        }

        return signKey;
      }()

      /**
       * Method to create MP
       * Calculate mP = <mID, mK, mE>
       * @returns string called mP.
       */

    }, {
      key: 'getMP',
      value: function () {
        function getMP() {
          var mP = this.mID + ";" + this.mK + ";" + this.mE;
          this.mP = mP;
          return mP;
        }

        return getMP;
      }()
    }, {
      key: 'rsaE',
      value: function () {
        function rsaE() {
          rsaEncrypt();
        }

        return rsaE;
      }()
    }, {
      key: 'checkLocalUniq',
      value: function () {
        function checkLocalUniq() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {

            // Check for local temporal uniquness
            var uniqKey = _this.dmC;
            if (_index.localTemporalUniq && Object.keys(_index.localTemporalUniq).indexOf(uniqKey) > -1) {
              if (_index.localTemporalUniq[uniqKey]["fullhash"]) {
                if (_this.fullHash === _index.localTemporalUniq[uniqKey]["fullhash"]) {
                  reject("exact-duplicate");
                } else {
                  reject("collision");
                }
              }
            } else {
              resolve(true);
            }
          });
          return promise;
        }

        return checkLocalUniq;
      }()
    }, {
      key: 'blindMessage',
      value: function () {
        function blindMessage() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _this3 = this;

            // After the message is SIGNED, we need to start the blind signature.
            _this.getMP();

            var uPK = _index2['default'].uPK.publicKeyB64;

            // Messages to be blinded.
            _this.m1 = _this.mP;
            _this.m2 = _this.mP + ";" + uPK;
            _this.m3 = _this.mP + ";" + _this.dmC; // + ";" + uPK;

            var _bm1 = new _blindSignature.blindSignContext(_this.m1);
            var _bm2 = new _blindSignature.blindSignContext(_this.m2);
            var _bm3 = new _blindSignature.blindSignContext(_this.m3);

            _this.r1 = _bm1.getBlindingNonce();
            _this.r2 = _bm2.getBlindingNonce();
            _this.r3 = _bm3.getBlindingNonce();

            // Get Unblinder - to unblind the message
            _this.u1 = _bm1.getUnBlinder();
            _this.u2 = _bm2.getUnBlinder();
            _this.u3 = _bm3.getUnBlinder();

            // Blind the message
            _bm1.blindMessage().then(function (bm1) {
              _this.bm1 = bm1;
              return _bm2.blindMessage();
            }).then(function (bm2) {
              _this.bm2 = bm2;
              return _bm3.blindMessage();
            }).then(function (bm3) {
              _this.bm3 = bm3;
              resolve(_this3);
            });
          });
          return promise;
        }

        return blindMessage;
      }()
    }, {
      key: 'userSign',
      value: function () {
        function userSign() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _this4 = this;

            var uPK = _index2['default'].uPK.publicKeyB64;
            var payloadMsg = uPK + ";" + _this.bm1 + ";" + _this.bm2 + ";" + _this.bm3;
            var _uPK = new _userPk2['default'](payloadMsg);
            return _uPK.sign(payloadMsg).then(function (signedData) {
              _this.signedData = signedData;
              resolve(_this4);
            });
          });
          return promise;
        }

        return userSign;
      }()
    }, {
      key: 'sendBlindPayload',
      value: function () {
        function sendBlindPayload() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _this5 = this;

            var payload = (0, _utils2.createPayloadBlindSignature)(_index2['default'].uPK.publicKeyB64, _this.bm1, _this.bm2, _this.bm3, _this.signedData);
            return (0, _httpWorker2['default'])(_index2['default'].BLIND_SIGNER).post(JSON.stringify(payload)).then(function (response) {
              _this.bsResponse = JSON.parse(response);
              resolve(_this5);
            })['catch'](reject);
          });
          return promise;
        }

        return sendBlindPayload;
      }()
    }, {
      key: 'unBlindMessage',
      value: function () {
        function unBlindMessage() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var res = _this.bsResponse;
            // Capture the response
            var bs1 = res["bs1"];
            var bs2 = res["bs2"];
            var bs3 = res["bs3"];
            var suPK = res["suPK"];

            // Unblind the message to get the signature.
            _this.us1 = (0, _blindSignature.unBlindMessage)(bs1, _this.u1);
            _this.us2 = (0, _blindSignature.unBlindMessage)(bs2, _this.u2);
            _this.us3 = (0, _blindSignature.unBlindMessage)(bs3, _this.u3);
            _this.suPK = suPK;
            resolve(this);
          });
          return promise;
        }

        return unBlindMessage;
      }()
    }, {
      key: 'signUnblindedMessage',
      value: function () {
        function signUnblindedMessage() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _this6 = this;

            var payload = _index2['default'].uPK.publicKeyB64 + ";" + _this.mP + ";" + _this.dmC + ";" + _this.us1 + ";" + _this.us2 + ";" + _this.us3;
            var _uPK = new _userPk2['default'](payload);
            return _uPK.sign(payload).then(function (signedMessageProxy) {
              _this.signedMessageProxy = signedMessageProxy;
              resolve(_this6);
            });
          });
          return promise;
        }

        return signUnblindedMessage;
      }()
    }, {
      key: 'sendMessageProxy',
      value: function () {
        function sendMessageProxy() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            var _this7 = this;

            var payload = (0, _utils2.createPayloadProxy)(_index2['default'].uPK.publicKeyB64, _this.suPK, _this.mP, _this.dmC, _this.us1, _this.us2, _this.us3, _this.signedMessageProxy);
            return (0, _httpWorker2['default'])(_this.proxyCoordinator).post(JSON.stringify(payload)).then(function () {
              return resolve(_this7);
            })['catch'](function (err) {
              reject(err);
            });
          });
          return promise;
        }

        return sendMessageProxy;
      }()
    }, {
      key: 'saveLocalCheckTable',
      value: function () {
        function saveLocalCheckTable() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            // Save the hash in temporal unique queue.
            var tt = new Date().getTime();
            _index.localTemporalUniq[_this.dmC] = { "ts": tt, "fullhash": _this.fullHash };
            resolve(this);
          });
          return promise;
        }

        return saveLocalCheckTable;
      }()
    }, {
      key: 'query',
      value: function () {
        function query(queryProxyUrl) {
          var _this8 = this;

          return this.aesEncrypt().then(function () {
            return _this8.signKey();
          }).then(function () {
            var data = { "mP": _this8.getMP() };
            return (0, _httpWorker2['default'])(queryProxyUrl).post(JSON.stringify(data), "instant");
          }).then(function (res) {
            // Got response, let's decrypt it.
            return _this8.aesDecrypt(JSON.parse(res)["data"]);
          })['catch'](function (err) {
            _this8.log(err);
            return Promise.reject(err);
          });
        }

        return query;
      }()
    }, {
      key: 'encryptedTelemetry',
      value: function () {
        function encryptedTelemetry() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            try {
              return _this.getproxyCoordinator().then(function () {
                return _this.checkLocalUniq();
              }).then(function () {
                return _this.aesEncrypt("telemetry");
              }).then(function () {
                return _this.signKey();
              }).then(function () {
                return _this.blindMessage();
              }).then(function () {
                return _this.userSign();
              }).then(function () {
                return _this.sendBlindPayload();
              }).then(function () {
                return _this.unBlindMessage();
              }).then(function () {
                return _this.signUnblindedMessage();
              }).then(function () {
                return _this.sendMessageProxy();
              }).then(function () {
                return _this.saveLocalCheckTable();
              }).then(function () {
                return resolve(true);
              })['catch'](function (err) {
                console.log(err);
                reject(err);
              });
            } catch (err) {
              console.log("Error creating mc: " + err);
              reject(err);
            }
          });
          return promise;
        }

        return encryptedTelemetry;
      }()
    }]);

    return _class;
  }();

  exports['default'] = _class;
  ;
});
$__System.registerDynamic("11", ["15", "12", "16"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.signRSA = exports.generateRSAKeypair = exports.exportPublicKey = exports.exportPrivateKey = exports.sha1 = exports.deriveAESKey = exports.randomBytes = exports.decryptStringRSA = exports.decryptRSA = exports.encryptRSA = exports.rawEncryptRSA = exports.encryptStringRSA = exports.unwrapAESKey = exports.wrapAESKey = exports.importRSAKey = exports.importAESKey = exports.exportAESKey = exports.generateAESKey = exports.decryptStringAES = exports.decryptAES = exports.encryptStringAES = exports.encryptAES = exports.toArrayBuffer = exports.fromArrayBuffer = exports.toByteArray = exports.fromByteArray = exports.sha256 = exports.hash = undefined;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }(); /* eslint-disable camelcase */

  var _crypto = $__require("15");

  var _crypto2 = _interopRequireDefault(_crypto);

  var _encoding = $__require("12");

  var _pkcsConversion = $__require("16");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  function fromByteArray(data, format) {
    if (format === 'hex') {
      return (0, _encoding.toHex)(data);
    } else if (format === 'b64') {
      return (0, _encoding.toBase64)(data);
    }
    return data;
  }
  function toByteArray(data, format) {
    if (format === 'hex') {
      return (0, _encoding.fromHex)(data);
    } else if (format === 'b64') {
      return (0, _encoding.fromBase64)(data);
    }
    return data;
  }
  function fromArrayBuffer(data, format) {
    return fromByteArray(new Uint8Array(data), format);
  }
  function toArrayBuffer(data, format) {
    return toByteArray(data, format).buffer;
  }
  function hash(algo, str) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

    return _crypto2['default'].subtle.digest(algo, typeof str === 'string' ? (0, _encoding.toUTF8)(str) : str).then(function (h) {
      return fromArrayBuffer(h, format);
    });
  }
  function sha256(str) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hex';

    return hash('SHA-256', str, format);
  }
  function importAESKey(key) {
    return _crypto2['default'].subtle.importKey('raw', toArrayBuffer(key, 'hex'), { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  }
  function encryptAES(data, key, iv) {
    return Promise.all([iv || _crypto2['default'].getRandomValues(new Uint8Array(12)), typeof key === 'string' ? importAESKey(key) : key]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _iv = _ref2[0],
          _key = _ref2[1];

      return _crypto2['default'].subtle.encrypt({ name: 'AES-GCM', iv: _iv }, _key, data).then(function (encrypted) {
        return [fromArrayBuffer(_iv, 'b64'), fromArrayBuffer(encrypted, 'b64')];
      });
    });
  }
  // Returns [IV, encryptedData]
  function encryptStringAES(txt, key, iv) {
    return encryptAES((0, _encoding.toUTF8)(txt).buffer, key, iv);
  }
  function decryptAES(encrypted, key) {
    var iv = encrypted[0];
    var encryptedMsg = encrypted[1];
    iv = new Uint8Array(toArrayBuffer(iv, 'b64'));
    encryptedMsg = toArrayBuffer(encryptedMsg, 'b64');
    return Promise.resolve().then(function () {
      return typeof key === 'string' ? importAESKey(key) : key;
    }).then(function (importedKey) {
      return _crypto2['default'].subtle.decrypt({ name: 'AES-GCM', iv: iv }, importedKey, encryptedMsg);
    });
  }
  function decryptStringAES(encrypted, key) {
    return decryptAES(encrypted, key).then(function (decrypted) {
      return (0, _encoding.fromUTF8)(new Uint8Array(decrypted));
    });
  }
  function generateAESKey() {
    return _crypto2['default'].subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  }
  function exportAESKey(key) {
    return _crypto2['default'].subtle.exportKey('raw', key).then(function (_key) {
      return fromArrayBuffer(_key, 'hex');
    });
  }
  function importRSAKey(pk) {
    var pub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'SHA-256';
    var algorithm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'RSA-OAEP';

    var uses = void 0;
    if (pub) {
      if (algorithm === 'RSA-OAEP') {
        uses = ['wrapKey', 'encrypt'];
      } else {
        uses = ['verify'];
      }
    } else if (algorithm === 'RSA-OAEP') {
      uses = ['unwrapKey', 'decrypt'];
    } else {
      uses = ['sign'];
    }
    return _crypto2['default'].subtle.importKey(pub ? 'spki' : 'pkcs8', (0, _encoding.fromBase64)(pk), {
      name: algorithm,
      hash: { name: h }
    }, true, uses);
  }
  function wrapAESKey(aesKey, publicKey) {
    return Promise.resolve(typeof publicKey === 'string' ? importRSAKey(publicKey, true) : publicKey).then(function (pk) {
      return _crypto2['default'].subtle.wrapKey('raw', aesKey, pk, { name: 'RSA-OAEP', hash: { name: 'SHA-256' } });
    }).then(function (wrapped) {
      return (0, _encoding.toBase64)(wrapped);
    });
  }
  function unwrapAESKey(aesKey, privateKey) {
    return Promise.resolve(typeof privateKey === 'string' ? importRSAKey(privateKey, false) : privateKey).then(function (pk) {
      return _crypto2['default'].subtle.unwrapKey('raw', (0, _encoding.fromBase64)(aesKey), pk, {
        name: 'RSA-OAEP',
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: { name: 'SHA-256' }
      }, {
        name: 'AES-GCM',
        length: 256
      }, true, ['encrypt', 'decrypt']);
    });
  }
  function encryptStringRSA(txt, publicKey) {
    return generateAESKey().then(function (aesKey) {
      var promise = void 0;
      if (Array.isArray(publicKey)) {
        promise = Promise.all(publicKey.map(function (x) {
          return wrapAESKey(aesKey, x);
        }));
      } else {
        promise = wrapAESKey(aesKey, publicKey);
      }
      return Promise.all([encryptStringAES(txt, aesKey), promise]);
    });
  }
  function rawEncryptRSA(data, publicKey) {
    return importRSAKey(publicKey, true, 'SHA-1').then(function (key) {
      return _crypto2['default'].subtle.encrypt({ name: 'RSA-OAEP' }, key, data);
    }).then(function (d) {
      return new Uint8Array(d);
    });
  }
  function _encryptRSA(data, pubKey, aesKey) {
    var wrapPromise = Array.isArray(pubKey) ? Promise.all(pubKey.map(function (x) {
      return wrapAESKey(aesKey, x);
    })) : wrapAESKey(aesKey, pubKey);
    return Promise.all([encryptAES(data, aesKey), wrapPromise]);
  }
  function encryptRSA(data, publicKey, aesKey) {
    if (aesKey) {
      return _encryptRSA(data, publicKey, aesKey);
    }
    return generateAESKey().then(function (k) {
      return _encryptRSA(data, publicKey, k);
    });
  }
  function decryptRSA(data, privateKey) {
    var _data2 = _slicedToArray(data, 2),
        encrypted = _data2[0],
        wrappedKey = _data2[1];

    return unwrapAESKey(wrappedKey, privateKey).then(function (aesKey) {
      return decryptAES(encrypted, aesKey);
    });
  }
  function decryptStringRSA(data, privateKey) {
    var _data3 = _slicedToArray(data, 2),
        encrypted = _data3[0],
        wrappedKey = _data3[1];

    return unwrapAESKey(wrappedKey, privateKey).then(function (aesKey) {
      return decryptStringAES(encrypted, aesKey);
    });
  }

  function randomBytes(numBytes) {
    return _crypto2['default'].getRandomValues(new Uint8Array(numBytes));
  }

  function deriveAESKey(bytes) {
    return sha256(bytes, 'raw').then(function (h) {
      return _crypto2['default'].subtle.importKey('raw', h, { name: 'AES-GCM' }, true, ['encrypt', 'decrypt']);
    });
  }

  function sha1(s) {
    return hash('SHA-1', s);
  }

  function generateRSAKeypair() {
    var bits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2048;

    return _crypto2['default'].subtle.generateKey({
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: bits,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: 'SHA-256' }
    }, true, ['sign', 'verify']).then(function (key) {
      return Promise.all([_crypto2['default'].subtle.exportKey('spki', key.publicKey).then(_encoding.toBase64), _crypto2['default'].subtle.exportKey('pkcs8', key.privateKey).then(_encoding.toBase64)]);
    });
  }

  function signRSA(privateKey, data) {
    var _data = typeof data === 'string' ? (0, _encoding.toUTF8)(data) : data;
    return _crypto2['default'].subtle.sign({ name: 'RSASSA-PKCS1-v1_5' }, privateKey, _data).then(_encoding.toHex);
  }

  exports.hash = hash;
  exports.sha256 = sha256;
  exports.fromByteArray = fromByteArray;
  exports.toByteArray = toByteArray;
  exports.fromArrayBuffer = fromArrayBuffer;
  exports.toArrayBuffer = toArrayBuffer;
  exports.encryptAES = encryptAES;
  exports.encryptStringAES = encryptStringAES;
  exports.decryptAES = decryptAES;
  exports.decryptStringAES = decryptStringAES;
  exports.generateAESKey = generateAESKey;
  exports.exportAESKey = exportAESKey;
  exports.importAESKey = importAESKey;
  exports.importRSAKey = importRSAKey;
  exports.wrapAESKey = wrapAESKey;
  exports.unwrapAESKey = unwrapAESKey;
  exports.encryptStringRSA = encryptStringRSA;
  exports.rawEncryptRSA = rawEncryptRSA;
  exports.encryptRSA = encryptRSA;
  exports.decryptRSA = decryptRSA;
  exports.decryptStringRSA = decryptStringRSA;
  exports.randomBytes = randomBytes;
  exports.deriveAESKey = deriveAESKey;
  exports.sha1 = sha1;
  exports.exportPrivateKey = _pkcsConversion.exportPrivateKey;
  exports.exportPublicKey = _pkcsConversion.exportPublicKey;
  exports.generateRSAKeypair = generateRSAKeypair;
  exports.signRSA = signRSA;
});
$__System.registerDynamic('f', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    $__global['md5'] = md5;
    $__global['hex'] = hex;
    $__global['rhex'] = rhex;
    $__global['md51'] = md51;
    $__global['md5blk'] = md5blk;
    $__global['md5cycle'] = md5cycle;
    $__global['ii'] = ii;
    $__global['hh'] = hh;
    $__global['gg'] = gg;
    $__global['ff'] = ff;
    $__global['cmn'] = cmn;
    $__global['add32'] = add32;
    // WARNING: for utf-8 strings result will be different than 'standard' md5.
    // This is because unicode values instead of utf-8 bytes are used (to avoid
    // conversion overhead). Using this to not break anything, since it has been
    // used for long time in several places in our code. If you need a 'standard'
    // md5 function, use another one.

    // Copied from http://www.myersdaily.org/joseph/javascript/md5-text.html
    // and adapted to match our coding style guide

    /* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */
    function add32(a, b) {
      return a + b & 0xFFFFFFFF;
    }

    function cmn(q, a, b, x, s, t) {
      const aa = add32(add32(a, q), add32(x, t));
      return add32(aa << s | aa >>> 32 - s, b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    function md5cycle(x, k) {
      let a = x[0];
      let b = x[1];
      let c = x[2];
      let d = x[3];
      const xx = x;

      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);

      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);

      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);

      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);

      xx[0] = add32(a, x[0]);
      xx[1] = add32(b, x[1]);
      xx[2] = add32(c, x[2]);
      xx[3] = add32(d, x[3]);
    }

    /* there needs to be support for Unicode here,
     * unless we pretend that we can redefine the MD-5
     * algorithm for multi-byte characters (perhaps
     * by adding every four 16-bit characters and
     * shortening the sum to 32 bits). Otherwise
     * I suggest performing MD-5 as if every character
     * was two bytes--e.g., 0040 0025 = @%--but then
     * how will an ordinary MD-5 sum be matched?
     * There is no way to standardize text to something
     * like UTF-8 before transformation; speed cost is
     * utterly prohibitive. The JavaScript standard
     * itself needs to look at this: it should start
     * providing access to strings as preformed UTF-8
     * 8-bit unsigned value arrays.
     */
    function md5blk(s) {
      /* I figured global was faster.   */
      const md5blks = [];
      let i; /* Andy King said do it this way. */
      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
    }

    function md51(s) {
      const n = s.length;
      const state = [1732584193, -271733879, -1732584194, 271733878];
      let i;
      for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }
      const ss = s.substring(i - 64);
      const tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < ss.length; i++) {
        tail[i >> 2] |= ss.charCodeAt(i) << (i % 4 << 3);
      }
      tail[i >> 2] |= 0x80 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
      }
      tail[14] = n * 8;
      md5cycle(state, tail);
      return state;
    }

    const hexChr = '0123456789abcdef'.split('');

    function rhex(n) {
      let s = '';
      let j = 0;
      for (; j < 4; j++) {
        s += hexChr[n >> j * 8 + 4 & 0x0F] + hexChr[n >> j * 8 & 0x0F];
      }
      return s;
    }

    function hex(x) {
      const xx = x;
      for (let i = 0; i < x.length; i++) {
        xx[i] = rhex(x[i]);
      }
      return x.join('');
    }

    function md5(s) {
      let l = s.length;
      var _md5 = hex(md51(s));
      return _md5;
    }
  })(this);

  return _retrieveGlobal();
});
$__System.registerDynamic("16", ["12"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.exportPublicKeySimple = exports.privateKeytoKeypair = exports.importPrivateKey = exports.importPublicKey = exports.exportPublicKeySPKI = exports.exportPublicKey = exports.exportPrivateKey = exports.exportPrivateKeyPKCS8 = exports.importPrivateKeyPKCS8 = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /* eslint-disable no-bitwise */
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-plusplus */

  var _encoding = $__require("12");

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ByteBuffer = function () {
    function ByteBuffer(length) {
      _classCallCheck(this, ByteBuffer);

      this.buffer = new Uint8Array(length);
      this.pos = 0;
    }

    _createClass(ByteBuffer, [{
      key: 'setData',
      value: function () {
        function setData(data) {
          this.buffer = data;
          this.pos = 0;
        }

        return setData;
      }()
    }, {
      key: 'readByte',
      value: function () {
        function readByte() {
          if (this.pos + 1 > this.buffer.length) {
            throw new Error('Tried to read past the buffer length');
          }
          var pos = this.pos;
          this.pos += 1;
          return this.buffer[pos];
        }

        return readByte;
      }()
    }, {
      key: 'readBytes',
      value: function () {
        function readBytes(length) {
          if (this.pos + length > this.buffer.length) {
            throw new Error('Tried to read past the buffer length');
          }
          var res = this.buffer.subarray(this.pos, this.pos + length);
          this.pos += length;
          return res;
        }

        return readBytes;
      }()
    }, {
      key: 'resetPointer',
      value: function () {
        function resetPointer() {
          this.pos = 0;
        }

        return resetPointer;
      }()
    }, {
      key: 'pushByte',
      value: function () {
        function pushByte(byte) {
          if (this.pos + 1 > this.buffer.length) {
            var newBuffer = new Uint8Array(this.buffer.length * 2);
            newBuffer.set(this.buffer);
            this.buffer = newBuffer;
          }
          var pos = this.pos;
          this.pos += 1;
          this.buffer[pos] = byte;
        }

        return pushByte;
      }()
    }, {
      key: 'pushBytes',
      value: function () {
        function pushBytes(bytes) {
          if (this.pos + bytes.length > this.buffer.length) {
            var newBuffer = new Uint8Array((this.pos + bytes.length) * 2);
            newBuffer.set(this.buffer);
            this.buffer = newBuffer;
          }
          this.buffer.set(bytes, this.pos);
          this.pos += bytes.length;
        }

        return pushBytes;
      }()
    }, {
      key: 'toBase64',
      value: function () {
        function toBase64() {
          return (0, _encoding.toBase64)(this.buffer.subarray(0, this.pos));
        }

        return toBase64;
      }()
    }, {
      key: 'fromBase64',
      value: function () {
        function fromBase64(data) {
          this.pushBytes((0, _encoding.fromBase64)(data));
        }

        return fromBase64;
      }()
    }]);

    return ByteBuffer;
  }();

  function bytesToEncode(len) {
    var sum = len + 1;
    if (len < 1 << 7) {
      sum += 1;
    } else if (len < 1 << 8) {
      sum += 2;
    } else if (len < 1 << 16) {
      sum += 3;
    } else if (len < 1 << 24) {
      sum += 4;
    } else if (len < 1 << 32) {
      sum += 5;
    } else {
      throw new Error('value too big ' + len);
    }
    return sum;
  }

  function pushLength(buffer, len) {
    if (len < 1 << 7) {
      buffer.pushByte(len);
    } else if (len < 1 << 8) {
      buffer.pushByte(0x81);
      buffer.pushByte(len);
    } else if (len < 1 << 16) {
      buffer.pushByte(0x82);
      buffer.pushByte(len >> 8);
      buffer.pushByte(len & 0xFF);
    } else if (len < 1 << 24) {
      buffer.pushByte(0x83);
      buffer.pushByte(len >> 16);
      buffer.pushByte(len >> 8 & 0xFF);
      buffer.pushByte(len & 0xFF);
    } else if (len < 1 << 32) {
      buffer.pushByte(0x84);
      buffer.pushByte(len >> 24);
      buffer.pushByte(len >> 16 & 0xFF);
      buffer.pushByte(len >> 8 & 0xFF);
      buffer.pushByte(len & 0xFF);
    } else {
      throw new Error('value too big ' + len);
    }
  }

  function fromBase64url(data) {
    data = data.replace(/-/g, '+').replace(/_/g, '/');
    var pads = (4 - data.length % 4) % 4;
    if (pads === 3) {
      throw new Error('illegal base64 string: ' + String(data));
    }
    for (var i = 0; i < pads; i++) {
      data += '=';
    }
    return data;
  }

  function toBase64url(data) {
    data = data.replace(/\+/g, '-').replace(/\//g, '_');
    for (var i = 0; i < 2; ++i) {
      if (data[data.length - 1] === '=') {
        data = data.substring(0, data.length - 1);
      }
    }
    return data;
  }

  function padIfSigned(array) {
    if (array[0] & 0x80) {
      var newArray = new Uint8Array(array.length + 1);
      newArray[0] = 0;
      newArray.set(array, 1);
      return newArray;
    }
    return array;
  }
  /* RSAPrivateKey ::= SEQUENCE {
    version           0,
    modulus           INTEGER,  -- n
    publicExponent    INTEGER,  -- e
    privateExponent   INTEGER,  -- d
    prime1            INTEGER,  -- p
    prime2            INTEGER,  -- q
    exponent1         INTEGER,  -- d mod (p-1)
    exponent2         INTEGER,  -- d mod (q-1)
    coefficient       INTEGER,  -- (inverse of q) mod p
  }*/

  /* RSAPublicKey ::= SEQUENCE {
      modulus           INTEGER,  -- n
      publicExponent    INTEGER   -- e
  }*/
  function exportPrivateKey(key) {
    var origValues = ['AA==', key.n, key.e, key.d, key.p, key.q, key.dp, key.dq, key.qi];
    var values = origValues.map(function (x) {
      return padIfSigned((0, _encoding.fromBase64)(fromBase64url(x)));
    });
    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }
  function exportPublicKeySimple(key) {
    var origValues = [key.n, key.e];
    var values = origValues.map(function (x) {
      return padIfSigned((0, _encoding.fromBase64)(fromBase64url(x)));
    });
    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }
  /* RSAPublicKey ::= SEQUENCE {
      modulus           INTEGER,  -- n
      publicExponent    INTEGER   -- e
  }*/

  // SEQUENCE(2 elem)
  // SEQUENCE(2 elem)
  // OBJECT IDENTIFIER 1.2.840.113549.1.1.1
  // NULL
  // BIT STRING(1 elem)
  // SEQUENCE(2 elem)
  // INTEGER(2048 bit) n
  // INTEGER e
  function exportPublicKey(key) {
    var origValues = [key.n, key.e];
    var values = origValues.map(function (x) {
      return padIfSigned((0, _encoding.fromBase64)(fromBase64url(x)));
    });
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);

    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, bytesToEncode(bytesToEncode(numBytes) + 1) + 15);

    buffer.pushBytes(new Uint8Array([0x30, 0x0D, 0x06, 0x09, 0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x01, 0x05, 0x00]));
    buffer.pushByte(0x03); // BIT STRING
    pushLength(buffer, bytesToEncode(numBytes) + 1);
    buffer.pushByte(0x00);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }

  function exportPublicKeySPKI(key) {
    return exportPublicKey(key);
  }

  function exportPrivateKeyPKCS8(key) {
    var origValues = ['AA==', key.n, key.e, key.d, key.p, key.q, key.dp, key.dq, key.qi];
    var values = origValues.map(function (x) {
      return padIfSigned((0, _encoding.fromBase64)(fromBase64url(x)));
    });
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);

    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, 3 + 15 + bytesToEncode(bytesToEncode(numBytes)));
    buffer.pushBytes(new Uint8Array([0x02, 0x01, 0x00]));
    buffer.pushBytes(new Uint8Array([0x30, 0x0D, 0x06, 0x09, 0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x01, 0x05, 0x00]));
    buffer.pushByte(0x04); // OCTET STRING
    pushLength(buffer, bytesToEncode(numBytes));

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }

  function readLength(buffer) {
    var first = buffer.readByte();
    if (first & 0x80) {
      var numBytes = first & 0x7F;
      var res = 0;
      while (numBytes--) {
        res = res << 8 | buffer.readByte();
      }
      return res;
    }
    return first;
  }

  function readInteger(buffer) {
    var tag = buffer.readByte();
    if (tag !== 0x02) {
      throw new Error('invalid tag for integer value');
    }
    var len = readLength(buffer);
    var val = buffer.readBytes(len);
    if (val[0] === 0) {
      // Remove padding?
      val = val.subarray(1);
    }
    return val;
  }

  function __importKey(buffer, values) {
    var key = {};
    if (buffer.readByte() === 0x30) {
      readLength(buffer);
      for (var i = 0; i < values.length; ++i) {
        var val = readInteger(buffer);
        val = toBase64url((0, _encoding.toBase64)(val));
        key[values[i]] = val;
      }
    } else {
      throw new Error('first value not correct');
    }
    if (buffer.pos !== buffer.buffer.length) {
      throw new Error('not all input data consumed');
    }
    key.alg = 'RS256';
    key.ext = true;
    key.kty = 'RSA';
    return key;
  }

  function _importKey(data, values) {
    var buffer = new ByteBuffer(0);
    buffer.setData((0, _encoding.fromBase64)(data));
    return __importKey(buffer, values);
  }

  function importPublicKey(data) {
    var buffer = new ByteBuffer(0);
    buffer.setData((0, _encoding.fromBase64)(data));
    if (buffer.readByte() === 0x30) {
      readLength(buffer);
      buffer.readBytes(15);
      if (buffer.readByte() !== 0x03) {
        throw new Error('format not correct');
      }
      readLength(buffer);
      if (buffer.readByte() !== 0x00) {
        throw new Error('format not correct');
      }
    } else {
      throw new Error('format not correct');
    }
    return __importKey(buffer, ['n', 'e']);
  }

  function importPrivateKeyPKCS8(data) {
    var buffer = new ByteBuffer(0);
    buffer.setData((0, _encoding.fromBase64)(data));
    buffer.readByte();
    readLength(buffer);
    buffer.readBytes(3);
    buffer.readBytes(15);
    buffer.readByte();
    readLength(buffer);
    var res = __importKey(buffer, ['version', 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi']);
    delete res.version;
    return res;
  }

  function importPrivateKey(data) {
    var res = _importKey(data, ['version', 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi']);
    delete res.version;
    return res;
  }

  function privateKeytoKeypair(privateKey) {
    var key = importPrivateKey(privateKey);
    return [exportPublicKeySPKI(key), exportPrivateKeyPKCS8(key)];
  }

  exports.importPrivateKeyPKCS8 = importPrivateKeyPKCS8;
  exports.exportPrivateKeyPKCS8 = exportPrivateKeyPKCS8;
  exports.exportPrivateKey = exportPrivateKey;
  exports.exportPublicKey = exportPublicKey;
  exports.exportPublicKeySPKI = exportPublicKeySPKI;
  exports.importPublicKey = importPublicKey;
  exports.importPrivateKey = importPrivateKey;
  exports.privateKeytoKeypair = privateKeytoKeypair;
  exports.exportPublicKeySimple = exportPublicKeySimple;
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports["default"] = function (url) {

    var core = {

      // Method that performs request
      req: function () {
        function req(method, url, data, type) {
          // Creating a promise
          var promise = new Promise(function (resolve, reject) {

            // Instantiates the XMLHttpRequest
            var client = new XMLHttpRequest();
            var uri = url;
            var ts = new Date().getTime();

            client.open(method, uri, true);
            client.setRequestHeader("x-type", type ? type : "delayed");
            client.overrideMimeType('application/json');
            //client.setRequestHeader("Content-Type", "application/json;charset=utf-8");

            client.onload = function () {
              var statusClass = parseInt(client.status / 100);
              if (statusClass == 2 || statusClass == 3 || statusClass == 0 /* local files */) {
                  // Performs the function "resolve" when this.status is equal to 2xx
                  resolve(this.response);
                } else {
                // Performs the function "reject" when this.status is different than 2xx
                var errorMessage = this.statusText || "Request failed with status " + String(client.status);
                reject(errorMessage);
              }
            };
            client.onerror = function () {
              reject(this.statusText);
            };
            client.ontimeout = function () {
              reject(this.statusText);
            };

            client.send(data);
          });

          // Return the promise
          return promise;
        }

        return req;
      }()
    };

    return {
      'get': function () {
        function get(args) {
          return core.req('GET', url, args);
        }

        return get;
      }(),
      'post': function () {
        function post(args, type) {
          return core.req('POST', url, args, type);
        }

        return post;
      }()
    };
  };
});
$__System.registerDynamic("10", ["d", "16", "12", "14", "15"], true, function ($__require, exports, module) {
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

  var _index = $__require("d");

  var _index2 = _interopRequireDefault(_index);

  var _pkcsConversion = $__require("16");

  var _encoding = $__require("12");

  var _httpWorker = $__require("14");

  var _httpWorker2 = _interopRequireDefault(_httpWorker);

  var _crypto = $__require("15");

  var _crypto2 = _interopRequireDefault(_crypto);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class = function () {
    function _class(msg) {
      _classCallCheck(this, _class);

      this.privateKey = "";
      this.publicKey = "";
    }

    /**
     * Method to sign the str using userSK.
     * @returns signature in hex format.
     */

    _createClass(_class, [{
      key: 'sign',
      value: function () {
        function sign(msg) {
          var promise = new Promise(function (resolve, reject) {
            var ppk = (0, _pkcsConversion.privateKeytoKeypair)(_index2['default'].uPK.privateKey);
            _crypto2['default'].subtle.importKey("pkcs8", (0, _encoding.fromBase64)(ppk[1]), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]).then(function (privateKey) {
              var documentBytes = (0, _encoding.toUTF8)(msg);
              _crypto2['default'].subtle.sign({ name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, privateKey, documentBytes).then(function (signatureBuffer) {
                var signatureBytes = new Uint8Array(signatureBuffer);
                var signatureHex = (0, _encoding.toHex)(signatureBytes);
                resolve(signatureHex);
              })['catch'](function (err) {
                return reject(err);
              });
            })['catch'](function (err) {
              return reject(err);
            });
          });
          return promise;
        }

        return sign;
      }()
    }, {
      key: 'verify',
      value: function () {
        function verify(sig, msg) {
          var promise = new Promise(function (resolve, reject) {
            var ppk = (0, _pkcsConversion.privateKeytoKeypair)(_index2['default'].uPK.privateKey);
            _crypto2['default'].subtle.importKey("spki", (0, _encoding.fromBase64)(ppk[0]), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]).then(function (publicKey) {
              var signatureBytes = (0, _encoding.fromHex)(sig);
              var documentBytes = (0, _encoding.toUTF8)(msg);
              _crypto2['default'].subtle.verify({ name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, publicKey, signatureBytes, documentBytes).then(function (validSignature) {
                resolve(validSignature);
              })['catch'](function (err) {
                return console.log(err);
              });
            });
          });
          return promise;
        }

        return verify;
      }()
    }, {
      key: 'generateKey',
      value: function () {
        function generateKey() {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
            _crypto2['default'].subtle.generateKey({
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: 2048,
              publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
              hash: { name: "SHA-256" }
            }, true, ["sign", "verify"]).then(function (key) {
              return _crypto2['default'].subtle.exportKey("jwk", key.privateKey);
            }).then(function (key) {
              var return_data = {};
              return_data["privKeyB64"] = (0, _pkcsConversion.exportPrivateKey)(key);
              return_data["publicKeyB64"] = (0, _pkcsConversion.exportPublicKey)(key);
              _this.privateKey = return_data["privKeyB64"];
              _this.publicKey = return_data["publicKeyB64"];
              return return_data;
            }).then(function (keys) {
              return (0, _httpWorker2['default'])(_index2['default'].USER_REG).post(JSON.stringify({ "pk": keys["publicKeyB64"] }));
            }).then(function (e) {
              return resolve({ "status": true, "privateKey": _this.privateKey, "publicKey": _this.publicKey });
            })['catch'](function (e) {
              return reject({ "status": e.message });
            });
          });
          return promise;
        }

        return generateKey;
      }()
    }]);

    return _class;
  }();

  exports['default'] = _class;
  ;
});
$__System.registerDynamic('17', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    $__global['mont_'] = mont_;
    $__global['powMod_'] = powMod_;
    $__global['trim'] = trim;
    $__global['squareMod_'] = squareMod_;
    $__global['multMod_'] = multMod_;
    $__global['mod_'] = mod_;
    $__global['mult_'] = mult_;
    $__global['add_'] = add_;
    $__global['sub_'] = sub_;
    $__global['subShift_'] = subShift_;
    $__global['addShift_'] = addShift_;
    $__global['linCombShift_'] = linCombShift_;
    $__global['linComb_'] = linComb_;
    $__global['divInt_'] = divInt_;
    $__global['multInt_'] = multInt_;
    $__global['leftShift_'] = leftShift_;
    $__global['halve_'] = halve_;
    $__global['rightShift_'] = rightShift_;
    $__global['addInt_'] = addInt_;
    $__global['copyInt_'] = copyInt_;
    $__global['copy_'] = copy_;
    $__global['dup'] = dup;
    $__global['bigInt2str'] = bigInt2str;
    $__global['isZero'] = isZero;
    $__global['equals'] = equals;
    $__global['equalsInt'] = equalsInt;
    $__global['str2bigInt'] = str2bigInt;
    $__global['int2bigInt'] = int2bigInt;
    $__global['modInt'] = modInt;
    $__global['carry_'] = carry_;
    $__global['divide_'] = divide_;
    $__global['greater'] = greater;
    $__global['greaterShift'] = greaterShift;
    $__global['negative'] = negative;
    $__global['eGCD_'] = eGCD_;
    $__global['inverseModInt_'] = inverseModInt_;
    $__global['inverseModInt'] = inverseModInt;
    $__global['inverseMod_'] = inverseMod_;
    $__global['GCD_'] = GCD_;
    $__global['GCD'] = GCD;
    $__global['randBigInt_'] = randBigInt_;
    $__global['randBigInt'] = randBigInt;
    $__global['randTruePrime_'] = randTruePrime_;
    $__global['multMod'] = multMod;
    $__global['inverseMod'] = inverseMod;
    $__global['add'] = add;
    $__global['sub'] = sub;
    $__global['powMod'] = powMod;
    $__global['mult'] = mult;
    $__global['addInt'] = addInt;
    $__global['mod'] = mod;
    $__global['randProbPrimeRounds'] = randProbPrimeRounds;
    $__global['randProbPrime'] = randProbPrime;
    $__global['randTruePrime'] = randTruePrime;
    $__global['expand'] = expand;
    $__global['bitSize'] = bitSize;
    $__global['millerRabin'] = millerRabin;
    $__global['millerRabinInt'] = millerRabinInt;
    $__global['findPrimes'] = findPrimes;
    ////////////////////////////////////////////////////////////////////////////////////////
    // Big Integer Library v. 5.5
    // Created 2000, last modified 2013
    // Leemon Baird
    // www.leemon.com
    //
    // Version history:
    // v 5.5  17 Mar 2013
    //   - two lines of a form like "if (x<0) x+=n" had the "if" changed to "while" to
    //     handle the case when x<-n. (Thanks to James Ansell for finding that bug)
    // v 5.4  3 Oct 2009
    //   - added "var i" to greaterShift() so i is not global. (Thanks to PŽter Szab— for finding that bug)
    //
    // v 5.3  21 Sep 2009
    //   - added randProbPrime(k) for probable primes
    //   - unrolled loop in mont_ (slightly faster)
    //   - millerRabin now takes a bigInt parameter rather than an int
    //
    // v 5.2  15 Sep 2009
    //   - fixed capitalization in call to int2bigInt in randBigInt
    //     (thanks to Emili Evripidou, Reinhold Behringer, and Samuel Macaleese for finding that bug)
    //
    // v 5.1  8 Oct 2007
    //   - renamed inverseModInt_ to inverseModInt since it doesn't change its parameters
    //   - added functions GCD and randBigInt, which call GCD_ and randBigInt_
    //   - fixed a bug found by Rob Visser (see comment with his name below)
    //   - improved comments
    //
    // This file is public domain.   You can use it for any purpose without restriction.
    // I do not guarantee that it is correct, so use it at your own risk.  If you use
    // it for something interesting, I'd appreciate hearing about it.  If you find
    // any bugs or make any improvements, I'd appreciate hearing about those too.
    // It would also be nice if my name and URL were left in the comments.  But none
    // of that is required.
    //
    // This code defines a bigInt library for arbitrary-precision integers.
    // A bigInt is an array of integers storing the value in chunks of bpe bits,
    // little endian (buff[0] is the least significant word).
    // Negative bigInts are stored two's complement.  Almost all the functions treat
    // bigInts as nonnegative.  The few that view them as two's complement say so
    // in their comments.  Some functions assume their parameters have at least one
    // leading zero element. Functions with an underscore at the end of the name put
    // their answer into one of the arrays passed in, and have unpredictable behavior
    // in case of overflow, so the caller must make sure the arrays are big enough to
    // hold the answer.  But the average user should never have to call any of the
    // underscored functions.  Each important underscored function has a wrapper function
    // of the same name without the underscore that takes care of the details for you.
    // For each underscored function where a parameter is modified, that same variable
    // must not be used as another argument too.  So, you cannot square x by doing
    // multMod_(x,x,n).  You must use squareMod_(x,n) instead, or do y=dup(x); multMod_(x,y,n).
    // Or simply use the multMod(x,x,n) function without the underscore, where
    // such issues never arise, because non-underscored functions never change
    // their parameters; they always allocate new memory for the answer that is returned.
    //
    // These functions are designed to avoid frequent dynamic memory allocation in the inner loop.
    // For most functions, if it needs a BigInt as a local variable it will actually use
    // a global, and will only allocate to it only when it's not the right size.  This ensures
    // that when a function is called repeatedly with same-sized parameters, it only allocates
    // memory on the first call.
    //
    // Note that for cryptographic purposes, the calls to Math.random() must
    // be replaced with calls to a better pseudorandom number generator.
    //
    // In the following, "bigInt" means a bigInt with at least one leading zero element,
    // and "integer" means a nonnegative integer less than radix.  In some cases, integer
    // can be negative.  Negative bigInts are 2s complement.
    //
    // The following functions do not modify their inputs.
    // Those returning a bigInt, string, or Array will dynamically allocate memory for that value.
    // Those returning a boolean will return the integer 0 (false) or 1 (true).
    // Those returning boolean or int will not allocate memory except possibly on the first
    // time they're called with a given parameter size.
    //
    // bigInt  add(x,y)               //return (x+y) for bigIntstr x and y.
    // bigInt  addInt(x,n)            //return (x+n) where x is a bigInt and n is an integer.
    // string  bigInt2str(x,base)     //return a string form of bigInt x in a given base, with 2 <= base <= 95
    // int     bitSize(x)             //return how many bits long the bigInt x is, not counting leading zeros
    // bigInt  dup(x)                 //return a copy of bigInt x
    // boolean equals(x,y)            //is the bigInt x equal to the bigint y?
    // boolean equalsInt(x,y)         //is bigint x equal to integer y?
    // bigInt  expand(x,n)            //return a copy of x with at least n elements, adding leading zeros if needed
    // Array   findPrimes(n)          //return array of all primes less than integer n
    // bigInt  GCD(x,y)               //return greatest common divisor of bigInts x and y (each with same number of elements).
    // boolean greater(x,y)           //is x>y?  (x and y are nonnegative bigInts)
    // boolean greaterShift(x,y,shift)//is (x <<(shift*bpe)) > y?
    // bigInt  int2bigInt(t,n,m)      //return a bigInt equal to integer t, with at least n bits and m array elements
    // bigInt  inverseMod(x,n)        //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
    // int     inverseModInt(x,n)     //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
    // boolean isZero(x)              //is the bigInt x equal to zero?
    // boolean millerRabin(x,b)       //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)
    // boolean millerRabinInt(x,b)    //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)
    // bigInt  mod(x,n)               //return a new bigInt equal to (x mod n) for bigInts x and n.
    // int     modInt(x,n)            //return x mod n for bigInt x and integer n.
    // bigInt  mult(x,y)              //return x*y for bigInts x and y. This is faster when y<x.
    // bigInt  multMod(x,y,n)         //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
    // boolean negative(x)            //is bigInt x negative?
    // bigInt  powMod(x,y,n)          //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
    // bigInt  randBigInt(n,s)        //return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
    // bigInt  randTruePrime(k)       //return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
    // bigInt  randProbPrime(k)       //return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).
    // bigInt  str2bigInt(s,b,n,m)    //return a bigInt for number represented in string s in base b with at least n bits and m array elements
    // bigInt  sub(x,y)               //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
    // bigInt  trim(x,k)              //return a copy of x with exactly k leading zero elements
    //
    //
    // The following functions each have a non-underscored version, which most users should call instead.
    // These functions each write to a single parameter, and the caller is responsible for ensuring the array
    // passed in is large enough to hold the result.
    //
    // void    addInt_(x,n)          //do x=x+n where x is a bigInt and n is an integer
    // void    add_(x,y)             //do x=x+y for bigInts x and y
    // void    copy_(x,y)            //do x=y on bigInts x and y
    // void    copyInt_(x,n)         //do x=n on bigInt x and integer n
    // void    GCD_(x,y)             //set x to the greatest common divisor of bigInts x and y, (y is destroyed).  (This never overflows its array).
    // boolean inverseMod_(x,n)      //do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist
    // void    mod_(x,n)             //do x=x mod n for bigInts x and n. (This never overflows its array).
    // void    mult_(x,y)            //do x=x*y for bigInts x and y.
    // void    multMod_(x,y,n)       //do x=x*y  mod n for bigInts x,y,n.
    // void    powMod_(x,y,n)        //do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.  0**0=1.
    // void    randBigInt_(b,n,s)    //do b = an n-bit random BigInt. if s=1, then nth bit (most significant bit) is set to 1. n>=1.
    // void    randTruePrime_(ans,k) //do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
    // void    sub_(x,y)             //do x=x-y for bigInts x and y. Negative answers will be 2s complement.
    //
    // The following functions do NOT have a non-underscored version.
    // They each write a bigInt result to one or more parameters.  The caller is responsible for
    // ensuring the arrays passed in are large enough to hold the results.
    //
    // void addShift_(x,y,ys)       //do x=x+(y<<(ys*bpe))
    // void carry_(x)               //do carries and borrows so each element of the bigInt x fits in bpe bits.
    // void divide_(x,y,q,r)        //divide x by y giving quotient q and remainder r
    // int  divInt_(x,n)            //do x=floor(x/n) for bigInt x and integer n, and return the remainder. (This never overflows its array).
    // int  eGCD_(x,y,d,a,b)        //sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y
    // void halve_(x)               //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.  (This never overflows its array).
    // void leftShift_(x,n)         //left shift bigInt x by n bits.  n<bpe.
    // void linComb_(x,y,a,b)       //do x=a*x+b*y for bigInts x and y and integers a and b
    // void linCombShift_(x,y,b,ys) //do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys
    // void mont_(x,y,n,np)         //Montgomery multiplication (see comments where the function is defined)
    // void multInt_(x,n)           //do x=x*n where x is a bigInt and n is an integer.
    // void rightShift_(x,n)        //right shift bigInt x by n bits.  0 <= n < bpe. (This never overflows its array).
    // void squareMod_(x,n)         //do x=x*x  mod n for bigInts x,n
    // void subShift_(x,y,ys)       //do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
    //
    // The following functions are based on algorithms from the _Handbook of Applied Cryptography_
    //    powMod_()           = algorithm 14.94, Montgomery exponentiation
    //    eGCD_,inverseMod_() = algorithm 14.61, Binary extended GCD_
    //    GCD_()              = algorothm 14.57, Lehmer's algorithm
    //    mont_()             = algorithm 14.36, Montgomery multiplication
    //    divide_()           = algorithm 14.20  Multiple-precision division
    //    squareMod_()        = algorithm 14.16  Multiple-precision squaring
    //    randTruePrime_()    = algorithm  4.62, Maurer's algorithm
    //    millerRabin()       = algorithm  4.24, Miller-Rabin algorithm
    //
    // Profiling shows:
    //     randTruePrime_() spends:
    //         10% of its time in calls to powMod_()
    //         85% of its time in calls to millerRabin()
    //     millerRabin() spends:
    //         99% of its time in calls to powMod_()   (always with a base of 2)
    //     powMod_() spends:
    //         94% of its time in calls to mont_()  (almost always with x==y)
    //
    // This suggests there are several ways to speed up this library slightly:
    //     - convert powMod_ to use a Montgomery form of k-ary window (or maybe a Montgomery form of sliding window)
    //         -- this should especially focus on being fast when raising 2 to a power mod n
    //     - convert randTruePrime_() to use a minimum r of 1/3 instead of 1/2 with the appropriate change to the test
    //     - tune the parameters in randTruePrime_(), including c, m, and recLimit
    //     - speed up the single loop in mont_() that takes 95% of the runtime, perhaps by reducing checking
    //       within the loop when all the parameters are the same length.
    //
    // There are several ideas that look like they wouldn't help much at all:
    //     - replacing trial division in randTruePrime_() with a sieve (that speeds up something taking almost no time anyway)
    //     - increase bpe from 15 to 30 (that would help if we had a 32*32->64 multiplier, but not with JavaScript's 32*32->32)
    //     - speeding up mont_(x,y,n,np) when x==y by doing a non-modular, non-Montgomery square
    //       followed by a Montgomery reduction.  The intermediate answer will be twice as long as x, so that
    //       method would be slower.  This is unfortunate because the code currently spends almost all of its time
    //       doing mont_(x,x,...), both for randTruePrime_() and powMod_().  A faster method for Montgomery squaring
    //       would have a large impact on the speed of randTruePrime_() and powMod_().  HAC has a couple of poorly-worded
    //       sentences that seem to imply it's faster to do a non-modular square followed by a single
    //       Montgomery reduction, but that's obviously wrong.
    ////////////////////////////////////////////////////////////////////////////////////////

    //globals
    bpe = 0; //bits stored per array element
    mask = 0; //AND this with an array element to chop it down to bpe bits
    radix = mask + 1; //equals 2^bpe.  A single 1 bit to the left of the last bit of mask.

    //the digits for converting to different bases
    digitsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';

    //initialize the global variables
    for (bpe = 0; 1 << bpe + 1 > 1 << bpe; bpe++); //bpe=number of bits in the mantissa on this platform
    bpe >>= 1; //bpe=number of bits in one element of the array representing the bigInt
    mask = (1 << bpe) - 1; //AND the mask with an integer to get its bpe least significant bits
    radix = mask + 1; //2^bpe.  a single 1 bit to the left of the first bit of mask
    one = int2bigInt(1, 1, 1); //constant used in powMod_()

    //the following global variables are scratchpad memory to
    //reduce dynamic memory allocation in the inner loop
    t = new Array(0);
    ss = t; //used in mult_()
    s0 = t; //used in multMod_(), squareMod_()
    s1 = t; //used in powMod_(), multMod_(), squareMod_()
    s2 = t; //used in powMod_(), multMod_()
    s3 = t; //used in powMod_()
    s4 = t;s5 = t; //used in mod_()
    s6 = t; //used in bigInt2str()
    s7 = t; //used in powMod_()
    T = t; //used in GCD_()
    sa = t; //used in mont_()
    mr_x1 = t;mr_r = t;mr_a = t; //used in millerRabin()
    eg_v = t;eg_u = t;eg_A = t;eg_B = t;eg_C = t;eg_D = t; //used in eGCD_(), inverseMod_()
    md_q1 = t;md_q2 = t;md_q3 = t;md_r = t;md_r1 = t;md_r2 = t;md_tt = t; //used in mod_()

    primes = t;pows = t;s_i = t;s_i2 = t;s_R = t;s_rm = t;s_q = t;s_n1 = t;
    s_a = t;s_r2 = t;s_n = t;s_b = t;s_d = t;s_x1 = t;s_x2 = t, s_aa = t; //used in randTruePrime_()

    rpprb = t; //used in randProbPrimeRounds() (which also uses "primes")

    ////////////////////////////////////////////////////////////////////////////////////////


    //return array of all primes less than integer n
    function findPrimes(n) {
      var i, s, p, ans;
      s = new Array(n);
      for (i = 0; i < n; i++) s[i] = 0;
      s[0] = 2;
      p = 0; //first p elements of s are primes, the rest are a sieve
      for (; s[p] < n;) {
        //s[p] is the pth prime
        for (i = s[p] * s[p]; i < n; i += s[p]) //mark multiples of s[p]
        s[i] = 1;
        p++;
        s[p] = s[p - 1] + 1;
        for (; s[p] < n && s[s[p]]; s[p]++); //find next prime (where s[p]==0)
      }
      ans = new Array(p);
      for (i = 0; i < p; i++) ans[i] = s[i];
      return ans;
    }

    //does a single round of Miller-Rabin base b consider x to be a possible prime?
    //x is a bigInt, and b is an integer, with b<x
    function millerRabinInt(x, b) {
      if (mr_x1.length != x.length) {
        mr_x1 = dup(x);
        mr_r = dup(x);
        mr_a = dup(x);
      }

      copyInt_(mr_a, b);
      return millerRabin(x, mr_a);
    }

    //does a single round of Miller-Rabin base b consider x to be a possible prime?
    //x and b are bigInts with b<x
    function millerRabin(x, b) {
      var i, j, k, s;

      if (mr_x1.length != x.length) {
        mr_x1 = dup(x);
        mr_r = dup(x);
        mr_a = dup(x);
      }

      copy_(mr_a, b);
      copy_(mr_r, x);
      copy_(mr_x1, x);

      addInt_(mr_r, -1);
      addInt_(mr_x1, -1);

      //s=the highest power of two that divides mr_r
      k = 0;
      for (i = 0; i < mr_r.length; i++) for (j = 1; j < mask; j <<= 1) if (x[i] & j) {
        s = k < mr_r.length + bpe ? k : 0;
        i = mr_r.length;
        j = mask;
      } else k++;

      if (s) rightShift_(mr_r, s);

      powMod_(mr_a, mr_r, x);

      if (!equalsInt(mr_a, 1) && !equals(mr_a, mr_x1)) {
        j = 1;
        while (j <= s - 1 && !equals(mr_a, mr_x1)) {
          squareMod_(mr_a, x);
          if (equalsInt(mr_a, 1)) {
            return 0;
          }
          j++;
        }
        if (!equals(mr_a, mr_x1)) {
          return 0;
        }
      }
      return 1;
    }

    //returns how many bits long the bigInt is, not counting leading zeros.
    function bitSize(x) {
      var j, z, w;
      for (j = x.length - 1; x[j] == 0 && j > 0; j--);
      for (z = 0, w = x[j]; w; w >>= 1, z++);
      z += bpe * j;
      return z;
    }

    //return a copy of x with at least n elements, adding leading zeros if needed
    function expand(x, n) {
      var ans = int2bigInt(0, (x.length > n ? x.length : n) * bpe, 0);
      copy_(ans, x);
      return ans;
    }

    //return a k-bit true random prime using Maurer's algorithm.
    function randTruePrime(k) {
      var ans = int2bigInt(0, k, 0);
      randTruePrime_(ans, k);
      return trim(ans, 1);
    }

    //return a k-bit random probable prime with probability of error < 2^-80
    function randProbPrime(k) {
      if (k >= 600) return randProbPrimeRounds(k, 2); //numbers from HAC table 4.3
      if (k >= 550) return randProbPrimeRounds(k, 4);
      if (k >= 500) return randProbPrimeRounds(k, 5);
      if (k >= 400) return randProbPrimeRounds(k, 6);
      if (k >= 350) return randProbPrimeRounds(k, 7);
      if (k >= 300) return randProbPrimeRounds(k, 9);
      if (k >= 250) return randProbPrimeRounds(k, 12); //numbers from HAC table 4.4
      if (k >= 200) return randProbPrimeRounds(k, 15);
      if (k >= 150) return randProbPrimeRounds(k, 18);
      if (k >= 100) return randProbPrimeRounds(k, 27);
      return randProbPrimeRounds(k, 40); //number from HAC remark 4.26 (only an estimate)
    }

    //return a k-bit probable random prime using n rounds of Miller Rabin (after trial division with small primes)
    function randProbPrimeRounds(k, n) {
      var ans, i, divisible, B;
      B = 30000; //B is largest prime to use in trial division
      ans = int2bigInt(0, k, 0);

      //optimization: try larger and smaller B to find the best limit.

      if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

      if (rpprb.length != ans.length) rpprb = dup(ans);

      for (;;) {
        //keep trying random values for ans until one appears to be prime
        //optimization: pick a random number times L=2*3*5*...*p, plus a
        //   random element of the list of all numbers in [0,L) not divisible by any prime up to p.
        //   This can reduce the amount of random number generation.

        randBigInt_(ans, k, 0); //ans = a random odd number to check
        ans[0] |= 1;
        divisible = 0;

        //check ans for divisibility by small primes up to B
        for (i = 0; i < primes.length && primes[i] <= B; i++) if (modInt(ans, primes[i]) == 0 && !equalsInt(ans, primes[i])) {
          divisible = 1;
          break;
        }

        //optimization: change millerRabin so the base can be bigger than the number being checked, then eliminate the while here.

        //do n rounds of Miller Rabin, with random bases less than ans
        for (i = 0; i < n && !divisible; i++) {
          randBigInt_(rpprb, k, 0);
          while (!greater(ans, rpprb)) //pick a random rpprb that's < ans
          randBigInt_(rpprb, k, 0);
          if (!millerRabin(ans, rpprb)) divisible = 1;
        }

        if (!divisible) return ans;
      }
    }

    //return a new bigInt equal to (x mod n) for bigInts x and n.
    function mod(x, n) {
      var ans = dup(x);
      mod_(ans, n);
      return trim(ans, 1);
    }

    //return (x+n) where x is a bigInt and n is an integer.
    function addInt(x, n) {
      var ans = expand(x, x.length + 1);
      addInt_(ans, n);
      return trim(ans, 1);
    }

    //return x*y for bigInts x and y. This is faster when y<x.
    function mult(x, y) {
      var ans = expand(x, x.length + y.length);
      mult_(ans, y);
      return trim(ans, 1);
    }

    //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
    function powMod(x, y, n) {
      var ans = expand(x, n.length);
      powMod_(ans, trim(y, 2), trim(n, 2), 0); //this should work without the trim, but doesn't
      return trim(ans, 1);
    }

    //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
    function sub(x, y) {
      var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
      sub_(ans, y);
      return trim(ans, 1);
    }

    //return (x+y) for bigInts x and y.
    function add(x, y) {
      var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
      add_(ans, y);
      return trim(ans, 1);
    }

    //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
    function inverseMod(x, n) {
      var ans = expand(x, n.length);
      var s;
      s = inverseMod_(ans, n);
      return s ? trim(ans, 1) : null;
    }

    //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
    function multMod(x, y, n) {
      var ans = expand(x, n.length);
      multMod_(ans, y, n);
      return trim(ans, 1);
    }

    //generate a k-bit true random prime using Maurer's algorithm,
    //and put it into ans.  The bigInt ans must be large enough to hold it.
    function randTruePrime_(ans, k) {
      var c, m, pm, dd, j, r, B, divisible, z, zz, recSize;

      if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

      if (pows.length == 0) {
        pows = new Array(512);
        for (j = 0; j < 512; j++) {
          pows[j] = Math.pow(2, j / 511. - 1.);
        }
      }

      //c and m should be tuned for a particular machine and value of k, to maximize speed
      c = 0.1; //c=0.1 in HAC
      m = 20; //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
      recLimit = 20; //stop recursion when k <=recLimit.  Must have recLimit >= 2

      if (s_i2.length != ans.length) {
        s_i2 = dup(ans);
        s_R = dup(ans);
        s_n1 = dup(ans);
        s_r2 = dup(ans);
        s_d = dup(ans);
        s_x1 = dup(ans);
        s_x2 = dup(ans);
        s_b = dup(ans);
        s_n = dup(ans);
        s_i = dup(ans);
        s_rm = dup(ans);
        s_q = dup(ans);
        s_a = dup(ans);
        s_aa = dup(ans);
      }

      if (k <= recLimit) {
        //generate small random primes by trial division up to its square root
        pm = (1 << (k + 2 >> 1)) - 1; //pm is binary number with all ones, just over sqrt(2^k)
        copyInt_(ans, 0);
        for (dd = 1; dd;) {
          dd = 0;
          ans[0] = 1 | 1 << k - 1 | Math.floor(Math.random() * (1 << k)); //random, k-bit, odd integer, with msb 1
          for (j = 1; j < primes.length && (primes[j] & pm) == primes[j]; j++) {
            //trial division by all primes 3...sqrt(2^k)
            if (0 == ans[0] % primes[j]) {
              dd = 1;
              break;
            }
          }
        }
        carry_(ans);
        return;
      }

      B = c * k * k; //try small primes up to B (or all the primes[] array if the largest is less than B).
      if (k > 2 * m) //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
        for (r = 1; k - k * r <= m;) r = pows[Math.floor(Math.random() * 512)]; //r=Math.pow(2,Math.random()-1);
      else r = .5;

      //simulation suggests the more complex algorithm using r=.333 is only slightly faster.

      recSize = Math.floor(r * k) + 1;

      randTruePrime_(s_q, recSize);
      copyInt_(s_i2, 0);
      s_i2[Math.floor((k - 2) / bpe)] |= 1 << (k - 2) % bpe; //s_i2=2^(k-2)
      divide_(s_i2, s_q, s_i, s_rm); //s_i=floor((2^(k-1))/(2q))

      z = bitSize(s_i);

      for (;;) {
        for (;;) {
          //generate z-bit numbers until one falls in the range [0,s_i-1]
          randBigInt_(s_R, z, 0);
          if (greater(s_i, s_R)) break;
        } //now s_R is in the range [0,s_i-1]
        addInt_(s_R, 1); //now s_R is in the range [1,s_i]
        add_(s_R, s_i); //now s_R is in the range [s_i+1,2*s_i]

        copy_(s_n, s_q);
        mult_(s_n, s_R);
        multInt_(s_n, 2);
        addInt_(s_n, 1); //s_n=2*s_R*s_q+1

        copy_(s_r2, s_R);
        multInt_(s_r2, 2); //s_r2=2*s_R

        //check s_n for divisibility by small primes up to B
        for (divisible = 0, j = 0; j < primes.length && primes[j] < B; j++) if (modInt(s_n, primes[j]) == 0 && !equalsInt(s_n, primes[j])) {
          divisible = 1;
          break;
        }

        if (!divisible) //if it passes small primes check, then try a single Miller-Rabin base 2
          if (!millerRabinInt(s_n, 2)) //this line represents 75% of the total runtime for randTruePrime_
            divisible = 1;

        if (!divisible) {
          //if it passes that test, continue checking s_n
          addInt_(s_n, -3);
          for (j = s_n.length - 1; s_n[j] == 0 && j > 0; j--); //strip leading zeros
          for (zz = 0, w = s_n[j]; w; w >>= 1, zz++);
          zz += bpe * j; //zz=number of bits in s_n, ignoring leading zeros
          for (;;) {
            //generate z-bit numbers until one falls in the range [0,s_n-1]
            randBigInt_(s_a, zz, 0);
            if (greater(s_n, s_a)) break;
          } //now s_a is in the range [0,s_n-1]
          addInt_(s_n, 3); //now s_a is in the range [0,s_n-4]
          addInt_(s_a, 2); //now s_a is in the range [2,s_n-2]
          copy_(s_b, s_a);
          copy_(s_n1, s_n);
          addInt_(s_n1, -1);
          powMod_(s_b, s_n1, s_n); //s_b=s_a^(s_n-1) modulo s_n
          addInt_(s_b, -1);
          if (isZero(s_b)) {
            copy_(s_b, s_a);
            powMod_(s_b, s_r2, s_n);
            addInt_(s_b, -1);
            copy_(s_aa, s_n);
            copy_(s_d, s_b);
            GCD_(s_d, s_n); //if s_b and s_n are relatively prime, then s_n is a prime
            if (equalsInt(s_d, 1)) {
              copy_(ans, s_aa);
              return; //if we've made it this far, then s_n is absolutely guaranteed to be prime
            }
          }
        }
      }
    }

    //Return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
    function randBigInt(n, s) {
      var a, b;
      a = Math.floor((n - 1) / bpe) + 2; //# array elements to hold the BigInt with a leading 0 element
      b = int2bigInt(0, 0, a);
      randBigInt_(b, n, s);
      return b;
    }

    //Set b to an n-bit random BigInt.  If s=1, then the most significant of those n bits is set to 1.
    //Array b must be big enough to hold the result. Must have n>=1
    function randBigInt_(b, n, s) {
      var i, a;
      for (i = 0; i < b.length; i++) b[i] = 0;
      a = Math.floor((n - 1) / bpe) + 1; //# array elements to hold the BigInt
      for (i = 0; i < a; i++) {
        b[i] = Math.floor(Math.random() * (1 << bpe - 1));
      }
      b[a - 1] &= (2 << (n - 1) % bpe) - 1;
      if (s == 1) b[a - 1] |= 1 << (n - 1) % bpe;
    }

    //Return the greatest common divisor of bigInts x and y (each with same number of elements).
    function GCD(x, y) {
      var xc, yc;
      xc = dup(x);
      yc = dup(y);
      GCD_(xc, yc);
      return xc;
    }

    //set x to the greatest common divisor of bigInts x and y (each with same number of elements).
    //y is destroyed.
    function GCD_(x, y) {
      var i, xp, yp, A, B, C, D, q, sing;
      if (T.length != x.length) T = dup(x);

      sing = 1;
      while (sing) {
        //while y has nonzero elements other than y[0]
        sing = 0;
        for (i = 1; i < y.length; i++) //check if y has nonzero elements other than 0
        if (y[i]) {
          sing = 1;
          break;
        }
        if (!sing) break; //quit when y all zero elements except possibly y[0]

        for (i = x.length; !x[i] && i >= 0; i--); //find most significant element of x
        xp = x[i];
        yp = y[i];
        A = 1;B = 0;C = 0;D = 1;
        while (yp + C && yp + D) {
          q = Math.floor((xp + A) / (yp + C));
          qp = Math.floor((xp + B) / (yp + D));
          if (q != qp) break;
          t = A - q * C;A = C;C = t; //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)
          t = B - q * D;B = D;D = t;
          t = xp - q * yp;xp = yp;yp = t;
        }
        if (B) {
          copy_(T, x);
          linComb_(x, y, A, B); //x=A*x+B*y
          linComb_(y, T, D, C); //y=D*y+C*T
        } else {
          mod_(x, y);
          copy_(T, x);
          copy_(x, y);
          copy_(y, T);
        }
      }
      if (y[0] == 0) return;
      t = modInt(x, y[0]);
      copyInt_(x, y[0]);
      y[0] = t;
      while (y[0]) {
        x[0] %= y[0];
        t = x[0];x[0] = y[0];y[0] = t;
      }
    }

    //do x=x**(-1) mod n, for bigInts x and n.
    //If no inverse exists, it sets x to zero and returns 0, else it returns 1.
    //The x array must be at least as large as the n array.
    function inverseMod_(x, n) {
      var k = 1 + 2 * Math.max(x.length, n.length);

      if (!(x[0] & 1) && !(n[0] & 1)) {
        //if both inputs are even, then inverse doesn't exist
        copyInt_(x, 0);
        return 0;
      }

      if (eg_u.length != k) {
        eg_u = new Array(k);
        eg_v = new Array(k);
        eg_A = new Array(k);
        eg_B = new Array(k);
        eg_C = new Array(k);
        eg_D = new Array(k);
      }

      copy_(eg_u, x);
      copy_(eg_v, n);
      copyInt_(eg_A, 1);
      copyInt_(eg_B, 0);
      copyInt_(eg_C, 0);
      copyInt_(eg_D, 1);
      for (;;) {
        while (!(eg_u[0] & 1)) {
          //while eg_u is even
          halve_(eg_u);
          if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
            //if eg_A==eg_B==0 mod 2
            halve_(eg_A);
            halve_(eg_B);
          } else {
            add_(eg_A, n);halve_(eg_A);
            sub_(eg_B, x);halve_(eg_B);
          }
        }

        while (!(eg_v[0] & 1)) {
          //while eg_v is even
          halve_(eg_v);
          if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
            //if eg_C==eg_D==0 mod 2
            halve_(eg_C);
            halve_(eg_D);
          } else {
            add_(eg_C, n);halve_(eg_C);
            sub_(eg_D, x);halve_(eg_D);
          }
        }

        if (!greater(eg_v, eg_u)) {
          //eg_v <= eg_u
          sub_(eg_u, eg_v);
          sub_(eg_A, eg_C);
          sub_(eg_B, eg_D);
        } else {
          //eg_v > eg_u
          sub_(eg_v, eg_u);
          sub_(eg_C, eg_A);
          sub_(eg_D, eg_B);
        }

        if (equalsInt(eg_u, 0)) {
          while (negative(eg_C)) //make sure answer is nonnegative
          add_(eg_C, n);
          copy_(x, eg_C);

          if (!equalsInt(eg_v, 1)) {
            //if GCD_(x,n)!=1, then there is no inverse
            copyInt_(x, 0);
            return 0;
          }
          return 1;
        }
      }
    }

    //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
    function inverseModInt(x, n) {
      var a = 1,
          b = 0,
          t;
      for (;;) {
        if (x == 1) return a;
        if (x == 0) return 0;
        b -= a * Math.floor(n / x);
        n %= x;

        if (n == 1) return b; //to avoid negatives, change this b to n-b, and each -= to +=
        if (n == 0) return 0;
        a -= b * Math.floor(x / n);
        x %= n;
      }
    }

    //this deprecated function is for backward compatibility only.
    function inverseModInt_(x, n) {
      return inverseModInt(x, n);
    }

    //Given positive bigInts x and y, change the bigints v, a, and b to positive bigInts such that:
    //     v = GCD_(x,y) = a*x-b*y
    //The bigInts v, a, b, must have exactly as many elements as the larger of x and y.
    function eGCD_(x, y, v, a, b) {
      var g = 0;
      var k = Math.max(x.length, y.length);
      if (eg_u.length != k) {
        eg_u = new Array(k);
        eg_A = new Array(k);
        eg_B = new Array(k);
        eg_C = new Array(k);
        eg_D = new Array(k);
      }
      while (!(x[0] & 1) && !(y[0] & 1)) {
        //while x and y both even
        halve_(x);
        halve_(y);
        g++;
      }
      copy_(eg_u, x);
      copy_(v, y);
      copyInt_(eg_A, 1);
      copyInt_(eg_B, 0);
      copyInt_(eg_C, 0);
      copyInt_(eg_D, 1);
      for (;;) {
        while (!(eg_u[0] & 1)) {
          //while u is even
          halve_(eg_u);
          if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
            //if A==B==0 mod 2
            halve_(eg_A);
            halve_(eg_B);
          } else {
            add_(eg_A, y);halve_(eg_A);
            sub_(eg_B, x);halve_(eg_B);
          }
        }

        while (!(v[0] & 1)) {
          //while v is even
          halve_(v);
          if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
            //if C==D==0 mod 2
            halve_(eg_C);
            halve_(eg_D);
          } else {
            add_(eg_C, y);halve_(eg_C);
            sub_(eg_D, x);halve_(eg_D);
          }
        }

        if (!greater(v, eg_u)) {
          //v<=u
          sub_(eg_u, v);
          sub_(eg_A, eg_C);
          sub_(eg_B, eg_D);
        } else {
          //v>u
          sub_(v, eg_u);
          sub_(eg_C, eg_A);
          sub_(eg_D, eg_B);
        }
        if (equalsInt(eg_u, 0)) {
          while (negative(eg_C)) {
            //make sure a (C) is nonnegative
            add_(eg_C, y);
            sub_(eg_D, x);
          }
          multInt_(eg_D, -1); ///make sure b (D) is nonnegative
          copy_(a, eg_C);
          copy_(b, eg_D);
          leftShift_(v, g);
          return;
        }
      }
    }

    //is bigInt x negative?
    function negative(x) {
      return x[x.length - 1] >> bpe - 1 & 1;
    }

    //is (x << (shift*bpe)) > y?
    //x and y are nonnegative bigInts
    //shift is a nonnegative integer
    function greaterShift(x, y, shift) {
      var i,
          kx = x.length,
          ky = y.length;
      k = kx + shift < ky ? kx + shift : ky;
      for (i = ky - 1 - shift; i < kx && i >= 0; i++) if (x[i] > 0) return 1; //if there are nonzeros in x to the left of the first column of y, then x is bigger
      for (i = kx - 1 + shift; i < ky; i++) if (y[i] > 0) return 0; //if there are nonzeros in y to the left of the first column of x, then x is not bigger
      for (i = k - 1; i >= shift; i--) if (x[i - shift] > y[i]) return 1;else if (x[i - shift] < y[i]) return 0;
      return 0;
    }

    //is x > y? (x and y both nonnegative)
    function greater(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;

      for (i = x.length; i < y.length; i++) if (y[i]) return 0; //y has more digits

      for (i = y.length; i < x.length; i++) if (x[i]) return 1; //x has more digits

      for (i = k - 1; i >= 0; i--) if (x[i] > y[i]) return 1;else if (x[i] < y[i]) return 0;
      return 0;
    }

    //divide x by y giving quotient q and remainder r.  (q=floor(x/y),  r=x mod y).  All 4 are bigints.
    //x must have at least one leading zero element.
    //y must be nonzero.
    //q and r must be arrays that are exactly the same length as x. (Or q can have more).
    //Must have x.length >= y.length >= 2.
    function divide_(x, y, q, r) {
      var kx, ky;
      var i, j, y1, y2, c, a, b;
      copy_(r, x);
      for (ky = y.length; y[ky - 1] == 0; ky--); //ky is number of elements in y, not including leading zeros

      //normalize: ensure the most significant element of y has its highest bit set
      b = y[ky - 1];
      for (a = 0; b; a++) b >>= 1;
      a = bpe - a; //a is how many bits to shift so that the high order bit of y is leftmost in its array element
      leftShift_(y, a); //multiply both by 1<<a now, then divide both by that at the end
      leftShift_(r, a);

      //Rob Visser discovered a bug: the following line was originally just before the normalization.
      for (kx = r.length; r[kx - 1] == 0 && kx > ky; kx--); //kx is number of elements in normalized x, not including leading zeros

      copyInt_(q, 0); // q=0
      while (!greaterShift(y, r, kx - ky)) {
        // while (leftShift_(y,kx-ky) <= r) {
        subShift_(r, y, kx - ky); //   r=r-leftShift_(y,kx-ky)
        q[kx - ky]++; //   q[kx-ky]++;
      } // }

      for (i = kx - 1; i >= ky; i--) {
        if (r[i] == y[ky - 1]) q[i - ky] = mask;else q[i - ky] = Math.floor((r[i] * radix + r[i - 1]) / y[ky - 1]);

        //The following for(;;) loop is equivalent to the commented while loop,
        //except that the uncommented version avoids overflow.
        //The commented loop comes from HAC, which assumes r[-1]==y[-1]==0
        //  while (q[i-ky]*(y[ky-1]*radix+y[ky-2]) > r[i]*radix*radix+r[i-1]*radix+r[i-2])
        //    q[i-ky]--;
        for (;;) {
          y2 = (ky > 1 ? y[ky - 2] : 0) * q[i - ky];
          c = y2 >> bpe;
          y2 = y2 & mask;
          y1 = c + q[i - ky] * y[ky - 1];
          c = y1 >> bpe;
          y1 = y1 & mask;

          if (c == r[i] ? y1 == r[i - 1] ? y2 > (i > 1 ? r[i - 2] : 0) : y1 > r[i - 1] : c > r[i]) q[i - ky]--;else break;
        }

        linCombShift_(r, y, -q[i - ky], i - ky); //r=r-q[i-ky]*leftShift_(y,i-ky)
        if (negative(r)) {
          addShift_(r, y, i - ky); //r=r+leftShift_(y,i-ky)
          q[i - ky]--;
        }
      }

      rightShift_(y, a); //undo the normalization step
      rightShift_(r, a); //undo the normalization step
    }

    //do carries and borrows so each element of the bigInt x fits in bpe bits.
    function carry_(x) {
      var i, k, c, b;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i];
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
      }
    }

    //return x mod n for bigInt x and integer n.
    function modInt(x, n) {
      var i,
          c = 0;
      for (i = x.length - 1; i >= 0; i--) c = (c * radix + x[i]) % n;
      return c;
    }

    //convert the integer t into a bigInt with at least the given number of bits.
    //the returned array stores the bigInt in bpe-bit chunks, little endian (buff[0] is least significant word)
    //Pad the array with leading zeros so that it has at least minSize elements.
    //There will always be at least one leading 0 element.
    function int2bigInt(t, bits, minSize) {
      var i, k;
      k = Math.ceil(bits / bpe) + 1;
      k = minSize > k ? minSize : k;
      buff = new Array(k);
      copyInt_(buff, t);
      return buff;
    }

    //return the bigInt given a string representation in a given base.
    //Pad the array with leading zeros so that it has at least minSize elements.
    //If base=-1, then it reads in a space-separated list of array elements in decimal.
    //The array will always have at least one leading zero, unless base=-1.
    function str2bigInt(s, base, minSize) {
      var d, i, j, x, y, kk;
      var k = s.length;
      if (base == -1) {
        //comma-separated list of array elements in decimal
        x = new Array(0);
        for (;;) {
          y = new Array(x.length + 1);
          for (i = 0; i < x.length; i++) y[i + 1] = x[i];
          y[0] = parseInt(s, 10);
          x = y;
          d = s.indexOf(',', 0);
          if (d < 1) break;
          s = s.substring(d + 1);
          if (s.length == 0) break;
        }
        if (x.length < minSize) {
          y = new Array(minSize);
          copy_(y, x);
          return y;
        }
        return x;
      }

      x = int2bigInt(0, base * k, 0);
      for (i = 0; i < k; i++) {
        d = digitsStr.indexOf(s.substring(i, i + 1), 0);
        if (base <= 36 && d >= 36) //convert lowercase to uppercase if base<=36
          d -= 26;
        if (d >= base || d < 0) {
          //stop at first illegal character
          break;
        }
        multInt_(x, base);
        addInt_(x, d);
      }

      for (k = x.length; k > 0 && !x[k - 1]; k--); //strip off leading zeros
      k = minSize > k + 1 ? minSize : k + 1;
      y = new Array(k);
      kk = k < x.length ? k : x.length;
      for (i = 0; i < kk; i++) y[i] = x[i];
      for (; i < k; i++) y[i] = 0;
      return y;
    }

    //is bigint x equal to integer y?
    //y must have less than bpe bits
    function equalsInt(x, y) {
      var i;
      if (x[0] != y) return 0;
      for (i = 1; i < x.length; i++) if (x[i]) return 0;
      return 1;
    }

    //are bigints x and y equal?
    //this works even if x and y are different lengths and have arbitrarily many leading zeros
    function equals(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;
      for (i = 0; i < k; i++) if (x[i] != y[i]) return 0;
      if (x.length > y.length) {
        for (; i < x.length; i++) if (x[i]) return 0;
      } else {
        for (; i < y.length; i++) if (y[i]) return 0;
      }
      return 1;
    }

    //is the bigInt x equal to zero?
    function isZero(x) {
      var i;
      for (i = 0; i < x.length; i++) if (x[i]) return 0;
      return 1;
    }

    //convert a bigInt into a string in a given base, from base 2 up to base 95.
    //Base -1 prints the contents of the array representing the number.
    function bigInt2str(x, base) {
      var i,
          t,
          s = "";

      if (s6.length != x.length) s6 = dup(x);else copy_(s6, x);

      if (base == -1) {
        //return the list of array contents
        for (i = x.length - 1; i > 0; i--) s += x[i] + ',';
        s += x[0];
      } else {
        //return it in the given base
        while (!isZero(s6)) {
          t = divInt_(s6, base); //t=s6 % base; s6=floor(s6/base);
          s = digitsStr.substring(t, t + 1) + s;
        }
      }
      if (s.length == 0) s = "0";
      return s;
    }

    //returns a duplicate of bigInt x
    function dup(x) {
      var i;
      buff = new Array(x.length);
      copy_(buff, x);
      return buff;
    }

    //do x=y on bigInts x and y.  x must be an array at least as big as y (not counting the leading zeros in y).
    function copy_(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;
      for (i = 0; i < k; i++) x[i] = y[i];
      for (i = k; i < x.length; i++) x[i] = 0;
    }

    //do x=y on bigInt x and integer y.
    function copyInt_(x, n) {
      var i, c;
      for (c = n, i = 0; i < x.length; i++) {
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+n where x is a bigInt and n is an integer.
    //x must be large enough to hold the result.
    function addInt_(x, n) {
      var i, k, c, b;
      x[0] += n;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i];
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
        if (!c) return; //stop carrying as soon as the carry is zero
      }
    }

    //right shift bigInt x by n bits.  0 <= n < bpe.
    function rightShift_(x, n) {
      var i;
      var k = Math.floor(n / bpe);
      if (k) {
        for (i = 0; i < x.length - k; i++) //right shift x by k elements
        x[i] = x[i + k];
        for (; i < x.length; i++) x[i] = 0;
        n %= bpe;
      }
      for (i = 0; i < x.length - 1; i++) {
        x[i] = mask & (x[i + 1] << bpe - n | x[i] >> n);
      }
      x[i] >>= n;
    }

    //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement
    function halve_(x) {
      var i;
      for (i = 0; i < x.length - 1; i++) {
        x[i] = mask & (x[i + 1] << bpe - 1 | x[i] >> 1);
      }
      x[i] = x[i] >> 1 | x[i] & radix >> 1; //most significant bit stays the same
    }

    //left shift bigInt x by n bits.
    function leftShift_(x, n) {
      var i;
      var k = Math.floor(n / bpe);
      if (k) {
        for (i = x.length; i >= k; i--) //left shift x by k elements
        x[i] = x[i - k];
        for (; i >= 0; i--) x[i] = 0;
        n %= bpe;
      }
      if (!n) return;
      for (i = x.length - 1; i > 0; i--) {
        x[i] = mask & (x[i] << n | x[i - 1] >> bpe - n);
      }
      x[i] = mask & x[i] << n;
    }

    //do x=x*n where x is a bigInt and n is an integer.
    //x must be large enough to hold the result.
    function multInt_(x, n) {
      var i, k, c, b;
      if (!n) return;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i] * n;
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
      }
    }

    //do x=floor(x/n) for bigInt x and integer n, and return the remainder
    function divInt_(x, n) {
      var i,
          r = 0,
          s;
      for (i = x.length - 1; i >= 0; i--) {
        s = r * radix + x[i];
        x[i] = Math.floor(s / n);
        r = s % n;
      }
      return r;
    }

    //do the linear combination x=a*x+b*y for bigInts x and y, and integers a and b.
    //x must be large enough to hold the answer.
    function linComb_(x, y, a, b) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      kk = x.length;
      for (c = 0, i = 0; i < k; i++) {
        c += a * x[i] + b * y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; i < kk; i++) {
        c += a * x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do the linear combination x=a*x+b*(y<<(ys*bpe)) for bigInts x and y, and integers a, b and ys.
    //x must be large enough to hold the answer.
    function linCombShift_(x, y, b, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] + b * y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
    //x must be large enough to hold the answer.
    function addShift_(x, y, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] + y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x-(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
    //x must be large enough to hold the answer.
    function subShift_(x, y, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] - y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x-y for bigInts x and y.
    //x must be large enough to hold the answer.
    //negative answers will be 2s complement
    function sub_(x, y) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      for (c = 0, i = 0; i < k; i++) {
        c += x[i] - y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < x.length; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+y for bigInts x and y.
    //x must be large enough to hold the answer.
    function add_(x, y) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      for (c = 0, i = 0; i < k; i++) {
        c += x[i] + y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < x.length; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x*y for bigInts x and y.  This is faster when y<x.
    function mult_(x, y) {
      var i;
      if (ss.length != 2 * x.length) ss = new Array(2 * x.length);
      copyInt_(ss, 0);
      for (i = 0; i < y.length; i++) if (y[i]) linCombShift_(ss, x, y[i], i); //ss=1*ss+y[i]*(x<<(i*bpe))
      copy_(x, ss);
    }

    //do x=x mod n for bigInts x and n.
    function mod_(x, n) {
      if (s4.length != x.length) s4 = dup(x);else copy_(s4, x);
      if (s5.length != x.length) s5 = dup(x);
      divide_(s4, n, s5, x); //x = remainder of s4 / n
    }

    //do x=x*y mod n for bigInts x,y,n.
    //for greater speed, let y<x.
    function multMod_(x, y, n) {
      var i;
      if (s0.length != 2 * x.length) s0 = new Array(2 * x.length);
      copyInt_(s0, 0);
      for (i = 0; i < y.length; i++) if (y[i]) linCombShift_(s0, x, y[i], i); //s0=1*s0+y[i]*(x<<(i*bpe))
      mod_(s0, n);
      copy_(x, s0);
    }

    //do x=x*x mod n for bigInts x,n.
    function squareMod_(x, n) {
      var i, j, d, c, kx, kn, k;
      for (kx = x.length; kx > 0 && !x[kx - 1]; kx--); //ignore leading zeros in x
      k = kx > n.length ? 2 * kx : 2 * n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
      if (s0.length != k) s0 = new Array(k);
      copyInt_(s0, 0);
      for (i = 0; i < kx; i++) {
        c = s0[2 * i] + x[i] * x[i];
        s0[2 * i] = c & mask;
        c >>= bpe;
        for (j = i + 1; j < kx; j++) {
          c = s0[i + j] + 2 * x[i] * x[j] + c;
          s0[i + j] = c & mask;
          c >>= bpe;
        }
        s0[i + kx] = c;
      }
      mod_(s0, n);
      copy_(x, s0);
    }

    //return x with exactly k leading zero elements
    function trim(x, k) {
      var i, y;
      for (i = x.length; i > 0 && !x[i - 1]; i--);
      y = new Array(i + k);
      copy_(y, x);
      return y;
    }

    //do x=x**y mod n, where x,y,n are bigInts and ** is exponentiation.  0**0=1.
    //this is faster when n is odd.  x usually needs to have as many elements as n.
    function powMod_(x, y, n) {
      var k1, k2, kn, np;
      if (s7.length != n.length) s7 = dup(n);

      //for even modulus, use a simple square-and-multiply algorithm,
      //rather than using the more complex Montgomery algorithm.
      if ((n[0] & 1) == 0) {
        copy_(s7, x);
        copyInt_(x, 1);
        while (!equalsInt(y, 0)) {
          if (y[0] & 1) multMod_(x, s7, n);
          divInt_(y, 2);
          squareMod_(s7, n);
        }
        return;
      }

      //calculate np from n for the Montgomery multiplications
      copyInt_(s7, 0);
      for (kn = n.length; kn > 0 && !n[kn - 1]; kn--);
      np = radix - inverseModInt(modInt(n, radix), radix);
      s7[kn] = 1;
      multMod_(x, s7, n); // x = x * 2**(kn*bp) mod n

      if (s3.length != x.length) s3 = dup(x);else copy_(s3, x);

      for (k1 = y.length - 1; k1 > 0 & !y[k1]; k1--); //k1=first nonzero element of y
      if (y[k1] == 0) {
        //anything to the 0th power is 1
        copyInt_(x, 1);
        return;
      }
      for (k2 = 1 << bpe - 1; k2 && !(y[k1] & k2); k2 >>= 1); //k2=position of first 1 bit in y[k1]
      for (;;) {
        if (!(k2 >>= 1)) {
          //look at next bit of y
          k1--;
          if (k1 < 0) {
            mont_(x, one, n, np);
            return;
          }
          k2 = 1 << bpe - 1;
        }
        mont_(x, x, n, np);

        if (k2 & y[k1]) //if next bit is a 1
          mont_(x, s3, n, np);
      }
    }

    //do x=x*y*Ri mod n for bigInts x,y,n,
    //  where Ri = 2**(-kn*bpe) mod n, and kn is the
    //  number of elements in the n array, not
    //  counting leading zeros.
    //x array must have at least as many elemnts as the n array
    //It's OK if x and y are the same variable.
    //must have:
    //  x,y < n
    //  n is odd
    //  np = -(n^(-1)) mod radix
    function mont_(x, y, n, np) {
      var i, j, c, ui, t, ks;
      var kn = n.length;
      var ky = y.length;

      if (sa.length != kn) sa = new Array(kn);

      copyInt_(sa, 0);

      for (; kn > 0 && n[kn - 1] == 0; kn--); //ignore leading zeros of n
      for (; ky > 0 && y[ky - 1] == 0; ky--); //ignore leading zeros of y
      ks = sa.length - 1; //sa will never have more than this many nonzero elements.

      //the following loop consumes 95% of the runtime for randTruePrime_() and powMod_() for large numbers
      for (i = 0; i < kn; i++) {
        t = sa[0] + x[i] * y[0];
        ui = (t & mask) * np & mask; //the inner "& mask" was needed on Safari (but not MSIE) at one time
        c = t + ui * n[0] >> bpe;
        t = x[i];

        //do sa=(sa+x[i]*y+ui*n)/b   where b=2**bpe.  Loop is unrolled 5-fold for speed
        j = 1;
        for (; j < ky - 4;) {
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < ky;) {
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < kn - 4;) {
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < kn;) {
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < ks;) {
          c += sa[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        sa[j - 1] = c & mask;
      }

      if (!greater(n, sa)) sub_(sa, n);
      copy_(x, sa);
    }
  })(this);

  return _retrieveGlobal();
});
$__System.registerDynamic("18", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = TextEncoder;
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = TextDecoder;
});
$__System.registerDynamic('12', ['18', '19'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fromUTF8 = exports.toUTF8 = exports.fromHex = exports.toHex = exports.fromBase64 = exports.toBase64 = undefined;

  var _textEncoder = $__require('18');

  var _textEncoder2 = _interopRequireDefault(_textEncoder);

  var _textDecoder = $__require('19');

  var _textDecoder2 = _interopRequireDefault(_textDecoder);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  /* eslint-disable no-bitwise */
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-plusplus */
  /* eslint-disable no-sparse-arrays */

  function toByteArray(data) {
    if (data.buffer) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
    return new Uint8Array(data);
  }

  /* Encodes a Uint8Array as a base64 string */
  function toBase64Fast(data) {
    data = toByteArray(data);
    var CHUNK_SIZE = 32767;
    var c = [];
    for (var i = 0; i < data.length; i += CHUNK_SIZE) {
      c.push(String.fromCharCode.apply(null, data.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(c.join(''));
  }

  /* Decodes a base64 string as a Uint8Array */
  function fromBase64Fast(data) {
    var dec = atob(data);
    var len = dec.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = dec.charCodeAt(i);
    }
    return bytes;
  }

  /* toBase64 without using btoa */
  function toBase64Slow(data) {
    data = toByteArray(data);
    var modtable = [0, 2, 1];
    var enctable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var inlength = data.byteLength;
    var outlength = 4 * Math.floor((inlength + 2) / 3);

    var encdata = new Array(outlength);

    for (var i = 0, j = 0; i < inlength;) {
      var octa = i < inlength ? data[i++] : 0;
      var octb = i < inlength ? data[i++] : 0;
      var octc = i < inlength ? data[i++] : 0;

      var triple = (octa << 0x10) + (octb << 0x08) + octc;

      encdata[j++] = enctable[triple >> 3 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 2 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 1 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 0 * 6 & 0x3F];
    }

    for (var _i = 0; _i < modtable[inlength % 3]; _i++) {
      encdata[outlength - 1 - _i] = '=';
    }

    return encdata.join('');
  }

  /* fromBase64 without using atob */
  function fromBase64Slow(data) {
    var dectable = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 62,,,, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,,,,,,,, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,,,,,,, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

    var inlength = data.length;
    if (inlength % 4 !== 0) {
      return null;
    }

    var outlength = Math.floor(inlength / 4) * 3;
    if (data[inlength - 1] === '=') {
      outlength--;
    }
    if (data[inlength - 2] === '=') {
      outlength--;
    }

    var decdata = new Uint8Array(outlength);
    for (var i = 0, j = 0; i < inlength;) {
      var sexta = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextb = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextc = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextd = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];

      var triple = (sexta << 3 * 6) + (sextb << 2 * 6) + (sextc << 1 * 6) + (sextd << 0 * 6);
      if (j < outlength) {
        decdata[j++] = triple >> 2 * 8 & 0xFF;
      }
      if (j < outlength) {
        decdata[j++] = triple >> 1 * 8 & 0xFF;
      }
      if (j < outlength) {
        decdata[j++] = triple >> 0 * 8 & 0xFF;
      }
    }
    return decdata;
  }

  /* Encodes a Uint8Array as an hex string */
  function toHex(data) {
    data = toByteArray(data);
    var enctablehex = '0123456789abcdef';
    var inlength = data.byteLength;
    var encdata = [];
    for (var i = 0; i < inlength; ++i) {
      encdata[2 * i] = enctablehex[data[i] >> 4];
      encdata[2 * i + 1] = enctablehex[data[i] & 0x0F];
    }
    return encdata.join('');
  }

  /* Decodes an hex string as a Uint8Array */
  function fromHex(data) {
    var dectablehex = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 10, 11, 12, 13, 14, 15];

    data = data.toLowerCase();
    if (data.length % 2 !== 0) {
      throw new Error('fromHex: ' + String(data) + ' has odd length');
    }
    var outlength = data.length / 2;
    var decdata = new Uint8Array(outlength);
    for (var i = 0; i < outlength; i++) {
      decdata[i] = dectablehex[data[2 * i].charCodeAt()] << 4 | dectablehex[data[2 * i + 1].charCodeAt()];
    }
    return decdata;
  }

  /* Returns a string given a Uint8Array UTF-8 encoding */
  var decoder = new _textDecoder2['default']();
  function fromUTF8(bytes) {
    return decoder.decode(toByteArray(bytes));
  }

  /* Returns a Uint8Array UTF-8 encoding of the given string */
  var encoder = new _textEncoder2['default']();
  function toUTF8(str) {
    return encoder.encode(str);
  }

  var toBase64 = typeof btoa !== 'undefined' ? toBase64Fast : toBase64Slow;
  var fromBase64 = typeof atob !== 'undefined' ? fromBase64Fast : fromBase64Slow;
  exports.toBase64 = toBase64;
  exports.fromBase64 = fromBase64;
  exports.toHex = toHex;
  exports.fromHex = fromHex;
  exports.toUTF8 = toUTF8;
  exports.fromUTF8 = fromUTF8;
});
$__System.registerDynamic("15", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = crypto;
});
$__System.registerDynamic('13', ['17', 'd', '12', '15'], true, function ($__require, exports, module) {
    'use strict';

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.blindSignContext = undefined;
    exports.parseDSKey = parseDSKey;
    exports.unBlindMessage = unBlindMessage;

    var _bigint = $__require('17');

    var _bigint2 = _interopRequireDefault(_bigint);

    var _index = $__require('d');

    var _index2 = _interopRequireDefault(_index);

    var _encoding = $__require('12');

    var _crypto = $__require('15');

    var _crypto2 = _interopRequireDefault(_crypto);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function base64UrlDecode(str) {
        str = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
        var buffer = new Uint8Array(str.length);
        for (var i = 0; i < str.length; ++i) {
            buffer[i] = str.charCodeAt(i);
        }
        return buffer;
    }

    function h2d(s) {
        function add(x, y) {
            var c = 0,
                r = [];
            var x = x.split('').map(Number);
            var y = y.split('').map(Number);
            while (x.length || y.length) {
                var s = (x.pop() || 0) + (y.pop() || 0) + c;
                r.unshift(s < 10 ? s : s - 10);
                c = s < 10 ? 0 : 1;
            }
            if (c) r.unshift(c);
            return r.join('');
        }

        var dec = '0';
        s.split('').forEach(function (chr) {
            var n = parseInt(chr, 16);
            for (var t = 8; t; t >>= 1) {
                dec = add(dec, dec);
                if (n & t) dec = add(dec, '1');
            }
        });
        return dec;
    }

    function parseDSKey() {
        // Parse key contents.
        return _crypto2['default'].subtle.importKey('spki', (0, _encoding.fromBase64)(_index2['default'].dsPK.pubKeyB64), {
            name: 'RSA-OAEP',
            hash: { name: 'SHA-1' }
        }, true, ['encrypt']).then(function (key) {
            return _crypto2['default'].subtle.exportKey("jwk", key);
        }).then(function (key) {
            // base64url-decode modulus
            var modulus = base64UrlDecode(key.n);
            _index2['default'].dsPK["n"] = h2d((0, _encoding.toHex)(modulus));
            // base64url-decode exponent
            var exponent = base64UrlDecode(key.e);
            _index2['default'].dsPK["e"] = '' + h2d((0, _encoding.toHex)(exponent));
            // modulus and exponent are now Uint8Arrays
        })['catch'](function (err) {
            console.error(err);
            return Promise.reject(err);
        });
    }

    function unBlindMessage(blindSignedMessage, unBlinder) {
        // Unblind the message before sending it for verification.
        // s = u*(bs) mod n
        var _us = multMod(unBlinder, str2bigInt(blindSignedMessage, 16), str2bigInt(_index2['default'].dsPK.n, 10));
        var us = bigInt2str(_us, 10, 0);
        return us;
    }

    function verifyBlindSignature(signedMessage, hashedOriginalMessage) {
        // Verify the message to see, the signer is not the problem.
        // m = s^e mod n

        var message_signed = bigInt2str(powMod(str2bigInt(signedMessage, 10, 0), str2bigInt(_index2['default'].dsPK.e, 10), str2bigInt(_index2['default'].dsPK.n, 10)), 10);
        var original_message = bigInt2str(str2bigInt(hashedOriginalMessage, 16), 10);

        if (original_message === message_signed.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    // Set the context for blind signatures right.
    var blindSignContext = exports.blindSignContext = function blindSignContext(msg) {
        /*
        Initialize it with the following:
        1. Signer Public Key
        2. Signer Public Exponent
        3. Signer Public Modulous
        */

        // this.keyObj = new JSEncrypt();
        this.randomNumber = null;
        this.blindingNonce = null;
        this.blinder = null;
        this.unblinder = null;
        this.keySize = 4096;
        this.hashedMessage = "";
        this.bm = "";
        this.signedMessage = "";
        this.msg = msg;
    };

    blindSignContext.prototype.exponent = function () {
        // Return the public exponent
        return this.e;
    };

    blindSignContext.prototype.modulus = function () {
        // Return the public modulous
        return this.n;
    };

    blindSignContext.prototype.log = function (msg) {
        console.log(msg, "Blind Signature");
    };

    blindSignContext.prototype.hashMessage = function () {
        // Need sha256 digest the message.
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _crypto2['default'].subtle.digest("SHA-256", (0, _encoding.toUTF8)(_this.msg)).then(function (hash) {
                resolve((0, _encoding.toHex)(new Uint8Array(hash)));
            });
        });
        return promise;
        /*
        var msg = this.msg;
        this.hashedMessage = sha256_digest(msg);
        return this.hashedMessage;
        */
    };

    blindSignContext.prototype.getBlindingNonce = function () {
        // Create a random value.

        var randomNumber = _bigint2['default'].randBigInt(this.keySize, 1);
        this.blindingNonce = randomNumber;
        return randomNumber;
    };

    blindSignContext.prototype.getBlinder = function () {
        // Calculate blinder.
        // b = r ^ e mod n
        var b = powMod(this.blindingNonce, str2bigInt(_index2['default'].dsPK.e, 10), str2bigInt(_index2['default'].dsPK.n, 10));
        this.blinder = b;
        return b;
    };

    blindSignContext.prototype.getUnBlinder = function () {
        // Calculate blinder.
        // b = r ^ e mod n
        var u = inverseMod(this.blindingNonce, str2bigInt(_index2['default'].dsPK.n, 10));
        this.unblinder = u;
        return u;
    };

    blindSignContext.prototype.blindMessage = function () {
        // Blind the message before sending it for signing.
        // bm = b*m mod n
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.hashMessage().then(function (hashMessage) {
                // var rnd = this.getBlindingNonce();
                var blinder = _this.getBlinder();
                var bm = multMod(blinder, str2bigInt(hashMessage, 16), str2bigInt(_index2['default'].dsPK.n, 10));
                _this.bm = bigInt2str(bm, 10);
                resolve(_this.bm);
            });
        });
        return promise;
    };

    blindSignContext.prototype.unBlindMessage = function (blindSignedMessage) {
        // Unblind the message before sending it for verification.
        // s = u*(bs) mod n

        var bs = blindSignedMessage;
        var us = multMod(this.unblinder, str2bigInt(bs, 16), str2bigInt(_index2['default'].dsPK.n, 10));
        var us = bigInt2str(_us, 10, 0);
        this.signedMessage = us;
        return us;
    };

    blindSignContext.prototype.verify = function () {
        // Verify the message to see, the signer is not the problem.
        // m = s^e mod n
        var _this = this;
        return new Promise(function (resolve, reject) {
            var message_signed = bigInt2str(powMod(str2bigInt(_this.signedMessage, 10, 0), str2bigInt(_this.e, 10), str2bigInt(_this.n, 10)), 10);
            var original_message = bigInt2str(str2bigInt(_this.hashedMessage, 16), 10);
            // var original_message = _this.hashedMessage;
            _this.log("Org message:" + original_message);
            _this.log("Sign message:" + message_signed);
            if (original_message === message_signed.toLowerCase()) {
                resolve(true);
            } else {
                // Need to replace this with reject.
                resolve(false);
            }
        });
    };
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('d', ['e', '11', 'f', '17', '10', '13', '1a'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.localTemporalUniq = undefined;

  var _messageContext = $__require('e');

  var _messageContext2 = _interopRequireDefault(_messageContext);

  var _utils = $__require('11');

  var _md = $__require('f');

  var _md2 = _interopRequireDefault(_md);

  var _bigint = $__require('17');

  var _bigint2 = _interopRequireDefault(_bigint);

  var _userPk = $__require('10');

  var _userPk2 = _interopRequireDefault(_userPk);

  var _blindSignature = $__require('13');

  var _config = $__require('1a');

  var _config2 = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  // Global variables
  var CliqzSecureMessage = {};
  var localTemporalUniq = exports.localTemporalUniq = {};
  CliqzSecureMessage.BLIND_SIGNER = _config2['default'].settings.ENDPOINT_BLIND_SIGNER;
  CliqzSecureMessage.USER_REG = _config2['default'].settings.ENDPOINT_USER_REG;

  self.onmessage = function (e) {
    try {
      var msgType = e.data.type;

      if (msgType === 'instant') {
        var msg = e.data.msg;
        var uid = e.data.uid;
        var response = {};
        CliqzSecureMessage.sourceMap = e.data.sourcemap;
        CliqzSecureMessage.uPK = e.data.upk;
        var queryProxyUrl = e.data.queryProxyUrl;
        CliqzSecureMessage.dsPK = e.data.dspk;
        CliqzSecureMessage.secureLogger = e.data.sspk;

        var mc = new _messageContext2['default'](msg);
        mc.query(queryProxyUrl).then(function (result) {
          response.res = result;
          response.uid = uid;
          response.type = 'instant';
          postMessage(response);
        })['catch'](postMessage);
        return;
      }

      if (msgType === 'telemetry') {
        var _msg = e.data.msg;
        var _response = {};
        _response.type = 'telemetry';
        CliqzSecureMessage.sourceMap = e.data.sourcemap;
        CliqzSecureMessage.uPK = e.data.upk;
        CliqzSecureMessage.dsPK = e.data.dspk;
        CliqzSecureMessage.secureLogger = e.data.sspk;
        CliqzSecureMessage.routeTable = e.data.routetable;
        exports.localTemporalUniq = localTemporalUniq = e.data.localTemporalUniq;

        var _mc = void 0;
        try {
          _mc = new _messageContext2['default'](_msg);
        } catch (err) {
          _response.localTemporalUniq = localTemporalUniq;
          postMessage(_response);
          return;
        }

        (0, _blindSignature.parseDSKey)().then(function () {
          return _mc.encryptedTelemetry();
        }).then(function (result) {
          _response.localTemporalUniq = localTemporalUniq;
          postMessage(_response);
        })['catch'](function (err) {
          _response.localTemporalUniq = localTemporalUniq;
          postMessage(_response);
        });
        return;
      }

      if (msgType === 'user-key') {
        var upk = new _userPk2['default']();
        upk.generateKey().then(function (e) {
          postMessage(e);
        })['catch'](postMessage);
        return;
      }

      if (msgType === 'test') {
        var _msg2 = e.data.msg;
        var _response2 = {};
        _response2.type = 'test';
        CliqzSecureMessage.sourceMap = e.data.sourcemap;
        CliqzSecureMessage.uPK = e.data.upk;
        CliqzSecureMessage.dsPK = e.data.dspk;
        CliqzSecureMessage.routeTable = e.data.routetable;
        exports.localTemporalUniq = localTemporalUniq = e.data.localTemporalUniq;

        var _mc2 = new _messageContext2['default'](_msg2);
        _mc2.getproxyCoordinator().then(function (e) {
          _response2.mc = _mc2;
          postMessage(_response2);
        })['catch'](postMessage);
        return;
      }

      if (msgType === 'test-sha1' || msgType === 'hw-sha1') {
        (0, _utils.sha1)(e.data.msg).then(function (result) {
          var response = {};
          response.result = result;
          postMessage(response);
        })['catch'](postMessage);
        return;
      }

      if (msgType === 'test-md5' || msgType === 'hw-md5') {
        var _hash = _md2['default'].md5(e.data.msg);
        var _response3 = {};
        _response3.result = _hash;
        postMessage(_response3);
      }

      if (msgType === 'test-bigint' || msgType === 'hw-bigint') {
        var rnd = _bigint2['default'].randBigInt(1024, 1);
        var _response4 = {};
        _response4.result = rnd;
        postMessage(_response4);
      }

      if (msgType === 'test-rsa-sign') {
        var _msg3 = e.data.msg;
        var _response5 = {};
        CliqzSecureMessage.uPK = { 'privateKey': e.data.upk };
        var uPK = new _userPk2['default'](_msg3);

        uPK.sign(_msg3).then(function (result) {
          _response5.result = result;
          postMessage(_response5);
        })['catch'](function (err) {
          _response5.result = false;
          postMessage(_response5);
        });
        return;
      }

      if (msgType === 'test-rsa-verify') {
        var signature = e.data.sig;
        var _msg4 = e.data.msg;
        var _response6 = {};

        CliqzSecureMessage.uPK = { 'privateKey': e.data.upk };
        var _uPK = new _userPk2['default'](_msg4);

        _uPK.verify(signature, _msg4).then(function (result) {
          _response6.result = result;
          postMessage(_response6);
        })['catch'](function (err) {
          _response6.result = false;
          postMessage(_response6);
        });
        return;
      }

      throw new Error('Unknown message type ' + String(msgType));
    } catch (err) {
      console.log(err);
      try {
        postMessage(String(err) + ': ' + String(err.stack));
      } catch (err2) {
        // Protection against 'DataCloneError: The object could not be cloned' errors
        console.error('Failed to serialize message:', err);
        postMessage('Unknown error: failed to serialize message');
      }
    }
  };

  exports['default'] = CliqzSecureMessage;
});
$__System.registerDynamic('a', ['d'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  $__require('d');
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