'use strict';




function arrayGenerator(data) {
  let numCheck = /^[0-9]+$/
  let array = data.split(' ')
  let number = 0
  
  for (let i = 0; i < array.length; i++) {
    
    if (array[i].match(numCheck)) {
      number = array[i]

    }
    if (array[i] === 'for') {
      number = 4
     
    }
    if (array[i] === 'one') {
      number = 1

    }
    if (array[i] === 'with') {
      let start = i
      let newArray = []
      let string = 'let ${0:arrayName} = ['

      for (let j = start + 1; j < array.length; j++) {

        newArray.push(array[j])
      }
      console.log(newArray)
      for (let m = 0; m < newArray.length; m++) {
        string += ` ${newArray[m]},`
      }
      let newString = string.slice(0, string.length - 1);
    console.log('WITH LOOP', newString)
    newString += ']'
    return newString
    }
  }
    let string = 'let ${0:arrayName} = ['
    for (let i = 0; i < number; i++) {
      string += ` $\{${i + 1}:item},`
    }
    console.log(string)
    let newString = string.slice(0, string.length - 1);
    console.log('BLANK LOOP', newString)
    newString += ']'
    return newString
}

module.exports = arrayGenerator