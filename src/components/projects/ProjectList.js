// Functional component
import React from 'react'
// Utilizing this functional component makes this portion a lot more modular rather than having to re-write the code.
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}

export default ProjectList;