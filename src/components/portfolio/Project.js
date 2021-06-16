import React, { Component } from 'react';

// const Project = ({name,languagesIcons,source,info,picture}) => (

//     <div className="project">
//         <div className="icons">
//             {languagesIcons.map(icon =>
//                 <i className={icon} key={icon}></i>
//             )}
//         </div>
//         <h3>{name}</h3>
//         <img src={picture} alt="" />
//         <span className="infos">
//             <i className="fas fa-plus-circle"></i>
//         </span>
//     </div>
// );

// {this.props.name}
class Project extends Component {

    state = { 
        showInfo: false
    }

    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }

    render() {

        return (

            <div className="project">
                <div className="icons">
                    {this.props.languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{this.props.name}</h3>
                <img src={this.props.picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{this.props.name}</h2>
                                    <div className="sourceCode">
                                        <a href={this.props.source} target="_blank" className="button" rel="noopener noreferrer">Voir plus</a>
                                    </div>
                                </div>

                                <p className="text">{this.props.info}</p>

                                <div className="button return" onClick={this.handleInfo}>
                                Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
// const Project2 = (props) => {

//     return (
//         <div className="project">
//             <div className="icons">
//                 {props.name}
//             </div>
//         </div>
//     );
// };
// const Project4 = (props) => (
//     <div className="project">
//         <div className="icons">
//             {props.name}
//         </div>
//     </div>
// );
export default Project;