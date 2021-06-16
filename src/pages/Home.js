import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div class="content">
                    <h1>Issa Diallo</h1>
                    <h2>Développeur Web</h2>
                    <p>Bonjour à tous, après une carrière m'ayant fait découvrir plusieurs millieux professionnels et exercé différents métiers; j'ai décidé de me lancer à fond dans l'apprentissage du code. Depuis plus d'un an je me forme à PHP et son framework Symfony, Javascript et React js. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder.</p>
                    <div class="pdf">
                        <a href="./media/Issa_Diallo_CV.PDF" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;