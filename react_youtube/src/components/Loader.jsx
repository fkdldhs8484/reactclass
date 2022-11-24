import React from 'react'

const Loader = () => {
  return (
    <div class="all">
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="container">
        <div class="circle"></div>
      </div>
      <div class="loader">
        <div class="load-circle"></div>
      </div>
    </div>

    // <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    // <defs>
    //   <filter id="goo">
    // <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    // <feColorMatrix in="blur" mode="matrix"
    //                values="1 0 0 0 0
    //                        0 1 0 0 0
    //                        0 0 1 0 0
    //                        0 0 0 25 -8" result="goo" />
    // <feBlend in="SourceGraphic" in2="goo" />
    // </filter>
    // </defs>
    // </svg>
  )
}

export default Loader
