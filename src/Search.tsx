import { useQuery } from "react-query";
import { getPokemon } from "./pokeapi";
import { createEvent, emitEvent, useEvent } from "./event";

const pokemonFetched = createEvent();

export const PokeDexComponent = () => {
  const { data = [] } = useQuery(`pokemon`, () => getPokemon());

  const pokemon = useEvent(pokemonFetched);

  console.log(pokemon);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => emitEvent(pokemonFetched, e.target.value)}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
