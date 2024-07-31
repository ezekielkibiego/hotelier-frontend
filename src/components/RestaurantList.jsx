import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './config';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/restaurant/`);
        setRestaurants(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error loading restaurants: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-5 font-sans">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Restaurants</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Name</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Description</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Location</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Price</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map(restaurant => (
              <tr key={restaurant.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700 font-bold">{restaurant.name}</td>
                <td className="py-3 px-4 text-gray-700 font-semibold">{restaurant.description}</td>
                <td className="py-3 px-4 text-gray-700">{restaurant.location}</td>
                <td className="py-3 px-4 text-gray-700">{restaurant.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantList;
