"use strict";

const breakDown = (value) => {
  let keyArray = value.split(" ");
  keyArray.shift();
  let snipword = keyArray[0] + keyArray[1];

  return snipword;
};

module.exports = breakDown;
