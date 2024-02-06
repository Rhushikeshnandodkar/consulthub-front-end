import React from 'react'
import { LoaderStyle } from './molecule.style'
import { useSelector } from 'react-redux'
function Loader() {

  return (
    <LoaderStyle>
      <div className="loader-section">
 <div class="loader"></div> 
 </div>
    </LoaderStyle>
  )
}

export default Loader
