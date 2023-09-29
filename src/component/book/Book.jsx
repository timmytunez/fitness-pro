import React from 'react'
import './book.css'

const Book = () => {
  return (
    <div className='book'>
        <div className="bookT">
            <img src="./assets/book.png" alt="" className='bookI' />
        </div>

        <div className="bookF">
             <div className='bookText'>
                    <h1 className='bookH'>Book a class</h1>
                    <p className='bPara'>Track your workouts, get better results, and be the best <br />version of you. Less thinking, more lifting.</p>


                  <div className="bookIcons">
                    <div className='info'>
                      <img src="./assets/form.png" alt=""  className='bookIcons'/>
                      <div className='infoPara'>
                        <p className='infoH'>For the beginners</p>
                        <p className='infoP'>You never workout before, it’s now a <br />good start</p>
                      </div>
                    </div>

                    <div className='info'>
                      <img src="./assets/form3.png" alt="" className='bookIcons'/>
                      <div className='infoPara'>
                        <p className='infoH'>Advanced classes</p>
                        <p className='infoP'>You never workout before, it’s now a <br />good start</p>
                      </div>
                    </div>

                    <div className='info'>
                      <img src="./assets/form2.png" alt="" className='bookIcons'/>
                      <div className='infoPara'>
                        <p className='infoH'>Premium (limited)</p>
                        <p className='infoP'>You never workout before, it’s now a <br />good start</p>
                      </div>
                    </div>
                    </div>
              </div>

              <p className='lastp'><span className='green'>10% Discount</span> if you’re already using the <span className='white'>Fitness Pro</span> on App Store</p>

              <button className='lastbtn'><span className='btnT'>Book a class </span></button>
        </div>
    </div>
  )
}

export default Book