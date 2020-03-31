import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

function ProjectDetails(props) {
    // This is implementation of a Route-Guard. So if the user is not signed in and wants to go to Create-Project, it will be routed back to Sign-In.
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to ='/signin' />

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                <div className="card-action grey-lighten-4 grey-text">
                    <div>Posted by { project.authorFirstName } { project.authorLastName } </div>
                    <div>22nd March, 1530</div>
                </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p style= {{ color: 'white' }}>Please wait. Loading Project.</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails)
