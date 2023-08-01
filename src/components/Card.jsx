const Card = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.bgImage})` }}
      className={`shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto card-div ${props.className}`}
    >
      <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
        <span className="text-2xl font-bold text-white tracking-wider text-center">
          {props.title}
        </span>
        <div className="pt-8 text-center">
          <a href={props.demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={props.codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
