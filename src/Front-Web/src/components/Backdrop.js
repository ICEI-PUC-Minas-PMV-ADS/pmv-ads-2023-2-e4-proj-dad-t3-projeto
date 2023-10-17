export default function Backdrop(props) {
  return props.show ? (
    <div
      className="backdrop"
      onClick={() => {
        props.closeModal((prev) => !prev);
      }}
    ></div>
  ) : null;
}
