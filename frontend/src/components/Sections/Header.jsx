import React from "react";
import styled from "styled-components";
import bgvid from "../../assets/videos/vid.mp4";


export default function Header() {
  return (
    <Wrapper id="home" className="mb-28 h-screen flex flex-col items-center justify-center pt-20 ">
      <LeftSide className="bg-red-60 z-10 h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <span className="font-extrabold text-black">Better customer experiences</span>
          <h1 className="extraBold text-6xl py-5 gunmetal">E-books that guests actually read !</h1>

          <BtnWrapper>
            <div className="" style={{ width: "190px" }}>
              <button className="bluebg border-none text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </BtnWrapper>
        </div>
      </LeftSide>
      <div className=" absolute top-0 left-0 w-screen h-screen -z-0 opacity-25 brightness-70 ">
        <video src={bgvid} autoPlay muted loop className="w-full h-full object-cover" ></video>
      </div>

    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
  height:100vh;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 70%;
  text-align:center;

  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    text-align: center;
  }
  @media (max-width: 560px) {
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


