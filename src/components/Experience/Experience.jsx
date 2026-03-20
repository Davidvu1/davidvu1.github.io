import React from 'react'
import './Experience.css'
import Experience_Data from '../../assets/experience_data'

const Experience = () => {
  // Show real entries only (skip the placeholder "TBD" entry)
  const entries = Experience_Data.filter(e => e.e_image !== null)

  return (
    <section className="experience-section">
      <div className="experience-inner">
        <div className="experience-header">
          <h2 className="experience-title">My Work Experience</h2>
          <div className="experience-accent" />
        </div>

        <div className="experience-timeline">
          {/* Desktop center line */}
          <div className="timeline-center-line" />

          {entries.map((exp, index) => (
            <div
              key={index}
              className={`timeline-entry ${index % 2 === 0 ? 'timeline-entry--left' : 'timeline-entry--right'}`}
            >
              <div className="timeline-content">
                <span className="timeline-date">{exp.e_date}</span>
                <h3 className="timeline-role">{exp.e_desc}</h3>
                <div className="timeline-company">{exp.e_name}</div>
                <div className="timeline-location">{exp.e_place}</div>
                {exp.e_bullets && exp.e_bullets.length > 0 && (
                  <ul className="timeline-bullets">
                    {exp.e_bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="timeline-marker">
                {exp.e_image ? (
                  <img src={exp.e_image} alt={exp.e_name} className="timeline-marker-logo" />
                ) : (
                  <span className="timeline-marker-initial">{exp.e_name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
