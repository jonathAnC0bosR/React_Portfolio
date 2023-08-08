export default function Avatar(props) {
  return (
    <img
      src={props.image}
      alt="Avatar"
      className="w-1/3 h-1/3 rounded-full m-5"
    />
  );
}
