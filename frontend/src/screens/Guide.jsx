import React, { useState } from 'react'
{/* <GiPlantsAndAnimals /> */ }
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdPrint } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";

import Accordian from '../components/Elements/Accordian';
import Accordian2 from '../components/Elements/Accordian2';
import Guidenav from '../components/Elements/Guidenav';
import { useGuideContext } from '../context/GuideContext';


const Guide = () => {
    const { icategory } = useGuideContext()
    const [titlet, settitle] = useState('Welcome')
    const [sub, setsub] = useState({ "Choose a category": [{ "Image": "" }, { "Text": "" }] })
    let i = 0
    const imageList = ["https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/26.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/25.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/27.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/21.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/2.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/7.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/6.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/11.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/9.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/6.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/11.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/9.png"
    ]
    const imageList2 = ["https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/26.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/25.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/aboutthehouse.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/21.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/before-leaving-the-house.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/arrival.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/wifi.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/gettingaround.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/petpolicry.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/11.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/eatingout.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/localshoping.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/contact.png",
        "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/16.png"
    ]
    const { category, selectedGuide, setSelectedGuide } = useGuideContext()

    let theme = ''
    if (category === 'luxury') { theme = 'redbg'; }
    else if (category === 'adventure') { theme = 'bg-green-700  '; }
    else if (category === 'family') { theme = 'bg-pink-500'; }
    const openmodal = () => {
        if (screen.width <= 1280) {
            document.getElementById('my_modal_3').showModal()
        }
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center overflow-y-hidden'>
            <div className='w-11/12 h-screen shsadow-2xl flex items-center justify-around pt-5 '>
                <div className='w-full xl:w-2/6 h-full   rounded-2xl shadow-lg'>

                    <div className={"w-full mb-3  rounded-tl-2xl py-7 rounded-tr-2xl flex items-center justify-end text-3xl text-white  " + theme}>
                        <div>
                            <IoShareSocialSharp />
                        </div>
                        <div className='mx-5'>
                            <IoMdPrint />
                        </div>
                    </div>

                    <dialog id="my_modal_3" className="  modal xl:hidden xl:-z-10 ">
                        <div className="modal-box bg-white h-5/6 w-11/12 flex flex-col items-center justify-start">
                            <form method="dialog ">                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-white btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg my-5 ">{Object.keys(sub)}</h3>
                            <div className='mb-5'><img src={sub[Object.keys(sub)][0]["Image"]} /></div>
                            <p dangerouslySetInnerHTML={{ __html: sub[Object.keys(sub)][1]["Text"] }} id='ab' className='   px-5'></p>
                        </div>
                    </dialog>

                    {/* aCOORDIAN 1  */}
                    <div className='shadow-lg h-full overflow-y-scroll overflow-x-hidden z-10'>

                        {/* acc1 */}



                        {selectedGuide["data"][1]["categories"].map((item) => (

                            <div onClick={() => { settitle(Object.keys(item)) }}>
                                <Accordian obj={item} key={item[Object.keys(item)]} onchange={setsub} modalchange={openmodal} imageurl={icategory === 'luxury' ? imageList[selectedGuide["data"][1]["categories"].indexOf(item)] : imageList2[selectedGuide["data"][1]["categories"].indexOf(item)]} />
                            </div>

                            // console.log(Object.keys(item))
                        ))}




                        <div className='mt-1 h-48 w-full bg-transparent'></div>

                    </div>


                </div>
                <div className='w-3/6 h-full shadow-lg hidden xl:block z-10'>
                    <div className={"w-full rounded-tl-2xl rounded-tr-2xl flex items-center justify-between text-3xl text-white py-7 " + theme}>
                        <div className="mx-5">{titlet}</div>
                        <div className='mr-5'>
                            <LuArrowDownUp />
                        </div>


                    </div>
                    <div className='shadow-lg  '>

                        {/* acc1 */}
                        <Accordian2 title={titlet} obj={sub} />


                    </div>


                </div>


            </div>
            <Guidenav />



        </div>
    )
}

export default Guide