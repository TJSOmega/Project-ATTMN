"use strict";

const vscode = require("vscode");

// Bring in snippets
const snippets = require("../snippet.js");

const breakDown = (value) => {
  vscode.window.showInformationMessage(`You said: ${value}`);
  const editor = vscode.window.activeTextEditor;
  if (value.includes("insert")) {
    editor.insertSnippet(
      new vscode.SnippetString(snippets.forloop.join(" ")) /// create snippet to be displayed on editor.
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
