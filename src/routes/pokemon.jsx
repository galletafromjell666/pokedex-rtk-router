import { useLoaderData } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../services/pokeApi";
import DetailsContainer from "../components/DetailsContainer";
export const pokemonLoader = async ({ params: { pokemonName } }) => {
  console.log(pokemonName);
  const apiPromise = store.dispatch(
    pokeApi.endpoints.getPokemonByName.initiate(pokemonName)
  );
  try {
    const response = await apiPromise;
    // console.log(response.data);
    return response;
  } catch (e) {
    console.log(`error `, e);
  }
};
const Pokemon = () => {
  const { data } = useLoaderData();
  //console.log(data)
  
  return (
    <div className="w-full h-auto" >
      {data ? <DetailsContainer {...data} /> : <h1>error u.u</h1>}
    </div>
  );
};

export default Pokemon;
