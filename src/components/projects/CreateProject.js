import React, { Component } from 'react'

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
        console.log(this.state);
    }
    render() {
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
                        <button className="btn cyan-lighten-2 z-depth-0">Create Project</button>
                        {/* When the user presses the button this line of code will trigger the handleSubmit function which prevents the page from reloading */}
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;