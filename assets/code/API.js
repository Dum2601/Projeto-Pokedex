const image_name = document.querySelector('.image_name')

let currentIndex = 1 // É o currentIndex que muda os pokemon Pbs.: Caso o número não exista fica o gif de caregando (colocar tratamento para isso)

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
