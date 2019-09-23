// VARIABLES
const random = Math.floor(Math.random() * 10 + 1)
let input;

// LOGIC
while(input != random) {
    
    input = prompt('Guess a number.')

    if(input > random) {
        alert('Your guessed number is too high...')
    } else if(input < random) {
        alert('Your guessed number is too low...')
    } else {
        alert('You are correct.')
    }
}

console.log(random) 