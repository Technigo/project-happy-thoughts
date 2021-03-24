import React from 'react'
//react-spinner-loader to get hearts when API is loading 
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 

const Loading = () => {
  return (
    <div className="loader" align="center">
      <Loader 
       type="Hearts"
       color="#f09d9d"
       height={500}
       width={100}
       timeout={3000}
      />
    </div>
  )
}

export default Loading