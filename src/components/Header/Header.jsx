import React from "react";
import "./Header.css";
import ProfilePic from "../../assets/image.png";
const Header = () => {
  return (
    <div className="Header">
      {/**This contains the Profile Picture */}
      <div id="Propic">
        <img src={ProfilePic} alt="Profile Picture" />
      </div>

      <div id="navbar">
        <nav>
          <ul>
            <li>HOME</li>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvpbDQrWvcwfHkGCSDtMnTHVcFhFQpCFnGwpXcnmCMCQnFKLNgjdGHbqhmpXSSzTTCtPFg">
              <li>HIRE ME</li>
            </a>
            <li>DARK MODE</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
