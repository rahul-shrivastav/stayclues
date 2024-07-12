import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import Introduction from "../components/Sections/Introduction";
import Features from "../components/Sections/Features";
import FeaturesDetails from "../components/Sections/FeaturesDetails";
import Reviews from "../components/Sections/Reviews";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Introduction />
      <Features />
      <FeaturesDetails />
      <Reviews />
      <Footer />
    </>
  )
}


