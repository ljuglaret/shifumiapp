import React from 'react';
import './App.css'; 
import { comparePFC, PFC, reglesPFC } from './Rules';

const randomEnumValue = (enumeration : any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}
let scoreP = 0
let scoreC = 0;

function game(playerChoice : PFC){
  let computerChoice: PFC = randomEnumValue(PFC);
  if (comparePFC(playerChoice,computerChoice) < 0) {
    scoreC++;
  }
  else if (comparePFC(playerChoice,computerChoice) > 0){
    scoreP++;
  }
  else{
   scoreC++;
   scoreP++; 
  }
  console.log("you : "+ playerChoice + " ( " + scoreP +" ) - computer : " + computerChoice + " (" + scoreC+ ")"
                      + " : "+reglesPFC(playerChoice,computerChoice));

}

function App() {
  return (
    <div className="App">
      <header className="App-header">test
        <div>
          <img src = {require('../src/assets/img/Ciseaux.jpg')} onClick={() => game(PFC.C)} alt='Ciseaux'/>
          <img src = {require('../src/assets/img/Pierre.jpg')}  onClick={() =>  game(PFC.P)}  alt='Pierre'/>
          <img src = {require('../src/assets/img/Feuille.jpg')}  onClick={() =>  game(PFC.F)}  alt='Feuille'/>
        </div>
      </header>
    </div>
  );
}

export default App;
