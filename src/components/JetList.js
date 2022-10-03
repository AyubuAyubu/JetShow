import React from "react";
import Jet from "./Jet";
const Jets = ({ jets, removeJet }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Jets</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* we are iterating on the child which is the Tour  */}
        {jets.map((jet) => {
          return <Jet key={jet.id} {...jet} removeJet={removeJet}></Jet>;
        })}
      </div>
    </section>
  );
};

export default Jets;
