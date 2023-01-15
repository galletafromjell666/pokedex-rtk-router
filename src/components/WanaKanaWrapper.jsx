/* eslint-disable react/prop-types */
import { toKana } from "wanakana";
const WanaKanaWrapper = ({ text, parentClassName }) => {
  if (text) {
    return <span className={parentClassName}>{toKana(text).replace(/[a-zA-Z ]/g,"")}</span>;
  }
  return null;
};

export default WanaKanaWrapper;
