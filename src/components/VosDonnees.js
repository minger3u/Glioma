import React, {useState} from 'react';
import Questionnaire from './Questionnaire';
import Resultat from './Resultats';


function VosDonnees(props){
    

    const[openQ, setOpenQ] = useState(false);

    const clickQuestionnaire = () =>{
        setOpenQ(!openQ);
    }

    return(
        <div>
            <h1>Informations</h1>
            <p>Âge: 64</p>
            <p>Sexe: F</p>
            <p>Date de l'opération: 22/03/2021</p>
            <h1>Suivi</h1>
            <p>Afin d'obtenir toutes les informations nécessaires merci de remplir chaque semaine le questionnaire suivant</p>
            <button onClick={clickQuestionnaire} userid={props.userID}>{openQ ? 'Annuler' : 'Remplir le questionnaire'}</button>
            {openQ ? <Questionnaire/> : ''}
            <Resultat/>
        </div>
    )
}

export default VosDonnees;