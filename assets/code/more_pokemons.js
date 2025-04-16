const button = document.getElementById('button')

let number = 10

show_pokemons(number)

button.addEventListener('click', () => 
{

    number = number + 10
    show_pokemons(number)

})

