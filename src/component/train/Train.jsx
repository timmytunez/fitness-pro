import React from 'react'
import './train.css'
const Train = () => {
  return (
    <div className='train'>
        <div className='train1'>
            <div className="trainT">
                <h1 className='tHeader'>Train smarter, <br /> get stronger.</h1>
                <p className='tPara'>Fitness Pro helps track your workouts, get better results, <br /> and be the best version of you. Less thinking, more <br />lifting 🔥🏀</p>
            </div>

            <button className='tButton'><p className='bt'>Start free trial</p></button>
        </div>

        <div className='train2'>
            <img src="./assets/train.png" alt="" className='trainI'/>
        </div>
    </div>
  )
}

export default Train