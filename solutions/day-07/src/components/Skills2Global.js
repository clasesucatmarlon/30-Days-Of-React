import React from 'react';

import Skills2List from './Skills2List';

const Skills2Global = ({ skills2 }) => {
  return (
    <div className="skill2__content">
      <h5>Desde skills2</h5>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th className="level">Level</th>
          </tr>
        </thead>
        {skills2.map((item) => (
          <Skills2List item={item} />
        ))}
      </table>
    </div>
  );
};

export default Skills2Global;