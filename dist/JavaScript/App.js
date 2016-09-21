(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractApplication = function () {
	function AbstractApplication() {
		_classCallCheck(this, AbstractApplication);
	}

	_createClass(AbstractApplication, [{
		key: "initializePlugins",
		value: function initializePlugins() {}
	}, {
		key: "start",
		value: function start() {}
	}, {
		key: "onScroll",
		value: function onScroll() {
			for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
				functions[_key] = arguments[_key];
			}

			functions.forEach(function (f) {
				$(window).scroll(f);
			});
		}
	}, {
		key: "onResize",
		value: function onResize() {
			var windowWidth = $(window).width();

			for (var _len2 = arguments.length, functions = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				functions[_key2] = arguments[_key2];
			}

			functions.forEach(function (f) {
				if (windowWidth < f.breakPoint) {
					$(window).resize(f.f);
				}
			});
		}
	}]);

	return AbstractApplication;
}();

exports.default = AbstractApplication;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractApplication2 = require("./AbstractApplication");

var _AbstractApplication3 = _interopRequireDefault(_AbstractApplication2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = function (_AbstractApplication) {
	_inherits(Application, _AbstractApplication);

	function Application() {
		_classCallCheck(this, Application);

		return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));
	}

	_createClass(Application, [{
		key: "start",
		value: function start() {}
	}, {
		key: "initializePlugins",
		value: function initializePlugins() {}
	}]);

	return Application;
}(_AbstractApplication3.default);

exports.default = Application;

},{"./AbstractApplication":1}],3:[function(require,module,exports){
'use strict';

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Application2.default();
app.initializePlugins();
app.start();

$('#conversion-form').submit(function (e) {
    e.preventDefault();
    var textToConvert = $('#textToConvert').val();
    var viewHelperName = textToConvert.split(/(<(.+?) )/)[2];
    var total = $(textToConvert)[0].attributes.length;
    var textConverted = '{' + viewHelperName + '(';
    $.each($(textToConvert)[0].attributes, function (i, attrib) {
        var attribName = attrib.name;
        var value = attrib.value;
        if (i < total - 1) {
            textConverted += attribName + ': \'' + value + '\', ';
        } else {
            textConverted += attribName + ': \'' + value + '\'';
        }
    });
    textConverted += ')}';
    $('#conversionResult').html(textConverted).removeClass('hide');
});

},{"./Application":2}]},{},[3]);
