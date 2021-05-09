'use strict';

const insertHandler = require('../src/handler-functions/insert-handler.js')

describe("Insert Handler tests", () => {
  it("should insert the correct snippet", () => {
    let expected = "foreach";
    let val = "insert for each";
    expect(insertHandler(val)).toEqual("foreach");
  });

  it("should create a line of text at a specific line", () => {
    let val = "insert text at line 20";
    insertHandler(val).expect()
  });


});



//foreach
//forof
//forin
//anonymousfunction
//arrowfunction
//require
//destructure object
//destructure array
//function statement
//if statement
