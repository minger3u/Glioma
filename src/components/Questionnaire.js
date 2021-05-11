import React from 'react';


function Questionnaire(props){

    function onSubmit(e){
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="question">
                    <label htmlFor="q1">Combien de temps prenez-vous pour vous endormir?</label>
                        <div>
                            <input type="radio" id="r1" name="q1" value="r1"></input>
                            <label htmlFor="r1">Jamais plus de 30 minutes</label>
                            <input type="radio" id="r2" name="q1" value="r2"></input>
                            <label htmlFor="r2">Parfois au moins 30 minutes</label>
                            <input type="radio" id="r3" name="q1" value="r3"></input>
                            <label htmlFor="r3">Souvent au moins 30 minutes</label>
                            <input type="radio" id="r4" name="q1" value="r4"></input>
                            <label htmlFor="r4">La plupart du temps plus de 30 minutes</label>
                        </div>
                    <div className="question">
                        <label htmlFor="q2">Comment se passe votre milieu de nuit?</label>
                        <div>
                            <input type="radio" id="r1" name="q2" value="r1"></input>
                            <label htmlFor="r1">Ne se réveille jamais</label>
                            <input type="radio" id="r2" name="q2" value="r2"></input>
                            <label htmlFor="r2">Sommeil agité et léger avec peu de réveil</label>
                            <input type="radio" id="r3" name="q2" value="r3"></input>
                            <label htmlFor="r3">Se réveille au moins 1 fois par nuit et se rendors facilement</label>
                            <input type="radio" id="r4" name="q2" value="r4"></input>
                            <label htmlFor="r4">Se réveille plus d'une fois par nuit et a du mal à se rendormir</label>
                        </div>
                    </div>
                    <div className="question">
                    <label htmlFor="q3">Faites-vous de l'hypersomnie?</label>
                        <div>
                            <input type="radio" id="r1" name="q1" value="r1"></input>
                            <label htmlFor="r1">Ne dors pas plus de 7-8h par nuit</label>
                            <input type="radio" id="r2" name="q1" value="r2"></input>
                            <label htmlFor="r2">Ne dors pas plus de 10h pendant une période de 24h</label>
                            <input type="radio" id="r3" name="q1" value="r3"></input>
                            <label htmlFor="r3">Ne dors pas plus de 12h pendant une période de 24h</label>
                            <input type="radio" id="r4" name="q1" value="r4"></input>
                            <label htmlFor="r4">Dors plus de 12h pendant une période de 24h</label>
                        </div>
                        </div>
                </div>
                <div className="questionnaire">
                    <input type="submit" value="Valider"></input>
                </div>
            </form>
        </div>
    )
}

export default Questionnaire;