// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Carousel from './Carousel'; // Ensure this path is correct

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const Booking = () => {
//   const [hotels, setHotels] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [hotelId, setHotelId] = useState('');
//   const [roomId, setRoomId] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [user, setUser] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await client.get('/hotels/');
//         setHotels(response.data);
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
//         setMessage('Error fetching hotels.');
//       }
//     };

//     fetchHotels();
//   }, []);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       if (hotelId) {
//         try {
//           const response = await client.get('/rooms/');
//           console.log('Rooms fetched:', response.data); // Debugging log
//           const filteredRooms = response.data.filter(room => room.hotel === parseInt(hotelId));
//           setRooms(filteredRooms);
//         } catch (error) {
//           console.error('', error);
//           setMessage('Error fetching rooms.');
//         }
//       } else {
//         setRooms([]);
//       }
//     };

//     fetchRooms();
//   }, [hotelId]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage('');
//     setLoading(true);

//     // Check for missing dates
//     if (!startDate || !endDate) {
//       setMessage('Please select both start and end dates.');
//       setLoading(false);
//       return;
//     }

//     // Prepare data for POST request
//     const reservationData = {
//       user: user,
//       hotel: hotelId,
//       room: roomId,
//       start_date: startDate,
//       end_date: endDate,
//     };

//     try {
//       const response = await client.post('/bookings/', reservationData);

//       if (response.status === 201 || response.status === 200) {
//         setMessage('Reservation created successfully!');
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
//     <>
//       <Carousel />

//       <div className="container mt-5">
//         <h2>Book Your Stay</h2>
//         {message && <div className="alert alert-info">{message}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="user" className="form-label">User</label>
//             <input
//               type="text"
//               className="form-control"
//               id="user"
//               value={user}
//               onChange={(e) => setUser(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="hotel" className="form-label">Hotel</label>
//             <select
//               id="hotel"
//               className="form-control"
//               value={hotelId}
//               onChange={(e) => setHotelId(e.target.value)}
//               required
//             >
//               <option value="">Select Hotel</option>
//               {hotels.map((hotel) => (
//                 <option key={hotel.id} value={hotel.id}>
//                   {hotel.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="room" className="form-label">Room</label>
//             <select
//               id="room"
//               className="form-control"
//               value={roomId}
//               onChange={(e) => setRoomId(e.target.value)}
//               required
//               disabled={!hotelId}
//             >
//               <option value="">Select Room</option>
//               {rooms.map((room) => (
//                 <option key={room.id} value={room.id}>
//                   Room {room.room_number} ({room.room_type}) - ${room.price}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="startDate" className="form-label">Start Date</label>
//             <input
//               type="date"
//               className="form-control"
//               id="startDate"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="endDate" className="form-label">End Date</label>
//             <input
//               type="date"
//               className="form-control"
//               id="endDate"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Processing...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Booking;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel'; // Ensure this path is correct
import BASE_URL from './config';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: BASE_URL
});

const Booking = () => {
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotelId, setHotelId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hotels/`);
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setMessage('Error fetching hotels.');
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      if (hotelId) {
        try {
          const response = await axios.get(`${BASE_URL}/api/rooms/`);
          console.log('Rooms fetched:', response.data); // Debugging log
          const filteredRooms = response.data.filter(room => room.hotel === parseInt(hotelId));
          setRooms(filteredRooms);
        } catch (error) {
          console.error('Error fetching rooms:', error);
          setMessage('Error fetching rooms.');
        }
      } else {
        setRooms([]);
      }
    };

    fetchRooms();
  }, [hotelId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    // Check for missing dates
    if (!startDate || !endDate) {
      setMessage('Please select both start and end dates.');
      setLoading(false);
      return;
    }

    // Prepare data for POST request
    const reservationData = {
      user: user,
      room: roomId,
      check_in: startDate,
      check_out: endDate,
    };

    try {
      const response = await client.post(`${BASE_URL}/api/bookings/`, reservationData);


      if (response.status === 201 || response.status === 200) {
        setMessage('Reservation created successfully!');
        // Reset the form
        setUser('');
        setHotelId('');
        setRoomId('');
        setStartDate('');
        setEndDate('');
        setRooms([]);
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
    <>
      <Carousel />

      <div className="container mt-5">
        <h2>Book Your Stay</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">User</label>
            <input
              type="text"
              className="form-control"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hotel" className="form-label">Hotel</label>
            <select
              id="hotel"
              className="form-control"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              required
            >
              <option value="">Select Hotel</option>
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="room" className="form-label">Room</label>
            <select
              id="room"
              className="form-control"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              required
              disabled={!hotelId}
            >
              <option value="">Select Room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  Room {room.room_number} ({room.room_type}) - ${room.price}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;
