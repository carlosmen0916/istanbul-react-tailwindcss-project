import Careers1 from "../../assets/careers/Careers1.png";
import { AiOutlineStar } from "react-icons/ai";

const Career = () => {
  return (
    <div className="w-full bg-[#F1F1F1]">
      <img src={Careers1} alt="" />
      <div className="p-16">
        <h1 className="text-[#5DBE79] text-left text-[50px] font-medium">
          CURRENT OPENINGS
        </h1>
        <div className="pt-10 bg-[#F1F1F1] grid grid-flow-row-dense grid-cols-3">
          <div className="font-bold text-[20px] uppercases rounded-b-3xl">
            <div className="py-5 bg-[#5DBE79] text-white uppercases rounded-t-3xl ">
              Opening1
            </div>
            <div
              className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              Opening2
            </div>
            <div
              className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              Opening3
            </div>
            <div
              className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              Opening4
            </div>
          </div>
          <div className="rounded-3xl col-span-2 px-4">
            <div className="text-[#5DBE79] text-[30px] p-2 pl-8 bg-white text-left rounded-t-3xl font-medium">
              Opening 1 submission
            </div>
            <div className="bg-white rounded-b-3xl pb-6">
              <div className=" px-10 pt-6 grid grid-rows-4 grid-flow-col gap-4">
                <div className="flex">
                  <p className="text-[#58595B]">Full name</p>
                  <AiOutlineStar className="text-[red] mt-1 pl-1" />
                  <span></span>
                  {/* <input type="text" className="w-[500px] text-right" /> */}
                </div>
                <div className="flex">
                  <p className="text-[#58595B]">Email address</p>
                  <AiOutlineStar className="text-[red] mt-1 pl-1" />
                  <span></span>
                  {/* <input type="text" className="w-[500px] text-right" /> */}
                </div>
                <div className="flex">
                  <p className="text-[#58595B]">Additional information</p>
                  <AiOutlineStar className="text-[red] mt-1 pl-1" />
                  <span></span>
                  {/* <input type="text" className="w-[500px] text-right" /> */}
                </div>
                <div className="flex">
                  <p className="text-[#58595B]">Upload your CV here</p>
                  <AiOutlineStar className="text-[red] mt-1 pl-1" />
                  <span></span>
                  {/* <input type="text" className="w-[500px] text-right" /> */}
                </div>
                <div>
                  <input type="text" className="w-[500px]" />
                </div>
                <div>
                  <input type="text" className="w-[500px]" />
                </div>
                <div>
                  <input type="text" className="w-[500px] h-[60px]" />
                </div>
                <div>
                  <input type="text" className="w-[500px]" />
                </div>
              </div>
              <button className="w-[220px] h-[50px] bg-[#5DBE79] rounded-2xl text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
