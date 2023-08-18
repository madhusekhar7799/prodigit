import React from "react";
import "./About.css"
import {
  BsWhatsapp,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="container">
        <div className="about">
        <div>
        <h2>About Conference</h2>
      </div>
      <div>
        The 4th edition of Global congress on Lasers, Optics and Photonics is
        completed successfully as a Hybrid event . It is with immense pleasure
        and a great honour, we would like to welcome you all to participate in
        our 5th Edition of Advancements on Lasers, Optics, Photonics & Expo,
        Hybrid Conference to be held during October 02-04, 2023 in Amsterdam,
        Netherlands. The conference is hosted by Linkin Science. These
        conferences are well crafted and designed by a team of skilled experts.
        Our conferences are vast expanded into Medical, life sciences, health
        care, Engineering and other social sciences. Each conference, summit or
        executive briefing is tailored to the sector, topic and audience need.
        Our event structure varies depending on issue and market requirements
        featuring Keynote presentations, Oral talks, Poster presentations, Young
        research forum, Exhibitions, roundtables and variable formats. Our
        mission is to bring the researchers on a common platform and provide
        opportunity for them to interact. This scientific networking helps for
        the betterment of science by sharing the research and ideas. We believe
        in accelerating the possibilities of novel discoveries and enhancement
        in scientific research, by connecting scientific community. Join us to
        redefine and explore new research, to provide a credible source to
        barter ideas for scientific studies besides transforming the true
        outcomes of a distinct scientific discovery and grab the attention for
        rare emerging technologies.
        <br />
        <span>
          <b>Importance and Scope:</b>
        </span>
        <br />
        Laser, Optics & Photonics are rapidly expanding by playing a prominent
        role in many fields. This Conference is a platform to Industry,
        Academia, Researchers, from agriculture to water treatment to energy
        storage. View more
      </div>
        </div>

      <div className="add">
     
        <div className="social">
          <p>#linkinscience</p>
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
          <BsLinkedin />
          <p>Contact Via: </p>
          <BsWhatsapp />
          <p>+6301716094</p>
        </div>
        <div>
            <img className="img1" src="https://wallpaperaccess.com/full/8154445.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
