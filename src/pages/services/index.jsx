import Rectangle771 from "../../assets/img/Rectangle771.png";
import CardCompo from "../../components/common/CardCompo";
import aluminum from "../../assets/img/aluminum.svg";
import baling from "../../assets/img/baling.svg";
import cargocontainer from "../../assets/img/cargocontainer.svg";
import construction from "../../assets/img/aluminum.svg";

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#F1F1F1]">
      <div className="relative">
        <img
          src={Rectangle771}
          className="w-full xl:h-[700px] lg:h-[700px] md:h-[80px] sm:h-[60px]"
        />
        <div className="text-[30px] text-[#5DBE79] absolute top-[15%] -translate-y-1/2 left-1/2 right-0">
          <h2>The company provides a wide</h2>
          <h2>
            range of services in <span className="font-medium">RECOVERY</span>
          </h2>
          <h2>
            and
            <span className="font-medium"> RECYLCING SOLUTIONS</span>
          </h2>
          <button className="bg-[#5DBE79] text-[25px] text-white rounded-2xl p-2 w-[250px] m-4">
            Contact us now
          </button>
        </div>
        <div className="w-full flex items-center justify-center bg-[#F1F1F1]">
          <h2 className="text-[#5DBE79] text-[50px] font-medium py-10">
            discover our services
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-1">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
