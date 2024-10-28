import backgroundImg from "../../assets/home/background.png";
const HomeServiceOtherCarousel = (props) => {
  return (
    <div className="px-10 py-6 relative">
      <img
        src={backgroundImg}
        alt=""
        className="w-full xl:h-[700px] lg:h-[120px] md:h-[80px] sm:h-[60px] rounded-3xl"
      />
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <div>
          <img
            src={props.mainImg}
            alt=""
            className="top-1/2 -translate-y-1/2 left-[10%] right-0 opacity-75 w-[522px] xl:h-[500px] lg:h-[120px] md:h-[80px] sm:h-[60px] absolute"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/4 left-[45%] right-0 w-[700px] h-[300px]">
          <h1 className="text-white text-[30px] font-bold">{props.main}</h1>
          <h5 className="text-white px-40 text-left">{props.text}</h5>
        </div>
      </div>
    </div>
  );
};
export default HomeServiceOtherCarousel;
