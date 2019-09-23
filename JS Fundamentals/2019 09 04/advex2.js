// GET A STRING FROM THE UESR
let string = prompt('Write something there..')

// SHOW THE STRING BEFORE SPLITTING IT FROM THE 5TH CHAR
console.log('The string before splitting it: ' + string)

// SPLIT THE INPUT STRING
string = string.substring(4, string.length)

// SHOW THE INPUT STRING AFTER SPLITTING IT
console.log('The string after splitting it: ' + string)

// THE WORD YOU ARE LOOKING FOR
let searchedString = "Script"

string.toLowerCase().includes(`${searchedString.toLowerCase()}`) ? console.log('its inside there') : console.log('not found')