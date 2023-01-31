import React from 'react'
import {BallTriangle} from "react-loader-spinner";
function Spinner2({color,height,width}) {
  return (
    <BallTriangle
  height={height}
  width={width}
  radius={5}
  color={color}
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  )
}

export default Spinner2