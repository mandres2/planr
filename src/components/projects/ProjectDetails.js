import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore placeat delectus aliquam commodi nam ducimus non est fugit dignissimos distinctio quaerat corrupti facere ex totam esse voluptatem, amet aperiam.</p>
                </div>
            <div className="card-action grey-lighten-4 grey-text">
                <div>Posted by LimboLinux</div>
                <div>22nd March, 1530</div>
            </div>
            </div>
        </div>
    )
}

export default ProjectDetails
