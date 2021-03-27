import React from 'react'

const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="title" tabIndex="0">HAPPY THOUGHTS TWITTER
      </h1>
        <h2 className="twitter-info" tabIndex="0">100% positivity
        </h2>
        <h2 className="twitter-info" tabIndex="0">0% former American presidents
        </h2>
        <h2 className="twitter-info" tabIndex="0">Simply 140 characters to...
        </h2> 
          <h3 className="summoning" tabIndex="0">
            <span className="thought-bubble" role="img" aria-label="thought bubble emoji">💭</span>
            Release Your Happy Thoughts!
            <span className="thought-bubble" role="img" aria-label="thought bubble emoji">💭</span>
          </h3> 
    </header>
  )
}

export default Header