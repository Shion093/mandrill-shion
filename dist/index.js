"use strict";

module.exports = function (_ref) {
  var _ref$percent = _ref.percent,
      percent = _ref$percent === undefined ? 100 : _ref$percent,
      amount = _ref.amount;

  var percentOff = percent / 100 * amount;
  return percentOff;
};