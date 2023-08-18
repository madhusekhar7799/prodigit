import "./Awards.css";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const Awards = () => {
  return (
    <div className="awards">
      <div className="awards_dis">
        <h2>Awards</h2>
        <p>
          Global Excellence Awards $2500.Participants desiring to be considered
          for one of these awards need to specify their interest after their
          submission of the required abstract. Selected participants will be
          awarded under the following categoriesÌ
        </p>
      </div>

      <div className="box_data">
        <ol>
          <li>Outstanding Submitted Abstrac ̄</li>
          <li>
            Best Research of the conference as evaluated by the Scientific
            Committe3
          </li>
          <li>Best Poster of the conference depending on the rating given</li>
          <li>
            Young Researcher Award under YRF category to encourage budding
            scientists/ researcher.
          </li>
        </ol>
        <p>
          Decisions will be made based on evaluation of the submitted abstract
          by the Scientific Committee. The decision made by the Scientific
          Committee would be final. We want you to grab this opportunity and
          participate in the conference...!
        </p>
      </div>

      <div className="conference_re">
        <h2>PAST CONFERENCE REPORT</h2>
        <div className="statement">
          <p>
            Global Congress on Laser, optics
            <br />
            and photonics(2019)
          </p>
          <p>
            Global Congress on Laser, optics
            <br />
            and photonics(2020)
          </p>
          <p>
            Global Congress on Laser, optics
            <br />
            and photonics(2021)
          </p>
          <p>
            Global Congress on Laser, optics
            <br />
            and photonics(2022)
          </p>
          <FaGreaterThan />
        </div>
        <div>
          <p>
            Linkin Science has successfully completed 3rd Edition of
            Advancements of Lasers, Optics and Photonics as a Virtual Conference
            during September 01-02, 2021. We thank all our expertise Scientific
            Committee Members and speakers who offered a constant support for
            the conference. The Global Excellence Awards for 3rd Edition of
            Advancements of Laser, Optics and photonics 2021 are;
          </p>
          <br />
          <br />
          <p>
            Aurel Ymeti, NanoBio Research Group, Saxion University of Applied
            Sciences & Nanoalmyona BV, Netherlands (Best Research) Shobha
            Shukla, Indian Institute of Technology (IIT- Mumbai) (Young
            Researcher Award) Vanessa De Souza, UNINOVE Nove de Julho
            University, Brazil (Best Poster)
          </p>
        </div>
        <br />
        <br />
        <div className="buttons">
          <button className="btn btn-primary">VIEW PAST CONFERENCE REPORT</button>
          <button className="btn btn-primary">CONFERENCE PROCEEDINGS</button>
          <button className="btn btn-primary">PAST CONFERENCE GALLERY</button>
        </div>
      </div>

      <div className="feedback">
                <div>
                <h2>Testimonials/ Feedback</h2>
        <p>What our Past Participant have in there mind.</p>
                </div>
        <div className="feed-info">
          <div className="">
            <img height="300px" width="300px" className="imgone"
              src="https://nhit.in/wp-content/uploads/2017/08/Passport-Size-Photograph.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Abhirami Negi</h4>
            <p>Designation</p>
            <br />
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="partner">
        <h2>Media Partner</h2>
        <div className="mediaimg">
          <img height="150px" width="150px"
            src="https://media.licdn.com/dms/image/C4E0BAQH8miGjc7boeQ/company-logo_200_200/0/1519900132411?e=2147483647&v=beta&t=fPGZKBNGxnJxsBXTRjPeiJZFnflOVUhwcGPk3wNV1Qk"
            alt=""
          />
          <img height="150px" width="150px"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hrhjbqh2zorfl92ukmir"
            alt=""
          />
          <img height="150px" width="150px"
            src="https://media.licdn.com/dms/image/C4E0BAQEOAx8Co5ri7A/company-logo_200_200/0/1519904736829?e=2147483647&v=beta&t=uT6kenuBJhI0D4noIwzsVx_JFkJxfnMGRtWzT8bpBwU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
