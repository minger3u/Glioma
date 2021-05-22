import React from 'react';

function Accueil(props){
    return(
        <div>
            <h1>Description du projet</h1>
            <p>Le suivi se ferait via un implant cérébrale qui 
                mesurerait le taux de pH et l'oxygénation au niveau de la tumeur,
                ce qui permet de connaître son évolution. Le pH étant de plus en plus acide et l'oxygénation plus faible au fer et à mesure que la tumeur grandit.
                Lorsque les résections de tumeur sont faites en chirurgie éveillée, il n'y a que très peu de conséquences, il est donc possible pour le patient de retourner chez lui le lendemain de son intervention.
                Cependant, lors des chirurgies il est très peu probable de réussir à enlever toute la tumeur qui peut se trouver dans des zones sensibles.
                Il est donc important de suivre l'évolution de la partie non retirée.
                De plus, bien que l'intervention soit pratiquement sans risque pour le patient, une chirurgie cérébrale n'est pas une intervention anodine. 
                Il pourrait dont être nécessaire d'obtenir des données avec un questionnaire afin de connaôtre l'état mental et physique du petient et lui proposer une meilleure qualité des soins en fonction de ses besoins.
            </p>
        </div>
    )
}

export default Accueil;