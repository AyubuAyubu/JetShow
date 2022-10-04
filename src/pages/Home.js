import React, { useEffect, useState } from "react";
import Main from "../components/Main";

const Home = () => {
  const [content, setContent] = useState([]);
  console.log(content);

  useEffect(() => {
    fetch("http://localhost:3000/home")
      .then((r) => r.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <>
      {content.map((obj) => (
        <Main key={obj.id} obj={obj} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        e
      >
        <img src="https://i.ibb.co/d6z5sXf/HAL-Tejas.jpg" alt="Not found" />
        <h1>HOME</h1>
      </div>
    </>
  );
};

export default Home;
