import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetAllPokemonQuery } from "../features/pokeApiSlice";
import { Link } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { incrementByAmount } from "../features/queryLimitSlice";
const index = () => {
  const dispatch = useDispatch();
  const limitQuery = useSelector((state) => state.queryLimit.value);
  console.log(`limitQuery is ${limitQuery}`);
  const { data: pokmData } = useGetAllPokemonQuery(limitQuery);
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "200px",
    threshold: 1.0,
  });

  useEffect(() => {
    if (isVisible) dispatch(incrementByAmount(15));
  }, [isVisible]);

  //console.log(pokmData)
  return (
    <div className="flex items-center justify-center bg-white min-h-max max-h-auto w-full">
      {pokmData ? (
        <div className="relative grid gap-x-12 grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-x-28 ">
          {pokmData.results.map((poke, index) => {
            return (
              <div key={index} className="">
                <Link to={`pokemon/${poke.name}`}>
                  <PreviewCard {...poke} />
                </Link>
              </div>
            );
          })}
          <div ref={containerRef} className="absolute bottom-0"></div>
        </div>
      ) : (
        <h1>Loading index ...</h1>
      )}
    </div>
  );
};

export default index;
