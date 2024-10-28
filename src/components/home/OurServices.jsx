import AutoCarousel from "./AutoCarousel";
const OurServices = () => {
  return (
    <div className="flex flex-col items-center px-4 py-4">
      <div className="flex flex-col px-8">
        <h2 className="text-[50px] text-[#5DBE79] uppercase font-medium">
          Our services
        </h2>

        <h4 className="text-[18px]">
          The company provides a wide range of services in recovery and
          recycling solutions
        </h4>
        <h4 className="text-[18px]">which inclueds but are not limited to:</h4>
      </div>
      {/* <AutoCarousel /> */}
    </div>
  );
};
export default OurServices;
