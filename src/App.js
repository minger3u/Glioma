import React, {useState} from 'react';
import Accueil from './components/Accueil';
import VosDonnees from './components/VosDonnees';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import './App.css';

function App(){

  const [main, setMain] = useState(<Accueil/>);
  const [mainName, setMainName] = useState("Accueil");
  const [isconnected, setIsConnected] = useState(false);
  const [userID, setUserID] = useState(0);
  const [connecting, setConnecting] = useState(false);

  const clickAccueil = () => {
    setMain(<Accueil id={userID} conn={isconnected}/>);
    setMainName("Accueil");
  }

  const clickDonnees = () => {
    setMainName("VosDonnees");
    setMain(<VosDonnees id={userID} conn={isconnected}/>);
    //setMainName("VosDonnees");
    console.log(mainName);
  }

  const clickContact = () => {
    setMain(<Contact id={userID} conn={isconnected}/>);
    setMainName("Contact");
  }

  const clickConnect = () => {
    //setMain(<Accueil id={userID} conn={isconnected}/>);
    if (mainName == "VosDonnes"){
      setMain(<Accueil id={userID}/>);
    }
    setIsConnected(!isconnected);
    setConnecting(!connecting);
  }

  return(
    <div>
      <div className = 'bandeau'>
        <button onClick={clickAccueil} className = "button1">ACCUEIL</button>
        <button disabled={isconnected ? false : true} onClick={clickDonnees} className = "button1">VOS DONNÉES</button>
        <button onClick={clickContact} className = "button1">CONTACT</button>
      </div>
      <div className = 'main'>
        {main}
      </div>
      <div className = 'connexion' isconnected={isconnected} connecting={connecting}>
        <button onClick={clickConnect} className = "button1">{isconnected ? 'SE DÉCONNECTER' : ' SE CONNECTER'}</button>
      </div>
    </div>
  );
}

export default App;