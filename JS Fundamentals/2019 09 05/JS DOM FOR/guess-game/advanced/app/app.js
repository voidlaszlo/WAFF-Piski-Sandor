// VARIABLES
let random = Math.floor(Math.random() * 10 + 1)
let playground = document.querySelector('.playground')
let output = document.getElementById('output')
const terms = ['switch', 'for', 'while', 'do-while', 'class', 'id', 'html', 'css', 'javascript', 'typeof']

// LOGIC
createPlayground(10)


// FUNCTIONS
function createPlayground(num) {
    
    for(let i = 0; i < num; i++) {
        let box = document.createElement('div')
        box.textContent = terms[i]
        box.textContent == 'for' ? box.classList.add('character') : null
        box.classList.add('box')
        playground.append(box)
        
        i == random ? output.textContent = terms[i] : console.log(output.text)
    }

}

// EVENT LISTENER
document.body.addEventListener('keyup', (e) => {
    let char = document.querySelector('.character')
    console.log(e.keyCode)

    try {
        if(!char.nextSibling) {
            console.log('no more siblings')
            throw 'what are you doing there'
        }
    } catch(err) {
        console.log(err)
    }

    switch(e.keyCode) {

        case 37:
            try {
                if(!char.previousSibling) {
                    console.log('you cant go out')
                } else {
                    console.log('left')
                    char.classList.remove('character')
                    char.previousSibling.classList.add('character')
                    break
                }
            } catch(err) {
                console.log(err)
            }

        case 38:
            try {
                if(!char.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling) {
                    console.log('you cant go out')
                } else {
                    console.log('up')
                    char.classList.remove('character')
                    char.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.classList.add('character')
                    break
                }
            } catch(err) {
                console.log(err)
            }

        case 39:
            try {
                if(!char.nextSibling) {
                    console.log('you cant go out')
                } else {
                    console.log('right')
                    char.classList.remove('character')
                    char.nextSibling.classList.add('character')
                    break
                }
            } catch(err) {
                console.log(err)
            }

        case 40:
            try {
                if(!char.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling) {
                    console.log('you cant go out')
                } else {
                    console.log('down')
                    char.classList.remove('character')
                    char.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('character')
                    break
                }
            } catch(err) {
                console.log(err)
            }

            case 13:
                char.classList.toggle('marked')
                break

            case 65:
                char.classList.toggle('attacked')
                break

        default:
            console.log('please use arrow keys')
        
    }
})

document.body.addEventListener('click', (e) => {
    e.target.classList.toggle('marked')
})