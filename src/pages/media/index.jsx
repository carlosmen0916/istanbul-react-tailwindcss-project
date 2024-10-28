import Media1 from "../../assets/media/Media1.png";
import Rectangle37 from "../../assets/common/Rectangle37.png";

const Media = () => {
  return (
    <div className="w-full bg-[##F1F1F1]">
      <div className="relative">
        <img src={Media1} alt="" />
        <div className="w-[637px] h-[80px] bg-[#5DBE79] absolute -translate-y-1/2 top-1/2 text-[60px] text-white font-bold rounded-r-3xl flex items-center justify-center pl-[60px]">
          IN THE MEDIA
        </div>
      </div>

      <div className="px-20 pt-20 bg-[#F1F1F1] grid grid-flow-row-dense grid-cols-3">
        <div className="font-bold text-[20px] uppercases rounded-b-3xl">
          <div className="py-5 bg-[#5DBE79] text-white uppercases rounded-t-3xl">
            News & Events
          </div>
          <div
            className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            Employee Welfare
          </div>
          <div
            className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            Gallery
          </div>
          <div
            className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            Download
          </div>
        </div>
        <div className="rounded-3xl col-span-2 px-4">
          <div className="text-[#5DBE79] text-[30px] p-2 pl-8 bg-white text-left rounded-t-3xl font-medium">
            News & Events
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1 bg-white p-10 rounded-b-3xl">
            <div>
              <img src={Rectangle37} alt="" />
            </div>
            <div className="text-[#58595B] px-4 text-left">
              <p>
                UAE based Istanbul Group of Companies has grown rapidly over the
                years and greatly increased the volume of materials it recycles
                every year.
              </p>
              <button
                className="text-[#5DBE79] rounded-2xl w-[150px] h-[54px] mt-[23%] font-medium"
                style={{ border: "2px solid #5DBE79" }}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
