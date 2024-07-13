import React from 'react'
import hotel1 from '../assets/img/hotels/hotel1.jpg'
import { GiPlantsAndAnimals } from "react-icons/gi";
import Guidenav from '../components/Elements/Guidenav';
import { useGuideContext } from '../context/GuideContext';
import { useNavigate } from 'react-router-dom';

const GuideBook = () => {
    const { category, icategory } = useGuideContext()
    let colortheme = ''
    let btntheme = ''
    if (category === 'luxury') { colortheme = 'redbg'; btntheme = 'border-white hover:bg-white hover:text-black  hover:border-none' }
    else if (category === 'adventure') { colortheme = 'bg-green-700  '; btntheme = 'border-green-700 hover:bg-green-700  hover:border-none' }
    else if (category === 'family') { colortheme = 'bg-pink-500'; btntheme = 'border-pink-500 hover:bg-pink-500  hover:border-none' }
    const navigate = useNavigate()
    const reroute = () => {
        navigate('/guidebook/guide')
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-screen h-screen absolute top-0 left-0'>
                <img src={icategory === 'luxury' ? 'https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/welcome-pic.jpeg' : "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/bbnb.webp"} alt="" className='-z-10 w-full h-full object-cover brightness-50' />

            </div>
            <div className='text-white text-3xl z-0 flex flex-col items-center justify-center relative -top-10'>
                <div className='text-7xl '>
                    <GiPlantsAndAnimals />
                </div>
                {/* <div className='text-4xl font-bold my-7'>Villa Uma Dewi Sri</div>
                <div className='text-2xl'>abcdhotel@hotmail.com</div> */}
                <div className={'w-64 h-1  my-3 ' + colortheme}></div>
                <div className='text-5xl font-bold my-10'>{icategory === 'luxury' ? "Tree House Jibhi" : "Villa Kanya"}</div>
                <button onClick={reroute} className={'btn  w-60 text-white bg-transparent border-1 ' + btntheme}>Get Started</button>
            </div>

            <Guidenav />



        </div>
    )
}

export default GuideBook