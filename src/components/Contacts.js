import React from "react";
import { FaPhone, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

function Contacts() {
  return (
    <footer id="contacts">
      <h2 className="text-center">Contact me</h2>
      <div className="line"></div>
      <div className="footer-grid">
        <a href="tel:+7(952)-211-64-77" className="btn phone">
          <FaPhone />
        </a>
        <a
          href="https://www.facebook.com/jelaleddin.atalykov"
          className="btn facebook"
        >
          <FaFacebookF />
        </a>
        <a href="mailto:atalykovj@gmail.com" className="btn gmail">
          <SiGmail />
        </a>
        <a href="https://twitter.com/Jay03065595" className="btn twitter">
          <FaTwitter />
        </a>
        <a href="https://github.com/Jay906" className="btn github">
          <FiGithub />
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
