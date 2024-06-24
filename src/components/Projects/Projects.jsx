import React from "react";
import "./Projects.css";
import kessben from "../../assets/kessben.jpg";
import opemsuo from "../../assets/opemsuo.jpg";
import ishtari from "../../assets/ishtari.jpg";

const Projects = () => {
  return (
    <div className="Projects">
      <h3>Have a view of some of my projects</h3>

      {/**list of projects */}
      <div id="jects">
        <a href="kessbenonline.com">
          <img src={kessben} alt="kessben" />
          <p>kessbenonline.com</p>
        </a>
        <a href="opemsuo.com">
          <img src={opemsuo} alt="opensuo" />
          <p>opemsuo.com</p>
        </a>
        <a href="ishtari.com.gh">
          <img src={ishtari} alt="ishtari" />
          <p>ishtari.com.gh</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
