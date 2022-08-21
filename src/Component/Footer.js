import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div class="footer">
      <div class="container-fluid">
        <div class="row pt-4">
          <div class="col-md-3">
            <a href="#">
              <img src="/logo-white.png" />
            </a>
            <p class="pt-2">
              AchieversIT - Provides a wide group of opportunities for freshers
              and Experienced candidate who can develop their skills and build
              their career opportunities across multiple Companies.
            </p>
          </div>
          <div class="col-md-3 pt-4">
            <h4>COMPANY</h4>
            <ul class="footer-links pt-2">
              <li>Home</li>
              <li>Placements</li>
              <li>Corporate Training</li>
              <li>Contact US</li>
            </ul>
          </div>
          <div class="col-md-3 pt-4">
            <h4>TRENDING COURSES</h4>
            <ul class="footer-links pt-2">
              <li>UI Development Course</li>
              <li>Angular JS Course</li>
              <li>React JS Course</li>
              <li>Digital Marketing Course</li>
              <li>Python Course</li>
            </ul>
          </div>
          <div class="col-md-3 pt-4">
            <h4>CONTACT INFO</h4>
            <div class="pt-2">
              <p>
                #63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore,
                India - 560029
              </p>
            </div>
            <div>
              <p>
              India : +91 8431-040-457
              </p>
            </div>
            <div>
              <p>
              info@achieversit.com
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
      
    </div>
  );
}
export default Footer;
