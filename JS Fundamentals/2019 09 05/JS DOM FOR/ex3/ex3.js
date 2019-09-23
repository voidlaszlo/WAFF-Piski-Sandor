// SELECTORS
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const nums = document.querySelectorAll('.num')
const output = document.getElementById('output')

// FUNCTIONS
function checkNumbers() {
    if(Number(num1.textContent) > Number(num2.textContent)) {
        output.textContent = ">"
    } else if(Number(num1.textContent) < Number(num2.textContent)) {
        output.textContent = "<"
    } else {
        output.textContent = "="
    }
}

// EVENT LISTENERS
nums.forEach(num => {
    num.addEventListener('mouseover', (e) => {
        let random = Math.floor(Math.random() * 20)
        num.textContent = random
        checkNumbers();
    })
})