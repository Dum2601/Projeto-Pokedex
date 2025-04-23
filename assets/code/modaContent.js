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
