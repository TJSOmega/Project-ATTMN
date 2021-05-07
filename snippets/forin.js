"use strict";

const data = () => {
  return "for (const ${1:item} in ${2:object}) {\n\t${0}\n}";
};
module.exports = data;
