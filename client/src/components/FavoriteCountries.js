import React, { useState } from 'react';
import { useEffect } from 'react';

export default function FavoriteCountries({back}) {
  const [countries, setCountries] = useState([]);

  const handleSendBack = () => {
    back(false);
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/fav")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCountries(data);
        })
        .catch(err => console.error(err));
  }, []);
  return (
    <>
        {countries.map((country, key) => <div key={"country:" + key}>{country.country}</div>)}
        <button onClick={handleSendBack}>Back</button>
    </>
  )
}
