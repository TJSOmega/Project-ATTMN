"use strict";

const vscode = require("vscode");
const arrayGenerator = require("./arrayGenerator.js");
const textInsert = require("./textInsert.js");

// Bring in snippets
const snippets = require("../snippet.js");

const breakDown = (value) => {
  vscode.window.showInformationMessage(`You said: ${value}`);

  console.log(value);
  let keywords = value.toLowerCase();
  console.log(keywords);
  const editor = vscode.window.activeTextEditor;

  if (
    keywords.includes("insert") ||
    keywords.includes("answer") ||
    keywords.includes("enter")
  ) {
    if (keywords.includes("arrow function")) {
      editor.insertSnippet(
        new vscode.SnippetString("const ${1:name} = ($2) => {$0}") /// create snippet to be displayed on editor.
        // new vscode.Position(105, 0)
      );
    } else if (keywords.includes("basic function")) {
      editor.insertSnippet(
        new vscode.SnippetString("function ${1:name}($2) = {$0}")
      );
    } else if (keywords.includes(`${keywords}`)) {
      editor.insertSnippet(new vscode.SnippetString(textInsert(keywords)));
    }
  }

  if (keywords.includes("create")) {
    if (keywords.includes("array")) {
      editor.insertSnippet(new vscode.SnippetString(arrayGenerator(keywords)));
    }
  }
};

module.exports = {
  breakDown,
};
