"use strict";
const vscode = require("vscode");
const boilerPlate = require("../../snippets/node-express-boilderplate.js");
const breakDown = require("../handler-functions/break-down-words.js");

const boilerPlateHandler = (value) => {
  const editor = vscode.window.activeTextEditor;
  let snipword = breakDown(value);
  console.log(snipword);
  if (boilerPlate[snipword]) {
    editor.insertSnippet(new vscode.SnippetString(boilerPlate[snipword]));
  } else {
    vscode.window.showInformationMessage(
      "Sorry, I do not recognize that command."
    );
  }
};

module.exports = boilerPlateHandler;
