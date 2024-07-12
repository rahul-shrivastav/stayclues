import React from 'react'
import Contactc from "../components/Sections/Contactc";
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from "../components/Sections/Footer";

const Contact = () => {
    return (
        <>
            <TopNavbar />
            <div className='pt-16 w-screen min-h-screen'>
                <Contactc />
            </div>
            <Footer />

        </>
    )
}

export default Contact