webpackJsonp([1],{125:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(132);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomePage).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h3',\n          { className: _Home2.default.title },\n          'Home Page'\n        )\n      );\n    }\n  }]);\n\n  return HomePage;\n}(_react2.default.Component);\n\nvar _default = HomePage;\nexports.default = _default;\n;\n\n(function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/var/www/github/react-starter/src/js/components/Home/index.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/var/www/github/react-starter/src/js/components/Home/index.js');\n})();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/components/Home/index.js\n ** module id = 125\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/js/components/Home/index.js?")},129:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(130)();\n// imports\n\n\n// module\nexports.push([module.id, ".Home__title__3t2dd{padding:7px;background:#fff;color:red;display:inline-block;margin:3px 0}", ""]);\n\n// exports\nexports.locals = {\n	"title": "Home__title__3t2dd"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]!/usr/lib/~/sass-loader!./~/autoprefixer-loader?browsers=last 2 versions!./src/sass/scoped/Home.sass\n ** module id = 129\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/sass/scoped/Home.sass?./~/css-loader?modules=true&localIdentName=%5Bname%5D__%5Blocal%5D__%5Bhash:base64:5%5D!/usr/lib/~/sass-loader!./~/autoprefixer-loader?browsers=last_2_versions')},132:function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(129);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(122)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n	// When the styles change, update the <style> tags\n	if(!content.locals) {\n		module.hot.accept(\"!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[name]__[local]__[hash:base64:5]!./../../../../../../../usr/lib/node_modules/sass-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./Home.sass\", function() {\n			var newContent = require(\"!!./../../../node_modules/css-loader/index.js?modules=true&localIdentName=[name]__[local]__[hash:base64:5]!./../../../../../../../usr/lib/node_modules/sass-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./Home.sass\");\n			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n			update(newContent);\n		});\n	}\n	// When the module is disposed, remove the <style> tags\n	module.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/sass/scoped/Home.sass\n ** module id = 132\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/sass/scoped/Home.sass?")}});