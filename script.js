const data = {
    "characters": [{
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": "Turkey"
    }, {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "location": "India"
    }, {
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      "location": "Spain"
    }]
  };
  const charactersContainer = document.getElementById("characters-container");
  data.characters.forEach((character) => {
    const charDiv = document.createElement("div");
    charDiv.className = "card";
   
    charDiv.innerHTML = `
    <img src="${character.image}" alt="${character.name}" class="character-image">
    <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
    <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
    <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
    <p class="character-detail"><span class="attribute">Location:</span> ${character.location}</p>
  `;
    charactersContainer.appendChild(charDiv);
  });