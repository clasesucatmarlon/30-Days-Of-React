import React from 'react';

import Card from "./Card";
import Skills2Global from "./Skills2Global";
import ImageSkill from "./ImageSkill";
import Formulary from "./Formulary";
import HexaColor from "./HexaColor";
import Numbers from "./Numbers";
import Counter from './Counter';

const Main = ({ techs, author, skills }) => {
  const skills2 = [
    ["HTML", 10],
    ["CSS", 7],
    ["JavaScript", 9],
    ["React", 8],
  ];

  return (
    <main>
      <div className="main__content">
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>
          {techs.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        <Card author={author} skills={skills} />
        <ImageSkill />
        <Formulary />
        <Counter />
        <div className="hexacolor__content">
          <h5>Random Colours</h5>
          <HexaColor />
          <HexaColor />
          <HexaColor />
          <HexaColor />
        </div>
        <Skills2Global skills2={skills2} />
        <Numbers />
      </div>
    </main>
  );
};

export default Main;
