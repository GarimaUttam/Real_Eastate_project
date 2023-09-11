import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
import "../../../node_modules/swiper/swiper.css";

import "./Residencies.css";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
      
      <div className=" r-container" >

        <div className="paddings innerWidth r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* <Swiper>
                { data.map((card,i) => (
                        <SwiperSlide key = {i}>
                            <div className = "flexColStart r-card">
                                <img src={card.image} alt="home"/>

                                <span className="secondaryText r-price">
                                <span style={{color:"orange"}}>
                                    <i class="fa-solid fa-indian-rupee-sign"></i>
                                </span>
                                <span >{card.price}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>)
                        )}
            </Swiper> */}

        <div className="Shop-section">

          <div className="box box1">
            <div className="box-content">
              <img className="box-img" src="./company1.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>


          <div className="box box2">
            <div className="box-content">
              <img className="box-img" src="./company2.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>

          <div className="box box3">
            <div className="box-content">
              <img className="box-img" src="./company3.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>

          <div className="box box4">
            <div className="box-content">
              <img className="box-img" src="./company4.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>


          <div className="box box5">
            <div className="box-content">
              <img className="box-img" src="./company5.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>


          <div className="box box6">
            <div className="box-content">
              <img className="box-img" src="./company6.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>



          <div className="box box7">
            <div className="box-content">
              <img className="box-img" src="./company7.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>



          <div className="box box8">
            <div className="box-content">
              <img className="box-img" src="./company9.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>



          <div className="box box10">
            <div className="box-content">
              <img className="box-img" src="./company10.jpeg" alt="home" />

              <span className="r-price">
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>


          <div className="box box11">
            <div className="box-content">
              <img className="box-img" src="./hero_image.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>

          <div className="box box12">
            <div className="box-content">
              <img className="box-img" src="./company12.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>


          <div className="box box13">
            <div className="box-content">
              <img className="box-img" src="./company14.jpeg" alt="home" />

              <span className="r-price"><br/>
                <span style={{ color: "orange" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span className="price">324832942<br/></span>
              </span>

              <span >Aliva Priva Jardin<br/></span>
              <span className="r-card">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Ti<br/>
              </span>
            </div>
          </div>

      





        </div>

      </div>
  
  );
};

export default Residencies;
