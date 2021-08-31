import React from 'react';

const Color = ({col}) => {
  const styleColor = {
    background: `${col}`,
    width: '84px',
    height: '80px',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontBold: 'bold',
    border: '1px solid white',
  };
  return (
    <div className="" style={styleColor}>
      {col}
    </div>
  )
}

const GridHexa = () => {
  const array = [];
  for (let i = 1; i < 32; i++) {
    array.push(i);
  }
  const hexa = () => {
    let str = "12345678abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  return ( 
    <div className="gridhexa__content">
      <h5>Colours Hexademimal Generator</h5>
      <div className="gridhexa__content-grid">
        {
          array.map(item => (
            <Color col={hexa()} />
          ))
        }
      </div>
        
    </div>
  );
}
export default GridHexa;
