"use strict";

const data = () => {
  return "const ${1:name} = (${2:params}) => {\n\t${3}\n}";
};

module.exports = data;
