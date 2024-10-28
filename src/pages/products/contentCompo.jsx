import { BsCheck2Circle } from "react-icons/bs";

const ContentCompo = (props) => {
  return (
    <div className="flex items-center px-16 py-10">
      <div className="relative">
        <img
          src={props.img}
          alt=""
          className="w-[1299px] xl:h-[418px] lg:h-[300px] md:h-[250px] sm:h-[160px]"
        />
        <h2
          className={
            props.data.main !== "Plastics"
              ? "xl:text-[60px] lg:text-[56px] md:text-[54px] sm:text-[50px] 2sm:text-[40px] text-white absolute xl:top-[25%] lg:top-[20%] md:top-[18%] sm:top-[10%] 2sm:top-[10%] -translate-y-1/2 left-0 right-0 font-bold"
              : "xl:text-[60px] lg:text-[56px] md:text-[54px] sm:text-[50px] 2sm:text-[40px] text-white absolute xl:top-[20%] lg:top-[15%] md:top-[13%] sm:top-[6%] 2sm:top-[8%] -translate-y-1/2 left-0 right-0 font-bold"
          }
        >
          {props.data.main}
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 1sm:grid-cols-1 2sm:grid-cols-1 py-10 px-10 bg-white">
          <div className="font-bold text-[20px] uppercases md:w-full rounded-b-3xl ">
            <div className="py-5 bg-[#5DBE79] text-white uppercases rounded-t-3xl md:">
              {props.data.title}
            </div>
            {props.data.valueArr1.map((item, index) => (
              <div
                className="py-5 bg-white text-[#162C40] my-1 rounded-b-3xl"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="col-span-2 px-5">
            <div
              className="text-[26px] py-4 text-left px-4 rounded-t-3xl"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              <p className="text-[#5DBE79] font-bold">{props.data.title}</p>
            </div>
            <div
              className="px-70 pl-5 grid grid-cols-2 gap-4 mt-1 py-10 rounded-b-3xl"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {props.data.valueArr2.map((item) => (
                <div
                  className="text-[20px] text-[#162C40] flex relative"
                  key={item}
                >
                  <BsCheck2Circle className="mt-1 text-[#5DBE79]" />
                  <div className="text-[18px] pl-1">{item}</div>
                </div>
              ))}
              {props.data.valueArr3.length > 0 &&
                props.data.valueArr3.map((item) => (
                  <div
                    className="text-[20px] text-[#162C40] flex relative"
                    key={item}
                  >
                    <BsCheck2Circle className="mt-1 text-[#5DBE79]" />
                    <div className="text-[18px] pl-1">{item}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentCompo;
