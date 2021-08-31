import React from "react";

import Data from "./data";
import Hexa from "./Funcions";


const Population = () => {
  // Calculo de los porcentajes y creación de nuevo array de objetos
  const totalWorld = Data[0].population;
  let percentageCountry = 0
  let value = Data.map( (item) => {
    percentageCountry =  (item.population / totalWorld) * 100;
    let newObject = {}
    newObject['country'] = item.country;
    newObject['population'] = item.population.toLocaleString("es-ES");
    newObject['percentaje'] = percentageCountry.toFixed(2);
    return newObject;
  })

  const Country = ({item: {country, population, percentaje}}) => {
    /* const hexa = () => {
      let str = "12345678abcdef";
      let color = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      return "#" + color;
    }; */
    const styleColor = {
      backgroundColor: `${Hexa()}`,
      width: `${percentaje}%`,
      height: '36px',
    };
    return (
      <div className="population__data">
        <div className="country">
          <p>{country}</p>
        </div>


        <div className="bar">
          <p style={styleColor}></p>
        </div>

        <div className="percentaje">
          {population}
        </div>
      </div>
    )
  }

  const Countries = ({value}) => {
    console.log('Value: ', value)
    const countryList = value.map((item) => {
      return (
        <Country key={value.name} item={item} />
      )
    })
    return (
      <div className='gridbar__content-grid'>
        {countryList}
      </div>
    )
  }

  return (
    <div className="population__content"> 
      <h5>World Population</h5>
      <Countries value={value} />
    </div>
  );
};

export default Population;
