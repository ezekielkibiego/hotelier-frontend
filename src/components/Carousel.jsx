// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import carousel1 from '../assets/carousel-1.jpg';  // Correct image import
// import carousel2 from '../assets/carousel-2.jpg';  // Correct image import

// // Sample data for the carousel
// const carouselData = [
//   {
//     img: carousel1, // Path to the image
//     subtitle: 'Welcome to Hotelier', // Subtitle text
//     title: 'Luxurious & Comfortable Stays', // Main title text
//     btn1: 'Book Now', // Text for the first button
//     btn2: 'Learn More' // Text for the second button
//   },
//   {
//     img: carousel2, // Path to the image
//     subtitle: 'Discover Our Services', // Subtitle text
//     title: 'Exceptional Experiences Await', // Main title text
//     btn1: 'Our Services', // Text for the first button
//     btn2: 'Contact Us' // Text for the second button
//   },
// ];

// export default function Carousel() {
//   const sliderRef = useRef(null);

//   const next = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const previous = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Added autoplay feature
//     autoplaySpeed: 3000, // Set the duration for each slide
//     arrows: false, // Hide default arrows, using custom controls
//   };

//   return (
//     <>
//       <div className="container-fluid p-0 mb-5">
//         <div
//           id="header-carousel"
//           className="carousel slide"
//           data-bs-ride="carousel"
//         >
//           <Slider ref={sliderRef} {...settings}>
//             {carouselData.map((val, index) => (
//               <div className="carousel-item" key={index}>
//                 <img className="w-100" src={val.img} alt="Slide Image" />
//                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                   <div className="p-3" style={{ maxWidth: "700px" }}>
//                     <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
//                       {val.subtitle}
//                     </h6>
//                     <h1 className="display-3 text-white mb-4 animated slideInDown">
//                       {val.title}
//                     </h1>
//                     <a
//                       href="#"
//                       className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                     >
//                       {val.btn1}
//                     </a>
//                     <a
//                       href="#"
//                       className="btn btn-light py-md-3 px-md-5 animated slideInRight"
//                     >
//                       {val.btn2}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             onClick={previous}
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             onClick={next}
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// src/components/Carousel.jsx

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import carousel from '../assets/carousel-1.jpg';
// import carosel from '../assets/carousel-2.jpg';

// import { Link } from 'react-router-dom';

// // Sample data for the carousel
// const carouselData = [
//   {
//     img: carousel, // Path to the image
//     subtitle: 'Welcome to Hotelier', // Subtitle text
//     title: 'Luxurious & Comfortable Stays', // Main title text
//     btn1: 'Book Now', // Text for the first button
//     btn2: 'Learn More', // Text for the second button
//     hotelId: 1, // Example hotel ID
//     roomId: 1,  // Example room ID
//   },
//   {
//     img: carosel, // Path to the image
//     subtitle: 'Discover Our Services', // Subtitle text
//     title: 'Exceptional Experiences Await', // Main title text
//     btn1: 'Book Now', // Text for the first button
//     btn2: 'Contact Us', // Text for the second button
//     hotelId: 2, // Example hotel ID
//     roomId: 2,  // Example room ID
//   },
// ];

// export default function Carousel() {
//   const sliderRef = useRef(null);

//   const next = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const previous = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Added autoplay feature
//     autoplaySpeed: 3000, // Set the duration for each slide
//     arrows: false, // Hide default arrows, using custom controls
//   };

//   return (
//     <>
//       <div className="container-fluid p-0 mb-5">
//         <div
//           id="header-carousel"
//           className="carousel slide"
//           data-bs-ride="carousel"
//         >
//           <Slider ref={sliderRef} {...settings}>
//             {carouselData.map((val, index) => (
//               <div className="carousel-item" key={index}>
//                 <img className="w-100" src={val.img} alt="Slide Image" />
//                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                   <div className="p-3" style={{ maxWidth: '700px' }}>
//                     <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
//                       {val.subtitle}
//                     </h6>
//                     <h1 className="display-3 text-white mb-4 animated slideInDown">
//                       {val.title}
//                     </h1>
//                     <Link
//                       to={`/booking?hotelId=${val.hotelId}&roomId=${val.roomId}`}
//                       className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                     >
//                       {val.btn1}
//                     </Link>
//                     <a
//                       href="#"
//                       className="btn btn-light py-md-3 px-md-5 animated slideInRight"
//                     >
//                       {val.btn2}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             onClick={previous}
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             onClick={next}
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import carousel from '../assets/carousel-1.jpg';
import carosel from '../assets/carousel-2.jpg';

const carouselData = [
  {
    img: carousel,
    subtitle: 'Welcome to Hotelier',
    title: 'Luxurious & Comfortable Stays',
    btn1: 'Book Now',
    btn2: 'Contact Us',
    hotelId: 1,
    roomId: 1,
  },
  {
    img: carosel,
    subtitle: 'Discover Our Services',
    title: 'Exceptional Experiences Await',
    btn1: 'Book Now',
    btn2: 'Contact Us',
    hotelId: 2,
    roomId: 2,
  },
];

export default function Carousel() {
  const sliderRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <Slider ref={sliderRef} {...settings}>
            {carouselData.map((val, index) => (
              <div className="carousel-item" key={index}>
                <img className="w-100" src={val.img} alt="Slide Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                      {val.subtitle}
                    </h6>
                    <h1 className="display-3 text-white mb-4 animated slideInDown">
                      {val.title}
                    </h1>
                    <Link
                      to={`/booking?hotelId=${val.hotelId}&roomId=${val.roomId}`}
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      {val.btn1}
                    </Link>
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      {val.btn2}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <button className="carousel-control-prev" type="button" onClick={previous}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={next}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  );
}
