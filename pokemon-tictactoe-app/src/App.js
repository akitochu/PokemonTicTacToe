import './App.css';
import {useState, useEffect} from "react";
//import {Card} from 'react-bootstrap';
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
  const [selectedPokemonId, setSelectedPokemonId] = useState("");
  const [PLAYER_ONE_TURN, setTurn] = useState(true);
  const [usedPokemonHistory, setUsedPokemonHistory] = useState([])

  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)


  
  const [type1, setType1] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type1), 1)
  const [type2, setType2] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type2), 1)
  const [type3, setType3] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type3), 1)
  const [type4, setType4] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type4), 1)
  const [type5, setType5] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type5), 1)
  const [type6, setType6] = useState(gameTypes[Math.floor(Math.random() * gameTypes.length)])
  gameTypes.splice(gameTypes.indexOf(type6), 1)


  const resetBoard = () => {
    setTile1Colour("white")
    setTile2Colour("white")
    setTile3Colour("white")
    setTile4Colour("white")
    setTile5Colour("white")
    setTile6Colour("white")
    setTile7Colour("white")
    setTile8Colour("white")
    setTile9Colour("white")
    gameTypes = types
    var randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType1(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
    randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType2(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
    randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType3(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
    randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType4(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
    randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType5(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
    randomType=gameTypes[Math.floor(Math.random() * gameTypes.length)]
    setType6(randomType)
    gameTypes.splice(gameTypes.indexOf(randomType), 1)
    console.log(gameTypes)
  }

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
    setUsedPokemonHistory(usedPokemonHistory)
    console.log(usedPokemonHistory, "TEST")
  })

  const checkValidInput = () => {
    if(checkInput){
      if(selectedTypes.includes(inputTypes[0]) && selectedTypes.includes(inputTypes[1])){
        console.log("CORRECT");
        if(PLAYER_ONE_TURN){
          switch(selectedTile){
            case "tile1":
              setTile1Colour("red")
              addToPokemonHistory()
              break;
            case "tile2":
              setTile2Colour("red")
              addToPokemonHistory()
              break;
            case "tile3":
              setTile3Colour("red")
              addToPokemonHistory()
              break;
            case "tile4":
              setTile4Colour("red")
              addToPokemonHistory()
              break;
            case "tile5":
              setTile5Colour("red")
              addToPokemonHistory()
              break;
            case "tile6":
              setTile6Colour("red")
              addToPokemonHistory()
              break;
            case "tile7":
              setTile7Colour("red")
              addToPokemonHistory()
              break;
            case "tile8":
              setTile8Colour("red")
              addToPokemonHistory()
              break;
            case "tile9":
              setTile9Colour("red")
              addToPokemonHistory()
              break;
          }
          }else{
            switch(selectedTile){
              case "tile1":
                setTile1Colour("blue")
                addToPokemonHistory()
                break;
              case "tile2":
                setTile2Colour("blue")
                addToPokemonHistory()
                break;
              case "tile3":
                setTile3Colour("blue")
                addToPokemonHistory()
                break;
              case "tile4":
                setTile4Colour("blue")
                addToPokemonHistory()
                break;
              case "tile5":
                setTile5Colour("blue")
                addToPokemonHistory()
                break;
              case "tile6":
                setTile6Colour("blue")
                addToPokemonHistory()
                break;
              case "tile7":
                setTile7Colour("blue")
                addToPokemonHistory()
                break;
              case "tile8":
                setTile8Colour("blue")
                addToPokemonHistory()
                break;
              case "tile9":
                setTile9Colour("blue")
                addToPokemonHistory()
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
        console.log(json);
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
      setPlayerTwoScore(prev => prev + 1)
      resetBoard()
      console.log("Player 2 Wins")
    }else{
      setPlayerOneScore(prev => prev + 1)
      resetBoard()
      console.log("Player 1 Wins")
    }
  }

  const searchPokemon = () => {
    console.log("in here")
    console.log(userInput)
    axios.get(URL+userInput).then(response => {
      setInputTypes([response["data"]["types"]["0"]["type"]["name"], response["data"]["types"]["1"]["type"]["name"]])
      setCheckInput(true)
      setSelectedPokemonId(response["data"]["id"])
    }).catch(error => {
      console.error(error)
    });
  }

  const addToPokemonHistory = () => {
    const newPokemon = {
      id:selectedPokemonId,
      value:userInput
    }

    if(newPokemon){
      console.log("newPokemon", newPokemon)
      console.log(usedPokemonHistory)
      let history = [...usedPokemonHistory]
      history.push(newPokemon)
      console.log("history", history)
      setUsedPokemonHistory(history)
      setUserInput("")
      console.log(usedPokemonHistory)
    }
  }

  useEffect(() => {
    console.log("updated pokemon history", usedPokemonHistory)
  }, [usedPokemonHistory])



  return (
    <div className="App">
      <header className="App-header">
        <div id="score">
          {playerOneScore} - {playerTwoScore}
        </div>
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
                  if(tile1Colour != "blue" && tile1Colour != "red"){
                    setSelectedTile("tile1");
                    setSelectedTypes([type1, type4])
                    setTile1Colour("grey")
                  }
                }}>{tile1}</button>
                <button style={{background:tile2Colour}} onClick={event => {
                  if(tile2Colour != "blue" && tile2Colour != "red"){
                    setSelectedTile("tile2");
                    setSelectedTypes([type2, type4])
                    setTile2Colour("grey")
                  }
                }}>{tile2}</button>
                <button style={{background:tile3Colour}} onClick={event => {
                  if(tile3Colour != "blue" && tile3Colour != "red"){
                    setSelectedTile("tile3");
                    setSelectedTypes([type3, type4])
                    setTile3Colour("grey")
                  }
                }}>{tile3}</button>
                </div>
                <div id="gridRow2">
                  <button style={{background:tile4Colour}} onClick={event => {
                    if(tile4Colour != "blue" && tile4Colour != "red"){
                      setSelectedTile("tile4");
                      setSelectedTypes([type1, type5])
                      setTile4Colour("grey")
                    }
                  }}>{tile4}</button>
                  <button style={{background:tile5Colour}} onClick={event => {
                    if(tile5Colour != "blue" && tile5Colour != "red"){
                      setSelectedTile("tile5");
                      setSelectedTypes([type2, type5])
                      setTile5Colour("grey")
                    }
                  }}>{tile5}</button>
                  <button style={{background:tile6Colour}} onClick={event => {
                    if(tile6Colour != "blue" && tile6Colour != "red"){
                      setSelectedTile("tile6");
                      setSelectedTypes([type3, type5])
                      setTile6Colour("grey")
                    }
                  }}>{tile6}</button>
                </div>
                <div id="gridRow3">
                  <button style={{background:tile7Colour}} onClick={event => {
                    if(tile7Colour != "blue" && tile7Colour != "red"){
                      setSelectedTile("tile7");
                      setSelectedTypes([type1, type6])
                      setTile7Colour("grey")
                    }
                  }}>{tile7}</button>
                  <button style={{background:tile8Colour}} onClick={event => {
                    if(tile8Colour != "blue" && tile8Colour != "red"){
                      setSelectedTile("tile8");
                      setSelectedTypes([type2, type6])
                      setTile8Colour("grey")
                    }
                  }}>{tile8}</button>
                  <button style={{background:tile9Colour}} onClick={event => {
                    if(tile9Colour != "blue" && tile9Colour != "red"){
                      setSelectedTile("tile9");
                      setSelectedTypes([type3, type6])
                      setTile9Colour("grey")
                    }
                  }}>{tile9}</button>
                </div>
              </div>  
          </div>
          <ul id="usePokemonHistory">
            {usedPokemonHistory.map((pokemon) => {
              <div>
                <li key={pokemon.id}>{pokemon.value}</li>
              </div>
            })}
          </ul>        
        </div>
        <div id="inputField">
          <input id="userInput" value={userInput} onChange={event => {
            setUserInput(event.target.value)
          }}></input>
          <button id="submitButton" onClick={searchPokemon}>Submit</button>
        </div>
      </header>

      
    </div>
  );
}

export default App;
