import React from 'react'
import ReactDOM from 'react-dom'

// To get the root element from the HTML document
import Foto from './assets/fotomg.png'
import html from './assets/html5.png'
import css from './assets/CSS3.png'
import js from './assets/JS.png'
import react from './assets/reactJS.png'

import './css/styles.css'

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Marlon',
  lastName: 'García',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

/* const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
) */

const yearBorn = 1972
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={Foto} alt={author.firstName} />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {/* {result} */}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

/* TASK 1 */
const skill = (
  <div className='skill'>
    <h5>Frontend Technologies</h5>
    <div className='skill__container'>
      <img src={html} alt='html' className='styleImg'/>
      <img src={css} alt='html' className='styleImg'/>
      <img src={js} alt='html' className='styleImg'/>
      <img src={react} alt='html' className='styleImg'/>
    </div>
  </div>
)

/* TASK 2 */
const formulary = (
  <div className="formulary">
    <h5>SUBSCRIBE</h5>
    <p>Sign up with your email address to receive news and updates</p>
    <div className="formulary__forms">
      <div className="formulary__forms-inputs">
        <input type="text" placeholder="firstname" />
        <input type="text" placeholder="lastname" />
        <input type="email" placeholder="email" />
      </div>
      <div className="formulary__button">
        <button>Subscribe</button>
      </div>
    </div>
  </div>
)

/* TASK 3 */
const array = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'MySQL', 'Git', 'Github', 'Heroku']
const card = (
  <div className='container'>
    <div className="card">
      <div className="card__info">
        <img src={Foto} alt={author.firstName} className="card__info-img"/>
        <h5>{author.firstName} {author.lastName}</h5>
        <h6>Junior Developer, Medellín</h6>
      </div>
      <div className="card__skills">
        <h5>SKILLS</h5>
        <ul>
          {
            array.map((item, i )=> (
              <li key={i}>{item}</li>
            ))
          }
        </ul>
        </div>
    </div>
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {skill}
    {card}
    {formulary}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)