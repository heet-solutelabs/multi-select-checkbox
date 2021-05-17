"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectCheckBox = MultiSelectCheckBox;

var _react = _interopRequireDefault(require("react"));

var _SelectAllCheckBox = _interopRequireDefault(require("./SelectAllCheckBox"));

var _ListAllCheckBox = _interopRequireDefault(require("./ListAllCheckBox"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MultiSelectCheckBox(_ref) {
  var _ref$CheckBoxList = _ref.CheckBoxList,
      CheckBoxList = _ref$CheckBoxList === void 0 ? [] : _ref$CheckBoxList,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function (item) {} : _ref$onChange,
      selectAllShow = _ref.selectAllShow,
      _ref$listOfCheckBoxIt = _ref.listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsClassName = _ref$listOfCheckBoxIt === void 0 ? "" : _ref$listOfCheckBoxIt,
      _ref$selectAllShowCla = _ref.selectAllShowClassName,
      selectAllShowClassName = _ref$selectAllShowCla === void 0 ? "" : _ref$selectAllShowCla,
      _ref$selectAllLabelNa = _ref.selectAllLabelName,
      selectAllLabelName = _ref$selectAllLabelNa === void 0 ? "Select All..." : _ref$selectAllLabelNa,
      _ref$selectAllClassLa = _ref.selectAllClassLabelName,
      selectAllClassLabelName = _ref$selectAllClassLa === void 0 ? "" : _ref$selectAllClassLa,
      _ref$listOfCheckBoxIt2 = _ref.listOfCheckBoxItemsLabelClassName,
      listOfCheckBoxItemsLabelClassName = _ref$listOfCheckBoxIt2 === void 0 ? "" : _ref$listOfCheckBoxIt2,
      _ref$selectAllParentD = _ref.selectAllParentDivClassName,
      selectAllParentDivClassName = _ref$selectAllParentD === void 0 ? "" : _ref$selectAllParentD,
      _ref$listOfAllCheckBo = _ref.listOfAllCheckBoxParentDivClassName,
      listOfAllCheckBoxParentDivClassName = _ref$listOfAllCheckBo === void 0 ? "" : _ref$listOfAllCheckBo;
  var checkBoxArr = CheckBoxList.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      is_active: false
    });
  });

  var _React$useState = _react.default.useState(checkBoxArr),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectCheckBox = _React$useState2[0],
      setSelectCheckBox = _React$useState2[1];

  function onChangedData(item) {
    onChange(item);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [selectAllShow && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectAllCheckBox.default, {
      selectCheckBox: selectCheckBox,
      setSelectCheckBox: setSelectCheckBox,
      onChange: onChangedData,
      selectAllShowClassName: selectAllShowClassName,
      selectAllLabelName: selectAllLabelName,
      selectAllClassLabelName: selectAllClassLabelName,
      selectAllParentDivClassName: selectAllParentDivClassName
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListAllCheckBox.default, {
      listOfAllCheckBoxParentDivClassName: listOfAllCheckBoxParentDivClassName,
      listOfCheckBoxItemsClassName: listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsLabelClassName: listOfCheckBoxItemsLabelClassName,
      selectCheckBox: selectCheckBox,
      setSelectCheckBox: setSelectCheckBox,
      onChange: onChangedData
    })]
  });
}