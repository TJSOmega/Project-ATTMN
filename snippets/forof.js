"use strict";

const data = () => {
  return "for (const ${1:element} of ${2:array}) {\n\t${0}\n}";
};

module.exports = data;
