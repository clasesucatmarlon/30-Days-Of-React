import React, {useState} from "react";
import ReactDOM from "react-dom";

// To get the root element from the HTML document
import FotoMarlonGarcia from "./assets/fotomg.png";
import html from "./assets/html5.png";
import css from "./assets/CSS3.png";
import js from "./assets/JS.png";
import react from "./assets/reactJS.png";

import "./css/styles.css";

const rootElement = document.getElementById("root");

// DATA TO WORK WITH
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Marlon",
  lastName: "García",
};
const date = "Aug 26, 2021";
const techs = ["HTML", "CSS", "JavaScript"];
const copyRight = "Copyright 2020";
const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'MySQL', 'Git', 'Github', 'Heroku']

// HEADER COMPONENT
const Header = () => (
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

// MAIN COMPONENT
const Main = () => (
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
      <Card />
      <ImageSkill />
      <Formulary />
      <Contador />
      <div className="hexacolor__content">
        <h5>Random Colours</h5>
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
);

// CARD COMPONENT
const Card = () => (
  <div className="card__content">
    <div className="card__content-owner">
      <img
        src={FotoMarlonGarcia}
        alt={author.firstName}
        className="card__info-img"
      />
      <p>
        {author.firstName} {author.lastName}
        <i class="bi bi-check-circle-fill"></i>
      </p>
    </div>
    <Skill />
  </div>
);

// SKILL COMPONENT
const Skill = () => {
  return (
    <div className="skill__content">
      <h5>Skills</h5>
      <ul>
        {
          skills.map((item, i )=> (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

// IMAGES SKILL COMPONENT
const ImageSkill = () => {
  return (
    <div className="imageskill__content">
      <h5>Frontend Technologies</h5>
      <div className='imageskill__content-img'>
        <img src={html} alt='html' className='styleImg'/>
        <img src={css} alt='html' className='styleImg'/>
        <img src={js} alt='html' className='styleImg'/>
        <img src={react} alt='html' className='styleImg'/>
      </div>
    </div>
  )
}

// FORMYLARY COMPONENT
const Formulary = () => {
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
  )
}

/* COUNTER COMPONENT */
const Contador = () => {
  const [count, setCount] = useState(0); 
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }
  return (
    <div className="count__content">
      <div className="count__content-group">
        <p>Contador:</p>
        <h5>{count}</h5>
        <div className="btn">
          <button onClick={increase}><i className="bi bi-caret-up-fill"></i></button>
          <button onClick={decrease}><i className="bi bi-caret-down-fill"></i></button>
        </div>
      </div>
    </div>
  )
}

/* RANDOM COLOURS COMPONENT */
const HexaColor = () => {
  const hexa = () => {
    let str = '12345678abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  const col = hexa();
  const styleColor = {
    background: `${hexa()}`,
  }
  return (
    <div className="color">
      <div className="hexacolor__content-color" style={styleColor}>{col}</div>
    </div>
)
}

// FOOTER COMPONENT
const Footer = () => (
  <div className="footer__content">
    <p>{copyRight}</p>
  </div>
);

// APP COMPONENT
const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </div>
);

// Render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
