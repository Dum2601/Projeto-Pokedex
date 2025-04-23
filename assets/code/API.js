const image_name = document.querySelector('.image_name')

var currentIndex = 97 
let currentPokemon = null

function callAPI(page) 
{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${page - 1}`

    fetch(url)
        .then(response => response.json())
        .then(callPokemon => 
        {
            const pokemonURL = callPokemon.results[0].url

            fetch(pokemonURL)
                .then(response => response.json())
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
        })
        .catch(error => 
        {

            console.error("Erro ao buscar Pokémon:", error)

        })
}

callAPI(currentIndex)
