function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`flex gap-1 text-left align-middle text-white p-2 rounded-md  active:scale-90 active:opacity-80 transition ${
        props.className || "bg-slate-400"
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
