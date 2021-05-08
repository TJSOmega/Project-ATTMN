"use strict";

const vscode = require("vscode");

const scrollHandler = (value) => {
  if (value.includes("bottom")) {
    let lines = vscode.window.activeTextEditor.document.lineCount;
    vscode.commands.executeCommand("editorScroll", {
      to: "down",
      by: "line",
      value: lines,
      revealCursor: true,
    });
  }
  if (value.includes("top")) {
    let lines = vscode.window.activeTextEditor.document.lineCount;
    vscode.commands.executeCommand("editorScroll", {
      to: "up",
      by: "line",
      value: lines,
      revealCursor: true,
    });
  }
};

module.exports = scrollHandler;
