import { ColorRing } from "react-loader-spinner";
import css from "components/Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={css.container}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
