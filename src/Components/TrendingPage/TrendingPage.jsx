import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./TrendingPage.css"

function TrendingPage() {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((response) => setCountries(response));
    }, []);
  return (
    <div className="grid-container">
    {countries.map((country) => (
      <div key={country.id} className="card">
        <div className="card-flag-container">
          <Link to={country.alpha2Code}>
            <img className="card-flag" src={country.flags.svg} alt="" />
          </Link>
        </div>
        <div className="card-info">
          <h2>{country.name}</h2>
          <p>
            Population: <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default TrendingPage