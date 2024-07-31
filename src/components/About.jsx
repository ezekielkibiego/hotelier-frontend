import React from "react";
import about_icon from '../assets/about-1.jpg';
import abouts_icon from '../assets/about-2.jpg';
import icon from '../assets/about-3.jpg';
import abt from '../assets/about-4.jpg';
import Carousel from './Carousel'; // Updated path to match the structure




export default function About() {
  return (
    <>
         <Carousel />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary text-uppercase">Hotelier</span>
              </h1>
              <p className="mb-4">
              Hotelier is dedicated to providing luxurious and comfortable accommodations for travelers from around the world. Our mission is to offer an exceptional experience through outstanding service, elegant rooms, and modern amenities.
              </p>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={about_icon}
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={abouts_icon}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={icon}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={abt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

