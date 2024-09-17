import React from 'react'
// import "../img/cake.jpg"
import "../style/Home.scss"
const Home = () => {
  return (
    <div className='m-2 d-flex flex-row gap-4' style={{width:"99%",height:"auto"}}>
      <img className='' style={{width:"50%",  boxShadow: "#6161cf 23px 24px 66px 10px"}} src="./newcake.avif"/>
      <div style={{width:"50%",  boxShadow: "#6161cf 23px 24px 66px 10px",borderTop:"2px solid"}}  className='p-6'>
        {/* <h1 className='text-center'>Cheers to cake and good times. </h1> */}
        <div class="container">

    <div class="animate one">
      <span>C</span><span>H</span><span>E</span><span>E</span><span>R</span><span>S</span> &nbsp;
      <span>T</span><span>O</span> &nbsp;
      <span>C</span><span>A</span><span>K</span><span>E</span> &nbsp;
      <span>&</span>&nbsp;
      <span>G</span><span>O</span><span>O</span><span>D</span> &nbsp;
      <span>T</span><span>I</span><span>M</span><span>E</span><span>S</span>
          </div>

  </div>
      </div>
    </div>
  )
}

export default Home