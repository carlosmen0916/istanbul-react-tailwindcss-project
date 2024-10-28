import HomeTitleImage from "../../assets/backgrounds/home-title.png";
import OurProducts from "../../components/home/OurProducts";
import OurServices from "../../components/home/OurServices";
import CardCompo from "../../components/common/CardCompo";

import recyclable from "../../assets/home/recyclable.svg";
// import baling from "../../assets/img/baling.svg";
import cargocontainer from "../../assets/img/cargocontainer.svg";
import construction from "../../assets/img/construction.svg";
// import steelproduct from "../../assets/home/steelproduct.svg";
// import inertwaste from "../../assets/home/inertwaste.svg";

import aluminum from "../../assets/home/aluminum.svg";

import baling from "../../assets/home/baling.svg";

import officer from "../../assets/img/officer.png";
import kiverco from "../../assets/home/kiverco.png";
import westcoast from "../../assets/home/westcoast.png";
import globalewaste from "../../assets/home/globalewaste.png";
import keo from "../../assets/home/keo.png";

import alaincity from "../../assets/home/alaincity.png";
import municipalitydepartment from "../../assets/home/municipalitydepartment.png";
import dewa from "../../assets/home/dewa.png";
import Rectangle37 from "../../assets/home/Rectangle37.png";
import media from "../../assets/common/media.png";
import media2 from "../../assets/home/media2.png";

import HomeMediaCarousel from "./homeMediaCarousel";
import HomeServiceCarousel from "./homeServiceCarousel";
import HomeServiceOtherCarousel from "./HomeServiceOtherCarousel";
import chairman from "../../assets/common/chairman.png";
import groupCeo from "../../assets/common/group-ceo.png";

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const text1 =
  "UAE based Istanbul Group of Companies has grown rapidly over the years and greatly increased the volume of materials it recycles every year.";
const text2 =
  "Kashif Javed Anjum, Group CEO Istanbul Group of Companies and Al Kashif Group talks about his experience and latest developments at his company as well as growth strategy and plans.";
const text3 =
  "Waste & Recycling MEA hosted the Municipalities Roundtable as part of its strategy to bring together all the municipal authorities and key stakeholders to share their experiences, insights and plans that focus on building more sustainable communities across the UAE and achieving net zero targets by the deadline set by the government";

const serviceText1 =
  "Istanbul Group of Companies is one of the leading groups of companies founded in the United Arab Emirates in 1995. The Group is run by experts in the field of recycling and waste management and includes sorting and assembling materials like (iron, aluminum, plastic, etc.).";
const serviceText2 =
  "Our vision is to utilize waste as a resource and recover waste for its highest and best use. We aim to become the number one waste recyclable collection and processing firm in the United Arab Emirates, guided by the highest level of professionalism.";
const dataText2 = "Kashif Javed Anjum Chairman & Group CEO";
const serviceText3 =
  "Istanbul Group of Companies has put the proper foundation, structures, and processes to ensure that our staff welfare is well handled and protected. Our company’s corporate culture is designed to drive our business to greater heights, and training and retaining our workforce is the top priority.";
const dataText3 = "Afrasayab Muhammad javed Anjum Group CEO";

const Home = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center xl:min-h-[400px] lg:min-h-[300px] md:min-h-[200px] sm:min-h-[150px]">
        <div>
          <div className="flex justify-center">
            <img
              src={HomeTitleImage}
              className="w-5/6 xl:h-[150px] lg:h-[120px] md:h-[80px] sm:h-[60px]"
            />
          </div>
          <h3 className=" xl:text-[44px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[#5EBE79]">
            to Sustainable Environmental Development
          </h3>
        </div>
      </div>
      <div className="bg-[#F1F1F1] px-4 flex flex-col items-center py-4">
        <OurProducts />
      </div>
      <div className="bg-[#F1F1F1] px-4 flex flex-col items-center py-4">
        <OurServices />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 px-16 sm:items-center sm:justiry-center sm:flex-none">
        <div>
          <CardCompo
            svg={recyclable}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo svg={baling} content="Steel Products Trading" />
        </div>
        <div>
          <CardCompo
            svg={cargocontainer}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={construction}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        {/* <div>
          <CardCompo
            svg={steelproduct}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div> */}
        {/* <div>
          <CardCompo svg={inertwaste} content="Inert Waste Recycling" />
        </div> */}
        {/* <div>
          <CardCompo
            svg={cargocontainer}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={construction}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={aluminum}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={baling}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={cargocontainer}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={construction}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={aluminum}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo
            svg={baling}
            content="Recyclable Collection from Landfills, MRFs and Transfer Station"
          />
        </div>
        <div>
          <CardCompo svg={baling} content="Bulling of recyclables" />
        </div> */}
      </div>
      <div className="flex items-center justify-center py-10 bg-[#F1F1F1]">
        <GrLinkPrevious className="w-[28px] h-[28px] text-[green]" />
        <GrLinkNext className="w-[28px] h-[28px] ml-10 text-green" />
      </div>
      <HomeServiceCarousel
        backImg={officer}
        main="GROUP OVERVIEW"
        text={serviceText1}
        dataText={""}
      />
      {/* <HomeServiceOtherCarousel
        mainImg={chairman}
        main="GROUP OVERVIWE"
        text={serviceText2}
        dataText={dataText2}
      />
      <HomeServiceOtherCarousel
        mainImg={groupCeo}
        main="GROUP OVERVIWE"
        text={serviceText3}
        dataText={dataText3}
      />
      <HomeServiceCarousel
        backImg={officer}
        main="GROUP OVERVIWE"
        text={serviceText1}
        dataText={""}
      />
      <HomeServiceOtherCarousel
        mainImg={chairman}
        main="GROUP OVERVIWE"
        text={serviceText2}
        dataText={dataText2}
      /> */}
      {/* <div className="px-10 py-6 relative">
        <img
          src={officer}
          alt=""
          className="w-full xl:h-[700px] lg:h-[120px] md:h-[80px] sm:h-[60px]"
        />
        <img
          src={officerBackground}
          alt=""
          className="top-1/2 -translate-y-1/2 left-1/2 right-0 opacity-75 w-[522px] xl:h-[500px] lg:h-[120px] md:h-[80px] sm:h-[60px] absolute"
        />
        <div
          className="absolute top-1/2 -translate-y-1/4 left-[45%] right-0 w-[700px] h-[300px]"
          // style={{ background: "url(OpacityImg.png)" }}
        >
          <h1 className="text-white text-[30px] font-bold">GROUP OVERVIWE</h1>
          <h5 className="text-white px-40 text-left">
            Istanbul Group of Companies is one of the leading groups of
            companies founded in the United Arab Emirates in 1995. The Group is
            run by experts in the field of recycling and waste management and
            includes sorting and assembling materials like (iron, aluminum,
            plastic, etc.).
          </h5>
        </div>
      </div> */}
      <div className="pl-20">
        <div>
          <h1 className="text-[#5EBE79] text-[50px] font-medium pt-8 pb-4 uppercase">
            Associate Partners
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-1 px-10 py-4">
          <img src={globalewaste} alt="" />
          <img src={keo} alt="" />
          <div className="text-center items-center">
            <img src={kiverco} alt="" className="items-center" />
          </div>
          <img src={westcoast} alt="" />
        </div>
      </div>
      <div className="pl-20">
        <div className="py-4 pt-20">
          <h1 className="text-[#5EBE79] text-[50px] font-medium">
            VALUED CLIENTELE
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-1 px-10 py-4">
          <div className="text-center items-center">
            <img src={alaincity} alt="" className="items-center" />
          </div>
          <img src={municipalitydepartment} alt="" />
          <img src={alaincity} alt="" />
          <img src={dewa} alt="" />
        </div>
      </div>
      <div className="px-20 bg-[#F1F1F1] mx-10 rounded-t-3xl">
        <div className="p-6">
          <h1 className="text-[#5EBE79] text-[50px] font-medium">
            IN THE MEDIA
          </h1>
        </div>
        <HomeMediaCarousel img={Rectangle37} text={text1} />
        {/* <HomeMediaCarousel img={media} text={text2} /> */}
        {/* <HomeMediaCarousel img={media2} text={text3} /> */}
        {/* <HomeMediaCarousel img={Rectangle37} text={text1} /> */}
        {/* <HomeMediaCarousel img={media} text={text2} /> */}
      </div>
    </div>
  );
};
export default Home;
