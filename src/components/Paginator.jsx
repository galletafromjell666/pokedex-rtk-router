/* eslint-disable react/prop-types */
import { useGetAllPokemonQuery } from "../services/pokeApi";
import { Link } from "react-router-dom";
const Paginator = ({ id,parentClassName }) => {
  const { data } = useGetAllPokemonQuery();
  const arrayRange = (start, stop, step) => {
    if (start < 1) {
      start = 1;
    }
    if (stop > 93) {
      stop = 94;
    }
    return Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  };

  const paginationArr = arrayRange(id - 5, id + 5, 1);
  return (
    <div id="paginator" className={parentClassName}>
      {paginationArr.map((i) => (
        <Link key={i} to={`/pokemon/${data.results[i-1].name}`}>
          <h1 className={(i === id ? "bg-white/70 rounded-md my-2 px-3 text-gray-600" : "text-white/80" )+ " text-center text-xl font-bold font-nunito"}>{i}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Paginator;
