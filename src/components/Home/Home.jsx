import { Helmet } from "react-helmet-async";
import DataCards from "../DataCards/DataCards";
import HomeBanner from "./HomeBanner";
import { useLoaderData } from "react-router-dom";
import Map from "../Map/Map";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const data = useLoaderData();

    useEffect( ()=>{
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-sine',
            delay: 100,
            disable: 'mobile' 
          });
    } , [])

    return (
        <div>
            <Helmet>
                <title>Cam Realty | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <div className="text-center p-4 mt-10">
                <h2 className="text-4xl font-bold animate__animated animate__bounce" 
                onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__bounce')}
                onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__bounce')}
                >Featured Residential Estates</h2>
                <p className="p-6">Choosing the reputable Real Estate Agency is the most important step of property hunting. Start searching residential real estate with us now from renovated house, furnished villa, </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-10">
                {
                    data.map(aData => <DataCards
                        key={aData.id} 
                        data={aData}
                    ></DataCards>)
                }
            </div>
            <div className="text-center mt-10">
                <h2 className="text-3xl font-bold mb-5">Area Guide: Which area are you planning to live in?</h2>
                <p>Which area are you planning to live in? You can find more detailed information about popular districts in our Area Guides. The articles in this section can help you to know about each area deeper.
                    The “Dark Bold Dots” on the map are the most convenient neighborhoods in each district. They are best known among expats in Phnom Penh. Click on each any district of Phnom Penh for more details.
                </p>
                <div className="mt-10">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Home;