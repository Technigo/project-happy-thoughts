import React from 'react';

import Button from './Button';

const Filter = ({ onClick }) => {

  return ( 
    <div className="filter-button">
      <h3>Filter:</h3>
      <Button 
      button="button"
      click={onClick}
      text="Most likes"
      value="likes"
      />
      <Button 
      button="button"
      click={onClick}
      text="Oldest"
      value="oldest"
      />
      <Button 
      button="button"
      click={onClick}
      text="Newest"
      value=""
      />
    </div>
  )
}
export default Filter