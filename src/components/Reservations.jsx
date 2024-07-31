// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const ReservationForm = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [restaurantId, setRestaurantId] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [reservationDate, setReservationDate] = useState('');
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await client.get('/restaurant/');
//         setRestaurants(response.data);
//       } catch (error) {
//         console.error('Error fetching restaurants:', error);
//         setMessage('Error fetching restaurants.');
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage('');
//     setLoading(true);

//     // Prepare data for POST request
//     const reservationData = {
//       restaurant: restaurantId,
//       customer_name: customerName,
//       customer_email: customerEmail,
//       reservation_date: reservationDate,
//       number_of_people: numberOfPeople,
//     };

//     try {
//       const response = await client.post('/reservations/', reservationData);

//       if (response.status === 201 || response.status === 200) {
//         setMessage('Reservation created successfully!');
//         // Reset the form
//         setRestaurantId('');
//         setCustomerName('');
//         setCustomerEmail('');
//         setReservationDate('');
//         setNumberOfPeople();
//       } else {
//         setMessage('Error creating reservation.');
//       }
//     } catch (error) {
//       console.error('Error creating reservation:', error);
//       setMessage('Error creating reservation.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Make a Reservation</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="restaurant" className="form-label">Restaurant</label>
//           <select
//             id="restaurant"
//             className="form-control"
//             value={restaurantId}
//             onChange={(e) => setRestaurantId(e.target.value)}
//             required
//           >
//             <option value="">Select Restaurant</option>
//             {restaurants.map((restaurant) => (
//               <option key={restaurant.id} value={restaurant.id}>
//                 {restaurant.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="customerName" className="form-label">Customer Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="customerName"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="customerEmail" className="form-label">Customer Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="customerEmail"
//             value={customerEmail}
//             onChange={(e) => setCustomerEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
//           <input
//             type="datetime-local"
//             className="form-control"
//             id="reservationDate"
//             value={reservationDate}
//             onChange={(e) => setReservationDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="numberOfPeople" className="form-label">Number of People</label>
//           <input
//             type="number"
//             className="form-control"
//             id="numberOfPeople"
//             value={numberOfPeople}
//             onChange={(e) => setNumberOfPeople(e.target.value)}
//             min="1"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Processing...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReservationForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/ReservationForm.css'; // Import the CSS file

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const ReservationForm = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [restaurantId, setRestaurantId] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [reservationDate, setReservationDate] = useState('');
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await client.get('/restaurant/');
//         setRestaurants(response.data);
//       } catch (error) {
//         console.error('Error fetching restaurants:', error);
//         setMessage('Error fetching restaurants.');
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage('');
//     setLoading(true);

//     // Prepare data for POST request
//     const reservationData = {
//       restaurant: restaurantId,
//       customer_name: customerName,
//       customer_email: customerEmail,
//       reservation_date: reservationDate,
//       number_of_people: numberOfPeople,
//     };

//     try {
//       const response = await client.post('/reservations/', reservationData);

//       if (response.status === 201 || response.status === 200) {
//         setMessage('Reservation created successfully!');
//         // Reset the form
//         setRestaurantId('');
//         setCustomerName('');
//         setCustomerEmail('');
//         setReservationDate('');
//         setNumberOfPeople(1);
//       } else {
//         setMessage('Error creating reservation.');
//       }
//     } catch (error) {
//       console.error('Error creating reservation:', error);
//       setMessage('Error creating reservation.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5 reservation-form-container">
//       <h2 className="form-heading">Make a Reservation</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit} className="reservation-form">
//         <div className="form-group">
//           <label htmlFor="restaurant" className="form-label">Restaurant</label>
//           <select
//             id="restaurant"
//             className="form-control"
//             value={restaurantId}
//             onChange={(e) => setRestaurantId(e.target.value)}
//             required
//           >
//             <option value="">Select Restaurant</option>
//             {restaurants.map((restaurant) => (
//               <option key={restaurant.id} value={restaurant.id}>
//                 {restaurant.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="customerName" className="form-label">Customer Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="customerName"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="customerEmail" className="form-label">Customer Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="customerEmail"
//             value={customerEmail}
//             onChange={(e) => setCustomerEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
//           <input
//             type="datetime-local"
//             className="form-control"
//             id="reservationDate"
//             value={reservationDate}
//             onChange={(e) => setReservationDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="numberOfPeople" className="form-label">Number of People</label>
//           <input
//             type="number"
//             className="form-control"
//             id="numberOfPeople"
//             value={numberOfPeople}
//             onChange={(e) => setNumberOfPeople(e.target.value)}
//             min="1"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Processing...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReservationForm;

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

const ReservationForm = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantId, setRestaurantId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/restaurant/`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setMessage('Error fetching restaurants.');
      }
    };

    fetchRestaurants();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    const reservationData = {
      restaurant: restaurantId,
      customer_name: customerName,
      customer_email: customerEmail,
      reservation_date: reservationDate,
      number_of_people: numberOfPeople,
    };

    try {
      const response = await client.post(`${BASE_URL}/api/reservations/`, reservationData);

      if (response.status === 201 || response.status === 200) {
        setMessage('Reservation created successfully!');
        setRestaurantId('');
        setCustomerName('');
        setCustomerEmail('');
        setReservationDate('');
        setNumberOfPeople(1);
      } else {
        setMessage('Error creating reservation.');
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
      setMessage('Error creating reservation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Make a Reservation</h2>
      {message && <div className="mb-4 p-4 text-white bg-blue-500 rounded">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700">Restaurant</label>
          <select
            id="restaurant"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={restaurantId}
            onChange={(e) => setRestaurantId(e.target.value)}
            required
          >
            <option value="">Select Restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">Customer Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="customerEmail"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationDate" className="block text-sm font-medium text-gray-700">Reservation Date</label>
          <input
            type="datetime-local"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="reservationDate"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">Number of People</label>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
