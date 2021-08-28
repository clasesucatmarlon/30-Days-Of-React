import React from 'react';

/* NUMBERS GENERATOR COMPONENT */
const Numbers = () => {
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
};

export default Numbers;