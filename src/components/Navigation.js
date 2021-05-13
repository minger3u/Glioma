import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return(
        <div>
            <div className = 'bandeau'>
                <Link to="/">
                <button className = "button1">ACCUEIL</button>
                </Link>

                <Link to="/VosDonnees">
                <button className = "button1">VOS DONNÉES</button>
                </Link>
                
                <Link to="/Contact">
                <button className = "button1">CONTACT</button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;