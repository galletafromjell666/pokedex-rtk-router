/* eslint-disable react/prop-types */
import { useGetPokemonByNameQuery } from "../features/pokeApiSlice";
import PokeBall from "./../assets/pokeball.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PreviewCard = ({ name }) => {
  const { data } = useGetPokemonByNameQuery(name);
  let styleBgColor;
  if (data) {
    styleBgColor = { backgroundColor: data.color };
  }

  return (
    <>
      {data ? (
        <section
          style={styleBgColor}
          className="relative max-w-[230px] h-[150px] rounded-xl overflow-hidden pt-3.5 pr-0 pb-2 pl-3"
        >
          <h1 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">
            {data.name}
          </h1>
          <h2 className="opacity-50 absolute right-[10px] top-[6px] font-bold tracking-wider text-[16px]">
            #{String(`${data.id}`).padStart(3, "0")}
          </h2>
          <figure className="flex items-center justify-center">
            <figcaption className="flex flex-col  justify-center items-center w-1/2">
              {data.types.map((type, index) => (
                <small
                  key={index}
                  className="typeName flex items-center content-center font-normal w-[75px]  capitalize text-xs my-1 rounded-full md:text-[0.95rem] "
                >
                  <span className="w-full px-[3px] py-[6px] text-center opacity-70">
                    {type.type.name}
                  </span>
                </small>
              ))}
            </figcaption>
            <div className="w-1/2 relative">
              <img
                className="absolute right-[-18px] bottom-[-10px] opacity-20"
                src={PokeBall}
                alt="Pokeball"
              />
              <div
                className="relative w-full h-auto right-[2px] bottom-[12px]"
                // src={img}
                alt={data.name}
              >
                <LazyLoadImage
                  src={data.sprites.other["official-artwork"].front_default}
                  alt="Image Alt"
                />
              </div>
            </div>
          </figure>
        </section>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
};

export default PreviewCard;
