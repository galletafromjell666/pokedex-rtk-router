import { Link, Outlet } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../features/pokeApiSlice";

export const rootLoader = async () => {
  //first gen includes 151 pkm
  const apiPromise = store.dispatch(pokeApi.endpoints.getAllPokemon.initiate());
  try {
    const response = await apiPromise;
    return response;
  } catch (e) {
    console.log(`error `, e);
  }
};

const Root = () => {
  return (
    <div className="relative">
      <nav className="bg-transparent fixed top-0 z-50 w-full h-[50px]">
        <Link to={`/`}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go Home
          </button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
