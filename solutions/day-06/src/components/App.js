import React from 'react';

/* IMPORT COMPONENTS */
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Population from './Population';

const App = () => {
  // DATA TO WORK WITH
  const timeLapsed = Date.now();
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
  };
  const techs = ["HTML", "CSS", "JavaScript"];
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
  const copyright = "Copyright 2020";

  return (
    <div className="app">
      
      <Header data={data}/>
      <div className="container">
        <Main techs={techs} author={data.author} skills={skills} />
      </div>
      <Footer copyright={copyright} />
    </div>
  );
};

export default App;