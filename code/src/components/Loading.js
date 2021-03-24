import React from 'react'
import { css } from "@emotion/core"
import PropagateLoader from 'react-spinners/PropagateLoader'

const Loading = ({loading}) => {
  const override = css`
  display: block;
  text-align: center;
  border-color: red;
`;

  return(
    <div className="spinner-container">
      <PropagateLoader color="pink" size={15} loading={loading}/>
    </div>
  )
}

export default Loading