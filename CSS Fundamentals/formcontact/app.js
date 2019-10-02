// SELECTORS
const name = document.getElementById('name')
const email = document.getElementById('email')
const male = document.getElementById('male')
const female = document.getElementById('female')
const textarea = document.getElementById('textarea')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', (e) => {

    output.innerHTML = ""

    let arr = [name.value, email.value, male.value, textarea.value]
    console.log(arr)

    arr.map(item => {
        let li = document.createElement('li')
        li.textContent = item
        output.append(li)
    })

})