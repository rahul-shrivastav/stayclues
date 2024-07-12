import React from 'react'
import Guidenav from '../components/Elements/Guidenav'
import { useGuideContext } from '../context/GuideContext';

const Map = () => {
    const { selectedGuide } = useGuideContext()
    return (
        <div className='w-screen  h-screen flex flex-col items-center justify-center overflow-y-hidden'>
            <div className='w-full h-full bg-green-50'>
                <iframe className='w-full h-full brightness-90' src={selectedGuide["data"][0]["location"]} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>


            <Guidenav />

        </div>
    )
}
export default Map