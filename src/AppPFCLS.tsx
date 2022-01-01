import './App.css';
import { comparePFCLS, PFCLS, reglesPFCLS } from './Rules';
import React from 'react';


const randomEnumValue = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}
let scoreP = 0
let scoreC = 0;
const divScoreP = document.createElement("div");
const divScoreC = document.createElement("div");
const divRule =  document.createElement("div");

function game(playerChoice: PFCLS) {
  let computerChoice: PFCLS = randomEnumValue(PFCLS);
  const divGame = document.getElementById("game");
  if (divGame != null) {
    divGame.appendChild(divScoreP);
    divGame.appendChild(divScoreC);
    divGame.appendChild(divRule)

  }
  if (comparePFCLS(playerChoice, computerChoice) < 0) {
    scoreC++;
    divRule.innerHTML = "Vous perdez car " +  reglesPFCLS(playerChoice,computerChoice)

  }
  else if (comparePFCLS(playerChoice, computerChoice) > 0) {
    scoreP++;
    divRule.innerHTML =  "Vous gagnez car " +  reglesPFCLS(playerChoice,computerChoice)
  }
  else {
    scoreC++;
    scoreP++;
    divRule.innerHTML = reglesPFCLS(playerChoice,computerChoice);
  }
  
  divScoreP.innerHTML = "you : " + playerChoice + " ( " + scoreP + " ) "
  divScoreC.innerHTML = "computer : " + computerChoice + " (" + scoreC + ")";
}

export function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='game'>
          <img src={require('../src/assets/img/Ciseaux.jpg')} onClick={() => game(PFCLS.C)} alt='Ciseaux' />
          <img src={require('../src/assets/img/Pierre.jpg')} onClick={() => game(PFCLS.P)} alt='Pierre' />
          <img src={require('../src/assets/img/Feuille.jpg')} onClick={() => game(PFCLS.F)} alt='Feuille' />
          <img src={require('../src/assets/img/Lezard.jpg')} onClick={() => game(PFCLS.L)} alt='Lezard' />
          <img src={require('../src/assets/img/Spock.jpg')} onClick={() => game(PFCLS.S)} alt='Spock' />

        </div>
      </header>
    </div>
  );
}

export default App1;
