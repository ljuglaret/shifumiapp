import './App.css';
import { comparePoke, Poke, reglesPoke } from './Rules';

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

function game(playerChoice: Poke) {
  let computerChoice: Poke = randomEnumValue(Poke);
  const divGame = document.getElementById("game");
  if (divGame != null) {
    divGame.appendChild(divScoreP);
    divGame.appendChild(divScoreC);
    divGame.appendChild(divRule)

  }
  if (comparePoke(playerChoice, computerChoice) < 0) {
    scoreC++;
    divRule.innerHTML = "Vous perdez car " +  reglesPoke(playerChoice,computerChoice)

  }
  else if (comparePoke(playerChoice, computerChoice) > 0) {
    scoreP++;
    divRule.innerHTML =  "Vous gagnez car " +  reglesPoke(playerChoice,computerChoice)
  }
  else {
    scoreC++;
    scoreP++;
    divRule.innerHTML = reglesPoke(playerChoice,computerChoice);
  }
  
  divScoreP.innerHTML = "you : " + playerChoice + " ( " + scoreP + " ) "
  divScoreC.innerHTML = "computer : " + computerChoice + " (" + scoreC + ")";
}

export function App() {
    return (
      <div className="App">
        <header className="App-header">
          <div id='game'>
          <img src={require('../src/assets/img/Bulbi.jpg')} onClick={() => game(Poke.Bulbi)} alt='Bulbi' />
          <img src={require('../src/assets/img/Cara.jpg')} onClick={() => game(Poke.Cara)} alt='Cara' />
          <img src={require('../src/assets/img/Sala.jpg')} onClick={() => game(Poke.Sala)} alt='Sala' />
        </div>
      </header>
    </div>
  );
}

export default App;
