"use strict";

const vscode = require("vscode");

const arrayGenerator = require("./handler-functions/arrayGenerator.js");
const insertHandler = require("./handler-functions/insert-handler.js");
const scrollHandler = require("./handler-functions/scroll-handler.js");

const mainHandler = (value) => {
  let check = value.split(' ')
  let keywords = value.toLowerCase()
  console.log(check)
  if (
    check[0] === "insert" ||
    check[0] === "answer" ||
    check[0] === "enter"
    ) {
    vscode.window.showInformationMessage(`You said: ${value}`);
    // console.log(keywords)
  } else {
    vscode.window.showInformationMessage(`Please start your Statment by saying "Insert" for text, or "Scroll" for movement!`);
    return
  }

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
  else {
    console.log('Incorrect Statement')
  }
};

module.exports = mainHandler;
