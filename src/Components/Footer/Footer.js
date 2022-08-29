import React from "react";
import classes from "./Footer.module.css";
import FooterBox from "./FooterBox/FooterBox";
import AppStoreBtn from "../../UI/AppStoreBtn/AppStoreBtn";
import GooglePlayBtn from "../../UI/GooglePlayBtn/GooglePlayBtn";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <section className={classes.first_section}>
        <FooterBox
          items={{
            header: "Company",
            links: ["About Us", "Careers", "Contact Us"],
          }}
        />
        <FooterBox
          items={{ header: "Support", links: ["Help Center", "Safety Center"] }}
        />
        <FooterBox
          items={{
            header: "Legal",
            links: [
              "Cookies Policy",
              "Privacy Policy",
              "Terms of Service",
              "Dispute Resolution",
            ],
          }}
        />
        <FooterBox items={{ header: "Install App" }}>
          <AppStoreBtn />
          <GooglePlayBtn />
        </FooterBox>
      </section>
      <section className={classes.second_section}>
        {" "}
        <p>Copyright © 2022 | All rights reserved</p>
        <div className={classes.socials}>
          <FontAwesomeIcon className={classes.socialIcon} icon={faFacebookF} />
          <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} />
          <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
