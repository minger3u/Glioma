import React, {useState} from 'react';
import Accueil from './components/Accueil';
import VosDonnees from './components/VosDonnees';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Questionnaire from './components/Questionnaire';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App(){

  return(
    <div>
      <Router>
      <Navigation/>
        <div className = 'main'>
          <Route path="/" exact component={Accueil}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/VosDonnees" exact component={VosDonnees}/>
          <Route path="/Suivi" exact component={Questionnaire}/>
        </div>

      </Router>
    </div>
  );
}

export default App;