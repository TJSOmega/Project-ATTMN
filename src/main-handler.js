"use strict";

const vscode = require("vscode");

const arrayGenerator = require("./handler-functions/arrayGenerator.js");
const insertHandler = require("./handler-functions/insert-handler.js");
const boilerPlateHandler = require("./handler-functions/boiler-plate-handler.js");

const mainHandler = (value) => {
  vscode.window.showInformationMessage(`You said: ${value}`);
  let keywords = value.toLowerCase();
  const editor = vscode.window.activeTextEditor;
  //-------------- *** INSERT Keyword*** ---------------------
  if (
    keywords.includes("insert") ||
    keywords.includes("answer") ||
    keywords.includes("enter")
  ) {
    insertHandler(keywords); // Handle's inserting snippets to text editor
  }

  if (keywords.includes("create")) {
    if (keywords.includes("array")) {
      editor.insertSnippet(new vscode.SnippetString(arrayGenerator(keywords)));
    }
    boilerPlateHandler(keywords);
  }
};

module.exports = mainHandler;
