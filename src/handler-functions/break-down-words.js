"use strict";

const snippets = require("../snippet-list.js");

const breakDown = (value) => {
  let keyArray = value.split(" ");
  keyArray.shift();
  let snipword = keyArray[1] ? keyArray[0] + keyArray[1] : keyArray[0];

  return snippets.includes(snipword) ? snipword : null;
};

module.exports = breakDown;
