import LateralNav from "../LateralNav/LateralNav";

const Wrapper = (props) => {
  return (
    <>
      <LateralNav />
      {props.children}
    </>
  );
};

export default Wrapper;
