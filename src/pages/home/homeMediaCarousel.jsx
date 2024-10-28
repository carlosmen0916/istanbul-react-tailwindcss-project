import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const HomeMediaCarousel = (props) => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-3 px-10 pb-10">
      <div className="lg:flex lg:items-center lg:justify-center">
        <img src={props.img} alt="" className="items-center" />
      </div>
      <div className="text-left">
        <h5 className="text-[#0b0f16]">{props.text}</h5>
        <button
          className="text-[#5EBE79] text-lg border-[#5EBE79] rounded-2xl w-36 h-[44px] font-bold mt-10"
          style={{ border: "2px solid #5EBE79" }}
        >
          Read more
        </button>
        <div className="flex pt-[190px]">
          <GrLinkPrevious
            className="w-[28px] h-[28px]"
            style={{ color: "white" }}
          />
          <GrLinkNext className="w-[28px] h-[28px] ml-10" />
        </div>
      </div>
    </div>
  );
};
export default HomeMediaCarousel;
