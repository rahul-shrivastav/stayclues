import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import { useGuideContext } from '../../context/GuideContext'


const Accordian = ({ obj, onchange, imageurl, modalchange }) => {
    const { category } = useGuideContext()

    let theme = ''
    let theme2 = ''
    if (category === 'luxury') { theme = 'redtxt'; theme2 = 'border-r-2 border-amber-500' }
    else if (category === 'adventure') { theme = 'text-green-700  '; theme2 = 'border-r-2 border-green-700' }
    else if (category === 'family') { theme = 'text-pink-500'; theme2 = 'border-r-2 border-pink-500' }
    return (
        <div className={"collapse bg-white  collapse-arrow rounded-sm py-5 shadow-xl my-3 " + theme}>

            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center justify-start">
                <span className={'px-3 text-5xl font-extralight  mr-5 w-20  ' + theme2}>
                    <img className='object-contain' src={imageurl} alt="" />
                </span>
                <span className='font-extralight text-black'>{Object.keys(obj)}</span>
            </div>

            <div className="collapse-content  flex gap-5 flex-col items-end justify-end">
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}></button> */}
                {obj[Object.keys(obj)].map((item) => (


                    <button className='w-4/5 flex items-center justify-between' key={Object.keys(item)} onClick={() => { onchange(item), modalchange() }}>
                        {Object.keys(item)}
                        <span><FaArrowRight />
                        </span>
                    </button>

                ))}
            </div>
        </div>
    )
}

export default Accordian