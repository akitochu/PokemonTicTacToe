import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [tile1, setTile1] = useState("")
  const [tile2, setTile2] = useState("")
  const [tile3, setTile3] = useState("")
  const [tile4, setTile4] = useState("")
  const [tile5, setTile5] = useState("")
  const [tile6, setTile6] = useState("")
  const [tile7, setTile7] = useState("")
  const [tile8, setTile8] = useState("")
  const [tile9, setTile9] = useState("")
  const [PLAYER_ONE_TURN, setTurn] = useState(true);

  useEffect(() => {
    if(checkWin()){
      displayVictory();
    }
  })

  const checkWin = () => {
    console.log(tile1)
    if((tile1 == tile2 && tile2 == tile3 && tile1 != "") || (tile4 == tile5 && tile5 == tile6 && tile4 != "") || (tile7 == tile8 && tile8 == tile9 && tile7 != "")
     ||(tile1 == tile4 && tile4 == tile7 && tile1 != "") || (tile2 == tile5 && tile5 == tile8 && tile2 != "") || (tile3 == tile6 && tile6 == tile9 && tile3 != "")
     ||(tile1 == tile5 && tile5 == tile9 && tile1 != "") || (tile3 == tile5 && tile5 == tile7 && tile3 != "")){
      return true
    }else return false;  
  };

  const displayVictory = () => {
    if (PLAYER_ONE_TURN){
      console.log("Player 2 Wins")
    }else{
      console.log("Player 1 Wins")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div id="grid">
          <div id="gridRow1">
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile1("X") : setTile1("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile1}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile2("X") : setTile2("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile2}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile3("X") : setTile3("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile3}</button>
          </div>
          <div id="gridRow2">
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile4("X") : setTile4("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile4}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile5("X") : setTile5("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile5}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile6("X") : setTile6("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile6}</button>
          </div>
          <div id="gridRow3">
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile7("X") : setTile7("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile7}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile8("X") : setTile8("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile8}</button>
            <button onClick={event => {
              PLAYER_ONE_TURN ? setTile9("X") : setTile9("O");
              setTurn(!PLAYER_ONE_TURN);
            }}>{tile9}</button>
          </div>
        </div>
        
      </header>

      
    </div>
  );
}

export default App;
