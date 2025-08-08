import React from 'react'
import './Projects.css'
import Project_Data from '../../assets/project_data'

const Projects = () => {
  return (
    <div className ='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
        </div>
        <div className="project-container">
            {Project_Data.map((project,index)=>{
                return <div key={index} className ='project-format'>
                    <h2>{project.p_name}</h2>
                    <p>{project.p_desc}</p>
                    <div className="project-image">
                        <img src={project.p_img} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects