const apiHost = "https://pokeapi.co/api/v2";

export const getPokemon = () => {
  return fetch(`${apiHost}/pokemon`).then((res) => res.json());
};
