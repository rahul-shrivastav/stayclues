import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

// Components
import Sidebar from "../Nav/Sidebar";
import uselogout from '../../hooks/useLogout';
import logo from '../../assets/img/logo.jpg'
// Assets nhcbf
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useAuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from "react-router-dom";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const { authUser } = useAuthContext();
  const navigate = useNavigate()
  const { loading, logout } = uselogout();
  const uselogoutf = () => {
    logout()
  }
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);




  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />} */}


      <Wrapper className="bluebg animate shadow-2xl w-screen" style={y > 100 ? { height: "90px", opacity: "0.95" } : { height: "80px" }}>
        <NavInner className="    flex items-center  justify-between">

          {/* {stayclues} */}
          <L className="pointer flexNullCenter" to="/" >
            <button onClick={() => { navigate('/') }} style={{ marginLeft: "15px" }} className="font20 extraBold text-white">
              <img src={logo} width={80} alt="" />

            </button>
          </L>

          {/* SIDEBAR */}
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>

            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn  bg-white border-white gunmetal text-white hover:bg-white"><BurgerIcon /></label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bluebg   text-base-content min-h-full w-80 p-4 ">
                  {authUser &&
                    <div className="">
                      <div className="text-5xl text-white flex items-center justify-center"><FaUserCircle /></div>
                      <div className="text-2xl text-white text-center">{authUser.fullName}</div>
                    </div>
                  }
                  <li><L to="/" className="mt-3 text-white hover:text-slate-400">Home</L></li>

                  <li className="border-t border-b border-pink-200 border-opacity-25">
                    <div className="collapse  py-0">
                      <input type="radio" name="my-accordion-1 " defaultChecked className="defaultChecked" />
                      <div className=" collapse-title font-medium pl-0   pb-0  text-white hover:text-slate-400">Demos <span></span> </div>
                      <div className="collapse-content flex  relative gap-3 -top-4   flex-col items-start justify-center">
                        <L to="/luxury" className="flex items-center justify-center text-white hover:text-slate-400"><span><VscDebugBreakpointDataUnverified /></span>Luxury</L>
                        <L to="/adventure" className="flex items-center justify-center text-white hover:text-slate-400"><span><VscDebugBreakpointDataUnverified /></span>Adventure</L>
                        <L to="/family" className="flex items-center justify-center text-white hover:text-slate-400" ><span><VscDebugBreakpointDataUnverified /></span>Family</L>
                      </div>
                    </div>
                  </li>


                  <li><L to="/contact" className="text-white hover:text-slate-400">Contact</L></li>
                  {!authUser && <li><L to="/login" className='text-white hover:text-slate-400'>Login</L></li>}
                  {authUser && <li> <L className="text-white hover:text-slate-400 " onClick={uselogoutf}>Logout</L> </li>}

                </ul>
              </div>
            </div>
          </BurderWrapper>

          <UlWrapper className="flexNullCenter text-white hover:text-slate-100">

            {/* HOME */}
            <li className="semiBold font15 pointer mx-2">
              <L className="text-white hover:text-slate-100" to="/">Home</L>
            </li>
            {/* DEMOS */}
            <li className="semiBold font15 pointer">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="bg-transparent btn text-white hover:text-slate-100 hover:bg-transparent border-none shadow-none">Demos </div>
                <ul tabIndex={0} className="dropdown-content menu bluetxt bg-white hover:text-slate-100 shadow-2xl border rounded-md z-[1] w-52 p-2 ">
                  <li className=""><L to="/luxury" className=" bluetxt hover:text-slate-800">Luxury</L></li>
                  <li className=""><L to="/adventure" className=" bluetxt hover:text-slate-800">Adventure</L></li>
                  <li className=""><L to="/family" className=" bluetxt hover:text-slate-800">Family</L></li>


                </ul>
              </div>
            </li>

            {/* Contact */}
            <li className="semiBold font15 pointer mx-2">
              <L className="text-white hover:text-slate-100" to="/contact">Contact</L>
            </li>
            {/* Pricing */}
            <li className="semiBold font15 pointer mx-4">
              <L to="/pricing" className="text-white hover:text-slate-100">Pricing</L>
            </li>

          </UlWrapper >
          {
            authUser &&
            <UlWrapperRight className="flexNullCenter">

              <li className="semiBold font15 pointer  text-white">
                <div className="text-2xl">


                  <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="text-3xl"><FaUserCircle />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow">
                      <li className="text-center mt-5 text-lg gunmetal">Welcome</li>
                      <li className="text-center mb-5  gunmetal text-lg border-b border-slate-400 pb-4">{authUser.fullName}</li>
                      <li><a href="/profile" className="gunmetal hover:text-slate-800">Profile</a></li>
                      <li><a href="/dashboard" className="gunmetal hover:text-slate-800" >Dashboard</a></li>
                      <li><a><button onClick={uselogoutf} className="gunmetal hover:text-slate-800">Logout</button></a></li>
                    </ul>
                  </div>
                </div>


              </li>
              {/* <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li> */}
            </UlWrapperRight>
          }
          {
            !authUser &&
            <UlWrapperRight className="flexNullCenter">

              <li className="semiBold font15 pointer  bg-white">
                <div className="text-2xl bluebg">
                  <button className="btn border border-white bluebg text-white hover:border-none hover:bg-white hover:text-cyan-600" onClick={() => { navigate("/login") }}>Login</button>

                </div>


              </li>
              {/* <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li> */}
            </UlWrapperRight>
          }
        </NavInner>
      </Wrapper >
    </>
  );
}

const Wrapper = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  width:100vw;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  position : relative;
  right : 50px;
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  position:relative;
  right:50px;
  @media (max-width: 760px) {
    display: none;
  }
`;


