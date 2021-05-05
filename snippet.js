"use strict";

const snippets = {
  blockcomment: "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END",
  singlecomment: "$LINE_COMMENT",
  forloop: ["for (const ${2:element} of ${1:array}) {", "\n$0\t", "\n}"],
  dummyArray: "myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
};

module.exports = snippets;
