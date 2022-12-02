export default function DarkChat(props) {
  return (
    <div
      className={`text-gray-100 flex items-center gap-2 ${
        props.right ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className="w-10 h-10 uppercase font-bold rounded-full border-2 border-gray-100 flex items-center justify-center"
        style={{ backgroundColor: props.color }}
      >
        {props.user.slice(0, 2)}
      </div>
      <div className="bg-gray-700 p-2 rounded-full bg-opacity-30 backdrop-blur-xl hover:shadow hover:shadow-pink-400 relative overflow-hidden ">
        <div className="absolute bg-indigo-300 w-3/4 h-20 top-0 -right-10 blur-xl -z-10"></div>
        <div
          className="absolute  w-3/4 h-20 top-0 right-4 blur-xl -z-10"
          style={{ backgroundColor: props.color }}
        ></div>
        {props.message}
      </div>
    </div>
  );
}
