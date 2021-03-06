"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchFilter(_ref) {
  var searchLabelClassName = _ref.searchLabelClassName,
      searchLabelName = _ref.searchLabelName,
      searchTerm = _ref.searchTerm,
      setSearchTerm = _ref.setSearchTerm,
      searchPlaceHolderName = _ref.searchPlaceHolderName,
      searchFilterClassName = _ref.searchFilterClassName,
      searchFilterParentDivClassName = _ref.searchFilterParentDivClassName;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: searchFilterParentDivClassName,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: "searchTerm",
      className: searchLabelClassName,
      children: searchLabelName
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      id: "searchTerm",
      name: "searchTerm",
      type: "search",
      value: searchTerm,
      onChange: function onChange(e) {
        setSearchTerm(e.target.value);
      },
      className: searchFilterClassName,
      placeholder: searchPlaceHolderName
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(SearchFilter);

exports.default = _default;