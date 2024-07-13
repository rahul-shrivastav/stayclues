import React from "react";
import styled from "styled-components";
// Components
import icon1 from '../../assets/png/1.png'
import icon2 from '../../assets/png/2.png'
import icon3 from '../../assets/png/3.png'
import icon4 from '../../assets/png/4.png'
import icon5 from '../../assets/png/5.png'
import icon6 from '../../assets/png/6.png'
import icon7 from '../../assets/png/7.png'
import icon8 from '../../assets/png/8.png'


export default function Features() {
    return (
        <>

            <section className="text-gray-600 body-fontv shadow-xl pb-5 mb-5" >
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20 mt-10">
                        <h1 className="sm:text-3xl text-2xl font-extrabold title-font gunmetal mb-4 font30">Bursting with features</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover how our feature rich guidebooks can transform your business</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-gray-600 inline-flex"></div>
                        </div>
                    </div>

                    <div className=" flex flex-wrap  justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                        <div className=" p-4 md:w-1/4 w-full flex flex-col text-center items-center ">

                            <div><img src={icon1} className="max-w-32 mb-3  max-h-32 opacity-80 " alt="" /></div>
                            <div className="flex-grow">
                                <h2 className="  title-font  mb-3 bluetxt text-2xl font-bold">Your Brands Features</h2>
                                <p className="leading-relaxed text-base">Add your logo, fonts and brand colours
                                </p>
                            </div>
                        </div>


                        <div className=" p-4 md:w-1/4 w-full flex flex-col  text-center items-center">
                            <div><img src={icon2} className="w-32 mb-3   h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold  title-font   mb-3">Aesthetically Beautiful </h2>
                                <p className="leading-relaxed text-base"> Add Photos, Videos and virtual tours
                                </p>

                            </div>
                        </div>


                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon3} className="max-w-32 mb-3   max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font mb-3">API Integrations</h2>
                                <p className="leading-relaxed text-base">Add Forms, Playlists, Questionnaires and much more</p>

                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon4} className="max-w-32  mb-3  max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font  mb-3">EazY Updates</h2>
                                <p className="leading-relaxed text-base">Update whenever you want</p>

                            </div>
                        </div>



                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon5} className="max-w-32  mb-3  max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font  mb-3">Co hosts can edit</h2>
                                <p className="leading-relaxed text-base">Add users to your account to create and manage E- books </p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon6} className="max-w-32 mb-3   max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font s mb-3">Easy Translate </h2>
                                <p className="leading-relaxed text-base"> Into multiple languages
                                </p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon7} className="max-w-32  mb-3 max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font  mb-3">Dashboard </h2>
                                <p className="leading-relaxed text-base">Easy to navigate admin dashboard
                                </p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
                            <div><img src={icon8} className="max-w-32  mb-3 max-h-32 opacity-80 " alt="" /></div>

                            <div className="flex-grow">
                                <h2 className="bluetxt text-2xl font-bold title-font  mb-3">Engagement Tracker </h2>
                                <p className="leading-relaxed text-base">Track who has accessed your guidebooks
                                </p>

                            </div>
                        </div>

                    </div>
                    <button className="flex mx-auto mt-16 mb-10 text-white bluebg border-0 py-2 px-8 focus:outline-none  rounded text-lg">Get Started</button>
                </div>
            </section>

            <div className="container bluebg flex  max-[600px]:flex-col justify-center border rounded-2xl gap-10 mt-10 items-center">
                <div className="py-10 w-full text-center">
                    <h2 className="font30 extraBold text-white">Simple to get started</h2>
                    <ol>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span> Multiple templates to choose from</li>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span> Bite sized digestible information for guests</li>
                    </ol>
                </div>
                <div className="py-10 w-full text-center">
                    <h2 className="font30 extraBold text-white">Easy to share</h2>
                    <ol>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span> No app required </li>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span> Works on any device – Laptop/ Phone / Tablet</li>
                    </ol>
                </div>
                <div className="py-10 w-full text-center">
                    <h2 className="font30 extraBold text-white">Features you'll love</h2>
                    <ol>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span>Share via QR Code</li>
                        <li className="my-5"><span className="font-bolder text-white font30">✓</span> Customizable designs and layout</li>
                    </ol>
                </div>

            </div> <br /><br />
        </>
    );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;