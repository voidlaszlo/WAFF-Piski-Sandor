// VARIABLES
let random = Math.floor(Math.random() * 25 + 1)
let playground = document.querySelector('.playground')
let count = 0

// LOGIC
createPlayground(25)


// FUNCTIONS
function createPlayground(num) {
    
    for(let i = 0; i < num; i++) {
        let box = document.createElement('div')
        box.textContent = i == random ? count : "X"
        box.textContent == count ? box.classList.add('character') : null
        box.classList.add('box')
        playground.append(box)
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
                    char.textContent = 'X'
                    char.classList.remove('character')
                    char.previousSibling.classList.add('character')
                    char.previousSibling.textContent = count
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
                    char.textContent = 'X'
                    char.classList.remove('character')
                    char.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.classList.add('character')
                    char.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent = count
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
                    char.textContent = 'X'
                    char.classList.remove('character')
                    char.nextSibling.classList.add('character')
                    char.nextSibling.textContent = count
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
                    char.textContent = 'X'
                    char.classList.remove('character')
                    char.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('character')
                    char.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent = count
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

            case 84:
                char.classList.toggle('hitted')

        default:
            console.log('please use arrow keys')
        
    }
})