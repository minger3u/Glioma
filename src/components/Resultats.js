import React from 'react';
import { Line } from 'react-chartjs-2';
   
class Resultats extends React.Component{

  //Visuel du graph
  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  //Données du graph
  datapH = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: "Taux de pH",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  dataox = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: "Taux d'oxygénation'",
        data: [80, 70, 76, 71, 65, 55],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

    constructor(props){
        super(props);
        this.state= {
            person: null,
        }
    }
    
    componentDidMount= async ()=>{
        const datajs = require('../utils/patients.json');
        this.setState({person: datajs[1]});
    }

    //verifie simplement si on a reussi a recuperer les infos de la personne
    showPerson=()=>{
        console.log(this.props.data.oxygen_rates);
    }

    render(){
    return(
        <div>
            <h1>Résultats</h1>
            <button onClick={this.showPerson}>Click</button>
            <p>Taux pH (ne pas desendre en dessous de 6)</p>
            <Line data={this.datapH} options={this.options} />
            <p>Taux d'oxygénation (ne pas desendre en dessous de 50%)</p>
            <Line data={this.dataox} options={this.options} />
        </div>
    );
    }

}
export default Resultats;