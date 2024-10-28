import TabCompo from "./TabCompo";
const OurProducts = () => {
  return (
    <div className="flex flex-col items-center px-4 py-4">
      <div className="flex flex-col px-64">
        <h2 className="text-[50px] text-[#5DBE79] uppercase font-medium">
          Our products
        </h2>
        <h3 className="text-center text-[30px] font-medium">
          International EMEA Trading - We buy & sell
        </h3>
        <h4 className="text-[16px]">
          Istanbul Group of Companies & Al Kashif Group offers their valued
          customers a broad range of quality products and services at
          competitive prices through superior delivery, reliability,
          credibility, and flexibility to be at the forefront of customer
          service and satisfaction.
        </h4>
      </div>
      <div>
        <TabCompo />
      </div>
    </div>
  );
};
export default OurProducts;
