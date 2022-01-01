import React, { createElement } from 'react';
import './App.css';
import { comparePFC, PFC, reglesPFC } from './Rules';

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

function game(playerChoice: PFC) {
  let computerChoice: PFC = randomEnumValue(PFC);
  const divGame = document.getElementById("game");
  if (divGame != null) {
    divGame.appendChild(divScoreP);
    divGame.appendChild(divScoreC);
    divGame.appendChild(divRule)

  }
  if (comparePFC(playerChoice, computerChoice) < 0) {
    scoreC++;
    divRule.innerHTML = "Vous perdez car " +  reglesPFC(playerChoice,computerChoice)

  }
  else if (comparePFC(playerChoice, computerChoice) > 0) {
    scoreP++;
    divRule.innerHTML =  "Vous gagnez car " +  reglesPFC(playerChoice,computerChoice)
  }
  else {
    scoreC++;
    scoreP++;
    divRule.innerHTML = reglesPFC(playerChoice,computerChoice);
  }
  
  divScoreP.innerHTML = "you : " + playerChoice + " ( " + scoreP + " ) "
  divScoreC.innerHTML = "computer : " + computerChoice + " (" + scoreC + ")";
}

export function AppPFC() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='game'>
          <img src={require('../src/assets/img/Ciseaux.jpg')} onClick={() => game(PFC.C)} alt='Ciseaux' />
          <img src={require('../src/assets/img/Pierre.jpg')} onClick={() => game(PFC.P)} alt='Pierre' />
          <img src={require('../src/assets/img/Feuille.jpg')} onClick={() => game(PFC.F)} alt='Feuille' />
        </div>
      </header>
    </div>
  );
}

export default AppPFC;
