export async function getPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const request = new Request(url, { method: "GET", cache: "no-store" });

  try {
    const response = await fetch(request);
    const responseData = await response.json()
    const pokemons = Promise.all(
        responseData.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url)
          })
    ) 

    return pokemons;
  } catch (error) {
    console.log("Error while fetching Pokemons : ", error);
  }
}

export async function getPokemonData(url) {
  const request = new Request(url, { method: "GET" });

  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log("Error while fetching Pokemon data : ", error);
  }
}
