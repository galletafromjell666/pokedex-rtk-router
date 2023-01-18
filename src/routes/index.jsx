import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useGetAllPokemonQuery } from "../features/pokeApiSlice";
import { Link } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { incrementByAmount } from "../features/queryLimitSlice";
import Loader from "../components/Loader";
const index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();
  const limitQuery = useSelector((state) => state.queryLimit.value);
  const { data: pokmData } = useGetAllPokemonQuery(limitQuery);
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "200px",
    threshold: 1.0,
  });
  useEffect(() => {
    if (pokmData) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, Math.random() * (500 - 900) + 500);
      return () => clearTimeout(timer);
    }
  }, [pokmData]);

  useEffect(() => {
    if (isVisible) dispatch(incrementByAmount(15));
  }, [isVisible]);
  return (
    <div className="relative flex  items-center justify-center bg-white min-h-max max-h-auto w-full">
      {(showLoader || !pokmData) && (
        <div className="absolute left-0 top-0 z-50 w-full h-screen bg-white">
          <Loader />
        </div>
      )}
      {pokmData ? (
        <div className="relative py-8 grid gap-x-12 grid-cols-1 gap-y-12 2col:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-x-28 ">
          {pokmData.results.map((poke, index) => {
            return (
              <div key={index} className="">
                <Link to={`pokemon/${poke.name}`}>
                  <LazyLoadComponent threshold={250}>
                    <PreviewCard {...poke} />
                  </LazyLoadComponent>
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
