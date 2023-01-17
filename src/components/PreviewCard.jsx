/* eslint-disable react/prop-types */
import { useGetPokemonByNameQuery } from "../features/pokeApiSlice";
import PokeBall from "./../assets/pokeball.png";
import "react-lazy-load-image-component/src/effects/blur.css";
const PreviewCard = ({ name }) => {
  const { data } = useGetPokemonByNameQuery(name);
  let styleBgColor;
  if (data) {
    styleBgColor = { backgroundColor: data.color };
  }

  return (
    <div className="relative">
      {!data && (
        <div className="absolute z-50 w-full rounded-xl h-full is-loading"></div>
      )}
      <section
        style={styleBgColor}
        className="relative min-w-[200px] max-w-[230px] h-[150px] rounded-xl overflow-hidden pt-3.5 pr-0 pb-2 pl-3"
      >
        <h1 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">
          {data ? data.name : "loading"}
        </h1>
        <h2 className="opacity-50 absolute right-[10px] top-[6px] font-bold tracking-wider text-[16px]">
          {data ? "#" + String(`${data.id}`).padStart(3, "0") : "#000"}
        </h2>
        <figure className="relative flex items-center justify-center">
          <figcaption className="flex flex-col  justify-center items-center w-1/2">
            {data
              ? data.types.map((type, index) => (
                  <small
                    key={index}
                    className="typeName flex items-center content-center font-normal w-[75px]  capitalize text-xs my-1 rounded-full md:text-[0.95rem] "
                  >
                    <span className="w-full px-[3px] py-[6px] text-center opacity-70">
                      {type.type.name}
                    </span>
                  </small>
                ))
              : "Loading"}
          </figcaption>
          <div className="w-1/2 h-full relative">
            {data && (
              <div>
                <img
                  className="relative w-full z-50 h-auto right-[2px] bottom-[12px]"
                  src={data.sprites.other["official-artwork"].front_default}
                  alt={data.name}
                />
              </div>
            )}
            {/* <LazyLoadImage
                  
                  alt="Image Alt"
                  placeholderSrc={PokeBall}
                /> */}
          </div>
        </figure>
        <img
          className="absolute w-[60%] right-[-40px] bottom-[-40px] z-10 opacity-20"
          src={PokeBall}
          alt="Pokeball"
        />
      </section>
    </div>
  );
};

export default PreviewCard;
