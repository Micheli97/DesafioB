export async function getPokemons(){

    const url = "https://pokeapi.co/api/v2/pokemon?limit=20"
    const request = new Request(url, {method : "GET"})

    const pokemonPromises = []

    try{
        const response = await fetch(request)
        return response.json()
    } catch (error){
        console.log("Error while fetching Pokemons : ", error )
    }
}


