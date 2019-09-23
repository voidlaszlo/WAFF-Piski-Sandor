// SELECTORS
let r = document.getElementById('r')
let g = document.getElementById('g')
let b = document.getElementById('b')
let btn = document.getElementById('btn')
let box = document.getElementById('box')

// VARIABLES
let numbers = generateNumber(3)

// LOGIC
box.style.background = `rgb(${r.value}, ${g.value}, ${b.value})`

// EVENT LISTENERS
btn.addEventListener('click', (e) => {
    numbers = generateNumber(3)

    r.value = numbers[0]
    g.value = numbers[1]
    b.value = numbers[2]
    
    box.style.background = `rgb(${r.value}, ${g.value}, ${b.value})`
})

// FUNCTION
function generateNumber(num) {
    let object = []
    for(let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * 256)
        object.push(random)
    }
    return object
}

