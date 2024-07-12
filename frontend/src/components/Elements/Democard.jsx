import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useGuideContext } from '../../context/GuideContext'

const Democard = ({ guideDesc, img }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { setCategory, setSelectedGuide, seticategory } = useGuideContext();
    // console.log(props.guideDesc)

    const changeRoute = () => {
        localStorage.setItem("stayclues-guide", JSON.stringify({ data: guideDesc }));
        setSelectedGuide(JSON.parse(localStorage.getItem("stayclues-guide")))


        if (location.pathname === "/luxury") {
            setCategory('luxury')
            seticategory('luxury')
            navigate("/guidebook")
        }
        if (location.pathname === "/family") {
            seticategory('family')
            setCategory('luxury')
            navigate("/guidebook")
        }
        if (location.pathname === "/adventure") {
            seticategory('adventure')
            setCategory('luxury')
            navigate("/guidebook")
        }
    }
    return (
        <button onClick={changeRoute} className="card bg-white w-96 shadow-2xl hover:bg-slate-50 mb-14 p-5">
            <h2 className="card-title text-3xl text-center">Captivate guests with stunning imagery
                !</h2>
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p>Captivate guests with stunning imagery
                    ExampleGuides-PaperbarkCamp
                    Click on this guidebook to see how imagery and video can capture your guest’s attention and build pre-arrival excitement.</p>
            </div>
        </button>
    )
}

export default Democard