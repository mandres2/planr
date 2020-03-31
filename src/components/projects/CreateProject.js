import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            // This is grabbing the id of the targeted element
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // preventDefault prevents the default action of the form page to refresh when the user clicks the submit button
        e.preventDefault();
        this.props.createProject(this.state)
        // Testing Functionality: console.log(this.state);
    }
    render() {
        // This is implementation of a Route-Guard. So if the user is not signed in and wants to go to Create-Project, it will be routed back to Sign-In.
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to ='/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-daren-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn deep-orange lighten-2 z-depth-0">Create Project</button>
                        {/* When the user presses the button this line of code will trigger the handleSubmit function which prevents the page from reloading */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /* This line of code will run the function: project taking in that particular 'project data' and perform a dispatch
        and call the action creator: createProject and that will return the asynchronous function call from the projectActions.js file where then we can carry on with the dispatch of the action.
        */
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);