import React, {useState, useEffect} from 'react';
// REST API: https://restcountries.eu/

const InfoCountries = () => {
  const [countries, setCountries] = useState()
  const [country, setCountry] = useState('')
  const url ='https://restcountries.eu/rest/v2/all'
  //const url ='https://jsonplaceholder.typicode.com/todos'
  //const url = 'https://restcountries.eu/rest/v2/alpha/col' 
  
  const getCountries = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setCountries(responseJSON)
    const arrayCode = []
    await responseJSON.map(code => arrayCode.push(code.alpha3Code))
    let randomElement = arrayCode[Math.floor(Math.random()*arrayCode.length)];
    getCountry(randomElement)
  }

  const getCountry =  async (randomElement) => {
    const url2 = `https://restcountries.eu/rest/v2/alpha/${randomElement}`
    const response2 = await fetch(url2)
    const responseJSON2 = await response2.json()
    setCountry(responseJSON2)
    console.log(responseJSON2)
  }

  useEffect(() => {
    getCountries()
    console.log(country)
  }, [])

  return ( 
    <div className="infocountries__content">
      <h5>Información países</h5>
      <div className='card__country'>
        <img src={country.flag} alt={country.name}/>
        <h4> {country.name }</h4>
        <div className='card__country-information'>
          <table>
            <thead>
              <tr>
                <th>Capital</th>
                <th>Languaje</th>
                <th>Currencie</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{country.capital ? country.capital : 'No information'}</td>
                <td>{country.languages ? country.languages[0].name : 'No information'}</td>
                <td>{country.currencies ? country.currencies[0].name : 'No information'}</td>
                <td>{country.population ? country.population.toLocaleString("es-ES") : 'No information'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card__country-button">
          <button onClick={getCountries} >Other country</button>
        </div>

        {/* <button onClick={getCountries}>Cambiar</button> */}
      </div>
      
    </div>
  );
}

export default InfoCountries;