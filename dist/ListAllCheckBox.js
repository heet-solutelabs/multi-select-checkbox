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

function ListAllCheckBox(_ref) {
  var _ref$viewCheckBox = _ref.viewCheckBox,
      viewCheckBox = _ref$viewCheckBox === void 0 ? [] : _ref$viewCheckBox,
      _onChange = _ref.onChange,
      listOfCheckBoxItemsClassName = _ref.listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsLabelClassName = _ref.listOfCheckBoxItemsLabelClassName,
      listOfAllCheckBoxParentDivClassName = _ref.listOfAllCheckBoxParentDivClassName,
      setSelectCheckBox = _ref.setSelectCheckBox,
      selectCheckBox = _ref.selectCheckBox;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _PassOnChangeDataFun.checkArrContainsLabelValue)(viewCheckBox) && viewCheckBox.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: listOfAllCheckBoxParentDivClassName,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: index,
          className: listOfCheckBoxItemsClassName,
          type: "checkbox",
          checked: selectCheckBox.find(function (items) {
            return items.label === item.label;
          }).is_active,
          onChange: function onChange(e) {
            var selectedCheckBox = selectCheckBox.map(function (current_item) {
              if (Object.is(current_item.label, item.label)) {
                return _objectSpread(_objectSpread({}, current_item), {}, {
                  is_active: e.target.checked
                });
              }

              return _objectSpread({}, current_item);
            });

            _onChange((0, _PassOnChangeDataFun.default)(selectedCheckBox));

            setSelectCheckBox(selectedCheckBox);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: index,
          className: listOfCheckBoxItemsLabelClassName,
          children: item.label
        })]
      }, index);
    })
  });
}

var _default = /*#__PURE__*/_react.default.memo(ListAllCheckBox);

exports.default = _default;