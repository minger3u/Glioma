import React from 'react';
import Questionnaire from './Questionnaire';
import Resultat from './Resultats';

class VosDonnees extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openQ:false,
            data:null,
            age:null,
        }
    }

    componentDidMount= async ()=>{
        const datajs = require('../utils/patients.json');
        this.setState({data: datajs[0]});
        //Obtention de l'age de l'utilisateur avec sa date de naissance
        const birthDate = datajs[0].date_of_birth;
        const dob = new Date(birthDate);
        const monthDiff = Date.now() - dob.getTime();
        const age_dt = new Date(monthDiff);
        const year = age_dt.getUTCFullYear();
        const age = Math.abs(year - 1970);
        this.setState({age: age});
    }

    clickQuestionnaire = () =>{
        this.setState({openQ: !this.state.openQ});
    }

    showDetails = () => {
        return (
            <div>
                <div>Mail: {this.state.data.mail}</div>
                <div>Besoin d'une consultation: {this.state.data.need_consultation ? "Oui" : "Non"}</div>
                <div>Localisation de la tumeur: {this.state.data.localisation_tumor}</div>
                <div>Âge: {this.state.age}</div>
                <div>Sexe: {this.state.data.sex}</div>
            </div>
        )
    }

    render(){
    return(
        <div>
            <h1>Informations</h1>
            <div>{this.state.data !== null ? this.showDetails() : null}</div>
            <p>Date de l'opération: 22/03/2021</p>
            
            <Resultat data={this.state.data}/>
        </div>
    )
}
}

export default VosDonnees;