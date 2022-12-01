import React from 'react'

const SiteHeader = () => {
  return (
    <section className="header-container">
      <header>
        <section>
          <div className="container">
            <div className="logo"><b>Send <span>som</span>e<span> h</span><span>a</span><span>p</span><span>py</span> thoughts</b></div>
          </div>
          <div className="scroll-wrap">
            <h2>scroll down</h2>
            <span className="scroll-down">⌄</span>
          </div>
        </section>
      </header>
    </section>
  )
}
export default SiteHeader;
