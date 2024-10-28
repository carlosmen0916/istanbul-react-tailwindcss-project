import "./home.css";
import React, { useState } from "react";
import TabCompoContent from "./TabCompoContent";
import NonFerrousMetals from "../../assets/img/non-ferrousmetals.png";
import FerrousMetals from "../../assets/img/ferrousmetals.png";
import Plastic from "../../assets/img/plastic.png";

function TabCompo() {
  const [tabData, setTabData] = useState("Non-Ferrous");

  const nonFerrous = {
    text1: "Non-Ferrous",
    text2: "Metals",
    buttonArr: ["Aluminum", "Copper", "Zinc", "Lead", "Brass"],
  };
  const ferrous = {
    text1: "Ferrous",
    text2: "Metals",
    buttonArr: ["Hard material", "Wires", "Other material"],
  };
  const plastics = {
    text1: "Plastics",
    text2: "",
    buttonArr: ["PETE", "HDPE", "PVC", "LDPE", "PP", "PS", "OTHER"],
  };

  const handleChange = (e) => {
    setTabData(e);
  };

  return (
    <div className="bg-white mx-10 rounded-b-3xl my-10">
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 gap-3">
        <div
          className={
            tabData === "Non-Ferrous"
              ? "py-5 bg-[#5DBE79] text-white text-xl font-bold rounded-b-3xl sm:h-[65px] cursor-pointer"
              : "py-5 bg-white text-black text-xl font-bold rounded-b-3xl border-b-pink-900 cursor-pointer"
          }
          onClick={(e) => handleChange("Non-Ferrous")}
        >
          Non-Ferrous Metals
          <div className="h-[2px] flex ml-[27%] w-[190px] bg-[#5DBE79]"></div>
        </div>

        <div
          className={
            tabData === "Ferrous"
              ? "py-5 bg-[#5DBE79] text-white text-xl font-bold rounded-b-3xl sm:h-[65px] cursor-pointer"
              : "py-5 bg-white text-black text-xl font-bold rounded-b-3xl cursor-pointer"
          }
          onClick={(e) => handleChange("Ferrous")}
        >
          Ferrous Metals
          <div className="h-[2px] flex ml-[33%] w-[140px] bg-[#5DBE79]"></div>
        </div>
        <div
          className={
            tabData === "Plastic"
              ? "py-5 bg-[#5DBE79] text-white text-xl font-bold rounded-b-3xl sm:h-[65px] cursor-pointer"
              : "py-5 bg-white text-black text-xl font-bold rounded-b-3xl focus:pointer cursor-pointer"
          }
          onClick={(e) => handleChange("Plastic")}
        >
          Plastic
          <div className="h-[2px] flex ml-[42.5%] w-[65px] bg-[#5DBE79]"></div>
        </div>
      </div>
      <div className="bg-[#F1F1F1]">
        <TabCompoContent
          img={
            tabData === "Non-Ferrous"
              ? NonFerrousMetals
              : tabData === "Ferrous"
              ? FerrousMetals
              : Plastic
          }
          data={
            tabData === "Non-Ferrous"
              ? nonFerrous
              : tabData === "Ferrous"
              ? ferrous
              : plastics
          }
        />
      </div>
    </div>
  );
}
export default TabCompo;
