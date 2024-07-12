import React from 'react'
import { useGuideContext } from '../../context/GuideContext';

const Accordian2 = ({ obj }) => {
    const { category } = useGuideContext()
    let theme = ''
    if (category === 'luxury') { theme = 'redtxt'; }
    else if (category === 'adventure') { theme = 'text-green-700  '; }
    else if (category === 'family') { theme = 'text-pink-500'; }
    return (
        <div className={"collapse  bg-white    collapse-arrow rounded-sm  shadow-xl my-3 " + theme}>

            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium flex items-center justify-start"><span className='font-extralight text-black px-3'>{Object.keys(obj)}</span></div>
            <div className="min-h-[500px] max-h-[700px] overflow-y-scroll  flex flex-col items-center z-10">
                {
                    <div className='flex h-full flex-col items-center justify-start'>
                        <div className='mb-5'><img className='rounded p-3 h-full' src={obj[Object.keys(obj)][0]["Image"]} /></div>
                        <p dangerouslySetInnerHTML={{ __html: obj[Object.keys(obj)][1]["Text"] }} id='ab' className='text-black px-5'></p>
                        <p className='text-white opacity-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt, ex natus, eum commodi aspernatur id, error doloremque a fugit quidem voluptas magni. Veritatis in est quasi, aspernatur at praesentium debitis ipsum fugiat accusantium laboriosam nihil reiciendis quas iure quae molestias facere itaque impedit illum, recusandae rem. Velit, aut nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illo ullam non consectetur doloribus vitae deleniti, nulla voluptatem at mollitia possimus fugiat itaque est unde? Eveniet, impedit minus excepturi dolores maiores expedita dolorum eos placeat aliquam nulla quasi rerum ab vitae eum ad labore, aut tenetur fugiat sunt cupiditate consequatur assumenda quo? Sed porro temporibus minima totam eveniet aut expedita! Sunt eius minus dolor possimus quibusdam ratione dolore omnis ad esse velit fugiat natus ipsum ducimus, doloremque, quis vel architecto obcaecati numquam? Quia possimus laborum tempore ad praesentium incidunt cupiditate aliquid distinctio, totam, vero sint nisi? Natus illo tempora laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab, facilis necessitatibus voluptas expedita minus commodi quis adipisci obcaecati placeat rem non temporibus magnam ullam!</p>
                    </div>


                }

            </div>
        </div >
    )
}

export default Accordian2