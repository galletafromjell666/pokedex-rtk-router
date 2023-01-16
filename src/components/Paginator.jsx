/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Paginator = ({ id, parentClassName }) => {
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

  return (
    <div id="paginator" className={parentClassName}>
      {paginationArr.map((i) => {
        console.log("valor de i =", i);
        return (
          <Link key={i} to={`/pokemon/${i}`}>
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
