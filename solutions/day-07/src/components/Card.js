import React from 'react';

import FotoMarlonGarcia from "../assets/fotomg.png";

import Skill from './Skill';

const Card = ({ author, skills }) => {
  return (
    <div className="card__content">
      <div className="card__content-owner">
        <img
          src={FotoMarlonGarcia}
          alt={author.firstName}
          className="card__info-img"
        />
        <p>
          {author.firstName} {author.lastName}
          <i className="bi bi-check-circle-fill"></i>
        </p>
      </div>
      <Skill skills={skills} />
    </div>
  );
};

export default Card;