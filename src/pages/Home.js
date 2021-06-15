import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div class="content">
                    <h1>Issa Diallo</h1>
                    <h2>Développeur Symfony</h2>
                    <div class="pdf">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;