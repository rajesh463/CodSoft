import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Programs from "../components/HomeContent/Programs";
import NoticeBoard from "../components/HomeContent/NoticeBoard";
import EduMinister from "../components/HomeContent/EduMinister";
import Principal from "../components/HomeContent/Principal";
import "./home.css";
import Marquee from "react-double-marquee";
import collage1 from "../components/images/CollageImage1.jpeg";
import collage2 from "../components/images/CollageImage2.jpeg";
import collage3 from "../components/images/CollageImage3.jpeg";
import collage4 from "../components/images/CollageImage4.jpg";

const Home = () => {
  return (
    <>
      <div className="ImageTransaction">
        {/* <ImageTransaction /> */}
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={collage2}
              id="slider-images"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={collage3}
              id="slider-images"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={collage4}
              id="slider-images"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              id="slider-images"
              src={collage1}
              alt="First slide"
            />
          </Carousel.Item>

         
        </Carousel>
      </div>
      <div>
        <div
          className="marquee1"
          style={{
            width: "200px",
            whiteSpace: "nowrap",
          }}
        >
          <Marquee speed="0.10" direction="left">
            Welcome to High School Admission Management System
            <strong className="contact-helpline">
              Contact our helpline 81633-22222
            </strong>
          </Marquee>
        </div>

        {/* <h6>
            Welcome to High School Admission Management System Contact our
            helpline 81633-22222
          </h6> */}
      </div>
      <div>
        <EduMinister />
      </div>

      <div>
        <NoticeBoard />
      </div>
      <div>
        <Principal />
      </div>
      <div>
        <Programs />
      </div>
    </>
  );
};
export default Home;
