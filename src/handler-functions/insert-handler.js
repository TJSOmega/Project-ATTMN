"use strict";
const vscode = require("vscode");

const breakDown = require("./break-down-words.js");
const snippets = require("../../snippets/snippet.js");

const numCheck = /\d/;
const insertHandler = (value) => {
  const editor = vscode.window.activeTextEditor;
  let snipword = breakDown(value);
  const currentSnip = require(`../../resources/${snipword}.js`); // requiring each individual snippet file.

  console.log("SNIPWORD", snipword);
  if (snippets[snipword] && !numCheck.test(value)) {
    editor.insertSnippet(
      new vscode.SnippetString(currentSnip()) /// create snippet to be displayed on editor.
    );
  } else if (
    snippets[snipword] &&
    numCheck.test(value) &&
    value.includes("line")
  ) {
    let matches = value.match(/\d+/);
    console.log(matches);
    editor.insertSnippet(
      new vscode.SnippetString(snippets[snipword]), /// create snippet to be displayed on editor.
      new vscode.Position(parseInt(matches[0] - 1), 0)
    );
  } else if (value.includes(`${value}`)) {
    editor.insertSnippet(new vscode.SnippetString(value));
  }
};

module.exports = insertHandler;
