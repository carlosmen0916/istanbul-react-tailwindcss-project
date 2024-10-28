import PreviousMap from "postcss/lib/previous-map";
import { Card } from "flowbite-react";
import service from "../../assets/img/service.png";

const CardCompo = (props) => {
  return (
    <div
      className="relative w-[280px] rounded-3xl card-css"
      style={{ border: "1px solid #e0e0e0" }}
    >
      <div className="relative h-[250px] rounded-t-2xl bg-white">
        <img
          src={props.svg}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 left-1/4 right-0"
          style={{ width: "182px", height: "182px" }}
        />
      </div>
      <div className="bg-[#F1F1F1] h-[80px] flex items-center justify-center rounded-b-3xl card-hover px-10">
        <h5 className="tracking-tight text-[#58595B] px-5">{props.content}</h5>
      </div>
    </div>
  );
};
export default CardCompo;
