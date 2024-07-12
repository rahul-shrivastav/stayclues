import React from "react";
import styled from "styled-components";
// Components
// import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
// import ProjectImg1 from "../../assets/img/projects/1.png";
// import ProjectImg2 from "../../assets/img/projects/2.png";
// import ProjectImg3 from "../../assets/img/projects/3.png";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage3 from "../../assets/img/decor/3.jpg";
import AddImage4 from "../../assets/img/decor/4.jpg";

export default function FeaturesDetails() {
  return (
    <Wrapper id="projects">
      <div className="container bg-gray-100 flex max-[600px]:flex-col justify-center border rounded-2xl gap-10 items-center">
        <div className="py-10">  <ImgWrapper className="flexCenter max-w-2xl">
          <img className="radius8" src={AddImage3} alt="add" />
        </ImgWrapper></div>
        <div className="py-10">
          <h2 className="font30 extraBold text-black">Get set up in minutes, not days</h2>
          <p className="font20 text-black">Set up and maintain hassle-free digital guidebooks with StayClues <br /> - no downloads needed. Simply share the link for users to access information effortlessly.</p>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "190px" }}>
              <button className="bluebg text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </ButtonsRow></div>



      </div><br /><br />



      <div className="container beigebg flex  max-[600px]:flex-col justify-center border rounded-2xl gap-10 items-center ">
        <div className="py-10">
          <h2 className="font30 extraBold gunmetal">Happy Users = Happy You</h2>
          <p className="font20 gunmetal ">Happy users share more positive feedback and word of mouth joy.</p>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "190px" }}>
              <button className="bluebg text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </ButtonsRow>
        </div>
        <div className="py-10">
          <ImgWrapper className="flexCenter">
            <img className="radius8 max-w-sm" src={AddImage4} alt="add" />
          </ImgWrapper>
        </div>
      </div>


      <br /><br />


      <div className="container bg-gray-100 flex max-[600px]:flex-col justify-center border rounded-2xl gap-10 items-center">
        <div className="py-10">
          <h2 className="font30 extraBold text-black">All the support you need</h2>
          <p className="font20 text-black">We're real people who provide friendly, helpful support. Join our community for advice and tips, or explore our blog, webinars, and podcasts to grow your business with us.</p>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "190px" }}>
              <button className="bluebg text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </ButtonsRow></div>
        <div className="py-10">
          <h2 className="font30 extraBold text-black">Want to delve deeper?</h2>
          <p className="font20 text-black">Our digital guidebooks come with a host of features if you need them - scheduled messaging, personalisation, and integrations and third party embeds.</p>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
            <div style={{ width: "190px" }}>
              <button className="bluebg text-white p-5 border rounded-full w-full">Get Started</button>
            </div>
          </ButtonsRow></div>
      </div><br /><br />
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
