import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaBlenderPhone } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiIntegromat } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="py-2 bg-[#5DBE79] px-4"></div>
      <div className="py-12 bg-[#162C40] flex justify-end pr-20">
        <div className="pl-4 flex bg-[#5DBE79] gap-3 rounded-l-2xl rounded-r-2xl">
          <div className="flex justify-center items-center">
            <FaDownload
              className="w-[30px] text-white h-[60px] bg-[#5DBE79] pr-2"
              style={{ borderRight: "1px solid #bdbdbd" }}
            />
          </div>
          <button className="bg-[#5DBE79] text-white rounded-r-3xl w-[230px] h-[60px] text-[25px] pr-4">
            Company profile
          </button>
        </div>
      </div>
      <div className="py-10 bg-[#5DBE79]">
        <div className="grid xl:grid-cols-3 text-white font-bold text-[15px]">
          <div className="xl:text-left md:text-center px-10 flex items-center">
            <div>
              <div className="flex items-center">
                <FiMapPin />
                <h4 className="px-1 text-[18px]">
                  26th floor, Office no. 2603, Business
                </h4>
              </div>
              <h5 className="px-5 text-[18px]">Bay Tower, Dubai</h5>
              <div className="flex">
                <AiOutlineMail className="mt-2" />
                <h4 className="px-1 text-[18px]">info@istanbulgroup-me.com</h4>
              </div>
            </div>
          </div>
          <div className="xl:text-left md:text-center flex items-center">
            <div>
              <div className="flex">
                <BsTelephone className="mt-1" />
                <p className="text-[17px]">
                  +971 50 626 8221, +971 6 534 7330, +971 6 534 9275
                </p>
              </div>
              <div className="flex">
                <FaBlenderPhone className="mt-1" />
                <h4 className="px-1 text-[17px]">+971 6 534 4397</h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 px-10 items-center">
            <div className="justify-center flex">
              <BsFacebook className="w-[40px] h-[40px]" />
            </div>
            <div className="justify-center flex">
              <AiFillTwitterCircle className="w-[40px] h-[40px]" />
            </div>
            <div className="justify-center flex">
              <SiIntegromat className="w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
