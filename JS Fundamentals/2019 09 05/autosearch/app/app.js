// SELECTORS
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const output = document.querySelector('.output')

// VARIABLES
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// EVENT LISTENERS
input.addEventListener('keyup', (e) => {

    output.innerHTML = ""
    
    let result = days.filter(day => day.toLowerCase().includes(e.target.value.toLowerCase()))
    
    makeOutput(result)
    
    e.target.value == "" ? output.innerHTML = "" : null

    e.preventDefault()
})

// FUNCTIONS
const makeOutput = (arr) => {
    arr.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        li.classList.add('list-item')
        output.append(li)
    })
}