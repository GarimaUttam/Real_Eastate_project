import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/";

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
                        <li><span>Find a variety of properties that suits you</span>
                        </li>
                        <li><span>Zero stress in finding your dream house</span>
                        </li>
                        </ul>
                    </div>

                    <div className="flexCenter search-bar">
                        <i class="fa-solid fa-location-dot" color="blue" size={25}></i>
                        <input type="text" placeholder="find your home"></input>
                        <button className="button">Search</button>
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