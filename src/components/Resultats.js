import { render } from '@testing-library/react';
import React from 'react';
import { Line } from 'react-chartjs-2';

    
    //Visuel du graph
    const options = {
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

    //Donnees du graph
    const dataex = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: "Taux d'oxygenation",
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };

class Resultats extends React.Component{
    
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

    //Dans le render, on voit qu'on peut afficher un taux d'oxygenation avec this.props.data.oxygen_rates[0].percent
    render(){
    return(
        <div>
            <button onClick={this.showPerson}>click</button>
            <div>{this.props.data !==null ? this.props.data.oxygen_rates[0].percent : null}</div>
            <Line data={dataex} options={options} />
        </div>
    );
    }

}
export default Resultats;