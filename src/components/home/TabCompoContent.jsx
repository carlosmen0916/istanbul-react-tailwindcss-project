import { data } from "autoprefixer";

const NonFerrous = (props) => {
  console.log("props", props.data.text1);
  return (
    <div
      className="grid xl:grid-cols-2 md:grid-cols-1 gap-2 px-16 py-6 bg-white rounded-b-3xl"
      // style={{ backgroundColor: "#F1F1F1" }}
    >
      <div className="relative">
        <img
          src={props.img}
          className="xl:w-[594px] md:w-full xl:h-[244px] lg:h-[240px] md:h-[180px] sm:h-[160px] rounded-3xl"
        />
        <div className="xl: text-[60px] lg:text-[50px] md:text-[35px] sm:text-[20px] text-white font-bold absolute top-1/2 -translate-y-1/2">
          <h2 className="pl-6">{props.data.text1}</h2>
          <h2
            className={props.data.text1 === "Ferrous" ? "pl-4" : "custom-text"}
          >
            {props.data.text2}
          </h2>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3 content-center px-3">
        {props.data.buttonArr.map((element) => (
          <button
            key={element}
            className="h-10 xl:w-4/5 md:w-full my-2 text-black font-semibold border border-black rounded-xl"
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NonFerrous;
