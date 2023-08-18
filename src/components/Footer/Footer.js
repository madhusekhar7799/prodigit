import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="linkson">
        <div>
          <h5>Useful Links</h5>
          <hr />
        </div>
        <div>
          <h5>Other Links</h5>
          <hr />
        </div>
        <div>
          <h5>Get in Touch</h5>
          <hr />
        </div>
        <div>
          <h5>Subscribe</h5>
          <hr />
        </div>
      </div>

      <div className="infodata">
        <div>
          <p>Conference Organizing Committee</p>
          <br />
          <br />
          <p>Call For Abstract</p>
          <br />
          <br />
          <p>Registration Guidelines</p>
        </div>
        <div>
          <p>Abstract Submission</p>
          <br />
          <br />
          <p>Register Now</p>
          <br />
          <br />
          <p>Venue & Hospitality</p>
          <br />
          <br />
          <p>Contact Us</p>
        </div>
        <div>
          <p>USA : +1 415-704-1402 (Whats- app as well)</p>
          <br />
          <br />
          <p>Email : laseroptics@linkinscience.com</p>
        </div>
        <div>
          <p>For any Queries Send your name, email and query to</p>
          <br />
          <br />
          <p>Email : laseroptics@linkinscience.com</p>
        </div>
      </div>
      <hr />

      <div className="copyright">
        <div>
          <h5>Copyright @ LinkinScience</h5>
        </div>
        <div className="d-flex">
        <p>Design and developed by</p>
        <h3>Prodigit</h3>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
