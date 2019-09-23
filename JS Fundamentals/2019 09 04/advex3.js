/* VARIABLES */
let string = prompt('Write a string there..')

/* LOGIC */
console.log('The original string is: ' + string)
console.log("The result after the change is : " + createNewString(string))

/* FUNCTIONS */
function createNewString(string) {

    if(string.length < 4) {

        return string.toUpperCase()

    } else {

        smallString = string.substring(0, 3).toLowerCase()
        restString = string.substring(3, string.length)
        string = smallString.concat(restString)
        return string

    }
}