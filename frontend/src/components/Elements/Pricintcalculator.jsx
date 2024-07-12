import React, { useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

const Pricintcalculator = () => {
    const [price, setprice] = useState(1);
    const increase = () => {
        setprice(price + 1)
    }
    const decrease = () => {
        setprice((price) => {
            if (price > 1) {
                return price - 1
            }
            else { return 1 }
        })
    }
    return (
        <div className='bg-white w-screen h-fit pt-40 '>
            <form className='flex flex-col items-center justify-center pb-10'>
                <h1 className='font-mono font-extrabold text-7xl text-center'>Calculate your Pricing</h1>
                <p className='text-1xl font-serif text-center mt-4'> Follow the prompts below to find the exact pricing for your needs.</p>
                <p className='text-1xl font-bold text-center mt-4'>What kind of guidebook are you looking for?</p>

                <select name="cars" id="cars" className='my-10 outline-none border-1 p-5 font-mono font-bold text-3xl rounded-lg  bg-white border-2 shadow-2xl '>
                    <option value="vodlvo">Short term rental</option>
                    <option value="saab">Hotel</option>
                    <option value="mercedes">Glamping</option>
                    <option value="audi">Campsite</option>
                </select>

                <p className='text-5xl text-center font-bold font-mono my-2'>Number of Properties</p>
                <p className='text-1xl text-center font-serif text-gray-400'>Price is based on the number of properties you operate.</p>
                <p className='text-1xl text-center font-serif  text-gray-400'>e.g. 2 apartments in a building is 2 properties, 10 cottages on a single site is 10 properties, etc.
                </p>
                <div className='flex items-center justify-center my-5'>
                    <button type='button' className='gunmetal text-5xl' onClick={increase}><FaArrowCircleUp />
                    </button>
                    <p className=' mx-5 text-6xl shadow-2xl rounded-lg px-5'>{price}</p>
                    <button type='button' className='gunmetal text-5xl' onClick={decrease}><FaArrowCircleDown /></button>

                </div>
                <div className='flex items-center justify-between border w-96 '>

                    <input className='' type="radio" id="html" name="currency" value="HTML"></input>
                    <label htmlFor="html">USD</label><br></br>
                    <input type="radio" id="css" name="currency" value="CSS"></input>
                    <label htmlFor="css">GBP</label><br></br>
                    <input type="radio" id="html" name="period" value="HTML"></input>
                    <label htmlFor="css">Monthly</label><br></br>
                    <input type="radio" id="css" name="period" value="CSS"></input>
                    <label htmlFor="html">Anually</label><br></br>
                </div>
                <p className='shadow-2xl text-4xl font-bold mt-10 mb-5 px-5 bg-slate-50'><span>$</span>{price * 100}</p>
                <div className='flex items-center'>
                    <p>Ready to get started?</p>
                    <button className='shadow-2xl btn bluebg border-none text-white mx-7'>Start your free Trial</button>
                </div>

            </form>

        </div>
    )
}

export default Pricintcalculator