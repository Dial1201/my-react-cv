
import React, { Component } from 'react';
import {portfolioData} from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects: portfolioData
    };

    render() {
        let { projects } = this.state;
        console.log(projects);

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">

                </ul>

                <div className="projects">
                    {
                        projects.map(project => {
                            return (
                                <Project
                                    key={project.id}  
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;