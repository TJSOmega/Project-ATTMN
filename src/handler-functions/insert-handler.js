"use strict";
const vscode = require("vscode");

const breakDown = require("./break-down-words.js");

const numCheck = /\d/;
let currentSnip;
const insertHandler = (value) => {
  const editor = vscode.window.activeTextEditor;
  let snipword = breakDown(value);
  console.log("SNIPWORD", snipword);

  if (snipword !== null) {
    currentSnip = require(`../../snippets/${snipword}.js`); // requiring each individual snippet file.
  }
  console.log("After Require");
  if (currentSnip && !numCheck.test(value)) {
    editor.insertSnippet(
      new vscode.SnippetString(currentSnip()) /// create snippet to be displayed on editor.
    );
  } else if (currentSnip && numCheck.test(value) && value.includes("line")) {
    let matches = value.match(/\d+/);
    console.log(matches);
    editor.insertSnippet(
      new vscode.SnippetString(currentSnip()), /// create snippet to be displayed on editor.
      new vscode.Position(parseInt(matches[0] - 1), 0)
    );
  } else {
    let keywords = value.split(" ");
    keywords.shift();
    let newWords = keywords.join(" ");
    editor.insertSnippet(new vscode.SnippetString(newWords));
  }
};

module.exports = insertHandler;
