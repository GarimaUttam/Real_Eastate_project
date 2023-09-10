import React from "react";
import "./Hero.css";
const Hero = () =>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerwidth flexCenter hero-center">

                {/* left */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <h1>
                            Discover <br/>
                            Your Comfort <br/>
                            Here
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>Find a variety of properties that suits you</span>
                        <span>Zero stress in finding your dream house</span>
                    </div>
                    <div className="search-bar">
                        Search bar
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