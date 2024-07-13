import React from "react";
import styled from "styled-components";
// Components


import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";


import AddImage2 from "../../assets/img/decor/1.jpg";
import AddImage1 from "../../assets/img/decor/2.jpg";


export default function Introduction() {
  return (
    <Wrapper id="projects" className="">

      <div className=" z-10 w-11/12 m-auto border-2 shadow-2xl whitebg gunmetal flex  max-[600px]:flex-col justify-center  rounded-2xl gap-10 items-center">
        <div className="py-10">
          <h2 className="text-5xl extraBold gunmetal">Lets Explore</h2>
          <p className=" gunmetal mt-10 text-2xl flex items-center">
            <VscDebugBreakpointDataUnverified />
            <span className="mx-2 gunmetal"><strike>Clunky emails</strike></span>

          </p>
          <p className=" gunmetal mt-4 text-2xl flex items-center ">
            <VscDebugBreakpointDataUnverified />
            <span className="mx-2 gunmetal"><strike>Lengthy PDF</strike> </span>

          </p>
          <p className=" gunmetal mt-4 text-2xl flex items-center ">
            <VscDebugBreakpointDataUnverified />
            <span className="mx-2 gunmetal"><strike>Printed Booklets</strike> </span>

          </p>
          <p className=" gunmetal mt-4 text-2xl flex items-center ">
            <span className="mx-2 gunmetal">Share a QR code to your stunning<br /> Stay Clues Concierge guidebook.</span>

          </p>

          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "300px" }}>
              <button className="bluebg text-white  font-bold p-5 mt-5 border rounded-full w-full">Explore Your Digital Concierge Guidebook</button>
            </div>
          </ButtonsRow>
        </div>
        <div className="py-10">
          <ImgWrapper className="flexCenter">
            <div className="  max-w-2xl shadow-2xl rounded-2xl   border-red-300  ">
              <img className=" rounded-2xl  " src={AddImage2} alt="add" />
            </div>
          </ImgWrapper></div>
      </div>


      <br /><br />


      <div className="w-11/12 m-auto whitebg border-2 shadow-2xl flex  max-[600px]:flex-col-reverse justify-center  rounded-2xl gap-10 mt-10 items-center p-3">

        <div className="py-10">
          <ImgWrapper className="flexCenter">
            <img className="radius8 max-w-3xl opacity-90 shadow-2xl border" src={AddImage1} alt="add" />
          </ImgWrapper>
        </div>
        <div className="py-10">
          <h2 className="text-5xl extraBold gunmetal">Simple 3 steps</h2>
          <ol>
            <li className="my-5 text-2xl"><strong className="font-bolder  gunmetal ">Step 1 – </strong>Register and create your guidebook
            </li>
            <li className="my-5 text-2xl"><strong className="font-bolder gunmetal ">Step 2 –</strong> Add/ Change details about your offerings
            </li>
            <li className="my-5 text-2xl"><strong className="font-bolder gunmetal ">Step 3 – </strong>Publish and Share
            </li>
            <li className="my-5 text-2xl"><strong>Have your digital concierge ready in under 15 mins!</strong></li>
          </ol>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "190px" }}>
              <button className="bluebg text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </ButtonsRow>
        </div>



      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
