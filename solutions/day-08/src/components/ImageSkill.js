import React from 'react';

import html from "../assets/html5.png";
import css from "../assets/CSS3.png";
import js from "../assets/JS.png";
import react from "../assets/reactJS.png";

// IMAGES SKILL COMPONENT
const ImageSkill = () => {
  return (
    <div className="imageskill__content">
      <h5>Frontend Technologies</h5>
      <div className="imageskill__content-img">
        <img src={html} alt="html" className="styleImg" />
        <img src={css} alt="html" className="styleImg" />
        <img src={js} alt="html" className="styleImg" />
        <img src={react} alt="html" className="styleImg" />
      </div>
    </div>
  );
};

export default ImageSkill;