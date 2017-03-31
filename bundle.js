/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(2);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid(canvas) {
    _classCallCheck(this, Grid);

    this.canvas = canvas;
    this.stage = new createjs.Stage("stage");

    this.addBlock = this.addBlock.bind(this);
  }

  _createClass(Grid, [{
    key: "addBlock",
    value: function addBlock(pos) {
      var options = {
        pos: pos,
        direction: "up",
        stage: this.stage
      };
      var block = new _block2.default(options);
      block.draw();
    }
  }, {
    key: "run",
    value: function run() {}
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grid = __webpack_require__(0);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(canvas) {
    _classCallCheck(this, GameView);

    this.canvas = canvas;
    this.grid = new _grid2.default(canvas);

    this.init = this.init.bind(this);
  }

  _createClass(GameView, [{
    key: 'init',
    value: function init() {
      this.grid.addBlock([100, 100]); // this should create event handlers for grid and buttons, etc.
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(options) {
    _classCallCheck(this, Block);

    this.pos = options.pos;
    this.direction = options.direction;
    this.stage = options.stage;
  }

  _createClass(Block, [{
    key: "draw",
    value: function draw() {
      var block = new createjs.Shape();
      block.graphics.beginFill("DarkSkyBlue").drawCircle(0, 0, 50);
      block.x = this.pos[0];
      block.y = this.pos[1];
      this.stage.addChild(block);
      this.stage.update();
    }
  }, {
    key: "rotate",
    value: function rotate() {
      switch (this.direction) {
        case "up":
          this.direction = "right";
        case "right":
          this.direction = "down";
        case "down":
          this.direction = "left";
        case "left":
          this.direction = "up";
      }
    }
  }, {
    key: "rebound",
    value: function rebound() {
      switch (this.direction) {
        case "up":
          this.direction = "down";
        case "down":
          this.direction = "up";
        case "left":
          this.direction = "right";
        case "right":
          this.direction = "left";
      }
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherBlock) {
      return this.pos === otherBlock.pos;
    }
  }, {
    key: "isHittingWall",
    value: function isHittingWall() {}
  }, {
    key: "move",
    value: function move() {
      var _pos = _slicedToArray(this.pos, 2),
          x = _pos[0],
          y = _pos[1];

      var _OFFSETS$direction = _slicedToArray(OFFSETS[this.direction], 2),
          dx = _OFFSETS$direction[0],
          dy = _OFFSETS$direction[1];

      this.pos = [x + dx, y + dy];
    }
  }]);

  return Block;
}();

var OFFSETS = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0]
};

exports.default = Block;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _grid_view = __webpack_require__(1);

var _grid_view2 = _interopRequireDefault(_grid_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var gv = new _grid_view2.default(canvas);
  gv.init();
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map