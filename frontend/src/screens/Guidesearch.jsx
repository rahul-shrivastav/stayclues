import React from 'react'
import { IoSearchCircle } from "react-icons/io5";
import Guidenav from '../components/Elements/Guidenav';
import { useGuideContext } from '../context/GuideContext';

const Guidesearch = () => {
    const { category } = useGuideContext()
    let theme = ''
    let border = ''
    if (category === 'luxury') { theme = 'redtxt';; border = ' border-orange-7' }
    else if (category === 'adventure') { theme = 'text-green-700  '; border = ' border-greem-700' }
    else if (category === 'family') { theme = 'text-pink-500';; border = ' border-pink-500' }

    return (
        <div className='w-screen  h-screen flex flex-col items-center justify-center overflow-y-hidden'>
            <div className="w-2/3 flex flex-col items-center justify-center ">
                <div className='flex items-center justify-center' >
                    <div className={'text-7xl px-3 ' + theme}><IoSearchCircle /></div>
                    <input type="text " placeholder='Enter Keywords' className={'text-3xl 00 outline-none p-5 bg-white text-black border  ' + border} />
                </div>
                <p className=' w-1/2 text-2xl text-center py-5 font-extralight'>Our search will return results that match ANY of your keywords. Where it finds ALL of those words, no matter what order the words are in, it will place that result at the top.</p>

            </div>
            <Guidenav />
        </div>
    )
}

export default Guidesearch