import React from 'react';

import Button from './Button';

const Sort = ({ onClick }) => {

  return ( 
    <div className="filter-button">
      <h3>Filter:</h3>
      <div className="button-wrapper">
        <Button 
          button="button"
          click={onClick}
          text="Most likes"
          value="likes"
          className="filter-btn"
        />
        <Button 
          button="button"
          click={onClick}
          text="Oldest"
          value="oldest"
          className="filter-btn"
        />
        <Button 
          button="button"
          click={onClick}
          text="Newest"
          value="newest"
          className="filter-btn"
        />
      </div>
    </div>
  )
}
export default Sort