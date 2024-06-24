import React, { useState } from "react";
import "./Socials.css";
import { FaGithub, FaReact, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const [media, showMedia] = useState();

  const handlemedia = () => {
    showMedia(!media);
  };
  return (
    <div className="socials" id="socials">
      {/**This is a list of social media apps */}
      <div id="media">
        {media ? (
          <div id="first">
            <a href="https://x.com/JayCodes27?t=_pQvlF_95yz6h7GxLyqTCg&s=09">
              {" "}
              <FaXTwitter id="X" />
            </a>
            <a href="https://www.youtube.com/@jerryaddy4797">
              <FaYoutube id="youtube" />
            </a>
          </div>
        ) : (
          <></>
        )}
        <div id="r" onClick={handlemedia}>
          <FaReact id="react" />
        </div>
        {media ? (
          <div id="second">
            <a href="https://www.linkedin.com/in/jerry-addy-193437249">
              <FaLinkedin id="linkedin" />
            </a>
            <a href="https://github.com/addyjerry">
              <FaGithub id="github" />
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Socials;
