// What is the key difference between an array and an object?

// Creating objects:



// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like. 'img' should be an address to an img as a string.
const character = {
  name: 'jinx',
  img: 'www.img.com',
  likes: 0
}

// Retreiving values from an object

// bracket Nottation
// obj['key']

// character['name']

// dot Nottation
// obj.key

// character.img

// Define a function increaseValue() that should take in 2 arguments: 'object' and 'key'. Increment the value returned from the 'key' by 1 so that every time the function is invoked, the number of likes will increment.

function increaseValue(obj, key) {
  return ++obj[key]
}

const increaseValue = (obj, key) => ++obj[key]

increaseValue(character, "likes")

// Expectation: increaseValue(character, "likes") -> 1
// Expectation: increaseValue(character, "likes") -> 2
// Expectation: increaseValue(character, "likes") -> 3

// Manipulating an object

// Adding a new property and value to an existing object

// destructive
character['abilities'] = 'thunderbolt'
// non-destructive
const updatedChar = { ...character, abilities: 'thunderbolt' }
// Object.assign()
Object.assign({}, obj, key[value])
// Create a function updateChar(): this function should take in three arguments: an object, a key and a value. This function should operate non-destructively so that it will return a new Object with the new property included.

function updateChar(obj, key, val) {
  const newObj = {
    ...obj,
    key: [val]
  }
  return newObj
}

updateChar = (obj, key, val) => { return { ...obj, [key]: val } }

// Expection: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// Removing a key/value pair from an existing object

// destructive
delete character.name
// non-destructive
const copy = { ...character }
delete copy.name
// for...in loop
for (const key in obj) {
  obj[key]
}
// Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property
function charDetails(obj) {
  for (const key in obj) {
    console.log(key + ": " + obj[key])
  }
}
// Expectation: charDetails(character) -> name: Pikachu img: www.img.com likes: 0

// Write a function printAbilities that accepts a character object as an argument and returns a list of the characters abilities as a string.  Use the provided pikachu object to test.
function printAbilities(obj) {
  const abilityArr = obj.abilities.map(ability => `"${ability.name}"`)
  return abilityArr.join(", ")
}
// Expectation: printAbilities(pikachu) -> "static, lightning-rod"

const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

// BONUS: Modify printAbilities so that it returns the string as: 'Abilities: static, lightning-rod'
document.getElementsB