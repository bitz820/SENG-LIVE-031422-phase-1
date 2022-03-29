# DOM Events

## Objectives

- Understand static vs dynamic websites

- Handling click and submit events

- .preventDefault()

- HTML forms

### Warm Up Exercise

Use this image as an example of how each character should should look after completing the following exercise:

<p align="center">
    <img src="../assets/warmup.png" width="200" height="350">
</p>

Add the following capabilities to `renderPokemon()`:

✔️ Creates an "h3" element for each Pokemon and stores the element in a variable 'pokeLikes'

const pokeLikes = document.createElement("h3")
pokelikes.textContent = "Likes "
    - Use textContent() to fill in the heading with the text "Likes: "

✔️ Creates an "h5" element for each Pokemon and stores the element in a variable 'likesNum'
function createHeader ()
const h5 = document.creatElement("h5")
h5.className = 

    - Assign likesNum a className of "likes-num"
    - Use textContent() to fill in the heading with the Pokemon character's number of likes

✔️ Creates a "button" element for each Pokemon and stores the element in a variable (likesBttn)

    - Assign likesBttn a className of "likes-bttn"
    - Use textContent() to fill in the button with: "♥"

✔️ Creates a "button" element for each Pokemon and stores the element in a variable (deleteBttn)

    - Assign deleteBttn a className of "delete-bttn"
    - Use textContent() to fill in the button with a label, "Delete"

✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"

    - Use append() as necessary

## Deliverables

### 1. Create a function (addLike) that:

✔️ Accepts a single character object 'character' and 'likesNum' as parameters

✔️ Increments the character's number of likes by 1

✔️ Updates the textContent of the likesNum element to reflect the Pokemon's updated number of likes

💡 In renderPokemon(), add an event listener to likeBttn, making sure to specify the event as well as the callback function (addLike).

<p align="center">
    <img src="../assets/addLike.gif" width="200" height="350">
</p>

### 2. Create a function (deletePokemon) that:

✔️ Accepts a single pokeCard as a parameter

✔️ Removes the pokeCard from the DOM

💡 In renderPokemon(), add an event listener to deleteBttn, making sure to specify the event as well as the callback function (deletePokemon).

<p align="center">
    <img src="../assets/delete.gif" width="800" height="500">
</p>

💡 Alternative approach, targeting the DOM element to remove via click event

### 3. Create a function (createPokemon) that:

✔️ Accepts a single submit event as a parameter

✔️ Prevents default form submission behavior (i.e., page refresh)

✔️ Creates a new Pokemon object and adds it to the "pokemons" Array

    - Use .querySelector() to select and retrieve the value of '#name-input', setting it as the "name" for the new Pokemon object

    - Use .querySelector() to select and retrieve the value of '#img-input', setting it as the "img" for the new Pokemon object

✔️ Creates a pokeCard for the new Pokemon using renderPokemon()

✔️ Resets pokeForm using .reset()

💡 Use Chrome Dev Tools to view changes being made to the DOM

💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

<p align="center">
    <img src="../assets/submit.gif" width="800" height="500">
</p>

### Resources

- [JS Event Delegation vs. Bubble & Capturing](https://medium.com/@marjuhirsh/event-propagation-event-delegation-7d3db1baf02a)

- [Static and Dynamic Websites: What's the Difference?](https://www.mlytics.com/blog/static-and-dynamic-websites-whats-the-difference/)
