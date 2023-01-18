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
  return (
    <div
      id="pkmTest"
      className={`text-slate-50  min-h-fit md:h-[calc(100vh-50px)] pt-[50px]`}
      style={{ backgroundColor: typeColor }}
    >
      <div className="h-full pt-8 md:pt-0 mx-2 md:mx-6 lg:mx-12">
        <div className="h-[20%] flex flex-col">
          <div className="mt-auto font-nunito drop-shadow-md">
            <span className="text-3xl font-bold ">
              #{id.toString().padStart(3, 0)}
            </span>
            <h1 className="text-[3rem] pl-2 pt-2 capitalize font-bold">
              {name}
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-3/5 justify-center items-center">
          <div className="w-full md:w-[65%] flex flex-col-reverse md:flex-row justify-between h-full">
            <div className="w-full mx-auto md:w-[25%] overflow-y-visible ">
              <div className="relative flex flex-col  drop-shadow-md font-bold text-lg h-full content-center items-center wrap md:content-end justify-center space-y-1">
                <p>
                  Weight: <span className="font-normal">{weight * 0.1}Kg</span>
                </p>
                <p>
                  Height: <span className="font-normal">{height / 10}m</span>
                </p>
                <div className="absolute bottom-0 left-0 ml-0 md:ml-[5rem] ">
                  <WanaKanaWrapper
                    parentClassName={
                      "text-[3.4rem] w-fit text-black/40 drop-shadow-2xl md:text-[6.4rem]"
                    }
                    text={name}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[75%]">
              <img
                className="h-[90%] mx-auto drop-shadow-md"
                src={sprites.other["official-artwork"].front_default}
              />
            </div>
          </div>
          <div className="w-full md:w-[35%] h-fit relative pb-8 overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-center content-center">
              <div>
                <div className="flex space-x-6">
                  {types.map((type, index) => {
                    return (
                      <PokemonTypeIcon key={index} type={type.type.name} />
                    );
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
              </div>
              <Paginator parentClassName={" drop-shadow-xl"} id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
