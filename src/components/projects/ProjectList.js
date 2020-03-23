// Functional component
import React from 'react'
// Utilizing this functional component makes this portion a lot more modular rather than having to re-write the code.
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;