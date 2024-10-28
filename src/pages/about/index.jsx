import Rectangle87 from "../../assets/img/Rectangle87.png";
import OpacityImg from "../../assets/img/OpacityImg.png";
import Rectangle89 from "../../assets/about/Rectangle89.png";
import Rectangle37 from "../../assets/img/Rectangle37.png";
import chairman from "../../assets/common/chairman.png";
import groupCeo from "../../assets/common/group-ceo.png";

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* <img
        src=""
        className="w-full xl:h-[700px] lg:h-[700px] md:h-[80px] sm:h-[60px]"
        alt=""
      /> */}
      <div className="px-10 relative">
        <img
          src={Rectangle87}
          alt=""
          className="w-full xl:h-[300px] lg:h-[200px] md:h-[80px] sm:h-[60px]"
        />
        <img
          src={OpacityImg}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 left-1/1 right-0 opacity-75 px-10"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/1 right-0 w-[700px] h-[100px] ml-4">
          <h1 className="text-white text-[30px]">GROUP OVERVIWE</h1>
          <h5 className="text-white px-20">
            Istanbul Group of Companies is one of the leading groups of
            companies founded in the United Arab Emirates in 1995. The Group is
            run by experts in the field of recycling and waste management and
            includes sorting and assembling materials like (iron, aluminum,
            plastic, etc.).
          </h5>
        </div>
      </div>
      <div className="px-6 grid grid-cols-2 gap-20 py-8">
        <div>
          <h1 className="text-[#5DBE79] text-[30px] px-4 text-left font-bold">
            VISION & MISSION
          </h1>
          <h5 className="text-[#58595B] px-4 text-left">
            Our vision is to utilize waste as a resource and recover waste for
            its highest and best use. We aim to become the number one waste
            recyclable collection and processing firm in the United Arab
            Emirates, guided by the highest level of professionalism.
            <h5 className="text-[#58595B] px-4 text-left pt-4">_</h5>
            <h5 className="text-[#58595B] px-4 text-left">
              Kashif Javed Anjum
            </h5>
            <h5 className="text-[#58595B] px-4 text-left pb-4">
              Chairman Kashif Javed Anjum Chairman & Group CEO
            </h5>
            Our mission is to provide waste management services, protect the
            environment, and promote recycling for a healthy community. We aim
            to promote sustainable, environmentally sound, and cost-effective
            practices through an integrated system of waste reduction, reuse,
            recycling, and innovation that assists businesses and non-profit
            organizations operate sustainably.
          </h5>
        </div>
        <div>
          <img src={Rectangle89} alt="" />
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-[#5DBE79] text-[30px] px-4 font-bold text-center">
          QUALITY COMPETENCE
        </h1>
        <div className="relative px-10 pt-10">
          <img src={Rectangle37} alt="" className="w-full h-[500px]" />
          <div className="absolute text-white font-bold text-[30px] -translate-y-1/2 top-1/3 left-[12%]">
            <h1 className="pl-7">Large Skilled</h1>
            <h1 className="">Manpower</h1>
          </div>
        </div>
      </div>
      <div className="px-10">
        <h1 className="text-[#5DBE79] text-[30px] px-4 font-bold text-left">
          KEY MANAGMENT TEAM
        </h1>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <img
              src={chairman}
              alt=""
              className="xl:h-[300px] lg:h-[200px] md:h-[80px] sm:h-[60px]"
            />
            <div className="text-left px-3 pt-3">
              <h3 className="font-medium">Kashif Javed Anjum</h3>
              <h5>Chairman & Group CEO, Istanbul Group of</h5>
              <h5>Companies & Al Kashif Group s</h5>
            </div>
          </div>
          <div>
            <img
              src={groupCeo}
              alt=""
              className="xl:h-[300px] lg:h-[200px] md:h-[80px] sm:h-[60px]"
            />
            <div className="text-left px-3 pt-3">
              <h3 className="font-medium">
                Afrasayab Muhammad Javed AnjumKashif Javed Anjum
              </h3>
              <h5>Group CEO, Istanbul Group of Companies</h5>
              <h5>& Al Kashif GroupCompanies & Al Kashif Group s</h5>
            </div>
          </div>
          <div className="text-left pt-10">
            <div className="text-[#162C40] p-3">
              <div className="font-bold">Dr.Shaheed Khader</div>
              <div>General Manader</div>
            </div>
            <div className="text-[#162C40] p-3 pt-3 ">
              <div className="font-bold">El Saounsi Adam Awouda</div>
              <div>Business Development Manager</div>
            </div>
            <div className="text-[#162C40] p-3">
              <div className="font-bold">Eng. Shiva</div>
              <div>Recycing Operations and Planning Manager</div>
            </div>
          </div>
          <div className="text-left pt-10">
            <div className="text-[#162C40] p-3">
              <div className="font-bold">Waqar Ahamed</div>
              <div>Sales Executive</div>
            </div>
            <div className="text-[#162C40] p-3">
              <div className="font-bold">Rizwan Ali Nazir Ahmed</div>
              <div>Purchase Representative</div>
            </div>
            <div className="text-[#162C40] p-3">
              <div className="font-bold">Abdalla Kamal Abdalla</div>
              <div>Executive Assistant</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pt-20">
        <h1 className="text-[#5DBE79] text-[50px] px-6 font-bold text-left">
          AWARDS
        </h1>
        <div className="px-5 pt-3 pb-8">
          <textarea className="w-full h-[350px] rounded-3xl px-10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default About;
