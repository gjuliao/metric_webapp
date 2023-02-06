import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom';

const Country = () => {
  const [search, setSearch] = useState('');

  const { country } = useParams();
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-console
  console.log(search);

  const fetchDetails = () => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => setSearch(data));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchDetails(), []);

  return (
    <div>
      { search.map((item) => (
        <>
          <div>{item.capital}</div>
        </>
      ))}
      ,
    </div>
  );
};

export default Country;
