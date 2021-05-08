'use strict';

describe("Insert Function tests", () => {
  it("should return a valid string", () => {
    let expected = "foreach";
    let val = "insert for each";
    expect(breakDown(val)).toEqual("foreach");
  });

  it("should return valid string", () => {
    let expected = "require"; 
    let val = "insert require";
    expect(breakDown(val)).toEqual("require");
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
