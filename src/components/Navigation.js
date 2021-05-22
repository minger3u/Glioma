import React from 'react';
import {Link} from 'react-router-dom';
import LogoSuivi from './images/Logo_suivi.png';
import LogoContact from './images/Logo_contact.png';
import LogoAccueil from './images/Logo_Accueil.png';
import LogoDonnees from './images/Logo_donnees.png';

function Navigation(props){
    return(
        <div>
            <div className = 'bandeau'>
                <Link to="/">
                <img src={LogoAccueil} alt="Accueil"></img>
                </Link>

                <Link to="/VosDonnees">
                <img src={LogoDonnees} alt="Donnees"></img>
                </Link>

                <Link to="/Suivi">
                <img src={LogoSuivi} alt="Suivi"></img>
                </Link>
                
                <Link to="/Contact">
                <img src={LogoContact} alt="Contact"></img>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;