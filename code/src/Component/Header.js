import React from 'react';

const Header = () => {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src="./assets/happy.mp4" type="video/mp4"></source>
        Your browser does not support HTML5 video.
      </video>
      <h1 className="header-title"> Happy Thought <br></br><span className="header-subtitle">Happy day</span></h1>
    </div>
    );
}
 
export default Header;