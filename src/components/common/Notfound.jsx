import React from 'react'
import { NotFoundStyle } from './common.style'
function Notfound() {
  return (
    <div>
        <NotFoundStyle>
        <div class="container">
    <h1>Ooops!</h1>
    <h4>404-PAGE NOT FOUND</h4>
    <p>The page you are looking for might not present on our website</p>
    <button class="btn"><a href="/">Go To Homepage</a></button>
</div>
        </NotFoundStyle>
      
    </div>
  )
}

export default Notfound
