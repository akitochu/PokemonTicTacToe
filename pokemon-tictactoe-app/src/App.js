import './App.css';
import {useState, useEffect, useReducer} from "react";
import axios from 'axios';

const URL = `https://pokeapi.co/api/v2/pokemon/`
const types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", 
               "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy" ]

var gameTypes = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", 
                "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy" ]

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

  const [tile1Colour, setTile1Colour] = useState("white")
  const [tile2Colour, setTile2Colour] = useState("white")
  const [tile3Colour, setTile3Colour] = useState("white")
  const [tile4Colour, setTile4Colour] = useState("white")
  const [tile5Colour, setTile5Colour] = useState("white")
  const [tile6Colour, setTile6Colour] = useState("white")
  const [tile7Colour, setTile7Colour] = useState("white")
  const [tile8Colour, setTile8Colour] = useState("white")
  const [tile9Colour, setTile9Colour] = useState("white")

  const [selectedTile, setSelectedTile] = useState("")
  const [selectedTypes, setSelectedTypes] = useState([])
  const [inputTypes, setInputTypes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [checkInput, setCheckInput] = useState(false);
  const [PLAYER_ONE_TURN, setTurn] = useState(true);


  const [type1, setType1] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type2, setType2] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type3, setType3] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type4, setType4] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type5, setType5] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type6, setType6] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)



  useEffect(() => {
    if(checkWin()){
      displayVictory();
    }

    if(tile1Colour == "grey" && selectedTile != "tile1")setTile1Colour("white");
    if(tile2Colour == "grey" && selectedTile != "tile2")setTile2Colour("white");
    if(tile3Colour == "grey" && selectedTile != "tile3")setTile3Colour("white");
    if(tile4Colour == "grey" && selectedTile != "tile4")setTile4Colour("white");
    if(tile5Colour == "grey" && selectedTile != "tile5")setTile5Colour("white");
    if(tile6Colour == "grey" && selectedTile != "tile6")setTile6Colour("white");
    if(tile7Colour == "grey" && selectedTile != "tile7")setTile7Colour("white");
    if(tile8Colour == "grey" && selectedTile != "tile8")setTile8Colour("white");
    if(tile9Colour == "grey" && selectedTile != "tile9")setTile9Colour("white");

    checkValidInput()
  })

  const checkValidInput = () => {
    if(checkInput){
      if(selectedTypes.includes(inputTypes[0]) && selectedTypes.includes(inputTypes[1])){
        console.log("CORRECT");
        if(PLAYER_ONE_TURN){
          switch(selectedTile){
            case "tile1":
              setTile1Colour("red")
              break;
            case "tile2":
              setTile2Colour("red")
              break;
            case "tile3":
              setTile3Colour("red")
              break;
            case "tile4":
              setTile4Colour("red")
              break;
            case "tile5":
              setTile5Colour("red")
              break;
            case "tile6":
              setTile6Colour("red")
              break;
            case "tile7":
              setTile7Colour("red")
              break;
            case "tile8":
              setTile8Colour("red")
              break;
            case "tile9":
              setTile9Colour("red")
              break;
          }
          }else{
            switch(selectedTile){
              case "tile1":
                setTile1Colour("blue")
                break;
              case "tile2":
                setTile2Colour("blue")
                break;
              case "tile3":
                setTile3Colour("blue")
                break;
              case "tile4":
                setTile4Colour("blue")
                break;
              case "tile5":
                setTile5Colour("blue")
                break;
              case "tile6":
                setTile6Colour("blue")
                break;
              case "tile7":
                setTile7Colour("blue")
                break;
              case "tile8":
                setTile8Colour("blue")
                break;
              case "tile9":
                setTile9Colour("blue")
                break;
          }
        }
        setCheckInput(false)
        setTurn(!PLAYER_ONE_TURN);
      }else{
        console.log("incorrect input!")
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL+"ditto")
      result.json().then(json => {
        console.log(json["types"]);
      })
    }
    fetchData();
  }, []);

  const checkWin = () => {
    console.log(tile1)
    if((tile1Colour == tile2Colour && tile2Colour == tile3Colour && tile1Colour != "white") || (tile4Colour == tile5Colour && tile5Colour == tile6Colour && tile4Colour != "white") ||
       (tile7Colour == tile8Colour && tile8Colour == tile9Colour && tile7Colour != "white") ||(tile1Colour == tile4Colour && tile4Colour == tile7Colour && tile1Colour != "white") || 
       (tile2Colour == tile5Colour && tile5Colour == tile8Colour && tile2Colour != "white") || (tile3Colour == tile6Colour && tile6Colour == tile9Colour && tile3Colour != "white")||
       (tile1Colour == tile5Colour && tile5Colour == tile9Colour && tile1Colour != "white") || (tile3Colour == tile5Colour && tile5Colour == tile7Colour && tile3Colour != "white")){
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

  const searchPokemon = () => {
    console.log("in here")
    console.log(userInput)
    axios.get(URL+userInput).then(response => {
      console.log(response["data"]["types"]["0"]["type"]["name"], "YEBOI");
      setInputTypes([response["data"]["types"]["0"]["type"]["name"], response["data"]["types"]["1"]["type"]["name"]])
      setCheckInput(true)
      console.log(inputTypes, "BOY IF U")
    }).catch(error => {
      console.error(error)
    });
  }



  return (
    <div className="App">
      <header className="App-header">
        <div>{inputTypes}</div>
        <div id="gameContainer">
        <div id="rowHeader">    
          <div>
            {type4}
          </div>
          <div>
            {type5}
          </div>
          <div>
            {type6}
          </div>
        </div>
        
        <div id="columnHeaderAndGrid">
          <div id="columnHeader"> 
            <div>
              {type1}
            </div>
            <div>
              {type2}
            </div>
            <div>
              {type3}
            </div>
          </div>
          <div id="grid">
            <div id="gridRow1">
              <button style={{background:tile1Colour}} onClick={event => {
                setSelectedTile("tile1");
                setSelectedTypes([type1, type4])
                setTile1Colour("grey")
              }}>{tile1}</button>
              <button style={{background:tile2Colour}} onClick={event => {
                setSelectedTile("tile2");
                setSelectedTypes([type2, type4])
                setTile2Colour("grey")
              }}>{tile2}</button>
              <button style={{background:tile3Colour}} onClick={event => {
                setSelectedTile("tile3");
                setSelectedTypes([type3, type4])
                setTile3Colour("grey")
              }}>{tile3}</button>
              </div>
              <div id="gridRow2">
                <button style={{background:tile4Colour}} onClick={event => {
                  setSelectedTile("tile4");
                  setSelectedTypes([type1, type5])
                  setTile4Colour("grey")
                }}>{tile4}</button>
                <button style={{background:tile5Colour}} onClick={event => {
                  setSelectedTile("tile5");
                  setSelectedTypes([type2, type5])
                  setTile5Colour("grey")
                }}>{tile5}</button>
                <button style={{background:tile6Colour}} onClick={event => {
                  setSelectedTile("tile6");
                  setSelectedTypes([type3, type5])
                  setTile6Colour("grey")
                }}>{tile6}</button>
              </div>
              <div id="gridRow3">
                <button style={{background:tile7Colour}} onClick={event => {
                  setSelectedTile("tile7");
                  setSelectedTypes([type1, type6])
                  setTile7Colour("grey")
                }}>{tile7}</button>
                <button style={{background:tile8Colour}} onClick={event => {
                  setSelectedTile("tile8");
                  setSelectedTypes([type2, type6])
                  setTile8Colour("grey")
                }}>{tile8}</button>
                <button style={{background:tile9Colour}} onClick={event => {
                  setSelectedTile("tile9");
                  setSelectedTypes([type3, type6])
                  setTile9Colour("grey")
                }}>{tile9}</button>
              </div>
            </div>  
        </div>
        
        </div>
        <div id="inputField">
          <input id="userInput" value={userInput} onChange={event => {
            setUserInput(event.target.value)
          }}></input>
          <button onClick={searchPokemon}>Submit</button>
        </div>
      </header>

      
    </div>
  );
}

export default App;
