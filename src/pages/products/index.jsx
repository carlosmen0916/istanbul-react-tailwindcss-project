import Rectangle77 from "../../assets/img/Rectangle77.png";
import ContentCompo from "./contentCompo";
import Nonferrousmetalsimage from "../../assets/img/nonferrousmetalsimage.png";

const aluminium = {
  title: "Aluminium",
  main: "Non-Ferrous Metals",
  valueArr1: ["Coper", "Zinc", "Lead", "Brass"],
  valueArr2: [
    "ACR (AC Jali)",
    "Aluminum Cans",
    "Aluminum Choke",
    "Aluminum Hard",
    "Aluminum Radiators (Alum Jalid)",
  ],
  valueArr3: [
    "Aluminum Rims",
    "Aluminum Soft",
    "Aluminum Wire W/Steel",
    "EC Wire (Alum Cable Window)",
    "Aluminum Cutting",
  ],
};
const hardMaterial = {
  main: "Ferrous Metals",
  title: "Hard mateial",
  valueArr1: ["Wires", "Other material"],
  valueArr2: [
    "Motor mix",
    "Dynamo",
    "Genarator",
    "Compressor",
    "HMS Mix (1 & 2)",
  ],
  valueArr3: [
    "HMS Bundle",
    "HMS Super Bundle",
    "Press",
    "Press Bundle",
    "Rolling Scrap",
  ],
};
const plastics = {
  main: "Plastics",
  title: "PETE",
  valueArr1: ["HDPE", "PVC", "LDPE", "PP", "PS", "OTEHR"],
  valueArr2: [
    "Soft drink and water bottles",
    "Food packaging",
    "Fruit, juice containers and cooking oil",
    "Shampoo bottles",
  ],
  valueArr3: [],
};

const Products = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#F1F1F1]">
      <div className="relative">
        <img
          src={Rectangle77}
          className="w-full xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[400px]"
        />
        <div className="xl:text-[60px] lg:text-[52px] md:text-[40px] sm:text-[28px] text-[#5DBE79] absolute top-[200px] -translate-y-1/2 left-0 right-0">
          <h2 className="text-center">International EMEA Trading</h2>
          <h2 className="font-medium">WE BUY & SELL</h2>
        </div>
        <ContentCompo img={Nonferrousmetalsimage} data={aluminium} />
        <ContentCompo img={Nonferrousmetalsimage} data={hardMaterial} />
        <ContentCompo img={Nonferrousmetalsimage} data={plastics} />
      </div>
    </div>
  );
};

export default Products;
