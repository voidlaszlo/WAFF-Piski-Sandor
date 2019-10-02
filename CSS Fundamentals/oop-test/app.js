class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

class PersonContainer {
    constructor() {
        this.persons = []
    }

    addPerson(person) {
        this.persons.push(person)
    }
}

class PersonInputManager {
    constructor(){}

    getPerson() {
        return new Person(
            document.getElementById('firstname').value,
            document.getElementById('lastname').value
        )
    }

    clearInputs() {
        document.getElementById('firstname').value = ""
        document.getElementById('lastname').value = ""
    }
}

class PersonManager {
    constructor() {
        this.personInputManager = new PersonInputManager()
        this.personContainer = new PersonContainer()
        this.registerEventListeners()
    }

    registerEventListeners() {
        document.getElementById('btn').addEventListener('click', (e) => {
            const person = this.personInputManager.getPerson()
            this.personContainer.addPerson(person)
            this.personInputManager.clearInputs()
            this.render()
        })
    }

    render() {
        let output = document.getElementById('output')
        const persons = this.personContainer.persons
        output.innerHTML = ""
        for(const person of persons) {
            output.innerHTML += `Person : ${person.firstname} ${person.lastname}<br>`
        }
    }
}

const personManager = new PersonManager()