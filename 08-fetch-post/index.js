const getPokemon = () => {
  fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((characters) => {
      characters.forEach(renderPokemon);
    });
};

getPokemon();

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

const createPokemon = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // NEEDS TO CHANGE,
    name,
    img,
    likes: 0,
  };

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(newChar)
}

  fetch("http://localhost:3000/characters", configObj)

  
  renderPokemon(newChar);
  pokeForm.reset();
};



pokeForm.addEventListener("submit", createPokemon);

const increaseLikes = (e, char, likeNum) => {
  e.stopPropagation();
  ++char.likes;
  likeNum.textContent = char.likes;
};

const pokeFormContainer = document.querySelector("#poke-form-container")
    const showCharacter = (character) => {
      fetch(`http://localhost:3000/characters/${character.id}`)
        .then((resp) => resp.json())
        .then((character) => {
          const pokeCard = renderPokemon(character);
          pokeCard.id = "poke-show-card";
          pokeCard.dataset.id = character.id;
          loadComments(pokeCard, character);
          pokeContainer.replaceChildren(pokeCard);
          pokeFormContainer.replaceChildren(commentsForm());
          pokeContainer.replaceChildren(pokeCard);
        });
    };

    const renderComment = (comment, commentsDiv) => {
      let li = document.createElement("li");
      li.textContent = comment.content;
      commentsDiv.append(li)
      return li;
    };
    
    const commentsForm = () => {
      let form = document.createElement("form");
      form.id = "comment-form";
    
      // attach an event listener to the #comment-form
      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const content = e.target[1]
        const characterId = parseInt(document.querySelector("#poke-show-card").dataset.id)

        const newComment = {
          content, 
          characterId
        }

        fetch("http://localhost:3000/comments")
        .then(resp => resp.json())
        .then(data => console.log(data))
      })
    
      let commentInput = document.createElement("input");
      commentInput.type = "text";
      commentInput.id = "comment-input";
    
      let label = document.createElement("label");
      label.className = "form-label";
      label.textContent = "Leave a comment: ";
      form.appendChild(label);
    
      let submit = document.createElement("input");
      submit.type = "submit";
      submit.id = "submit";
    
      form.append(commentInput, submit);
    
      return form;
    };
    


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
  likesBttn.addEventListener("click", (e) => 
  increaseLikes(e, char, likeNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", (e) => {
    e.stopPropagation()
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
};


function loadComments(pokeCard, character){
  const commentsDiv = document.createElement("div")
  commentsDiv.id = `comment-card-${character.id}`
 const h4 = document.createElement("h4")
    h4.innerText = `${character.comments.length} comments: `
    commentsDiv.append(h4)
  pokeCard.append(commentsDiv)
  character.comments.forEach(comment => renderComment(comment, commentsDiv))
}


