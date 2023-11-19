import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Business</h4>
            <a href="/test">
              <p>Employer</p>
            </a>
            <a href="/health">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/testing">
              <p>Financial</p>
            </a>
            <a href="/testing">
              <p>Orientation</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/employers">
              <p>Swing tech</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <a href="/testing2">
              <p>Banks</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Comming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src="./facebook.png" alt="" />
              </p>
              <p>
                <img src="./instagram.png" alt="" />
              </p>
              <p>
                <img src="./linkedin.png" alt="" />
              </p>
              <p>
                <img src="./twitter.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="sb-footer-below">
        <div className="sb-footer-copy">
          <p>
            @{new Date().getFullYear()} Angular Wealth. All Rights Reserved.
          </p>
        </div>
        <div className="sb-footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms & conditions</p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p>Cookie Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
