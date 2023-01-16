/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useGetAllPokemonQuery } from "../features/pokeApiSlice";
import { incrementByAmount } from "../features/queryLimitSlice";
import { Link } from "react-router-dom";
const Paginator = ({ id, parentClassName }) => {
  const limitQuery = useSelector((state) => state.queryLimit.value);
  console.log(`limitQuery is ${limitQuery}`);
  const { data } = useGetAllPokemonQuery(limitQuery);
  const dispatch = useDispatch();
  dispatch(incrementByAmount(7));
  const arrayRange = (start, stop, step) => {
    if (start < 1) {
      start = 1;
    }
    if (stop > 150) {
      stop = 151;
    }
    return Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  };

  const paginationArr = arrayRange(id - 5, id + 5, 1);
  console.log(data.results);
  return (
    <div id="paginator" className={parentClassName}>
      {paginationArr.map((i) => {
        console.log("valor de i =", i);
        return (
          <Link key={i} to={`/pokemon/${data.results[i - 1].name}`}>
            <h1
              className={
                (i === id
                  ? "bg-white/70 rounded-md my-2 px-3 text-gray-600"
                  : "text-white/80") +
                " text-center text-xl font-bold font-nunito"
              }
            >
              {i}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Paginator;
