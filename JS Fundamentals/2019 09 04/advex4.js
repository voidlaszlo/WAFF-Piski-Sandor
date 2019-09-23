// VARIABLES //
let string = prompt('Write a string there..')

// LOGIC //
console.log(alphaOrder(string))

// FUNCTIONS //
function alphaOrder(str) {

    return str.split('').sort().join('')

}