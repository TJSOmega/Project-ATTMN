"use strict";

const data = () => {
  return "const {${2:propertyName}} = ${1:objectToDestruct};";
};

module.exports = data;
