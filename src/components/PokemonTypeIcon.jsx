/* eslint-disable react/prop-types */
const PokemonTypeIcon = ({ type }) => {
  return (
    <img className="drop-shadow-lg" style={{width:'80px'}} src={`/types_icons/Pokemon_Type_Icon_${type}.svg`} />
  );
};

export default PokemonTypeIcon;
