"use strict";

const breakDown = require("../src/handler-functions/break-down-words.js");

describe("Break Down Function tests", () => {
  it("should return a valid string", () => {
    let expected = "foreach";
    let val = "insert for each";
    expect(breakDown(val)).toEqual("foreach");
  });
});
