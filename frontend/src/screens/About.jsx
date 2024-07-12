import React from 'react'
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer'

const About = () => {
    return (
        <>
            <div className='w-scree mb-20 gunmetal'>
                <TopNavbar />
                <div className='flex  '>
                    <div className='p-20 mt-20'>
                        <h1 className='text-4xl font-bold '>About  </h1>
                        <h1 className='text-4xl mb-10'>StayClues
                        </h1>
                        <p>
                            Welcome to StayClues, where we revolutionise the way property managers and businesses communicate with their guests through our innovative digital guidebooks, known as 'digital concierge'. <br /><br />
                            Our team is composed of avid travelers with decades of experience in the travel industry. Beyond our personal journeys to 40+ countries, we come from a history of travel and adventure tourism. We've successfully run a travel agency and have been dedicated to helping hosts improve their listings for years. This extensive background has given us a unique insight into the challenges and needs of both hosts and guests. We built this platform with a simple mission: to enhance the guest experience while making the host's job easier. With our digital concierge, property managers can provide comprehensive and engaging information to their guests, ensuring a smooth and enjoyable stay. <br /><br />
                            Join us on this journey to transform hospitality with the perfect blend of technology and human touch. Welcome to a new era of hosting!

                        </p>
                    </div>
                </div>
                <div className='flex  '>
                    <div className='p-20'>
                        <h1 className='text-4xl font-bold '>Why we launched </h1>
                        <h1 className='text-4xl mb-10'>StayClues
                        </h1>
                        <p>
                            Our experience of  running multiple properties enabled us to get a first hand insight into the nitty gritties of running of a property management business. <br /> <br />
                            We would spend several additional hours each month answering the same repetitive questions that the guests had. We started by creating an internal tool in the form of a printed guidebook and digitised it soon after. We didn’t expect word of mouth to play such an important role and the guidebook acted as a micro marketing tool by itself. Soon after we added multiple features which our guests starting raving about.
                            We were hoarded by fellow hosts to make one for them as well and decided to create a self serve tool for hosts to use themselves. <br /><br />
                            We saw firsthand how miscommunication and lack of information not only cost time but could negatively impact the guest experience and add unnecessary stress to the host's responsibilities. <br /><br />
                            By combining our love for travel, our extensive industry experience, and our commitment to innovation, we aim to transform the hospitality experience for both hosts and guests. At StayClues, we believe that exceptional communication is the key to exceptional hospitality. <br />

                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About