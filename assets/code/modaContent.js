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
                                    <h3>Próxima Evolução</h3>
                                    <p>${nextEvolution}</p>
                                `
                            } else {
                                modalContent.innerHTML = `
                                    <h3>Próxima Evolução</h3>
                                    <p>Este Pokémon não evolui mais.</p>
                                `
                            }
                        })
                        .catch(error => {
                            console.error("Erro ao buscar evolução:", error)
                            modalContent.innerHTML = `<p>Erro ao buscar evolução.</p>`
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


