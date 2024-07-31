

// export default Restaurants;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import BASE_URL from './config';


// Sample static images
const staticImages = [
  'src/assets/restaurant-1.jpg',
  'src/assets/restaurant-2.jpg',
  'src/assets/restaurant-3.jpg',
  'src/assets/restaurant-4.jpg',
  'src/assets/restaurant-5.jpg',
  'src/assets/restaurant-6.jpg',
  'src/assets/restaurant-1.jpg',
  'src/assets/restaurant-2.jpg',
  'src/assets/restaurant-3.jpg',
];

// Sample facility icons
export const facilities = [
  {
    icon: <i className="fa fa-utensils text-primary me-2"></i>,
    quantity: "Variety of dishes",
    facility: "Cuisine",
  },
  {
    icon: <i className="fa fa-wine-glass-alt text-primary me-2"></i>,
    quantity: "Fine dining",
    facility: "Dining",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
  // Add more facilities as needed
];

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the restaurants data from the API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/restaurant/`);
        setRestaurants(response.data);
      } catch (error) {
        if (error.response) {
          // Handle HTTP errors
          setError(error.response.data.detail || 'An error occurred while fetching restaurants.');
        } else {
          // Handle network errors
          setError('Network error. Please try again.');
        }
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Carousel />

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="mb-4">Restaurant List</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row g-4">
            {restaurants.map((restaurant, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={restaurant.id}>
                <div className="restaurant-item shadow rounded overflow-hidden">
                  {/* Restaurant Image */}
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={staticImages[index % staticImages.length]} // Use static images in a loop
                      alt={restaurant.name}
                    />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {restaurant.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <h5 className="mb-0">{restaurant.name}</h5>
                    <p className="text-body mb-3">{restaurant.description}</p>
                    <p><strong>Location:</strong> {restaurant.location}</p>
                    {/* Facility Icons */}
                    <div className="d-flex mb-3">
                      {facilities.map((fac, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          {fac.icon} {fac.quantity ? `${fac.quantity}` : ''} {fac.facility}
                        </small>
                      ))}
                    </div>
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

export default Restaurants;

