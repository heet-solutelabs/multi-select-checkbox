"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PassOnChangeDataFun = _interopRequireDefault(require("./utils/PassOnChangeDataFun"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SelectAllCheckBox(_ref) {
  var _ref$selectCheckBox = _ref.selectCheckBox,
      selectCheckBox = _ref$selectCheckBox === void 0 ? [] : _ref$selectCheckBox,
      _ref$setSelectCheckBo = _ref.setSelectCheckBox,
      setSelectCheckBox = _ref$setSelectCheckBo === void 0 ? [] : _ref$setSelectCheckBo,
      _onChange = _ref.onChange,
      selectAllShowClassName = _ref.selectAllShowClassName,
      selectAllLabelName = _ref.selectAllLabelName,
      selectAllClassLabelName = _ref.selectAllClassLabelName,
      selectAllParentDivClassName = _ref.selectAllParentDivClassName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: Array.isArray(selectCheckBox) && selectCheckBox.length > 0 && selectCheckBox.some(function (item) {
      return item.label && item.value;
    }) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: selectAllParentDivClassName,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "select_all_checkbox",
        className: selectAllShowClassName,
        checked: selectCheckBox.every(function (item) {
          return item.is_active === true;
        }),
        type: "checkbox",
        onChange: function onChange(e) {
          var selectedAllCheckBox = selectCheckBox.map(function (item) {
            return _objectSpread(_objectSpread({}, item), {}, {
              is_active: e.target.checked
            });
          });

          _onChange((0, _PassOnChangeDataFun.default)(selectedAllCheckBox));

          setSelectCheckBox(selectedAllCheckBox);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "select_all_checkbox",
        className: selectAllClassLabelName,
        children: selectAllLabelName
      })]
    })
  });
}

var _default = SelectAllCheckBox;
exports.default = _default;