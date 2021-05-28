// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pHQU":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* demo6.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
  // body element
  var body = document.body; // helper functions

  var MathUtils = {
    // linear interpolation
    lerp: function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    },
    // distance between two points
    distance: function distance(x1, y1, x2, y2) {
      return Math.hypot(x2 - x1, y2 - y1);
    }
  }; // get the mouse position

  var getMousePos = function getMousePos(ev) {
    var posx = 0;
    var posy = 0;
    if (!ev) ev = window.event;

    if (ev.pageX || ev.pageY) {
      posx = ev.pageX;
      posy = ev.pageY;
    } else if (ev.clientX || ev.clientY) {
      posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
      posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }

    return {
      x: posx,
      y: posy
    };
  }; // mousePos: current mouse position
  // lastMousePos: last last recorded mouse position (at the time the last image was shown)


  var mousePos = lastMousePos = {
    x: 0,
    y: 0
  }; // update the mouse position

  window.addEventListener('mousemove', function (ev) {
    return mousePos = getMousePos(ev);
  }); // gets the distance from the current mouse position to the last recorded mouse position

  var getMouseDistance = function getMouseDistance() {
    return MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
  };

  var Image = /*#__PURE__*/function () {
    function Image(el) {
      _classCallCheck(this, Image);

      this.DOM = {
        el: el
      }; // image deafult styles

      this.defaultStyle = {
        x: 0,
        y: 0,
        opacity: 1
      }; // get sizes/position

      this.getRect(); // init/bind events

      this.initEvents();
    }

    _createClass(Image, [{
      key: "initEvents",
      value: function initEvents() {
        var _this = this;

        // on resize get updated sizes/position
        window.addEventListener('resize', function () {
          return _this.resize();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        // reset styles
        TweenMax.set(this.DOM.el, this.defaultStyle); // get sizes/position

        this.getRect();
      }
    }, {
      key: "getRect",
      value: function getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }
    }]);

    return Image;
  }();

  var ImageTrail = /*#__PURE__*/function () {
    function ImageTrail() {
      var _this2 = this;

      _classCallCheck(this, ImageTrail);

      // images container
      this.DOM = {
        content: document.querySelector('.content')
      }; // array of Image objs, one per image element

      this.images = [];

      _toConsumableArray(this.DOM.content.querySelectorAll('div.content__img')).forEach(function (img) {
        return _this2.images.push(new Image(img));
      }); // total number of images


      this.imagesTotal = this.images.length; // upcoming image index

      this.imgPosition = 0; // zIndex value to apply to the upcoming image

      this.zIndexVal = 1; // mouse distance required to show the next image

      this.threshold = 100;
      this.showNextImage(); // render the images

      requestAnimationFrame(function () {
        return _this2.render();
      });
    }

    _createClass(ImageTrail, [{
      key: "render",
      value: function render() {
        var _this3 = this;

        // get distance between the current mouse position and the position of the previous image
        var distance = getMouseDistance(); // if the mouse moved more than [this.threshold] then show the next image

        if (distance > this.threshold) {
          this.showNextImage();
        } // loop..


        requestAnimationFrame(function () {
          return _this3.render();
        });
      }
    }, {
      key: "showNextImage",
      value: function showNextImage() {
        // show image at position [this.imgPosition]
        var img = this.images[this.imgPosition]; // kill any tween on the image

        TweenMax.killTweensOf(img.DOM.el);
        new TimelineMax() // show the image
        .set(img.DOM.el, {
          opacity: 1,
          x: mousePos.x > lastMousePos.x ? 100 : -100,
          zIndex: this.zIndexVal
        }, 0) // animate position
        .to(img.DOM.el, 1.2, {
          ease: Expo.easeOut,
          x: 0
        }, 0);
        ++this.zIndexVal;
        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
        lastMousePos = mousePos;
      }
    }]);

    return ImageTrail;
  }();
  /***********************************/

  /********** Preload stuff **********/
  // Preload images


  var preloadImages = function preloadImages() {
    return new Promise(function (resolve, reject) {
      imagesLoaded(document.querySelectorAll('.content__img'), {
        background: true
      }, resolve);
    });
  }; // And then..


  preloadImages().then(function () {
    // Remove the loader
    document.body.classList.remove('loading');
    new ImageTrail();
  });
}
},{}]},{},["pHQU"], null)