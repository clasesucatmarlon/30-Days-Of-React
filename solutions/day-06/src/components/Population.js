import React from "react";

/* import data from "./data"; */

const WitdhColor = ({item}) => {
  const styleColor = {
    backgroundColor: `red`,
    width: `${item}%`,
    margin: '5px',
    height: '25px',
  };
  return (
    <div style={styleColor}>
      {item}
    </div> 
  )
}

const Population = () => {
  const Data = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
  
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
    const styleColor = {
      backgroundColor: `red`,
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
