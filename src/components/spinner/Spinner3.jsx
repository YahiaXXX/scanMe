import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

function Spinner3({height,width,glassColor,color}) {
  return (
    <MagnifyingGlass
  visible={true}
  height={height}
  width={width}
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = {glassColor}
  color ={color}
/>
  )
}

export default Spinner3