"use strict";

const vscode = require("vscode");

const breakDown = (value) => {
  const editor = vscode.window.activeTextEditor;
  if (value.includes("insert")) {
    editor.insertSnippet(
      new vscode.SnippetString("const ${1:name} = ($2) => {$0}") /// create snippet to be displayed on editor.
      // new vscode.Position(105, 0)
    );
  }
  // if(value.includes("create")) {
  //   editor.
  // }
};

module.exports = {
  breakDown,
};
