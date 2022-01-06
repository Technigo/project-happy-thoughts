import React from 'react'

const Footer = (props) => {
  return (
    <footer>
      <a
        href='https://www.linkedin.com/in/katie-wu-213a82150/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p>{props.textLineOne}</p>
      </a>
      <p>{props.textLineTwo}</p>
    </footer>
  )
}

export default Footer
