import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import JetList from "../components/JetList";

const url = "http://localhost:3002/jets";
function AppJet() {
  //useState set
  const [jets, setJet] = useState([]);
  const [loading, setLoading] = useState(true);

  // making the not interested button to remove the object
  const removeJet = (id) => {
    // if the tour id doent match then it will be in the newtour , if it matches then that is the tour object we are removing
    const newJet = jets.filter((jet) => jet.id !== id);
    setJet(newJet);
  };

  // so that it returns loading when true
  const fetchJets = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jets = await response.json();
      setLoading(false);
      setJet(jets);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJets();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // condition for refreshing the objects after they have been removed
  if (jets.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no jets left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={fetchJets}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <JetList jets={jets} removeJet={removeJet} />
    </main>
  );
}

export default AppJet;
