import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import logo from '../../assets/img/logo.jpg'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="text-white body-font bluebg h-fit  py-10">
      <div className="container px-5 py-24 mx-auto flex items-center justify-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl text-white"><img src={logo} width={180} alt="" />
            </span>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-white hover:text-gray-800" to={'/about'}>About Stayclues</Link>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Help/FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Features</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Integrations</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Partnerships</a>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800 flex
              items-center"><CiFacebook />Facebook</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 flex
              items-center"><FaInstagram />Instagram</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 flex
              items-center"><FaLinkedin />Linkedin</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 flex
              items-center"><FaYoutube />Youtube</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 flex
              items-center"><CiTwitter />Twitter</a>
              </li>
            </nav>
          </div>

        </div>
      </div>

    </footer>

  )
}
