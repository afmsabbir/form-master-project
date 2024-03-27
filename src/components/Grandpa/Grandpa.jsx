import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider>
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
