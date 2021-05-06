"use strict";
const vscode = require("vscode");
const breakDown = require("./break-down-words.js");
const snippets = require("../../resources/snippet.js");

const numCheck = /\d/;
const insertHandler = (value) => {
  const editor = vscode.window.activeTextEditor;
  let snipword = breakDown(value);
  console.log("SNIPWORD", snipword);

  if (snippets[snipword]) {
    editor.insertSnippet(
      new vscode.SnippetString(snippets[snipword]) /// create snippet to be displayed on editor.
    );
  } else if (numCheck.test(value) && value.includes("line")) {
    let matches = value.match(/\d+/);
    editor.insertSnippet(
      new vscode.SnippetString(snippets[snipword]), /// create snippet to be displayed on editor.
      new vscode.Position(parseInt(matches[0] - 1), 0)
    );
    
  } else {
    let keywords = value.split(' ')
    keywords.shift()
    let newWords = keywords.join(' ')
    editor.insertSnippet(new vscode.SnippetString(newWords))
  }
};

module.exports = insertHandler;
