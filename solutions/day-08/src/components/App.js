import React, {useState} from 'react';

/* IMPORT COMPONENTS */
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

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

  const [colour, setColour] = useState({backgroundColor: '', color: ''});
  const [status, setStatus] = useState(true);

  const handleColour = (e) => {
    status ? setColour({backgroundColor: '#0F172A', color: '#F7F1F0'}): setColour({backgroundColor: ''})
    setStatus(!status)
  }

  return (
    <div style={colour} className="app">
      <Header data={data}/>

      <div className="container">
        <div className="app__button">
          <button onClick={handleColour} >Cambiar fondo</button>
        </div>
        <Main techs={techs} author={data.author} skills={skills} />
      </div>
      <Footer copyright={copyright} />
    </div>
  );
};

export default App;