
import { useLoaderData } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../features/pokeApiSlice";
import DetailsContainer from "../components/DetailsContainer";
export const pokemonLoader = async ({ params: { pokemonName } }) => {
  // Rejections propagate to the route errorElement instead of being swallowed.
  return store.dispatch(
    pokeApi.endpoints.getPokemonByName.initiate(pokemonName)
  );
};
const Pokemon = () => {
  const { data } = useLoaderData();
  return (
    <div className="" >
      {data && <DetailsContainer {...data} />}
    </div>
  );
};

export default Pokemon;
