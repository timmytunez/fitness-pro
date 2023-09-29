import React from 'react'
import './how.css'

const How = () => {
  return (
    <div className='how'>
        <div>

            <div className="work">
                <p className='workP'>We work with people from over the world</p>

                <img src="./assets/worklogo.png" alt="" className='workLogo' />
                    
            </div>

            <div className="howWork">
                <div className="howCon">
                    
                    <div className="howText">
                        <h1 className='hHeader'>How it work</h1>
                        <p className='hPara'>Stacks is a production-ready library of stackable <br /> content blocks built in React Native.</p>
                    </div>

                    <div className="howIcons">
                        <img src="./assets/Frame 790.png" alt="" className='howI'/>
                    </div>

                     <div className="howItext">
                            <div>
                                <p className='howP'>Step 1</p>
                                <p className='howP2'>Download</p> 
                                <p className='howP3'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
                            </div>

                            <div>
                                <p className='howP'>Step 2</p>
                                <p className='howP2'>Choose your trainner</p> 
                                <p className='howP3'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
                            </div>


                            <div>
                                <p className='howP'>Step 3</p>
                                <p className='howP2'> Set the goals</p> 
                                <p className='howP3'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
                            </div>

                            <div>
                                <p className='howP'>Step 4</p>
                                <p className='howP2'>Workout time</p> 
                                <p className='howP3'>Fitness Pro tracks your workouts, get <br /> better results, and be the best <br />version of you.</p>
                            </div>

                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default How