<<<<<<< HEAD
const assert = require("assert");

=======
const assert = require('assert');
const supertest = require('supertest');
const extension = require('../../extension.js');
>>>>>>> 1327fd22535e63a299e1d828b1cfb7bb62b0c8bf
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require("vscode");
// const myExtension = require('../extension');

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
