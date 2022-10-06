import React from "react";
import styled from "styled-components"

const Background = styled.main`
  width: 100%;
  height: 100%;
  //   background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  //   justify-content: center;
  //   align-items: center;
`;
const ModalWrapper = styled.section`
  // width: 800px;
  height: 500px;
  width: 100%;
  //   height: 100%;
  background: #013220;
  color: #000;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  h1 {
    color: #fff;
    text-align: center;
  }

  p {
    color: #fff;
    text-align: center;
    padding: 2px;
  }
`;

const Main = ({ id, obj }) => {
  return (
    <Background>
      <ModalWrapper>
        <ModalContent>
          <h1>{obj.title}</h1>
          <p>{obj.text}</p>
        </ModalContent>
        <ModalImg src={obj.img} alt="oh it worked" />
      </ModalWrapper>
    </Background>
  );
};

export default Main;
