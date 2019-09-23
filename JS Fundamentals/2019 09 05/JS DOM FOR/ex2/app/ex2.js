// SELECTORS 
const buttons = document.querySelectorAll('.btn')

// EVENT LISTENERS
buttons.forEach(btn => {
    
    // ADDING A CLICK EVENT LISTENER TO ALL OF THE BUTTONS
    btn.addEventListener('click', (e) => {
        
        // CHECKING THE SELECTED BUTTON'S IDS
        if(btn.id == "alertBtn") {
            alert("Hey! I'm an alert box!")
        }

        if(btn.id == "confirmBtn") {
            confirm("Are you sure this is a confirm box?")
        }

        if(btn.id == "promptBtn") {
            let input = prompt('Check the console to see, if this was really a prompt box.')
            console.log(input)
        }

    })
})
