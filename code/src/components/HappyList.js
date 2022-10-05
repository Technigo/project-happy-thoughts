import React, { useState, useEffect } from 'react';

import HappyListItem from 'components/HappyListItem'

const HappyList = () => {
  const [thoughtList, setThoughtList] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((response) => response.json())
      .then((transformedResponse) => setThoughtList(transformedResponse))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'));
  }, []);

  return (
    <section>
      <HappyListItem list={thoughtList} />
    </section>
  );
}

export default HappyList