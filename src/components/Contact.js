import React from 'react';

function Contact(props){
    
    return(
        <div>
            <h1>Coordonnées</h1>
            <div className="localisation">
                <p>Siège social: 75 rue de Rivoli Paris 75 001</p>
            </div>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">contact@glioma.fr</a>
            <div>
                <a href="https://www.linkedin.com">Glioma Entreprise</a>
            </div>
            <div>
                <a>06 63 00 14 82</a>
            </div>
            <h1>Prise de rendez-vous</h1>
        </div>
    )
}

export default Contact;