export default function Avatar(props) {
  return (
    <img
      src={props.image}
      alt="Avatar"
      className="w-2/3 h-2/3 rounded-lg m-5"
    />
  );
}
