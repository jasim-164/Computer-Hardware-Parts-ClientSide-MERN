import React from "react";
import processor from "../../assets/icon/Processor.svg";
import laptop from "../../assets/icon/Laptop.svg";
import GPU from "../../assets/icon/GPU.svg";
import monitor from "../../assets/icon/Monitor.svg";
import speaker from "../../assets/icon/speaker.svg";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <>
      <h1 className="text-sky-600 text-2xl mt-5 ml-5">Top Categories</h1>
      
      <div class="divider"></div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <InfoCard
          cardTitle="Processor"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={processor}
        ></InfoCard>

        <InfoCard
          cardTitle="GPU"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={GPU}
        ></InfoCard>
        <InfoCard
          cardTitle="laptop"
          bgClass="bg-primary"
          img={laptop}
        ></InfoCard>
        <InfoCard
          cardTitle="Monitor"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={monitor}
        ></InfoCard>
        <InfoCard
          cardTitle="Speaker"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={speaker}
        ></InfoCard>
        
      </div>
      <div class="divider "></div>
        <h1  className="text-sky-600 text-2xl mt-5 text-right mr-5"><Link to="/">See All Categories</Link></h1>
    </>
  );
};

export default Info;
