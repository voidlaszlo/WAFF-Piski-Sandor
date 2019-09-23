genNumber(299)

/* 
let howmanyrandoms = 0;
let object = []
let i = 3;

while(howmanyrandoms < 3) {
    let number = Math.floor(Math.random() * 256)
    object.push(number)
    howmanyrandoms++
}

console.log(object)
*/


function genNumber(num) {
    let object = []

    for(let i = 0; i < num; i++) {
        let number = Math.floor(Math.random() * 256)
        object.push(number)
    }

    console.log(object)
    return object
}
