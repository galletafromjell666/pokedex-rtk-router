
import { useLoaderData } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../features/pokeApiSlice";
import DetailsContainer from "../components/DetailsContainer";
export const pokemonLoader = async ({ params: { pokemonName } }) => {
  const apiPromise = store.dispatch(
    pokeApi.endpoints.getPokemonByName.initiate(pokemonName)
  );
  try {
    const response = await apiPromise;
    return response;
  } catch (e) {
    console.log(`error `, e);
  }
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
