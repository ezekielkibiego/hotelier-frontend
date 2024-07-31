

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Carousel from './Carousel';

// // Sample static images and facilities
// const staticImages = [
//   'src/assets/room-1.jpg',
//   'src/assets/room-2.jpg',
//   'src/assets/room-3.jpg',
//   'src/assets/room-4.jpg',
//   'src/assets/room-5.jpg',
//   'src/assets/room-6.jpg',
//   'src/assets/room-1.jpg',
//   'src/assets/room-2.jpg',
//   'src/assets/room-3.jpg',
// ];

// const facilities = [
//   { icon: "fa-bed", quantity: 3, facility: "Beds" },
//   { icon: "fa-bath", quantity: 2, facility: "Baths" },
//   { icon: "fa-wifi", facility: "Wifi" },
//   // Add more facilities as needed
// ];

// const Hotels = () => {
//   const [hotels, setHotels] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch the hotels data from the API
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/hotels/');
//         setHotels(response.data);
//       } catch (error) {
//         if (error.response) {
//           // Handle HTTP errors
//           setError(error.response.data.detail || 'An error occurred while fetching hotels.');
//         } else {
//           // Handle network errors
//           setError('Network error. Please try again.');
//         }
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <>
//       <Carousel />

//       <div className="container-xxl py-5">
//         <div className="container">
//           <h1 className="mb-4">Hotel List</h1>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="row g-4">
//             {hotels.map((hotel, index) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={hotel.id}>
//                 <div className="room-item shadow rounded overflow-hidden">
//                   {/* Hotel Image */}
//                   <div className="position-relative">
//                     <img
//                       className="img-fluid"
//                       src={staticImages[index % staticImages.length]} // Use static images in a loop
//                       alt={hotel.name}
//                     />
//                     <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
//                       {hotel.price}
//                     </small>
//                   </div>
//                   <div className="p-4 mt-2">
//                     <h5 className="mb-0">{hotel.name}</h5>
//                     <p className="text-body mb-3">{hotel.description}</p>
//                     <p><strong>Location:</strong> {hotel.location}</p>
//                     {/* Facility Icons */}
//                     <div className="d-flex mb-3">
//                       {facilities.map((fac, index) => (
//                         <small className="border-end me-3 pe-3" key={index}>
//                           <i className={`fa ${fac.icon} text-primary me-2`}></i>
//                           {fac.quantity ? `${fac.quantity} ${fac.facility}` : fac.facility}
//                         </small>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hotels;

// Hotels.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Carousel from './Carousel';
// import Review from './Review'; // Import the Review component

// // Sample static images and facilities
// const staticImages = [
//   'src/assets/room-1.jpg',
//   'src/assets/room-2.jpg',
//   'src/assets/room-3.jpg',
//   'src/assets/room-4.jpg',
//   'src/assets/room-5.jpg',
//   'src/assets/room-6.jpg',
//   'src/assets/room-1.jpg',
//   'src/assets/room-2.jpg',
//   'src/assets/room-3.jpg',
// ];

// const facilities = [
//   { icon: "fa-bed", quantity: 3, facility: "Beds" },
//   { icon: "fa-bath", quantity: 2, facility: "Baths" },
//   { icon: "fa-wifi", facility: "Wifi" },
//   // Add more facilities as needed
// ];

// const Hotels = () => {
//   const [hotels, setHotels] = useState([]);
//   const [error, setError] = useState(null);
//   const [visibleReviewId, setVisibleReviewId] = useState(null);

//   // Fetch the hotels data from the API
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/hotels/');
//         setHotels(response.data);
//       } catch (error) {
//         if (error.response) {
//           // Handle HTTP errors
//           setError(error.response.data.detail || 'An error occurred while fetching hotels.');
//         } else {
//           // Handle network errors
//           setError('Network error. Please try again.');
//         }
//       }
//     };

//     fetchHotels();
//   }, []);

//   const toggleReviews = (hotelId) => {
//     setVisibleReviewId(visibleReviewId === hotelId ? null : hotelId);
//   };

//   return (
//     <>
//       <Carousel />

//       <div className="container-xxl py-5">
//         <div className="container">
//           <h1 className="mb-4">Hotel List</h1>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="row g-4">
//             {hotels.map((hotel, index) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={hotel.id}>
//                 <div className="room-item shadow rounded overflow-hidden">
//                   {/* Hotel Image */}
//                   <div className="position-relative">
//                     <img
//                       className="img-fluid"
//                       src={staticImages[index % staticImages.length]} // Use static images in a loop
//                       alt={hotel.name}
//                     />
//                     <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
//                       {hotel.price}
//                     </small>
//                   </div>
//                   <div className="p-4 mt-2">
//                     <h5 className="mb-0">{hotel.name}</h5>
//                     <p className="text-body mb-3">{hotel.description}</p>
//                     <p><strong>Location:</strong> {hotel.location}</p>
//                     {/* Facility Icons */}
//                     <div className="d-flex mb-3">
//                       {facilities.map((fac, index) => (
//                         <small className="border-end me-3 pe-3" key={index}>
//                           <i className={`fa ${fac.icon} text-primary me-2`}></i>
//                           {fac.quantity ? `${fac.quantity} ${fac.facility}` : fac.facility}
//                         </small>
//                       ))}
//                     </div>
//                     {/* Toggle Reviews Button */}
//                     <button
//                       className="btn"
//                       style={{ backgroundColor: '#ADD8E6', color: '#000', borderColor: '#87CEEB' }} // Light blue background
//                       onClick={() => toggleReviews(hotel.id)}
//                     >
//                       {visibleReviewId === hotel.id ? 'Hide Reviews' : 'Show Reviews'}
//                     </button>
//                     {/* Reviews */}
//                     {visibleReviewId === hotel.id && <Review hotelId={hotel.id} />}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hotels;

// Hotels.jsx

// Hotels.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import Review from './Review'; // Import the Review component
import BASE_URL from './config';

// Sample static images and facilities
const staticImages = [
  'src/assets/room-1.jpg',
  'src/assets/room-2.jpg',
  'src/assets/room-3.jpg',
  'src/assets/room-4.jpg',
  'src/assets/room-5.jpg',
  'src/assets/room-6.jpg',
  'src/assets/room-1.jpg',
  'src/assets/room-2.jpg',
  'src/assets/room-3.jpg',
];

const facilities = [
  { icon: "fa-bed", quantity: 3, facility: "Beds" },
  { icon: "fa-bath", quantity: 2, facility: "Baths" },
  { icon: "fa-wifi", facility: "Wifi" },
  // Add more facilities as needed
];

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [visibleReviewId, setVisibleReviewId] = useState(null);

  // Fetch the hotels data from the API
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hotels/`);
         setHotels(response.data);       


      } catch (error) {
        if (error.response) {
          // Handle HTTP errors
          setError(error.response.data.detail || 'An error occurred while fetching hotels.');
        } else {
          // Handle network errors
          setError('Network error. Please try again.');
        }
      }
    };

    fetchHotels();
  }, []);

  const toggleReviews = (hotelId) => {
    setVisibleReviewId(visibleReviewId === hotelId ? null : hotelId);
  };

  return (
    <>
      <Carousel />

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="mb-4">Hotel List</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row g-4">
            {hotels.map((hotel, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={hotel.id}>
                <div className="room-item shadow rounded overflow-hidden">
                  {/* Hotel Image */}
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={staticImages[index % staticImages.length]} // Use static images in a loop
                      alt={hotel.name}
                    />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {hotel.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <h5 className="mb-0">{hotel.name}</h5>
                    <p className="text-body mb-3">{hotel.description}</p>
                    <p><strong>Location:</strong> {hotel.location}</p>
                    {/* Facility Icons */}
                    <div className="d-flex mb-3">
                      {facilities.map((fac, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          <i className={`fa ${fac.icon} text-primary me-2`}></i>
                          {fac.quantity ? `${fac.quantity} ${fac.facility}` : fac.facility}
                        </small>
                      ))}
                    </div>
                    {/* Show Reviews Button */}
                    <button
                      className="btn"
                      style={{ backgroundColor: '#ADD8E6', color: '#000', borderColor: '#87CEEB' }} // Light blue background
                      onClick={() => toggleReviews(hotel.id)}
                    >
                      {visibleReviewId === hotel.id ? 'Hide Reviews' : 'Show Reviews'}
                    </button>
                    {/* Conditionally render the Review component */}
                    {visibleReviewId === hotel.id && <Review hotelId={hotel.id} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
