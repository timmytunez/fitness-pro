import React from 'react'
import './home.css'
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <div className='cont'>
        <div className='home'>
            <div className="left">
                <div className='homeText'>
                    <p className='textPara'>TRAIN SMARTER. GET STRONG</p>
                    <br />
                    <h1 className='homeHeader'>Simple fitness <br />experience for <br />everyone.</h1>
                    <br />
                    <p className='textPara2'>Track your workouts, get better results, and be the best <br /> version of you. Less thinking, more lifting.</p>
                </div>

                <div className='buttons'>   
                    <button className='buttonLeft'><span> Download App</span></button>
                    <button className='buttonRight'>Book a Class</button>
                </div>
            </div>

            <div className="right">
                <img src="./assets/Dark.png" alt="" className='homeImg'/>
            </div>

        </div>
    </div>
    

  )
}

export default Home