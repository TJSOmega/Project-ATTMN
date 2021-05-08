"use strict";

const vscode = require("vscode");

const arrayGenerator = require("./handler-functions/arrayGenerator.js");
const insertHandler = require("./handler-functions/insert-handler.js");
const scrollHandler = require("./handler-functions/scroll-handler.js");

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
    if (keywords.includes("item array") || keywords.includes("array with")) {
      editor.insertSnippet(new vscode.SnippetString(arrayGenerator(keywords)));
      // Handle's inserting snippets to text editor
    } else {
      insertHandler(keywords);
    }
  }

  if (keywords.includes("scroll")) {
    scrollHandler(keywords);
  }
};

module.exports = mainHandler;
