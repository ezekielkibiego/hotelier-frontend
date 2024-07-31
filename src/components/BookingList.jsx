

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/"
// });

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [rooms, setRooms] = useState({});
//   const [hotels, setHotels] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookingsAndRooms = async () => {
//       try {
//         const [bookingsResponse, roomsResponse, hotelsResponse] = await Promise.all([
//           client.get('/bookings/'),
//           client.get('/rooms/'),
//           client.get('/hotels/')
//         ]);

//         const hotelsMap = hotelsResponse.data.reduce((acc, hotel) => {
//           acc[hotel.id] = hotel.name;
//           return acc;
//         }, {});

//         const roomsMap = roomsResponse.data.reduce((acc, room) => {
//           acc[room.id] = {
//             room_number: room.room_number,
//             room_type: room.room_type,
//             hotel_name: hotelsMap[room.hotel] // Get hotel name from hotelsMap
//           };
//           return acc;
//         }, {});

//         setBookings(bookingsResponse.data);
//         setRooms(roomsMap);
//         setHotels(hotelsMap); // Store the hotels data for summary purposes
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookingsAndRooms();
//   }, []);

//   const totalBookings = bookings.length;
//   const mostRecentBooking = bookings.length > 0 ? bookings[0] : null;

//   return (
//     <div className="container mx-auto mt-5 font-sans">
//       <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Bookings</h2>

//       {/* Summary Information */}
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
//         <h3 className="text-xl font-bold mb-2">Summary</h3>
//         <p className="text-gray-700">Total Bookings: {totalBookings}</p>
//         {mostRecentBooking && (
//           <p className="text-gray-700">
//             Most Recent Booking: Room {rooms[mostRecentBooking.room]?.room_number} ({rooms[mostRecentBooking.room]?.room_type}) at {rooms[mostRecentBooking.room]?.hotel_name} (Check-in: {new Date(mostRecentBooking.check_in).toLocaleDateString()}, Check-out: {new Date(mostRecentBooking.check_out).toLocaleDateString()})
//           </p>
//         )}
//       </div>

//       {/* Booking Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">User</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Room</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Hotel</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Check-In Date</th>
//               <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Check-Out Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map(booking => (
//               <tr key={booking.id} className="border-b hover:bg-gray-100">
//                 <td className="py-3 px-4 text-gray-700 font-bold">{booking.user}</td>
//                 <td className="py-3 px-4 text-gray-700">{rooms[booking.room]?.room_number} ({rooms[booking.room]?.room_type})</td>
//                 <td className="py-3 px-4 text-gray-700">{rooms[booking.room]?.hotel_name}</td>
//                 <td className="py-3 px-4 text-gray-700">{new Date(booking.check_in).toLocaleDateString()}</td>
//                 <td className="py-3 px-4 text-gray-700">{new Date(booking.check_out).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookingList;
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

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState({});
  const [hotels, setHotels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBookingsAndRooms = async () => {
      try {
        const [bookingsResponse, roomsResponse, hotelsResponse] = await Promise.all([
          client.get(`${BASE_URL}/api/bookings/`),
          client.get(`${BASE_URL}/api/rooms/`),
          client.get(`${BASE_URL}/api/hotels/`)
        ]);

        const hotelsMap = hotelsResponse.data.reduce((acc, hotel) => {
          acc[hotel.id] = hotel.name;
          return acc;
        }, {});

        const roomsMap = roomsResponse.data.reduce((acc, room) => {
          acc[room.id] = {
            room_number: room.room_number,
            room_type: room.room_type,
            hotel_name: hotelsMap[room.hotel] // Get hotel name from hotelsMap
          };
          return acc;
        }, {});

        setBookings(bookingsResponse.data);
        setRooms(roomsMap);
        setHotels(hotelsMap); // Store the hotels data for summary purposes
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingsAndRooms();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rooms[booking.room]?.room_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rooms[booking.room]?.room_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rooms[booking.room]?.hotel_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalBookings = bookings.length;
  const mostRecentBooking = bookings.length > 0 ? bookings[0] : null;

  return (
    <div className="container mx-auto mt-5 font-sans">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Bookings</h2>

      {/* Search Input */}
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-l w-full"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r">Search</button>
      </div>

      {/* Summary Information */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-2">Summary</h3>
        <p className="text-gray-700">Total Bookings: {totalBookings}</p>
        {mostRecentBooking && (
          <p className="text-gray-700">
            Most Recent Booking: Room {rooms[mostRecentBooking.room]?.room_number} ({rooms[mostRecentBooking.room]?.room_type}) at {rooms[mostRecentBooking.room]?.hotel_name} (Check-in: {new Date(mostRecentBooking.check_in).toLocaleDateString()}, Check-out: {new Date(mostRecentBooking.check_out).toLocaleDateString()})
          </p>
        )}
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">User</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Room</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Hotel</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Check-In Date</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Check-Out Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => (
              <tr key={booking.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700 font-bold">{booking.user}</td>
                <td className="py-3 px-4 text-gray-700">{rooms[booking.room]?.room_number} ({rooms[booking.room]?.room_type})</td>
                <td className="py-3 px-4 text-gray-700">{rooms[booking.room]?.hotel_name}</td>
                <td className="py-3 px-4 text-gray-700">{new Date(booking.check_in).toLocaleDateString()}</td>
                <td className="py-3 px-4 text-gray-700">{new Date(booking.check_out).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
