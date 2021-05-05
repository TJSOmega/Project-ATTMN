"use strict";

const snippets = {
  blockcomment: "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END",
  singlecomment: "$LINE_COMMENT",
  forloop: ["for (const ${2:element} of ${1:array}) {", "\n$0\t", "\n}"],
  forEach: "${1:array}.forEach(${2:currentItem} => {\n\t${0}\n});",
  require: "require('${1:package}');",
  async: "async const ${1:name} = (${2:params}) => {\n\t${3}\n}",
  namedFunction: "const ${1:name} = (${2:params}) => {\n\t${3}\n}"

};

module.exports = snippets;
