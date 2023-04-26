/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div>
      <div className='About'>
        <Header/>
        <section>
            <h1>Welcome to <br/> SIREMAR</h1>
            <p>This is your home.</p>
            <button className='Button'>Get Started</button>
        </section>
      </div>
      <div className='info'>
      <h2>About Siremar</h2>
        <p>Margarita is a beautiful Island located in South America; it belongs to Venezuela. This island gets its budget from Central government based on its population.
          Siremar aims to keep a dynamic count of all residents of the Island so that the island can get a stable, sound budget from Central Government. 
          The system will require all Residents to register. Registration can be online or in our offices. . Siremar will provide an ID and a lot of benefits to residents.</p>
      </div>
    </div>
  )
}

export default About