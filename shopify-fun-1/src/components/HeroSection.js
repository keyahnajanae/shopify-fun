import React from 'react';
import "./HeroSection.css";
import "../App.css"
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
<video src ="public/videos/Screen Recording 2022-02-09 at 8.07.05 PM.mp4" autoPlay loop muted/>
<h1>New Designer Awaits</h1>
<p>Try not to hurry too fast</p>
<div className="hero-btns">
    <Button className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'>Get Started
    </Button>
    <Button className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--large'>Watch Trailer <i className="far fa-play-circle"/>
    </Button>
</div>

    </div>
  )
}

export default HeroSection