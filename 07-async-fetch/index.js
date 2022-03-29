
const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

const getPokemon = () => {
fetch('http://localhost:3000/characters')
.then(resp => resp.json())
.then(characters => {
  characters.forEach(character => renderPokemon(character))
})
}

getPokemon()

const showCharacter = (character) =>  {
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(resp => resp.json())
  .then(character => {
    const pokeCard = renderPokemon(character)
    pokeCard.id = "poke-show-card"
    pokeContainer.replaceChildren(pokeCard)
  })
}


// event handler for the poke-form submission:
const createPokemon = (e) => {
  // e is the event object, event objects are actually created when an event occurs
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // NEEDS TO CHANGE,
    name,
    img,
    likes: 0,
  };

  renderPokemon(newChar);
  pokeForm.reset();
};

// we are only passing in a reference to the function as a callback
// What does adding () do to callback function
// event object will be passed implicitly to createPokemon
// under the hood this is what is happening:
// pokeForm.addEventListener("submit", (e) => createPokemon(e));

pokeForm.addEventListener("submit", createPokemon);



// this fires off when the like button is clicked
const increaseLikes = (char, likeNum) => {
      // inside here I need to increment the characters number of likes
      ++char.likes

      // how will I update the DOM to reflect the new number:
      likeNum.textContent = char.likes
}



const renderPokemon = (char) => {

  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  pokeCard.addEventListener("click", () => showCharacter(char));

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likeNum = document.createElement("h3");
  likeNum.className = "likes-num";
  likeNum.textContent = char.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";

  // we are attaching the event listener here because we have access to the element directly upon creation
  // cleaned up version, more modern syntax:
  likesBttn.addEventListener('click', () => increaseLikes(char, likeNum))

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";

  // could use refactoring:
  deleteBttn.addEventListener('click', () => {
    pokeCard.remove()
    // inside here, im going to remove the character card from the DOM

  })
  
  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  
  return pokeCard
}
