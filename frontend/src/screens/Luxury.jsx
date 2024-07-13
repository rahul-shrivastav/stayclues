import React from 'react'
import l1 from "../assets/img/demos/luxury/l1.png";
import h from "../assets/img/demos/luxury/h.png";
import Democard from '../components/Elements/Democard';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from "../components/Sections/Footer";

const Luxury = () => {

    const guideDesc2 = [
        { "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.647213629544!2d79.60379728210182!3d29.340737898002843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a097ab5a942711%3A0xbb702e6056b9cad1!2sThaplia%20Mahara%20Gaon%2C%20Uttarakhand%20263136!5e0!3m2!1sen!2sin!4v1720713363012!5m2!1sen!2sin" },
        {
            "categories": [
                {
                    "Welcome": [{
                        Welcome: [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/f0ea4cba-c771-41b6-92c5-caa646edb513_20210615102940.jpg" }, { "Text": "Welcome to our enchanting treehouse homestay nestled in the serene hills of Jibhi, Himachal Pradesh! We arethrilled to have you here and are committed to ensuring your stay with us is unforgettable.<br><br>Please feel free to reach out to our friendly staff for anything you may need during your stay. We hope youcreate cherished memories and leave with a renewed sense of peace and joy." }]
                    }]
                },


                {
                    "About US": [
                        {
                            "Us": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/444609245.jpeg", },
                            { "Text": "We offer a unique and immersive experience where you can stay in a beautifully crafted treehouse accommodation elevated amidst the tranquil Himalayan landscape. It is designed to blend harmoniously with nature, providing a cozy and comfortable haven away from the bustle of everyday life.<br><br>Whether you're relaxing on your private treehouse deck surrounded by breathtaking views, or exploring the nearby hiking trails and cultural gems, our homestay promises a one-of-a-kind escape. We pride ourselves on offering personalized hospitality, ensuring that every guest feels welcomed and cherished throughout their stay." }]
                        },
                        {
                            "Our Story": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/444609249.jpeg", }, { "Text": "Our journey began with a dream to create a haven where guests could escape the hustle and bustle of everyday life and reconnect with nature. Nestled in the picturesque hills of Jibhi, this property has been in our family for generations. What started as a beloved family holiday home has now been lovingly transformed into a charming homestay. We wanted to share the tranquility and beauty of this special place with others, offering a warm and inviting home away from home. Every corner of our homestay reflects our passion for hospitality and our commitment to preserving the natural beauty of Jibhi. Join us, and become a part of our story." }]
                        },
                        {
                            "Eco friendly": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/step-farms.jpg", }, { "Text": "Our eco-friendly practices are at the heart of everything we do. We have utilized sustainable materials in our construction and decor, ensuring a minimal environmental footprint. Rainwater harvesting helps conserve water resources. We have also implemented waste segregation and composting to reduce waste and nourish our garden with organic compost.<br><br>Our property is designed to blend seamlessly with its natural surroundings, and we strive to maintain the harmony of the local ecosystem. We encourage our guests to embrace eco-friendly habits during their stay, such as using reusable water bottles and participating in our recycling initiatives. By choosing to stay with us, you are supporting our mission to protect and cherish the environment." }]
                        },


                    ]
                },
                {
                    "About the Camp": [
                        {
                            "About the Camp": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/welcome-pic.jpeg", }, { "Text": "<b>Construction and Design:</b><p>Our property is a testament to sustainable living and craftsmanship. Inspired by the surrounding natural beauty, our treehouse is built using locally sourced materials and eco-friendly practices. The construction blends seamlessly with the forest environment, offering guests a serene and intimate connection with nature.</p> <br><b>Inspiration:</b><p>Our vision was born out of a deep love for the Himalayan foothills and a desire to create a retreat that harmonizes with its surroundings. The design of the treehouse reflects our commitment to preserving the environment while providing a comfortable and memorable stay for our guests.</p>" }]
                        },
                    ]
                },
                {
                    "Before You Arrive": [
                        {
                            "Driving Directions": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/himachal-pradesh.jpg", }, { "Text": "        <b>From Chandigarh: </b><br><br>Head northeast on NH5 towards Rupnagar. <br>Follow NH205 and NH3 to Jibhi - Shoja Rd in Banjar. <br>Turn right onto Jibhi - Shoja Rd. <br>Continue straight for approximately 10 km. <br>Our treehouse homestay will be on your left, offering a tranquil retreat in Jibhi. <br><br><b>From Bhuntar Airport:</b> <br><br>Head southeast on NH3 towards Banjar. <br>Follow NH3 to Jibhi - Shoja Rd in Banjar. <br>Turn left onto Jibhi - Shoja Rd. <br>Continue straight for approximately 10 km. <br>Our treehouse homestay will be on your left, amidst the picturesque surroundings of Jibhi. <br><br><b>In Jibhi:</b> <br><br>As you enter Jibhi, follow signs towards Jibhi - Shoja Rd. <br>Continue on Jibhi - Shoja Rd for approximately 10 km. <br>Look for our treehouse homestay on the left side of the road, surrounded by lush greenery and tranquility.<br><br>" }]
                        },
                        {
                            "What we provide": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/What-are-amenities-destacada.jpg", }, { "Text": "<b>Modern Amenities:</b> <br><br>Mini Fridge: Keep your beverages and snacks cool during your stay.<br>Television: Enjoy entertainment with a flat-screen TV featuring satellite channels.<br>Heating: Stay warm and cozy with heating facilities.<br>Private Bathroom: Freshen up in your private bathroom equipped with hot water and eco-friendlytoiletries.<br><br><b>Convenient Services:</b><br><br>Laundry Service: Keep your clothes clean with our reliable laundry service.<br>Room Service: Enjoy meals and beverages delivered to your treehouse for added convenience.<br>Daily Housekeeping: Enjoy a tidy and refreshed space daily with our housekeeping service.<br>Complimentary Wi-Fi: Stay connected with complimentary Wi-Fi available throughout the property.<br>" }]
                        },


                    ]
                },
                {
                    "Arrival Information": [
                        {
                            "Check in Time & Process": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/hotel-checkin-time.jpg", }, { "Text": "<b>Check-In Time: </b><br><br>Check-in time starts from 2:00 PM. If you anticipate arriving beyond 10:00 PM, please let us know in advance sowe can make the necessary arrangements.<br><br><b>Check-In Process:</b><br><br>Upon arrival, our friendly staff will greet you help you with the checkin<br>You will be asked to fill out a short registration form.<br>Please have a valid photo ID (passport, driver's license, etc.) ready for verification.<br>" }]
                        },
                        {
                            "Parking": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/parthik-tours-tirthan-banjar-kullu-taxi-services-mvd7zbkbuh.avif", }, { "Text": "Our designated parking area is located just a short 2 min walk from the treehouses, ensuring easy access to your vehicle throughout your stay <br><br>For guests traveling by public transport or requiring airport transfers, please inform us in advance, and we will assist in arranging suitable parking options nearby to accommodate your needs<br>" }]
                        }

                    ]
                },
                {
                    "Other Stuff": [
                        {
                            "Other Stuff": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/s704508926328163989_p16_i2_w1300.webp", }, { "Text": "<b>House Rules:</b> <br><br>Respect Quiet Hours: Please maintain a peaceful atmosphere, especially during designated quiet hours.<br>No Smoking Indoors: Smoking is prohibited inside the treehouses and common areas for the comfort of all guests.<br>Pet Policy: We love pets. Feel free to bring your furry friends along!<br><br><b>Safety Information:</b><br><br><b>Fire Safety:</b> Fire extinguishers are located in the treehouse and common areas for your safety. Please familiarize yourself with their locations upon arrival.<br>Emergency Contacts: Contact information for local emergency services and medical assistance is available at our reception desk.<br><br><b>Additional Amenities:</b><br><br>Hammocks and Outdoor Seating: Relax in our hammocks or outdoor seating areas, perfect for enjoying the peaceful surroundings and fresh mountain air.<br>Board Games and Books: Borrow board games or books from our collection to unwind and enjoy leisure time with family and friends.<br><br>" }]
                        },

                    ]
                },
                {
                    "Activities": [
                        {
                            "Activities": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/images-1.jpeg", }, { "Text": "<b>Nature Walks and Hikes: </b><br><br>Explore scenic trails and lush forests surrounding our treehouse retreat. Discover hidden waterfalls, local flora, and breathtaking views of the Himalayan foothills.<br><br><b>Cultural Workshops:</b><br>Engage in hands-on workshops to learn traditional skills such as pottery-making, Himachali cooking, and weaving. Immerse yourself in the local culture and craftsmanship.<br><br><b>Birdwatching and Wildlife Spotting:</b><br>Observe diverse bird species and wildlife native to the region. Our tranquil environment provides ample opportunities for nature enthusiasts and photographers.<br><br><b>Yoga and Meditation:</b><br>Rejuvenate your mind and body with yoga sessions amidst the serene natural surroundings. Experience peace and tranquility as you unwind in our peaceful retreat.<br><br><b>Local Sightseeing Tours:</b><br>Embark on guided tours to nearby cultural sites, including ancient temples, historical landmarks, and traditional villages. Learn about the rich heritage of Himachal Pradesh.<br><br><b>Adventure Activities:</b><br>For adrenaline seekers, indulge in activities like river rafting, trekking to nearby peaks, and camping under the starlit sky. Experience the thrill of outdoor adventures in the Himalayas." }]
                        },

                    ]
                },
                {
                    "Exploring Nature": [
                        {
                            "Walking Trails": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/images-2.jpeg", }, { "Text": "<b>1. The Lake Loop Trail <br>Duration:</b> 1 hour<br><b>Difficulty:</b> Easy<br><b>Description:</b> This trail takes you on a scenic loop around Bhimtal Lake. Enjoy the tranquil waters, spot local birdlife, and take in the panoramic views. The path is well-maintained and perfect for a leisurely stroll.<br><br><b>2. Pine Forest Path</b><br><b>Duration:</b> 1.5 hours<br><b>Difficulty:</b> Moderate<br><b>Description:</b> Wander through the dense pine forest that surrounds our property. This trail offers a peaceful retreat with the scent of pine in the air and the soft rustle of leaves underfoot. Keep an eye out for local wildlife and enjoy the serenity of the forest.<br><br><b>3. Hilltop Vista Trail</b><br><b>Duration:</b> 2 hours<br><b>Difficulty:</b> Moderate<br><b>Description:</b> Climb to a nearby hilltop for breathtaking views of the Bhimtal valley. The ascent is moderately challenging but rewards you with stunning vistas and a perfect spot for a picnic. The trail is well-marked and provides plenty of opportunities for photography.<br><br><b>4. Waterfall Walk</b><br><b>Duration:</b> 1.5 hours<br><b>Difficulty: </b>Moderate<br><b>Description:</b> Follow this trail to a hidden waterfall nestled in the hills. The path winds through lush greenery and small streams, leading to a tranquil spot where you can relax and enjoy the soothing sound of cascading water.<br><br><b>5. Village Exploration Trail</b><br><b>Duration:</b> 2.5 hours<br><b>Difficulty:</b> Easy to Moderate<b><br>Description:</b> Discover the charm of nearby villages on this trail. Walk through picturesque landscapes, interact with friendly locals, and experience the culture and traditions of the region. This trail offers a unique glimpse into the rural life of Uttarakhand." }]
                        },
                        {
                            "Cycling Tracks": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/1_VOGCLYn5kOuF3KBknX-2Fg.webp", }, { "Text": "<b>1. Lakeside Serenity Loop <br>Duration: 45 minutes</b><br><b>Difficulty:</b> Easy<br><b>Description:</b> This gentle loop around Bhimtal Lake is perfect for a relaxing ride. Enjoy the cool breeze and the sparkling water as you cycle along the well-paved path. Ideal for beginners and families, this track offers plenty of spots to stop and take in the views.<br><br><b>2. Pine Forest Circuit</b><br><b>Duration:</b> 1 hour<br><b>Difficulty: </b>Moderate<br><b>Description:</b> Ride through the dense pine forests that surround our property. This trail features a mix of flat sections and gentle inclines, making it suitable for cyclists with some experience. The forest provides shade and a peaceful atmosphere, perfect for an invigorating ride.<br><br><b>3. Hilltop Challenge Route</b><br><b>Duration:</b> 1.5 hours<br><b>Difficulty:</b> Hard<br><b>Description:</b> For the more adventurous, this trail takes you up to a nearby hilltop. The challenging ascent is rewarded with breathtaking panoramic views of the valley and surrounding mountains. The descent is thrilling but requires caution and good control." }]
                        },

                    ]
                },
                {
                    "Local Area Guide": [
                        {
                            "Restaurants": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/hope-cafe-jibhi-min.jpg", }, { "Text": "1. <b>Hope Cafe Jibhi </b><br><b>Cuisine:</b> Continental, Italian<br><b>Description:</b> Nestled by the river, this café offers a serene ambiance with a delightful menu. Perfect for relaxing and enjoying the natural surroundings.Our Favorites: Wood-fired pizzas, pasta, and fresh salads.<br><b>Distance:</b> 10 minutes walk from the treehouse.<br><br><b>2. Mountain Calling Cafe</b><br><b>Cuisine: </b>Multi-cuisine<br><b>Description:</b> Known for its cozy atmosphere and diverse menu, this café is a favorite among both locals and travelers. Enjoy a warm meal with a view of the lush greenery.Our Favorites: Burgers, sandwiches, and traditional Himachali dishes.<br>Distance: 15 minutes walk from the treehouse.<br><br><b>3. Enzo's coffeehouse and Bistro</b><br><b>Cuisine:</b> Indian, Continental<br><b>Description:</b> A popular spot offering a variety of Indian and continental dishes. The rustic décor makes it a great place to unwind.Our Favorites: Americano, grilled chicken streak.<br><b>Distance:</b> 5 minutes drive from the treehouse.<br><br><b>4. Musafir cafe</b><br><b>Cuisine:</b> North Indian, Continental<br><b>Description:</b> Located amidst nature, this café offers a tranquil dining experience with a focus on organic and locally sourced ingredients.Our Favorites: Tandoori dishes, sandwiches, and desserts.<br><b>Distance:</b> 20 minutes walk from the treehouse.<br>" }]
                        }

                    ]
                },
                {
                    "Arts and Culture": [
                        {
                            "Arts and Culture": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/art-form-himachal-pradesh-himachali-dance-traditional.jpg", }, { "Text": "<b>Jibhi, nestled in the serene hills of Himachal Pradesh, offers a rich tapestry of arts and culture waiting to be explored. Here are some highlights:</b><br><br><b>1. Local Artisans and Handicrafts: </b>Explore intricate handicrafts including wood carvings and Himachali jewelry, reflecting local craftsmanship and cultural heritage.<br><br><b>2. Traditional Music and Dance:</b> Immerse yourself in Himachali folk music and dance, featuring traditional instruments and lively performances.<br><br><b>3. Temples and Sacred Sites:</b> Visit ancient temples and sacred sites, offering insights into local spiritual practices and cultural traditions.<br><br><b>4. Cultural Workshops and Classes:</b> Engage in workshops on pottery-making, Himachali cooking, and weaving to learn traditional skills from local experts.<br><br><b>5. Museums and Heritage Centers:</b> Discover exhibits in museums showcasing Himachal Pradesh's history and cultural evolution.<br><br><b>6. Art Galleries and Exhibitions:</b> Experience local artwork in galleries highlighting Himachali artists' creativity and cultural diversity.<br><br><b>7. Cultural Festivals:</b> Attend vibrant festivals celebrating Himachali traditions and community spirit throughout the year." }]
                        },


                    ]
                },
                {
                    "Getting Around": [
                        {
                            "Getting Around": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/Himachal-Pradesh-Tourism_600.jpg", }, { "Text": "<b>1. Local Transport Options:</b> Utilize local taxis or shared jeeps to navigate between villages and nearby attractions.<br><br><b>2. Walking Trails:</b> Explore scenic paths on foot to immerse yourself in the natural beauty of Jibhi and its surroundings.<br><br><b>3. Cycle Rentals:</b> Rent bicycles to leisurely explore the area's picturesque landscapes and nearby villages.<br><br><b>4. Private Vehicles:</b> Consider renting a car or motorbike for flexibility in exploring remote areas and scenic routes." }]
                        },

                    ]
                },


                // {
                //     "": [
                //         {
                //             "": [{ "Image": "", }, { "Text": "Something about us" }]
                //         },

                //     ]
                // },

            ]
        }
    ]




    return (
        <>
            <TopNavbar />
            <div className='flex mt-20  py-10 '>
                <div className='w-1/2 pl-10 '>
                    <h2 className='gunmetal text-2xl font-bold py-5'>Example guides to inspire</h2>
                    <h1 className='text-5xl font-bold py-5'>Looking to see what others have done?</h1>
                    <p className='text-3xl py-5'>You've come to the perfect spot! Keep scrolling to discover some wonderful examples of guidebooks from actual Touch Stay users who have generously shared their guides with the world!</p>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img
                        src={h}
                        alt="Shoes"
                        className="rounded-xl" />
                </div>
            </div>

            <div className='text-center mt-10 p-10 text-7xl font-bold'>
                Luxury Guides
            </div>
            <div className='flex items-center justify-around flex-wrap '>
                <Democard img={l1} guideDesc={guideDesc2} />
                <Democard img={l1} guideDesc={guideDesc2} />

            </div>
            <Footer />
        </>
    )
}

export default Luxury