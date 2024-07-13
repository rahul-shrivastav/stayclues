import React from 'react'

const Reviews = () => {
    return (
        <>
            <div className=' font30 carousel w-screen px-10 py-10 bg-slate-100 text-center flex justify-center'>
                <h2 className="font30 extraBold gunmetal">What our customer says</h2>
            </div>

            <div className="carousel w-screen px-10 py-10  bg-slate-100  ">

                <div id="slide1" className="carousel-item relative w-screen flex items-center justify-center">
                    <div className='flex items-center justify-evenly w-full '>
                        <div className="card bg-base-100 w-72 shadow-xl text-center">
                            <div className="card-body bg-white shadow-2xl ">
                                <h2 className="card-title justify-center">Kane</h2>
                                <p>StayClues is a blessing. The digital concierge saved me so much time eliminating back and forth interactions with guests. </p>
                                {/* <p className='font-bold'>- Daaniel</p> */}
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl text-center md:block hidden">
                            <div className="card-body bg-white shadow-2xl text-center">
                                <h2 className="card-title justify-center">Rock</h2>
                                <p>Many of our guests complimented the effort and energy we put into our digital concierge. It almost seems like a cheat code considering the amount of time we spent creating it.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100  w-72 shadow-xl text-center md:block hidden">
                            <div className="card-body bg-white shadow-2xl text-center">
                                <h2 className="card-title justify-center">Serena</h2>
                                <p>I ve been hosting since 10 years. I’ve experienced the hassles of hosting on Booking.com and Airbnb and just recently started using StayClues. I couldn’t imagine such a spike in direct bookings. </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="" className="btn btn-circle bluebg text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bluebg text-white">❯</a>
                    </div>
                </div>






            </div >

            <div className=' font30 carousel w-screen px-10 py-10 bg-slate-100 text-center flex justify-center'>
                <h2 className="font30 extraBold gunmetal">Reviews from guests for the Digital Concierge</h2>
            </div>
            <div className="carousel w-screen px-10 py-10 mb-10 bg-slate-100  ">

                <div id="slide1" className="carousel-item relative w-screen flex items-center justify-center">
                    <div className='flex items-center justify-evenly w-full '>
                        <div className="card bg-base-100 w-72 shadow-xl text-center">
                            <div className="card-body bg-white shadow-2xl text-center">
                                <h2 className="card-title justify-center">Cameron</h2>
                                <p>I was amazed by the level of detail and customization. The digital concierge covered everything from local attractions to dining recommendations, making our stay unforgettable
                                </p>
                                {/* <p className='font-bold'>- Daaniel</p> */}
                            </div>
                        </div>
                        <div className="card bg-base-100  w-72 shadow-xl text-center md:block hidden">
                            <div className="card-body bg-white shadow-2xl text-center">
                                <h2 className="card-title text-center justify-center">Rob</h2>
                                <p>This digital concierge is a lifesaver! It provided everything we needed to know about our destination, making our trip stress-free and enjoyable
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100  w-72 shadow-xl text-center md:block hidden">
                            <div className="card-body bg-white shadow-2xl text-center">
                                <h2 className="card-title justify-center">Isabella</h2>
                                <p>I am an introvert and prefer figuring out things on my own. From working the jacuzzi to finding out quirks about the house, this digital concierge made my stay very smooth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="" className="btn btn-circle bluebg text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bluebg text-white">❯</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Reviews