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
    <div id="paginator" className={parentClassName + " flex flex-row md:flex-col justify-center md:pl-4 content-center"}>
      {paginationArr.map((i) => {
        return (
          <Link key={i} to={`/pokemon/${i}`}>
            <h1
              className={
                (i === id
                  ? "bg-white/70 rounded-md md:my-2 text-gray-600"
                  : "text-white/80 hover:bg-white/20 hover:rounded-md hover:text-gray-500") +
                " text-center text-xl font-bold font-nunito px-3"
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
