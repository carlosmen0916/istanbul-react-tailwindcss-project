import effectImg from "../../assets/img/effectImg.png";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const HomeServiceCarousel = (props) => {
  return (
    <div className="px-16 py-6 relative">
      <img
        src={props.backImg}
        alt=""
        className="w-full xl:h-[700px] lg:h-[520px] md:h-[380px] sm:h-[260px]"
      />
      <img
        src={effectImg}
        alt=""
        className="xl:w-[500px] top-1/2 -translate-y-1/2 xl:left-[50%] md:left-[40%] sm:left-[12%] right-0 opacity-75 w-[522px] md:w-[500px] sm:w-[480px] xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[240px] absolute"
      />
      <div
        className="absolute top-[40%] -translate-y-1/4 xl:left-[43%] md:left-[32%] sm:left-0 right-0 w-[700px] h-[300px]"
        // style={{ background: "url(OpacityImg.png)" }}
      >
        <h1 className="text-white text-[50px] font-medium">{props.main}</h1>
        <h5 className="text-white px-40 text-left mt-4 text-[20px]">
          {props.text}
        </h5>
        <div className="flex py-10 ml-[23%]">
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
export default HomeServiceCarousel;
