export const buscarPokemon = async (pokemon) => {

    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const info = await response.json();

      return info;
    } catch (error) {
      alert("Error al traer los datos");
    } 
  };

  export const obtenerPokemones = async (limit , offset) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };