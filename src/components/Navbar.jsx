// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'; 

// export default function Navbar() {
//   const [isNavActive, setIsNavActive] = useState(false);

//   const handleToggle = () => setIsNavActive(!isNavActive);

//   return (
//     <nav>
//         <h1 className="logo">Hotelier</h1>

//       <div id="mobile">
//         <i className="fa fa-bars" onClick={handleToggle}></i>
//       </div>
//       <ul id="navbar" className={isNavActive ? 'active' : ''}>
//         <li>
//           <Link to="/" onClick={() => setIsNavActive(false)}>Home</Link>
//         </li>
//         <li>
//           <Link to="/About" onClick={() => setIsNavActive(false)}>About</Link>
//         </li>
//         <li>
//           <Link to="/Restaurants" onClick={() => setIsNavActive(false)}>Restaurants</Link>
//         </li>
//         <li>
//           <Link to="/Hotels" onClick={() => setIsNavActive(false)}>Hotels</Link>
//         </li>
//         <li>
//           <Link to="/Reservations" onClick={() => setIsNavActive(false)}>Reservations</Link>
//         </li>
//         <li>
//           <Link to="/Login" onClick={() => setIsNavActive(false)}>Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; 

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsNavActive(!isNavActive);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/Login');
  };

  return (
    <nav>
        <h1 className="logo">Hotelier</h1>

      <div id="mobile">
        <i className="fa fa-bars" onClick={handleToggle}></i>
      </div>
      <ul id="navbar" className={isNavActive ? 'active' : ''}>
        <li>
          <Link to="/" onClick={() => setIsNavActive(false)}>Home</Link>
        </li>
        <li>
          <Link to="/About" onClick={() => setIsNavActive(false)}>About</Link>
        </li>
        <li>
          <Link to="/Restaurants" onClick={() => setIsNavActive(false)}>Restaurants</Link>
        </li>
        <li>
          <Link to="/Hotels" onClick={() => setIsNavActive(false)}>Hotels</Link>
        </li>
        <li>
          <Link to="/Reservations" onClick={() => setIsNavActive(false)}>Reservations</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/Login" onClick={() => setIsNavActive(false)}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
