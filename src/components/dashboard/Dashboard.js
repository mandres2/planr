// This will be a class-based component
import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
// This line of code is the glue that connects Redux to React
import { connect } from 'react-redux'
// Firestore is now binding to React. This is a higher-order component that is binded to a Firestore component
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    {/* 12 columns on small screens and on medium size screens exhibit 6 columns  */}
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                        <Notifications />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
        firestoreConnect([
            { collection: 'projects'}
        ])
    )(Dashboard);