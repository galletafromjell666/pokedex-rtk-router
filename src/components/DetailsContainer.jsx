/* eslint-disable react/prop-types */
import PokemonTypeIcon from "./PokemonTypeIcon";
import WanaKanaWrapper from "./WanaKanaWrapper";
import Paginator from "./Paginator";
import Stats from "./Stats";
const DetailsContainer = ({
  name,
  id,
  types,
  stats,
  sprites,
  color: typeColor,
  weight,
  height,
}) => {
  //console.log("stats", stats);
  return (
      <div
        id="pkmTest"
        className={`text-slate-50  h-[calc(100vh-50px)] `}
        style={{ backgroundColor: typeColor }}
      >
        <div className="h-full mx-12">
          <div className="h-[20%] flex flex-col">
            <div className="mt-auto">
              <span className="text-3xl font-bold">
                #{id.toString().padStart(3, 0)}
              </span>
              <h1 className="text-4xl font-nunito pl-2 pt-2 capitalize font-bold">
                {name}
              </h1>
            </div>
          </div>
          <div className="flex flex-row h-3/5 justify-center items-center">
            <div className="w-[65%] flex flex-row justify-between h-full">
              <div className="w-[25%] overflow-y-visible">
                <div className="relative flex flex-col font-bold text-lg h-full wrap content-end justify-center space-y-1">
                  <p>
                    Weight:{" "}
                    <span className="font-normal">{weight * 0.1}Kg</span>
                  </p>
                  <p>
                    Height: <span className="font-normal">{height / 10}m</span>
                  </p>
                  <div className="absolute bottom-0 left-0 ml-[5rem]  w-[300%]">
                    <WanaKanaWrapper
                      parentClassName={"text-[6.4rem] w-fit text-black/40"}
                      text={name}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[75%]">
                <img
                  className="h-[90%] mx-auto"
                  src={sprites.other["official-artwork"].front_default}
                />
              </div>
            </div>
            <div className="w-[35%] h-full relative">
              <div className="flex flex-row space-x-6">
                {types.map((type, index) => {
                  return <PokemonTypeIcon key={index} type={type.type.name} />;
                })}
              </div>
              <div>
                <h1 className="text-4xl my-6 font-bold ">Base stats:</h1>
                <div className="flex flex-col border-l-[6px] border-white/80 pl-6">
                  {stats.map((stat, index) => (
                    <Stats key={index} stats={stat} />
                  ))}
                </div>
              </div>
              <Paginator parentClassName={"absolute right-0 top-[25%]"} id={id} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default DetailsContainer;
