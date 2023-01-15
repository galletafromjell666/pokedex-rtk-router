/* eslint-disable react/prop-types */

const Stats = ({ stats }) => {
  //console.log(stats);
  return (
    <div className="bg-white/70 my-2 w-fit rounded-lg px-4 py-1 drop-shadow-lg">
      <p className="uppercase font-bold text-lg text-gray-600">
        {String(stats.stat.name).replace("-", " ")} : {stats.base_stat}
      </p>
    </div>
  );
};

export default Stats;
