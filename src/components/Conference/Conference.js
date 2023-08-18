import "./Conference.css";
import React from "react";

const Conference = () => {
  return (
    <div className="conference">
      <h2>More About Conference</h2>
      <div className="con_content">
        <div className="conimg">
          <img height="500px" width="650px" src="https://wallpaperaccess.com/full/3000582.jpg" alt="" />
        </div>
        <div className="conpara">
          <h4>Poster Guidelines</h4>
          <h5>Poster Presentation Guidelines</h5>
          <p>
            A poster presentation is a way to communicate your research in a
            concise and visually engaging format. Poster presentation helps make
            clever use of time and space for scientific discussion among
            conference attendees. Co authors or colleagues may also be present
            and participate at the same time in discussions.
          </p>
          <h5>Preparing a Poster Presentation</h5>
          <h5>Poster Size:</h5>
          <ul typeof="dot">
            <li>
              Each poster should be approximately 1*1M long (100*100cms /
              39.37*39.37inches / 3.5*3.5 feet,
            </li>
            <li>
              The title, contents, author s information, affiliation block must
              be at the top of the poster and should be clearly visible from a
              distance of 1-2 feet
            </li>
            <li>
              All materials to be posted on a board must be prepared in advance
              of the meeting. Authors will not be provided with materials to
              draft displays on site.
            </li>
          </ul>
          <span>Content:</span>
          <ol type="number">
            <li>
              Use fonts such as Arial/ Times New Roman in a reasonable font size
              that should be easy to read.
            </li>
            <li>
              Short phrases and bullet points should be used in the poster to
              present the main highlights such as list of key points and a brief
              summary of results or conclusions. View more
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Conference;
