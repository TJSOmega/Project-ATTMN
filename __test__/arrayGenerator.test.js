"use strict";

let arrayGenerator = require('../src/handler-functions/arrayGenerator.js');

describe("Array Generator Function tests", () => {
  it("should insert array with 3 values", () => {
    let number = 3
    let expected = "let itemArray =[ item, item, item]";
    let val = `insert ${number} item array`;
    expect(arrayGenerator(val)).toEqual("let ${0:arrayName} = [ ${1:item}, ${2:item}, ${3:item}]");
  });

  it("should return array containing values", () => {
    let val = "insert array with cookie, sandwich, pizza";
    expect(arrayGenerator(val)).toContain("cookie");
  });
});


// insert array with word word word