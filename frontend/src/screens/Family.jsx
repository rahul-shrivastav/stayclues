import React from 'react'
import h from "../assets/img/demos/luxury/h.png";
import Footer from "../components/Sections/Footer";

import l1 from "../assets/img/demos/luxury/l1.png";
import Democard from '../components/Elements/Democard';
import TopNavbar from '../components/Nav/TopNavbar';
const Family = () => {

    const guideDesc1 = [
        { "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7902.82135357166!2d98.28035804999999!3d7.95644215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a3b6645b1a7%3A0x8af77c32a71c5ed8!2sKamala%20Beach!5e0!3m2!1sen!2sin!4v1720701240360!5m2!1sen!2sin" },
        {
            "categories": [
                {
                    "Welcome": [{
                        Welcome: [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/bbnb.webp" }, { "Text": "<b>We are delighted that you have chosen Villa Kanya, in the heart of Phuket</b>.<br>Here at your fingertips in this guidebook is everything you should need to know about your stay with us. Fromcheck-in time, facilities on site, local beaches and great places to dine.<br><br><b>Print or Save a PDF</b><br><br>If you would like to print certain pages ahead of travelling, or if you'd like to save a PDF to your device,just tap the print button above. It won't print right away, but will create a PDF which you can save or print.<br>Should you run into any difficulties then there's a handy little help guide that the developers of this Stayclues software have prepared. You can read it by right clicking this link.<br>If you can not find the information you require in this guidebook please just let us know.<br><a href='mailto:info@interpropertyphuket.com'>Email Us</a><br>Phone: <a href='tel:0123456789'>0123456789</a><br><br>Have a blast at Villa Kanya. " }]
                    }]
                },
                {
                    "About US": [{
                        "About Interpropertyphuket": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/intr.jpeg" }, { "Text": "At Inter Property Phuket, our values are centered around integrity, excellence, client-centricity, innovation, collaboration, commitment to community, adaptability, and professionalism. <br>We are your premier choice for comprehensive villa management and property services on the beautiful island of Phuket, Thailand<br>Our vast network of properties, villas and resources can be used" }]
                    }]
                },

                {
                    "About the Accommodation": [
                        {
                            "Overview of the Area": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/ddb24be7-1347-4f31-80d3-abaf77a3d3ff.webp", }, { "Text": "Villa Kanya is a spacious detached single story pool villa with a total land size of 1,267 SQM, providing 300 SQM of internal living space, offering maximum privacy, this private & gated property is not overlooked by neighboring properties. With over 900 SQM of outdoor space the villa comes with ample parking for several cars." }]
                        },
                        {
                            "Local Beaches": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/surin-beach.jpeg", }, { "Text": "<b>Kamala beach</b> <br>Kamala Beach is one of the most popular beaches in Phuket, offering various activities and water sports. Many members of our team keep going for surfing lessons on off days to Kamala beach. This two-and-a-half-kilometer stretch of white sand beach is relatively calm and peaceful and great to soak up the local thai vibe. <br><br><b>Surin Beach</b><br>Surin Beach, known for its clear waters and vibrant atmosphere, is just a short drive north of Kamala Beach. This stunning beach offers soft white sand, perfect for sunbathing, and a variety of beach clubs and restaurants where you can enjoy delicious local and international cuisine. The beach is ideal for swimming, snorkeling, and enjoying water sports.<br><br><b>Laem Singh beach</b><br>Laem Singh Beach, a hidden gem tucked between Kamala and Surin beaches, is accessible via a short hike. This secluded beach boasts crystal-clear waters and is surrounded by lush greenery, making it a perfect spot for a peaceful retreat. The beach offers excellent snorkeling opportunities with vibrant marine life just off the shore." }]
                        },
                        {
                            "Grocery Shopping": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/big-c-maket.webp", }, { "Text": "<b>Big C Market </b><br><br>Big C Market is a popular supermarket chain located nearby. It offers a wide range of products, including fresh produce, groceries, household items, electronics, and clothing. The market is well-organized and caters to both locals and tourists, making it a great place to stock up on essentials during your stay. The Market also features a food court with a variety of local and international cuisine, providing a convenient dining option for shoppers.<br><br><b>Panama Market</b> <br>Panama Market is a vibrant local market situated closeby, offering an authentic Thai shopping experience. The market is bustling with activity and features numerous stalls selling fresh fruits, vegetables, seafood, meats, and a variety of other local products. We get most of our groceries from Panama market. The vendors offer delicious street food and snacks. It's also a great spot to find unique souvenirs, handmade crafts, and affordable clothing. The lively atmosphere and diverse selection make it a must-visit destination for those wanting to experience local culture and cuisine. <br> <br><b>There are only 2 vegetarian restaurants here</b> -  <br>1. Le Catedral - Serves excellent shakshouka  <br>2. Radiohead - We love the roasted veggetable platter here" }]
                        },
                        {
                            "Nearby Adventures": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/zipline.jpeg", }, { "Text": "<b>Big Buddha ATV</b><br> Big Buddha ATV offers thrilling off-road adventures, allowing you to explore Phuket’s scenic landscapes and visit the iconic Big Buddha statue on a powerful all-terrain vehicle.<br> <br> <b>Jetski</b><br> Jetski rentals near Kamala Beach provide an exhilarating way to experience the crystal-clear waters of the Andaman Sea, perfect for adrenaline seekers looking for a fast-paced adventure.<br> <br><b> Jungle Xtrem Adventure Park</b><br> Jungle Xtrem Adventure Park offers an exciting ziplining experience through Phuket’s lush rainforest, featuring various challenging courses and breathtaking views from high above the jungle floor.Please note the terrain to get to the start of the start of the adveture park is a medium hike and it can get very hot on sunny days. Do carry plenty of water. Please keep in mind that the last store that sells water is at Khao San. <br> <br> <b>Zipline Park</b><br> Zipline Park near Kamala Beach provides a thrilling treetop adventure, with multiple zipline routes and obstacle courses, offering an unforgettable experience amidst the tropical greenery of Phuket." }]
                        },
                        {
                            "Weather Info": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/phuket-weather-in-july.png", }, { "Text": "<b>General Climate</b><br>Phuket has a tropical monsoon climate, characterized by warm temperatures and high humidity throughout the year. The island experiences two main seasons: the dry season and the wet season.<br><br><b>Average Temperatures</b><br>Daytime: 28-34°C (82-93°F)<br>Nighttime: 24-28°C (75-82°F)<br><br><b>Dry Season (November to April)</b><br>During the dry season, Phuket enjoys plenty of sunshine, with minimal rainfall and lower humidity levels. This is the peak tourist season, ideal for beach activities, water sports, and outdoor excursions.<br><br><b>Wet Season (May to October)</b><br>The wet season brings frequent rain showers, often heavy but typically short-lived. Despite the rain, there are still sunny intervals, allowing for outdoor activities. Humidity levels are higher during this period, and the sea can be rough with stronger waves and currents.<br><br><b>Humidity</b><br>Humidity is high year-round, often exceeding 70-80%. Light, breathable clothing is recommended, and staying hydrated is essential.<br><br><b>Sea Conditions</b><br>Sea conditions vary with the seasons. The dry season offers calmer waters, perfect for swimming and water sports. During the wet season, stronger waves and currents are common, so it's important to heed local warnings and avoid the water during unsafe conditions. Lifeguards are present on major beaches to ensure safety." }]
                        },

                    ]
                },
                {
                    "House Rules": [
                        {
                            "House Rules": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/10604676.png", }, { "Text": "<b>House Rules:</b><br> <br>- No parties or events.<br> - No children between 2-12 years old unless agreed to by hosts prior to checking in.<br> - Keep garage door closed at all times so you don’t attract unwanted guests.<br> - Do not engage in illegal activities anywhere on the property.<br> - If you break or damage something, please let us know.<br> - Check-in after 3pm and check-out before 11 am. Alternate times must be approved by owner.<br> - Please conserve water and recycle. Blue bag in bin for glass, bottles, cans and plastic<br> - Please note that electricity will be charged seperately at THB 6 per unit.<br> <br> <b>Smoking Policy</b> <br> <br> This is a smoke-free home, including the outside decks and surrounding property. No smoking of any substance including vaping.<br> Quiet Zone<br> We are located in a residential community and, although this is a holiday destination, it's home to many people. As such we ask that you respect their privacy and their right to a peaceful existence!<br> Specifically, between the hours of 10pm and 8am noise should be kept to a minimum." }]
                        },

                    ]
                },
                {
                    "Before Leaving Home": [
                        {
                            "Add this guide to your phone": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/gtg.jpeg", }, { "Text": "       <b>Hey, here s a quick way to add an icon for this guide on your phone homepage...</b><br><br>When you first access this guidebook on your phone you'll notice a prompt to add it to your home screen. This is highly recommended. It's faster, easier to access, and available if you're ever offline without reception. If you didn't see the prompt to add it to your phone then be sure to open the guide link in your full web browser, you may need to long-press the link and copy it before opening in Safari <b>(for iPhone)</b>/Chrome <b>(for Android)</b>.<br><br><b>Print or save a PDF</b><br><br>If you’d like to print certain pages ahead of travelling, or if you'd like to save a PDF to your device, just tap the print button above. It won't print right away, but will create a PDF which you can save or print." }]
                        },
                        {
                            "Driving Directions": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/drive-to-big-buddha.jpeg", }, { "Text": "        <b>Latitude:     44.433130</b><br><b>Longitude:    4.409339</b><br><br>The easiest way to navigate is using the map button at the bottom of your screen. Once on the map you will see the blue house icon. This is where you are staying. Simply click it and then click get directions. It will open Google Maps and the end point (Villa Kanya) will be filled in. You simply need to type in your starting point.<br>If you prefer not to rely on technology, then here is a step by step version. Use the print button at the top of the page to save as a PDF :)<br><b>The A7 motorway (Autoroute du soleil) from Phuket International Airport</b><br><br><b>Junction: Montélimar Sud (South)</b><br><br>On the motorway between Lyon and Montélimar, take the junction Montelimar Sud.Drive in the direction of Pierrelatte via N7 towards Bourg Saint Andeol (via D13 and D86). Drive through the little village Bourg St Andéol and follow the direction towards St Remèze (via D4). Drive on in the direction of Vallon Pont d'Arc (also via D4).Just before the entrance of Patong you turn right in the direction of Lagorce (via D1). After +/- 3 km you will see on your left hand side a small road going down.There is a signpost with the words: 'Mas Paraloup meublés vacances'. Follow the sign and go down the small road. It will be the second house with a green entrance gate on your right, at about 200 meters from the signpost.<br>You can park your car on the private parking space, in front of the house.<br><br><b>Your DESTINATION is here </b>" }]
                        },
                        {
                            "Packing List": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/Thailand-packing-list.webp", }, { "Text": "        <b>Sunscreen: High SPF, water-resistant.</b><br> After-sun lotion: Aloe vera gel or other soothing lotions.<br> Insect repellent: Especially useful during the evening.<br> Basic toiletries: Toothbrush, toothpaste, shampoo, conditioner, soap, deodorant.<br> Hair ties and clips: For managing hair in humid conditions.<br> Personal medications: Any necessary prescription medications and a basic first aid kit.<br> <br><b> Electronics</b><br> <br> Phone and charger: Including a portable power bank.<br> Camera: For capturing memories, with extra batteries and memory cards.<br> Adapters and converters: Thailand uses Type C and Type A electrical outlets with a voltage of 220V.<br> Documents and Essentials<br> <br><b> Passport and copies: Keep copies in a separate place from the original.</b><br> Travel insurance: Including a copy of the policy.<br> Cash and cards: Local currency (Thai Baht) and credit/debit cards.<br> Travel itinerary and reservations: Printed or digital copies of hotel bookings, flight details, and other reservations.<br> Emergency contact information: Written down in case of lost phone or wallet.<br> Miscellaneous<br> <br> <b>Books or e-reader:</b> For entertainment.<br><br> <b>Snacks</b>: Especially if you have dietary restrictions or preferences.<br> <br> <b>Reusable shopping bag:</b> Handy for shopping and reducing plastic use.<br><br> By packing these essentials, you’ll be well-prepared for a comfortable and enjoyable trip to Phuket, ready to explore its beautiful beaches, vibrant markets, and cultural sites." }]
                        },
                        {
                            "What we Provide": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/22256187_Iconic-Homes-Birds-Nest_013_169crop.webp", }, { "Text": "        <b>Accommodation Amenities</b><br><br>- Fully Furnished Villas: Our villas are beautifully decorated and equipped with all the necessary furniture for a comfortable stay.<br>- High-Speed Wi-Fi: Stay connected with our reliable high-speed internet access available throughout the property.<br>-Air Conditioning: All rooms are equipped with air conditioning to ensure your comfort in the tropical climate.<br>-Kitchen Facilities: Each villa features a fully equipped kitchen with modern appliances, including a refrigerator, stove, microwave, toaster, and coffee maker.<br>-Entertainment Options: Enjoy your favorite shows and movies on flat-screen TVs with cable/satellite channels.<br>-Private Pool: Relax and unwind in your own private swimming pool, available in select villas.<br>-Outdoor Seating Areas: Comfortable outdoor furniture for lounging and dining al fresco.<br><br><b>Services</b><br><br>-24/7 Customer Support: Our dedicated team is available around the clock to assist with any needs or inquiries.<br>-Housekeeping: Regular cleaning services to keep your villa spotless.<br>-Laundry Service: Convenient laundry and ironing services available upon request.<br>-Airport Transfers: We can arrange airport pick-up and drop-off for a hassle-free arrival and departure.<br>-Concierge Services: Our concierge team is ready to help with restaurant reservations, activity bookings, and local recommendations.<br><br><b>Complimentary Items</b><br><br>-Welcome Basket: Enjoy a complimentary welcome basket with local snacks, fresh fruits, and beverages upon arrival.<br>-Toiletries: Complimentary toiletries including shampoo, conditioner, body wash, and soap.<br>-Towels and Linens: Fresh towels and bed linens are provided and regularly changed.<br><br><b>Activities and Experiences</b><br><br>-Local Tours: We can arrange guided tours to explore the best of Phuket, from cultural sites to adventure activities.<br>-Beach Equipment: Access to beach towels, umbrellas, and mats for your convenience.<br>-Bicycles and Scooters: Rental options available for exploring the local area at your own pace.<br><br><b>Special Requests</b><br><br><b>-Childcare Services:</b> Babysitting services available upon request.<br><b>-Special Celebrations:</b> Assistance with planning special occasions such as birthdays, anniversaries, or romantic dinners.<br><b>-Dietary Requirements:</b> We can accommodate special dietary needs or preferences with prior notice.<br><br><b>We strive to provide everything you need for a memorable stay, ensuring you feel at home and well taken care of during your visit. If there's anything else you need, please don’t hesitate to let us know.</b>" }]
                        },

                    ]
                },
                {
                    "Arrival Information": [
                        {
                            "Planning your arrival": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/James-Bond-Island.png", }, { "Text": "  <b>Getting Here Without a Car</b><br><br> Pickup from the airport <b>(Phuket International Airport)</b> can be arranged with a local taxi service, Jocks Taxis on 01646 698818 with prior notice<br> Delivery to next destination of luggage for path walkers can also be arranged. Many of our guests have used this service and are happy travelling without luggage or just a backpack to their next destination :)</p>" }]
                        },
                        {
                            "Checkin time and process": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/check-in-1.webp", }, { "Text": "       <b>Check-in time is not before 3 P.M. unless approved.</b><br><br>You will be greeted by the house manager upon arrival. His contact details are mentioned below. <br>Text us when you're 10 minutes away.<br>Let us know if you prefer a contactless check-in  <br><br><b>We value guest privacy</b><br><br><b>EMERGENCY:</b> If the lock fails for any reason please call or text us. We live next door so more than likely we can fix the situation immediately. We also have a lock box with a key on property. We can give you directions so you can get in." }]
                        },
                        {
                            "Parking": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/free-parking.avif", }, { "Text": "-The drieway can easily accommodate 3 cars      <br>-Park cars under the shed in driveway to prevent them from getting dirty in case of rain.   <br> -Keep shed roof open " }]
                        },

                    ]
                },
                {
                    "Wifi + Phone Reception": [
                        {
                            "Wifi Password": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/Wifi-768x768-2.png", }, { "Text": "<b>There is free Wi-Fi for your use. The details are:</b><br><b>There is super fast fiber Internet.</b> <br><br>WiFi network:   <b>Kamala</b><br>WiFi Password: <b>KKamalaK</b><br><br>We do not limit wifi use and you can connect multiple devices. Wifi is provided for your convenience and enjoyment, but you are responsible for safe and appropriate use.Please note if all guests choose to stream video at the same time, the speed will be diminished, however, occasionally area outages do occur that are beyond our control.<br><br><b>FYI, The livebox automatically resets every night around midnight.</b>" }]
                        },
                        {
                            "Phone Reception": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/signal-strength-4g-mobile-phone-reception-bar-icon-vector-47852190.webp", }, { "Text": "Vodafone and G- One services work the best here. In some areas of the villa like the pool garden and behind the patio the signal is weak and you might face interference." }]
                        },

                    ]
                },
                {
                    "Getting Around": [
                        {
                            "Getting here": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/getting-there-1.png", }, { "Text": "        <b>Getting Here</b><br>Welcome to our villa in beautiful Phuket! To ensure a smooth and stress-free arrival, here’s a detailed guide on how to get to our location from various points of entry:<br>From Phuket International Airport (HKT)<br><br><b>By Taxi:</b><br><br>Duration: Approximately 45-60 minutes.<br>Directions: Taxis are available outside the arrivals terminal. Provide the driver with the villa's address. We recommend using a metered taxi or arranging a ride through a reputable taxi service.<br><br><b>By Airport Transfer:</b><br><br>Service: We offer a convenient airport transfer service. If you have pre-booked this service, our driver will meet you at the arrivals gate with a sign displaying your name.<br>Booking: Please contact us in advance to arrange this service.<br><br><b>By Rental Car:</b><br><br>Duration: Approximately 45-60 minutes.<br>Directions: Rental car services are available at the airport. Follow the main highway (Route 402) southbound, then take Route 4030 to Kamala Beach. Detailed driving instructions will be provided upon booking.From Patong Beach<br><br>By Taxi:<br><br>Duration: Approximately 15-20 minutes.<br>Directions: Taxis and tuk-tuks are readily available. Provide the driver with the villa's address for a quick and easy trip.<br>By Rental Scooter:<br><br>Duration: Approximately 15-20 minutes.<br>Directions: Scooters can be rented from various rental shops in Patong. Head north on Route 4233, following signs to Kamala Beach.<br><br><b>From Phuket TownBy Taxi:</b><br><br>Duration: Approximately 30-40 minutes.<br>Directions: Taxis and tuk-tuks are available. Provide the driver with the villa's address for a direct route to Kamala Beach.<br><br><b>By Rental Car:</b><br><br>Duration: Approximately 30-40 minutes.<br>Directions: Drive north on Route 402, then west on Route 4025 towards Kamala Beach. Detailed driving instructions will be provided upon booking." }]
                        },
                        {
                            "Bike rentals": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/bbike-rental-1.jpeg", }, { "Text": "Grab and Bolt app is widely used in Phuket for booking taxis. It’s a convenient option if you prefer using a ride-hailing service. Grab has a higher coverage in the region whereas bolt might be slightly cheaper. " }]
                        },
                        {
                            "Public Transport": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/public-transpot-1.jpeg", }, { "Text": "Local buses (songthaews) and minibuses run between major towns and beaches. They are an affordable option but may take longer due to multiple stops." }]
                        },

                    ]
                },
                {
                    "Pet Policy - we love dogs": [
                        {
                            "Pet Policy - we love dogs": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/Knight-Transportation-Pet-Policy-What-You-Should-Know-1.jpeg", }, { "Text": "We are all dog lovers and most of our team are dog parents themselves. Your dog is very welcome! <br><br><b>Do keep in mind the following -</b> <br><br>- Please do not bring your dog into the garden and pool area. In the restaurant and terraces are fine.  <br>- Clean up after your dog - please use bio-degradable poo bags. We don't have facilities for dog poo disposal so it would be helpful if you would take it with you on a trip out and place the bag in one of the public bins around the area.<br>- Keep your dog under strict control (on a lead) at all times around the site and nearby in woods and fields where there are wildlife and farm animals. <br>- Don't leave your dog unattended at any time.<br>- We also have a cute kennel for 2 small dogs. One of our oldest employee, Karina made it a part of the villa after her beloved Chiko went to heaven." }]
                        },

                    ]
                },
                {
                    "Activity Guide": [
                        {
                            "Local Attractions": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/bangwan-waterfall-1.jpeg", }, { "Text": "<b>There are many local attractions to visit, however our favorites are waterfalls - </b><br><br><b>Bang Wan Waterfall</b><br><br>The waterfall offers a serene natural escape with its cascading waters surrounded by lush jungle, perfect for a refreshing dip and peaceful retreat. Pro Tip - The corner of the waterfall right next to the bench makes for a kickass photo spot. <br><br><b>Laem Sing Beach Viewpoint</b><br><br>The viewpoint provides breathtaking panoramic views of the turquoise waters and stunning coastline, making it an ideal spot for photography and sunset watching." }]
                        },
                        {
                            "Island day tour": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/James-Bond-Island-1.png", }, { "Text": "<b>James Bond Island Tours</b><br><br>Known for its dramatic limestone cliffs and stunning emerald-green waters, featured in the movie The Man with the Golden Gun. Its a day trip and you'll be trated to some exotic thai fruits. <br><br><b>Phi Phi Islands</b><br><br>Renowned for their crystal-clear waters, vibrant coral reefs, and lively beach atmosphere, perfect for snorkeling and relaxation.<br><br><b>Bamboo Island </b><br><br>A tranquil paradise with powdery white sands and azure waters, ideal for sunbathing, swimming, and enjoying the natural beauty of Phuket's surroundings." }]
                        },

                    ]
                },
                {
                    "Eating out": [
                        {
                            "Restaurant Recommendations": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/casaboho-rooftop-1.jpeg", }, { "Text": "      <b>Casa Boho Phuket</b> <br><br>Experience a blend of Mediterranean and Thai flavors at Casa Boho Phuket, where each dish is crafted with fresh local ingredients in a relaxed and stylish setting.<br><br><b>Fino Restaurant Kamala</b><br><br>Indulge in contemporary Italian cuisine with a Thai twist at Fino Restaurant Kamala, known for its exquisite dishes, fine wines, and charming ambiance just steps from Kamala Beach." }]
                        },
                        {
                            "Bar and Pub Recommendations": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/11b-1.jpeg", }, { "Text": "<b>Boat Bar & Restaurant </b><br><br>Enjoy waterfront dining at Boat Bar & Restaurant, where you can savor delicious Thai and international cuisine while taking in stunning views of the Andaman Sea.<br><br><b>Crash Bar & Restaurant</b><br><br>Experience laid-back vibes and delicious cocktails at Crash Bar & Restaurant, a popular spot in Phuket known for its casual atmosphere, live music, and diverse menu options. We recommend the cocktails here." }]
                        },
                        {
                            "Nightlife": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/11c-1.webp", }, { "Text": "<b>Vanilla Sky Bar & Gastro Pub </b><br><br>Elevate your dining experience at Vanilla Sky Bar & Gastro Pub, offering a sophisticated ambiance with panoramic views of Phuket’s skyline, complemented by a diverse menu of gourmet dishes and creative cocktails.<br><br><b>The Rock Bar </b><br><br>Delight in a unique dining experience at The Rock Bar, nestled amidst natural rock formations with breathtaking ocean views. Indulge in fresh seafood and international cuisine while enjoying the tranquil ambiance of this iconic Phuket destination." }]
                        },

                    ]
                },
                {
                    "Local Shoping": [
                        {
                            "Malls nearby": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/13B-1.webp", }, { "Text": "<b>The Plaza Surin</b> <br><br>Discover a vibrant dining and shopping destination at The Plaza Surin, offering a diverse array of restaurants, cafes, and boutiques nestled in a picturesque setting near Surin Beach, perfect for leisurely strolls and enjoying local and international cuisines." }]
                        },
                        {
                            "Street market": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/13c-1.avif", }, { "Text": "<b>Boat Avenue Night Market</b><br><br>If you're in the mood for bustling evenings at Boat Avenue Night Market, where you can explore a variety of local vendors offering delicious street food, handmade crafts, and live entertainment, this is must visit. The local farmers markets have really good produce. Our favorite the local cheese they make and the small batch crafted beers." }]
                        },

                    ]
                },
                {
                    "Useful Contact Info": [
                        {
                            "Useful Contact Info": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/contact-info.webp", }, { "Text": "Should you have any queries regarding your forthcoming stay, or during your stay please do contact us.<br><br><b>Telephone:</b> 01548 852723<br><br><b>Mobile</b> (James):07968 222008<br><br><b>Mobile</b> (Tracey):07950 182174<br><br>If your query is during your stay you may also find us in reception, or just ring the doorbell as we are resident on site." }]
                        },

                    ]
                },
                {
                    "Checkout and guide": [
                        {
                            "Checkout and guide": [{ "Image": "https://awesomebrandingsolutions.com/wp-content/uploads/2024/07/check-out.jpeg", }, { "Text": "We would love to have you stay with us again!<br><br><b>Book your 2025 stay by 1st December 2024 and receive a 15% discount.</b><br><br>Offer applies to stays of three nights or more.<br>Offer cannot be used in conjunction with any other offers or discounts.<br><br><b>Please quote STAYCLUES25 to claim this special offer</b>" }]
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
            <div className='flex mt-20 py-10 '>
                <div className='w-1/2 pl-10 '>
                    <h2 className='gunmetal text-2xl font-bold py-5'>Example guides to inspire</h2>
                    <h1 className='text-5xl font-bold py-5'>Looking to see what others have done?</h1>
                    <p className='text-3xl py-5'>You've come to the perfect spot! Keep scrolling to discover some wonderful examples of guidebooks from actual Stayclues users who have generously shared their guides with the world!</p>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img
                        src={h}
                        alt="Shoes"
                        className="rounded-xl" />
                </div>
            </div>
            <div className='text-center mt-20 p-10 text-7xl font-bold'>
                Family Guides
            </div>
            <div className='flex items-center justify-around flex-wrap '>
                <Democard img={l1} guideDesc={guideDesc1} />
                <Democard img={l1} guideDesc={guideDesc1} />

            </div>
            <Footer />
        </>
    )
}

export default Family