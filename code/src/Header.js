import React from 'react';

export const Header = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>HAPPY THOUGHTS<sup>&copy;</sup></p>
      </div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className="posts-liked">
        <p className="my-likes">{props.myLikesCount} likes</p>
      </div>
      <div className="hamburger-div">
        <label htmlFor="hamburger" className="hamburger">☰
          <input type="checkbox" />
        </label>
      </div>
    </div>
  )
}
