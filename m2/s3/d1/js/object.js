//ESERCIZIO 1

function User(firstName, lastName, age, location) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        location: location,
        confrontAge: function(otherUser) {
            if (this.age > otherUser.age) {
                return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
            } else if (this.age < otherUser.age) {
                return `${this.firstName} è più giovane di ${otherUser.firstName}`;
            } else {
                return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
            }
        }
    };
}

const user1 = User("Mario", "Rossi", 30, "Roma");
const user2 = User("Luigi", "Bianchi", 25, "Milano");
const user3 = User("Atonio", "Diani", 47, "Taranto");
const user4 = User("Andrea", "Pieri", 18, "Bologna");
const user5 = User("Carlo", "Vinci", 61, "Genova");

const users = [user1, user2, user3, user4, user5];

function confrontAllUsers(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (i !== j) {
                const comparisonResult = users[i].confrontAge(users[j]);
                console.log(comparisonResult);
            }
        }
    }
}

confrontAllUsers(users);


//CONSTRUCTOR


class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
    }
}

const users = [
    new User("Mario", "Rossi", 30, "Roma"),
    new User("Luigi", "Bianchi", 25, "Milano"),
    new User("Antonio", "Diani", 47, "Taranto"),
    new User("Andrea", "Pieri", 18, "Bologna"),
    new User("Carlo", "Vinci", 61, "Genova")
];

function confrontAllUsers(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (i !== j) {
                const comparisonResult = users[i].confrontAge(users[j]);
                console.log(comparisonResult);
            }
        }
    }
}

confrontAllUsers(users);


//ESERCIZIO 2

document.getElementById('addPetButton').addEventListener('click', createPet);

let lastOwner = null;
const petContainer = document.getElementById('petList');
const ownerMap = new Map();

function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);
    addPetToList(pet);
    document.getElementById('petForm').reset();
}

function addPetToList(pet) {
    const petDetails = document.createElement('div');
    petDetails.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;

    if (ownerMap.has(pet.ownerName)) {
        const existingOwner = ownerMap.get(pet.ownerName);
        existingOwner.insertAdjacentElement('afterend', petDetails);
    } else {
        if (lastOwner !== pet.ownerName) {
            const emptyLine = document.createElement('div');
            emptyLine.innerHTML = '<br>';
            petContainer.appendChild(emptyLine);
            lastOwner = pet.ownerName;
        }

        petContainer.appendChild(petDetails);
        ownerMap.set(pet.ownerName, petDetails);
    }
}

function Pet(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
}








