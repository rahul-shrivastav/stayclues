import React from "react";
import { useState } from 'react'
// Screens
import Landing from "./screens/Landing.jsx";
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Luxury from "./screens/Luxury.jsx";
import Family from "./screens/Family.jsx";
import Adventure from "./screens/Adventure.jsx";
import Login from "./screens/Login.jsx";
import Signup from "./screens/Signup.jsx";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

import Dashboard from "./screens/Dashboard.jsx";
import Profile from "./screens/Profile.jsx";
import Pricing from "./screens/Pricing.jsx";
import Contact from "./screens/Contact.jsx";

import Guide from "./screens/Guide.jsx";
import Map from "./screens/Map.jsx";
import Guidesearch from "./screens/Guidesearch.jsx";
import GuideBook from "./screens/Guidebook.jsx";
import About from "./screens/About.jsx";


function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>

        <Route path='/' element={<Landing />} />

        <Route path='/guidebook' element={<GuideBook />} />
        <Route path='/guidebook/search' element={<Guidesearch />} />
        <Route path='/guidebook/guide' element={<Guide />} />
        <Route path='/guidebook/map' element={<Map />} />

        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/luxury' element={<Luxury />} />
        <Route path='/family' element={<Family />} />
        <Route path='/adventure' element={<Adventure />} />

        <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={"/login"} />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />

      </Routes>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: "1px solid #EC4899",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#292E38',
            padding: '10px 40px 10px 40px',
            color: '#8AEAEE',
          },
        }}
      />
    </div>

  )
}

export default App
