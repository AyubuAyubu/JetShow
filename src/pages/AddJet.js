import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "../styles/jetform.css"
const jetAPI = "http://localhost:3002/jets";

function AddJetForm() {
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  
  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  //part 3
  /*Then used state hooks 
  1.to capture values
  2.create an event handler to send the data to the API once
   the form is submitted*/

  //handleChange method created
  const handleChange = (event) => {
    event.preventDefault();

    const newJet = {
      id: uuid(),
      name: name,
      info: info,
      image: image,
      price: price,
    };
    //POST method created
    fetch(jetAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJet),
    })
      .then((resp) => resp.json())
      .then((ourJet) => console.log(ourJet));
  };

  return (
    <div className="jet-form" onSubmit={handleChange}>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Jet Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Jet Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Enter image url(https://)"
          pattern="https://.*"
          size="30"
          value={image}
          onChange={handleImageChange}
          required
        />
        <input
          type="textarea"
          name="info"
          placeholder="Enter jet description"
          value={info}
          onChange={handleInfoChange}
          required
        />
        <button className="btnn" type="submit">
          ADD JET
        </button>
      </form>
    </div>
  );
}

export default AddJetForm;
