'use strict';

function textInsert(value) {
  let array = value.split(' ')
  array.shift()
  let newText = array.join(' ')

  return newText
}


module.exports = textInsert