function callPokemon(page)
{

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0' // call 15 pokemon starting in index 0

    fetch(url)
        .then(response => response.json())
        .then(callPokemon => console.log(callPokemon))

}

callPokemon()



//O fundo mudará junto ao tipo do pokemon (verde = grama, vermelho = fogo...)
//Na parte de baixo do pokemon haverá uma parte que mostrará algumas informações em um modal ao apertar em uma parte (tipo, informação pokedex e etc)
