import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Php", xp: 1.8 },
            { id: 2, value: "Css", xp: 1.8 },
            { id: 3, value: "Javascript", xp: 1.6 },
            { id: 4, value: "Python", xp: 0.8 },
        ],
        frameworks: [
            { id: 1, value: "Symfony", xp: 1.6 },
            { id: 2, value: "Bootstrap", xp: 1.8 },
            { id: 3, value: "Sass", xp: 1 },
            { id: 4, value: "React", xp: 0.6 },
            { id: 5, value: "Django", xp: 0.6 },
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothèques"
                className="frameworksDisplay"
                />

            </div>
        );
    }
}

export default Languages;