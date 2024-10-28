import contact1 from "../../assets/contact/contact1.png";
import Rectangle94 from "../../assets/contact/Rectangle94.png";
import Rectangle116 from "../../assets/contact/Rectangle116.png";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full bg-[#F1F1F1]">
      <img src={contact1} alt="" />
      <div className="p-16">
        <h1 className="text-[#5DBE79] text-[50px] font-medium text-left">
          INQUIRY FORM
        </h1>
        <div className="bg-white rounded-3xl pb-6">
          <div className=" px-10 pt-6 grid grid-rows-3 grid-flow-col gap-4">
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
              <p className="text-[#58595B]">Phon number</p>
              <AiOutlineStar className="text-[red] mt-1 pl-1" />
              <span></span>
              {/* <input type="text" className="w-[500px] text-right" /> */}
            </div>
            {/*  */}
            <div>
              <input type="text" className="w-[916px]" />
            </div>
            <div>
              <input type="text" className="w-[916px]" />
            </div>
            <div>
              <input type="text" className="w-[916px]" />
            </div>
          </div>
          <div className=" px-10 pt-6 grid grid-rows-1 grid-flow-col gap-4">
            <div className="flex">
              <p className="text-[#58595B]">Leave your message</p>
              <AiOutlineStar className="text-[red] mt-1 pl-1" />
              <span></span>
              {/* <input type="text" className="w-[500px] text-right" /> */}
            </div>
            <div>
              <input type="text" className="w-[916px] h-[150px]" />
            </div>
          </div>
          <div className="text-left ml-[23.8%]">
            <button className="w-[220px] h-[50px] bg-[#5DBE79] rounded-2xl text-white mt-5 justify-start">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-left pt-10">
          <div>
            <h1 className="text-[#5DBE79] text-[50px] font-medium">
              NENA OFFICES
            </h1>
            <div className="flex items-center ">
              <FiMapPin className="text-[#5DBE79]" />
              <div>26th floor, Office no. 2603, Business Bay Tower, Dubai </div>
            </div>
            <div className="flex items-center pb-2">
              <FiMapPin className="text-[#5DBE79]" />
              <div>
                Industrial Area, Industrial Area 7, Sharjah, United Arab
                Emirates
              </div>
            </div>

            <div className="h-[1px] bg-[#5DBE79] w-[80px]"></div>
            <div className="pt-2">
              <span className="text-[#5DBE79] text-[20px]">E:</span>
              info@istanbulgroup-me.com
            </div>
            <div>
              <span className="text-[#5DBE79] text-[20px]">A:</span> P.O.Box
              26501, Sharjah, U.A.E.
            </div>
            <div>
              <span className="text-[#5DBE79] text-[20px]">T:</span>+971 50 626
              8221 / +971 6 534 7330
            </div>
            <div>
              <span className="text-[#5DBE79] text-[20px]">F:</span>+971 6 534
              4397
            </div>
            <div>
              <span className="text-[#5DBE79] text-[20px]">W:</span>
              www.istanbulgroup-me.com
            </div>
          </div>
          <div>
            <img src={Rectangle94} alt="" />
          </div>
        </div>

        <div className="pt-10">
          <h1 className="text-[#5DBE79] text-[50px] font-medium text-left pb-6">
            WE ARE ACTIVE IN
          </h1>
          <div className="bg-white rounded-3xl text-center px-[200px] grid grid-rows-6 grid-flow-col gap-4 py-10">
            {/* {
              while (i < 25) {
              return (<div className="flex"><img src={Rectangle116} alt="" />Location {index}</div>)
              }
            } */}
            <div className="flex">
              <img src={Rectangle116} alt="" /> Location 1
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" /> Location 2
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 3
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 4
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 5
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 6
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 7
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 8
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 9
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 10
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 11
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 12
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 13
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 14
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 15
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 16
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 17
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 18
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 19
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 20
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 21
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 22
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 23
            </div>
            <div className="flex">
              <img src={Rectangle116} alt="" />
              Location 24
            </div>
            {/* <div className="flex"><img src={Rectangle116} alt="" /></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
