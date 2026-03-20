import React from 'react'
import './Projects.css'
import Project_Data from '../../assets/project_data'

const rotations = [-2, 3, -1, 2]

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-inner">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Things I've Built.</p>
        </div>

        <div className="projects-grid">
          {Project_Data.map((project, index) => (
            <div key={project.p_no} className="project-card-wrapper">
              <div
                className="project-card"
                style={{ '--rotation': `${rotations[index] ?? 0}deg` }}
              >
                <img src={project.p_img} alt={project.p_name} className="project-card-img" />
                <div className="project-card-overlay">
                  <h3 className="project-overlay-name">{project.p_name}</h3>
                  {project.tech_stack.length > 0 && (
                    <span className="project-overlay-tags">
                      {project.tech_stack.slice(0, 2).map(t => t.name).join(' / ')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
