import React from 'react';

/* RANDOM COLOURS COMPONENT */
const HexaColor = () => {
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
};

export default HexaColor;