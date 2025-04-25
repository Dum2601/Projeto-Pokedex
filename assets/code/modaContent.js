const modalContent = document.querySelector('.content')

// ---------------------------------------------------------------------------
// Page Modal


const pageBtn = document.getElementById('pageBtn')

pageBtn.addEventListener('click', () => {

    const urlPokemonList = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

    fetch(urlPokemonList)
        .then(response => response.json())
        .then(pokemonListLength => {

            const pagesLength = pokemonListLength.count // Return the lenght of the pokemons array

            function listPages()
            {
                let pages = []

                for (i = 0; i <= pagesLength; i++)
                    {
        
                        let modalContentPages = `<button id="selectPageBtn"">${i}</button>`
                        pages.push(modalContentPages)
        
                    }

                return pages.join('')

            }

            modalContent.innerHTML = `<div class="listPages">${listPages()}</div>`

            const selectPageBtns = document.querySelectorAll('#selectPageBtn')
            selectPageBtns.forEach(button => {
                button.addEventListener('click', (event) => {

                    const pageValue = event.target.innerText

                    callAPI(pageValue) 
                    switchModal()
                })
            })

        })

})






// ----------------------------------------------------------------------------
// Search Modal

const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => 
{
  modalContent.innerHTML = `
    <div>
      <label for="searchTextarea">Search by the name:</label>
      <textarea id="searchTextarea" placeholder="Search here and push enter in your keyboard"></textarea>
    </div>
    <div class="image_name"></div>
  `

  const image_name = document.querySelector('.image_name')
  const searchTextarea = document.getElementById('searchTextarea')

  searchTextarea.addEventListener('keydown', event => 
  {
    if (event.key === 'Enter') 
    {
      event.preventDefault()
      const pokemonName = searchTextarea.value.trim()
      if (pokemonName !== '') 
      {
        callAPIByName(pokemonName, image_name)
      }
    }
  })
})

function callAPIByName(pokemonName, image_name) 
{
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`

  fetch(url)
    .then(response => 
    {
      if (!response.ok) 
      {
        throw new Error('Pokémon não encontrado')
      }
      return response.json()
    })
    .then(pokemon => 
    {
      currentPokemon = pokemon

      const nome = pokemon.name
      const image = pokemon.sprites.other.showdown.front_default

      image_name.innerHTML = `
        <img src="${image}" alt="Pokemon Image">
        <h2 class="pokeName">${nome}</h2>
      `
    })
    .catch(error => 
    {
      console.error("Error: ", error)
      image_name.innerHTML = `<p>Not found. Try again.</p>`
    })
    switchModal()
}





// ------------------------------------------------------------------------------
// Ul modal

const pokeData = document.querySelectorAll('.pokeData')

pokeData.forEach(poke => {

    const ulElements = poke.querySelectorAll('ul.modalBtn')
    
    ulElements.forEach((ul) => {

        ul.addEventListener('click', () => {

            const secondClass = ul.classList[1]

            switch(secondClass)
            {

                case 'type':

                    const typeInfo = currentPokemon.types[0]

                    modalContent.innerHTML = `
                        <h3>Type</h3>
                        <p><strong>Nome:</strong> ${typeInfo.type.name}</p>
                    `

                break

                case 'evolution':
                    const speciesUrl = currentPokemon.species.url
                
                    fetch(speciesUrl)
                        .then(response => response.json())
                        .then(speciesData => {
                            const evolutionChainUrl = speciesData.evolution_chain.url
                
                            return fetch(evolutionChainUrl)
                        })
                        .then(response => response.json())
                        .then(evolutionData => {
                           
                            let chain = evolutionData.chain
                            let currentName = currentPokemon.name.toLowerCase()
                            let nextEvolution = null
                
                           
                            while (chain) {
                                if (chain.species.name === currentName && chain.evolves_to.length > 0) {
                                    nextEvolution = chain.evolves_to[0].species.name
                                    break
                                }
                
                                chain = chain.evolves_to[0] || null
                            }
                
                            if (nextEvolution) {
                                modalContent.innerHTML = `
                                    <h3>Next Evolution</h3>
                                    <p>${nextEvolution}</p>
                                `
                            } else {
                                modalContent.innerHTML = `
                                    <p>There's no evolution after.</p>
                                `
                            }
                        })
                        .catch(error => {
                            console.error("Erro ao buscar evolução:", error)
                            modalContent.innerHTML = `<p>Erro ao buscar evolução.</p>`
                        })
                    break
                

                case 'moves':
                    const pokeMoves = currentPokemon.moves
                
                    let moveList = pokeMoves.map((moveObj) => moveObj.move.name)
                
                    modalContent.innerHTML = `
                        <h3>Moves</h3>
                        ----------------------------
                        <ul>
                            ${moveList.map(move => `<li>${move}</li>`).join('')}
                        </ul>
                    `
                break
                    

                case 'games':
                    const pokeGames = currentPokemon.game_indices
                
                    modalContent.innerHTML = `
                        <h3>Game Appearances</h3>
                        ----------------------------
                        <ul>
                            ${pokeGames.map(game => `<li>${game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1)}</li>`).join('')}
                        </ul>
                    `
                break
                

            }

        })
    })
})


