"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nborder-radius: 12px;\nbox-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);\nwidth:800px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cards = _styledComponents["default"].div(_templateObject());

exports.Cards = Cards;