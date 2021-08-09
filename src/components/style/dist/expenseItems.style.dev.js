"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Year = exports.Day = exports.Month = exports.ExpenseTitle = exports.ExpenseAmount = exports.ExpenseDetails = exports.ExpenseDate = exports.ExpensesItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\npadding: 5px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\npadding: 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\npadding: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  margin-top: 15px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid white;\n  border-radius: 50px;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: mediumpurple;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template: 80% 20%;\n  grid-template-columns: 80% 20%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: -10px;\n  border: 1px solid white;\n  border-radius: 25px;\n  background-color:#336;\n  width: 150px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  border-radius: 25px;\n  grid-template-columns: 20% 80%;\n  display: grid;\n  height: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExpensesItem = _styledComponents["default"].div(_templateObject());

exports.ExpensesItem = ExpensesItem;

var ExpenseDate = _styledComponents["default"].div(_templateObject2());

exports.ExpenseDate = ExpenseDate;

var ExpenseDetails = _styledComponents["default"].div(_templateObject3());

exports.ExpenseDetails = ExpenseDetails;

var ExpenseAmount = _styledComponents["default"].div(_templateObject4());

exports.ExpenseAmount = ExpenseAmount;

var ExpenseTitle = _styledComponents["default"].div(_templateObject5());

exports.ExpenseTitle = ExpenseTitle;

var Month = _styledComponents["default"].div(_templateObject6());

exports.Month = Month;

var Day = _styledComponents["default"].div(_templateObject7());

exports.Day = Day;

var Year = _styledComponents["default"].div(_templateObject8());

exports.Year = Year;