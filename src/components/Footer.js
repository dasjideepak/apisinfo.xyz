import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialGithubCircular,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer padding">
      <div className="container center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <a
            href="https://facebook.com/dasjideepak"
            target="blank"
            className="social-media"
          >
            <TiSocialFacebook />
          </a>
          <a
            href="https://twitter.com/dasjideepak"
            target="blank"
            className="social-media"
          >
            <TiSocialTwitter />
          </a>
          <a
            href="https://instagram.com/dasjideepak"
            target="blank"
            className="social-media"
          >
            <TiSocialInstagram />
          </a>
          <a
            href="https://linkedin.com/in/dasjideepak"
            target="blank"
            className="social-media"
          >
            <TiSocialLinkedin />
          </a>
          <a
            href="https://github.com/dasjideepak"
            target="blank"
            className="social-media"
          >
            <TiSocialGithubCircular />
          </a>
        </div>
        <div className="footer-text">
          <h4>
            Designed by{" "}
            <a href="https://twitter.com/dasjideepak" target="blank">
              @dasjideepak
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
