"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/React.createElement(_App.default, null), document.getElementById("root"));