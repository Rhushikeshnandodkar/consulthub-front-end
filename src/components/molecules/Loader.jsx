import React from 'react'
import { LoaderStyle } from './molecule.style'
import { useSelector } from 'react-redux'
function Loader() {

  return (
    <LoaderStyle>
 <div class="loader"></div> 
    </LoaderStyle>
  )
}

export default Loader
