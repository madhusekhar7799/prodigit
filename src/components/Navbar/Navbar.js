import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <section>
       <nav className="navbar">
      <div className="logo">
        {/* Insert your logo image here */}
        <img height="50px" width="50px" src="https://linkinscience.com/assets/images/logo.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Abstract</a></li>
        <li><a href="#">Sientific Committee</a></li>
        <li><a href="#">Registration</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Venue</a></li>
        <li><a href="#">Past Conferances</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </section>
   
  );
}

export default Navbar;

