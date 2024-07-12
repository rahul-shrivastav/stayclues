import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGuideContext } from '../../context/GuideContext'
const Guidenav = () => {
    const navigate = useNavigate()
    const { category } = useGuideContext()
    let colortheme = ''
    if (category === 'luxury') { colortheme = 'redbg hover:bg-amber-900 border-yellow-100' }
    else if (category === 'adventure') { colortheme = 'bg-green-700 hover:bg-green-900 border-green-600' }
    else if (category === 'family') { colortheme = 'bg-pink-500 hover:bg-pink-700' }

    return (
        <div className='w-10/12 h-fit   z-20 absolute bottom-0 flex gap-1'>
            <button onClick={() => { navigate('/guidebook') }} className={'py-10 w-1/4 border-none   btn btn-square rounded-none  text-white ' + colortheme}>Home</button>
            <button onClick={() => { navigate('/guidebook/guide') }} className={'py-10 w-1/4 border-none   btn btn-square rounded-none  text-white ' + colortheme}>Guide</button>
            <button onClick={() => { navigate('/guidebook/map') }} className={'py-10 w-1/4 border-none   btn btn-square rounded-none  text-white ' + colortheme}>Map</button>
            <button onClick={() => { navigate('/guidebook/search') }} className={'py-10 w-1/4 border-none   btn btn-square rounded-none  text-white ' + colortheme}>Search</button>
        </div>
    )
}

export default Guidenav