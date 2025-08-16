import React from 'react'
import './Experience.css'
import Experience_Data from '../../assets/experience_data'
import ProfileCard from '../ProfileCard/ProfileCard'

const Experience = () => {
  return (
    <div className='experience'>
        <div className="experience-title">
            <h1>Technical Experience</h1>
        </div>
        <div className="experience-container">
            {Experience_Data.map((experience,index)=> {
                return <ProfileCard
                    key={index}
                    name={experience.e_name}
                    title={experience.e_desc}
                    handle={experience.e_place}
                    status={experience.e_date}
                    contactText="Details"
                    avatarUrl={experience.e_image}
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    onContactClick={() => console.log(`Contact clicked for ${experience.e_name}`)}
                    backContent={experience.e_back_content}
                    backTitle={experience.e_back_title}
                />
            })}
        </div>
    </div>
  )
}

export default Experience