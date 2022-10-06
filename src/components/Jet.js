import React, { useState } from "react";

const Jet = ({ id, image, info, price, name, removeJet }) => {
  
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-jet">
      <img src={image} alt={name} />
      <footer>
        <div className="jet-info">
          <h4>{name}</h4>
          <h4 className="jet-price">USD{price}</h4>
        </div>
        {/* //  this is where i will use the readMore if the readMOre is true then display the info , if not true look throu info and only display 200 characters  */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* button for the toggle */}
          <button onClick={() => setReadMore(!readMore)}>
            {/* if readMore is true then show less, and if its false read more */}
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        {/* button for each object  */}
        <button className="delete-btn" onClick={() => removeJet(id)}>
          {" "}
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Jet;
