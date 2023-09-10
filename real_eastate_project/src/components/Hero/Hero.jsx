import React from "react";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () =>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle">
                        </div>
                        <h1>
                            Discover <br/>
                            Your Comfort <br/>
                            Here
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <ul>
                        <li><span className="secondaryText" >Find a variety of properties that suits you</span>
                        </li>
                        <li><span className="secondaryText">Zero stress in finding your dream house</span>
                        </li>
                        </ul>
                    </div>

                    <div className="flexCenter search-bar">
                        <i class="fa-solid fa-location-dot" color="blue" size={25}></i>
                        <input type="text" placeholder="find your home"></input>
                        <button className="button">Search</button>
                    </div>
                

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Award Winnings</span>
                    </div>
                </div>

                </div>
                {/* right */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                    <img src="./hero-img.jpeg" alt="hero-img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;