"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PassOnChangeDataFun = _interopRequireWildcard(require("./utils/PassOnChangeDataFun"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SelectAllCheckBox(_ref) {
  var _ref$viewCheckBox = _ref.viewCheckBox,
      viewCheckBox = _ref$viewCheckBox === void 0 ? [] : _ref$viewCheckBox,
      _onChange = _ref.onChange,
      selectAllShowClassName = _ref.selectAllShowClassName,
      selectAllLabelName = _ref.selectAllLabelName,
      selectAllClassLabelName = _ref.selectAllClassLabelName,
      selectAllParentDivClassName = _ref.selectAllParentDivClassName,
      setSelectCheckBox = _ref.setSelectCheckBox,
      selectCheckBox = _ref.selectCheckBox;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _PassOnChangeDataFun.checkArrContainsLabelValue)(viewCheckBox) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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

var _default = /*#__PURE__*/_react.default.memo(SelectAllCheckBox);

exports.default = _default;