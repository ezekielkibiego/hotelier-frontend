// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const ReservationList = () => {
//   const [reservations, setReservations] = useState([]);
//   const [restaurants, setRestaurants] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReservationsAndRestaurants = async () => {
//       try {
//         const [reservationsResponse, restaurantsResponse] = await Promise.all([
//           client.get('/reservations/'),
//           client.get('/restaurant/')
//         ]);
        
//         const restaurantsMap = restaurantsResponse.data.reduce((acc, restaurant) => {
//           acc[restaurant.id] = restaurant.name;
//           return acc;
//         }, {});

//         setReservations(reservationsResponse.data);
//         setRestaurants(restaurantsMap);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReservationsAndRestaurants();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-4 text-red-500">Error loading reservations: {error.message}</div>;
//   }

//   return (
//     <div className="container mx-auto mt-5 font-sans">
//       <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Reservations</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Restaurant</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Customer Name</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Customer Email</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Reservation Date</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Number of People</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map(reservation => (
//               <tr key={reservation.id} className="border-b hover:bg-gray-100">
//                 <td className="py-3 px-4 text-gray-700 font-bold">{restaurants[reservation.restaurant]}</td>
//                 <td className="py-3 px-4 text-gray-700 font-semibold">{reservation.customer_name}</td>
//                 <td className="py-3 px-4 text-gray-700">{reservation.customer_email}</td>
//                 <td className="py-3 px-4 text-gray-700">{new Date(reservation.reservation_date).toLocaleString()}</td>
//                 <td className="py-3 px-4 text-gray-700">{reservation.number_of_people}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ReservationList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import BASE_URL from './config';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: BASE_URL
});

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [restaurants, setRestaurants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchReservationsAndRestaurants = async () => {
      try {
        const [reservationsResponse, restaurantsResponse] = await Promise.all([
          client.get(`${BASE_URL}/api/reservations/`),
          client.get(`${BASE_URL}/api/restaurant/`)
        ]);
        
        const restaurantsMap = restaurantsResponse.data.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant.name;
          return acc;
        }, {});

        setReservations(reservationsResponse.data);
        setRestaurants(restaurantsMap);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservationsAndRestaurants();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredReservations = reservations.filter(
    (reservation) =>
      restaurants[reservation.restaurant].toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.customer_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error loading reservations: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-5 font-sans">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Reservations</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search reservations..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-l w-full"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r">Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Restaurant</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Customer Name</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Customer Email</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Reservation Date</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Number of People</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map(reservation => (
              <tr key={reservation.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700 font-bold">{restaurants[reservation.restaurant]}</td>
                <td className="py-3 px-4 text-gray-700 font-semibold">{reservation.customer_name}</td>
                <td className="py-3 px-4 text-gray-700">{reservation.customer_email}</td>
                <td className="py-3 px-4 text-gray-700">{new Date(reservation.reservation_date).toLocaleString()}</td>
                <td className="py-3 px-4 text-gray-700">{reservation.number_of_people}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationList;
