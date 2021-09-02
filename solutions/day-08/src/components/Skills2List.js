import React from 'react';

const Skills2List = ({ item: [technology, level] }) => {
  return (
    <tbody>
      <tr>
        <td>{technology}</td>
        <td className="level">{level}</td>
      </tr>
    </tbody>
  );
};

export default Skills2List;