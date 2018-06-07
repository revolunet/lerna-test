const kikoo = require("kikoo");
const kikoo2 = require("kikoo2");

module.exports = () => {
  return kikoo() + "------" + kikoo2();
};
