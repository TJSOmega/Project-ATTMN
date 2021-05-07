"use strict";

const snippets = {
  foreach: "${1:array}.forEach(${2:currentItem} => {\n\t${0}\n});",
  forof: "for (const ${1:element} of ${2:array}) {\n\t${0}\n}",
  forin: "for (const ${1:item} in ${2:object}) {\n\t${0}\n}",
  anonymousfunction: "(${1:params}) => {\n\t${2}\n}",
  arrowfunction: "const ${1:name} = (${2:params}) => {\n\t${3}\n}",
  require: "const ${1:packageName} = require('${1:package}');$0",
  destructureobject: "const {${2:propertyName}} = ${1:objectToDestruct};",
  destructurearray: "const [${2:propertyName}] = ${1:arrayToDestruct};",
};

module.exports = snippets;
