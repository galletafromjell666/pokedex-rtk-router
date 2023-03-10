import { Link, Outlet } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../features/pokeApiSlice";
import "./";
export const rootLoader = async () => {
  const {queryLimit: {limit}} = store.getState()
  const apiPromise = store.dispatch(pokeApi.endpoints.getAllPokemon.initiate(limit));
  try {
    const response = await apiPromise;
    return response;
  } catch (e) {
    console.log(`error `, e);
  }
};

const Root = () => {
  return (
    <div className="container-2xl">
      <nav className="absolute z-50 bg-transparent w-full h-[70px] flex justify-center">
        <Link className="h-full" to={`/`}>
          <img className="drop-shadow-lg h-full" src={`/pokeapi-cropped.svg`} />
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
