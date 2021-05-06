"use strict";

const data = () => {
  return "const ${1:packageName} = require('${1:package}');$0";
};

module.exports = data;
