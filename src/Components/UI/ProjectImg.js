const ProjectImg = (props) => {
  return (
    <img
      src={props.image}
      className="hover:opacity-30 hover:cursor-pointer rounded-md w-full h-5/6 "
      alt={props.alt}
      onClick={props.onClick}
    />
  );
};

export default ProjectImg;