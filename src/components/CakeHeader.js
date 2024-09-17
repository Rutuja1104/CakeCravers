import React from 'react'
import "../style/cakeHeader.scss"
// import cupcakes from "../img/cupcakes.jpg"
const CakeHeader = () => {
  return (
    <div className='cakebody'> 
    <div class="sign">
      <span class="fast-flicker">ca</span>ke-cr<span class="flicker">ave</span>rs
    </div>

    {/* <img className='cupcakes' src="./cupcake-with-cherry-top.jpg"/> */}
    <img className='cupcakes' src="./cup.jpg"/>
 </div>
  )
}

export default CakeHeader