import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  HiChat,
  HiOutlineMail,
  HiOutlineMicrophone,
  HiPhoneIncoming,
} from "react-icons/hi";

const OfficeLocation = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "10rem auto" }}>
      {/* Title */}
      <div>
        <h2 style={{ fontSize: "3rem", fontWeight: "300" }}>
          Office Locations
        </h2>

        <img
          src="https://gfxpartner.com/Frolic/images/title-seperator.png"
          alt="separator"
        />
      </div>

      {/* Description */}
      <p
        style={{
          marginTop: "5rem",
          fontSize: "1.3rem",
          fontWeight: "300",
          lineHeight: "2.1rem",
          wordSpacing: "0.7rem",
          letterSpacing: "0.1rem",
        }}
      >
        Pellentesque vestibulum fermentum velit non placerat aecenas in
        hendrerit justo quisque quis rhoncus exeget semper semlam at lobortis
        velit. Vestibulum ante ipsum primis in faucibus orcie luctus et ultrices
        posuere cubilia curae ed dignissim leo lorema intum mauris vestibulum et
        maecenas vitae urna aced magna facilisis porttitor.
      </p>

      {/* Contact Info */}
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          textAlign: "center",
          marginTop: "3rem",
          lineHeight: "2.3rem",
        }}
      >
        <li>
          <HiOutlineMicrophone size={30} />
          <h4>MEDIA CONTACT</h4>
          <p>media@frolic.com</p>
        </li>

        <li>
          <HiOutlineMail size={30} />
          <h4>SUPPORT CONTACT</h4>
          <p>support@frolic.com</p>
        </li>

        <li>
          <HiPhoneIncoming size={30} />
          <h4>PHONE</h4>
          <p>+123 456 7890</p>
        </li>

        <li>
          <HiChat size={30} />
          <h4>SOCIAL</h4>

          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OfficeLocation;
