'use strict';

const snippets = {
  "blockcomment": "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END",
  "singlecomment": "$LINE_COMMENT",
  "forloop": [
    "for (var ${index} = 0; ${index} < ${array}.length; ${index}++) {",
    "\tvar ${element} = ${array}[${index}];",
    "\t$0",
    "}"
  ],
  "dummyArray": "myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
}

module.exports = snippets;

