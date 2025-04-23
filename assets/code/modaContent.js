const modalContent = document.querySelector('.content')

// ---------------------------------------------------------------------------
// Page Modal

const pageBtn = document.getElementById('pageBtn')

pageBtn.addEventListener('click', () => {

    modalContent.innerHTML = `<p>Teste Page</p>`

})


// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Search Modal

const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {

    modalContent.innerHTML = `<p>Teste Search</p>`

})


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
                        <h3>Tipo do Pokémon</h3>
                        <p><strong>Slot:</strong> ${typeInfo.slot}</p>
                        <p><strong>Nome:</strong> ${typeInfo.type.name}</p>
                    `

                break

                case 'evolution':

                  const evol = currentPokemon.species.url

                  fetch(evol)
                    .then(response => response.json())
                    .then(pokemonEvolution => {

                        

                    })

                break

                case 'moves':
                
                    modalContent.innerHTML = `<p>Teste ${secondClass}</p>`

                break

                case 'games':
                
                modalContent.innerHTML = `<p>Teste ${secondClass}</p>`

                break

            }

        })
    })
})


