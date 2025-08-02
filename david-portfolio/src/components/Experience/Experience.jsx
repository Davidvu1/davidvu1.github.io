import React from 'react'
import './Experience.css'
import Experience_Data from '../../assets/experience_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Experience = () => {
  return (
    <div className='experience'>
        <div className="experience-title">
            <h1>Technical Experience</h1>
        </div>
        <div className="experience-container">
            {Experience_Data.map((experience,index)=> {
                return <div key={index} className ='experience-format'>
                    <h2>{experience.e_name}</h2>
                    <p>{experience.e_desc}</p>
                    <div className="experience-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Experience