import React, { useState } from "react";
import ReactDOM from "react-dom";

// To get the root element from the HTML document
// import FotoMarlonGarcia from "./assets/fotomg.png";
// import html from "./assets/html5.png";
// import css from "./assets/CSS3.png";
// import js from "./assets/JS.png";
// import react from "./assets/reactJS.png";

import "./css/styles.css";

// IMPORT COMPONENTS
import App from "./components/App";
// import Numbers from "./components/Numbers";
// import HexaColor from "./components/HexaColor";
// import ImageSkill from "./components/ImageSkill";
// import Formulary from "./components/Formulary";
// import Counter from "./components/Counter";

const rootElement = document.getElementById("root");

// DATA TO WORK WITH
/* const timeLapsed = Date.now();
const today = new Date(timeLapsed).toDateString();
const data = {
  welcome: "Welcome to 30 Days Of React",
  title: "Getting Started React",
  subtitle: "JavaScript Library",
  author: {
    firstName: "Marlon",
    lastName: "García",
  },
  date: today,
}; */

/* const techs = ["HTML", "CSS", "JavaScript"];
const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "MySQL",
  "Git",
  "Github",
  "Heroku",
];
const copyright = "Copyright 2020"; */

/* const skills2 = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
]; */

// HEADER COMPONENT
/* const Header = ({ data }) => {
  const { welcome, title, subtitle, author, date } = data;
  console.log(date);
  return (
    <header>
      <div className="header__content">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Author: {author.firstName} {author.lastName}
        </p>
        <h6>Date: {date}</h6>
      </div>
    </header>
  );
}; */

// MAIN COMPONENT
/* const Main = ({ techs, author, skills }) => {
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
}; */

// CARD COMPONENT
/* const Card = ({ author, skills }) => {
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
}; */

// SKILL COMPONENT
/* const Skill = ({ skills }) => {
  return (
    <div className="skill__content">
      <h5>Skills</h5>
      <ul>
        {skills.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}; */

// IMAGES SKILL COMPONENT
/* const ImageSkill = () => {
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
}; */

// FORMYLARY COMPONENT
/* const Formulary = () => {
  return (
    <div className="formulary__content">
      <h5>SUBSCRIBE</h5>
      <p>Sign up with your email address to receive news and updates</p>
      <div className="formulary__content-form">
        <div className="formulary__content-form-inputs">
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="email" placeholder="email" />
        </div>
        <div className="formulary__content-form-button">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}; */

/* COUNTER COMPONENT */
/* const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="count__content">
      <div className="count__content-group">
        <p>Contador:</p>
        <h5>{count}</h5>
        <div className="btn">
          <button onClick={increase}>
            <i className="bi bi-caret-up-fill"></i>
          </button>
          <button onClick={decrease}>
            <i className="bi bi-caret-down-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}; */

/* RANDOM COLOURS COMPONENT */
/* const HexaColor = () => {
  const hexa = () => {
    let str = "12345678abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };
  const col = hexa();
  const styleColor = {
    background: `${hexa()}`,
  };
  return (
    <div className="color">
      <div className="hexacolor__content-color" style={styleColor}>
        {col}
      </div>
    </div>
  );
}; */

/* SKILLS2 GLOBAL COMPONENT */
// const Skills2Global = ({ skills2 }) => {
//   return (
//     <div className="skill2__content">
//       <h5>Desde skills2</h5>
//       <table>
//         <thead>
//           <tr>
//             <th>Technology</th>
//             <th className="level">Level</th>
//           </tr>
//         </thead>
//         {skills2.map((item) => (
//           <Skills2List item={item} />
//         ))}
//       </table>
//     </div>
//   );
// };

/* SKILLS2 LIST COMPONENT */
/* const Skills2List = ({ item: [technology, level] }) => {
  return (
    <tbody>
      <tr>
        <td>{technology}</td>
        <td className="level">{level}</td>
      </tr>
    </tbody>
  );
}; */

/* NUMBERS GENERATOR COMPONENT */
/* const Numbers = () => {
  const array = [];
  for (let i = 1; i < 32; i++) {
    array.push(i);
  }
  return (
    <div className="gridnumber__content">
      <h5>Numbers generator</h5>
      <div className="gridnumber__content-grid">
        {
          array.map((item) => {
            return (
              <>
                {item % 2 === 0 ? (<div className="par">{item}</div>) : (<div className="impar">{item}</div>)}
              </>
            );
          })
        }
      </div>
    </div>
  );
}; */

// FOOTER COMPONENT
// const Footer = ({ copyright }) => (
//   <div className="footer__content">
//     <p>{copyright}</p>
//   </div>
// );

// APP COMPONENT
/* const App = () => {
  return (
    <div className="app">
      <Header
        data={data}

      />
      <div className="container">
        <Main techs={techs} author={data.author} skills={skills} />
      </div>
      <Footer copyright={copyright} />
    </div>
  );
}; */

// Render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
