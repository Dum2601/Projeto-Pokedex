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
            // modalContent.innerHTML = `<p>Teste ${secondClass}</p>`

            switch(secondClass)
            {

                case 'type':

                    modalContent.innerHTML = `<p>Teste ${secondClass}</p>`

                break

                case 'evolution':
                
                    modalContent.innerHTML = `<p>Teste ${secondClass}</p>`

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


