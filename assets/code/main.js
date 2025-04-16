const pokemonBoxes = document.querySelector('.pokemon-boxes')


function show_pokemons(more)
{

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${more}`

    fetch(url)
        .then(response => response.json())
        .then(allPokemon => 
        {

            var pokemons = []

            allPokemon.results.map(val => 
            {

                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => 
                    {

                        pokemons.push
                        (

                            {

                                nome: val.name,
                                imagem: pokemonSingle.sprites.front_default

                            }

                        )

                        if (pokemons.length == more)
                        {

                            pokemonBoxes.innerHTML = ''

                            console.log(pokemons)
                            pokemons.map(val => 
                            {

                            pokemonBoxes.innerHTML += `
                                
                                <div class="pokemon-box">

                                    <img src="${val.imagem}" alt="Ditto">
                                    <p>${val.nome}</p>

                                </div>

                                `


                            })

                        }

                    })

            })

        })


    

    }

