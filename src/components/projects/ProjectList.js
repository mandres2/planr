// Functional component
import React from 'react'
// Utilizing this functional component makes this portion a lot more modular rather than having to re-write the code.
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <Link to = { '/project/' + project.id } >
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;