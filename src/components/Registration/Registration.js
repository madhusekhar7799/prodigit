import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration">
      <div className="list_con">
        <h2>SCIENTIFIC SESSIONS</h2>
        <h6>Abstract Submission : June 30, 2023</h6>

        <ul>
          <li>Optical physics, Communication, and Networkin</li>
          <li>Applications & future trends in laser, optics & photonic</li>
          <li>a Biomedical Optic</li>
          <li>a Laser & Photochemistr£</li>
          <li>Optics and Photonics Impact on Defense System</li>
          <li>Laser Device</li>
          <li>Quantum science & technolog£</li>
          <li>Photovoltaic syste</li>
          <li>Quantum optics & optomechanic</li>
          <li>a Optical Fibre Sensor</li>
          <li>Silicon Photonic</li>
          <li>a Strong Field & Attosecond Physic</li>
          <li>Optics in astronomy & astrophysics</li>
          <li>a Biophotonic</li>
          <li>a Optoelectronic</li>
          <li>a Laser Nanotechnolog£</li>
          <li>a Pediatric optometr£</li>
          <li>Nano photonics and optic</li>
          <li>Terahertz Optics and Photonic</li>
          <li>Extreme Light Technologies, Science, and Applications</li>
        </ul>
        <div>
          <button className="btn btn-secondary">Submit Abstraction</button>
        </div>
      </div>

      <div className="data">
        <h2>Registration Categories</h2>
        <p>Early Bird Registration : June 30, 2023</p>
        <div className="cards">
          <div className="card">
            <div >
              <p>SPEAKER REGISTRATION</p>
              <h4>$599</h4>
            </div>
            <div>
              <p>4% tax is applicable on all registrations</p>
              <h4>Register Now</h4>
            </div>
          </div>
          <div className="card">
            <div >
              <p>POSTER REGISTRATION</p>
              <h4>$350</h4>
            </div>
            <div>
              <p>4% tax is applicable on all registrations</p>
              <h4>Register Now</h4>
            </div>
          </div>
          <div className="card">
            <div>
              <p>YOUNG RESEARCH FORUM (YRF)</p>
              <h4>$399</h4>
            </div>
            <div>
              <p>4% tax is applicable on all registrations</p>
              <h4>Register Now</h4>
            </div>
          </div>
          <div className="card">
            <div>
              <p>
                VIRTUAL PARTICIPATION (ONLINE PARTICIPATION ALL CATEGORIES,
                INCLUDING ORAL, YRF, DELEGATES, STUDENTS
              </p>
              <h4>$300</h4>
            </div>
            <div>
              <p>4% tax is applicable on all registrations</p>
              <h4>Register Now</h4>
            </div>
          </div>
        <button className="btn btn-danger">Register Now</button>

        </div>
      </div>
    </div>
  );
};

export default Registration;
