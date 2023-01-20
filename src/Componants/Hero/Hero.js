import React from 'react'
import LocationSelector from '../LocationSelector/LocationSelector'
import './hero.css'

function Hero() {
  return (
    <>
    <div className="hero-wrapper">
        <div className="hero">
            <div className="content">
                <LocationSelector/>
            </div>
            <div className="image">
                {/* <img src={require('../../assets/Untitled design (1).png')} alt="" /> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero