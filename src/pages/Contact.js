import React from 'react';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Ferney-Voltaire</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <span>06 03 59 86 00</span>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <span>contact@issa-diallo.com</span>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">

                    <ul>
                        <a href="https://www.linkedin.com/in/issa-diallo/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/Dial1201" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Contact;