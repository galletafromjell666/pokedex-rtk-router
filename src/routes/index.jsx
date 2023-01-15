import { useGetAllPokemonQuery } from "../services/pokeApi";
import { Link } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
const index = () => {
  const { data: pokmData } = useGetAllPokemonQuery();
  //console.log(pokmData)
  return (
    <div className="flex items-center justify-center bg-white w-full">
      {pokmData ? (
        <div className="grid gap-x-12 grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-x-28 ">
          {pokmData.results.map((poke, index) => {
            return (
              <div key={index} className="">
                <Link to={`pokemon/${poke.name}`}>
                  <PreviewCard {...poke} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Null</h1>
      )}
    </div>
  );
};

export default index;
