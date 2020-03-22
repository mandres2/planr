// This will be a class-based component
import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    {/* 12 columns on small screens and on medium size screens exhibit 6 columns  */}
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                        <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard;