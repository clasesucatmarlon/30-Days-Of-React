import React from 'react';

const Skill = ({ skills }) => {
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
};

export default Skill;