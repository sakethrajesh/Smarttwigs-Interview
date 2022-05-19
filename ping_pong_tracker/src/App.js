import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from "react-router-dom";


function App() {
  let params = useParams();
  const [player1, setPlayer1] = useState(params.p1);
  const [player2, setPlayer2] = useState(params.p2);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [server, setServer] = useState(player1);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState("");

  let navigate = useNavigate();

  function serverSelect(){
    if((player1Score+player2Score)%2 !== 0 && server === player1){
      setServer(player2);
      setRound(round + 1);
    }
    else if((player1Score+player2Score)%2 !== 0 && server === player2){
      setServer(player1);
      setRound(round + 1);
    }
  }

  function detWinner(){
    if((player1Score >= 11 && player1Score-player2Score >= 2) || (player2Score >= 11 && player2Score-player1Score >= 2)){
      if(player1Score>player2Score){
        setWinner(player1 + "has won the game");
        navigate(`/leaderboard/${player1}`);
      } else { 
        setWinner(player2 + "has won the game"); 
        navigate(`/leaderboard/${player2}`);
      }
      
    }
  }


  return (
    <>
      <div>Game</div>
      <h5>Round: {round}</h5>
      <h5>Server: {server}</h5>
      <h5>{player1} Score: {player1Score}</h5>
      <button onClick={() => {setPlayer1Score(player1Score + 1); serverSelect(); detWinner()}}>Player 1 score</button>
      <h5>{player2} Score: {player2Score}</h5>
      <button onClick={() => {setPlayer2Score(player2Score + 1); serverSelect(); detWinner()}}>Player 2 score</button>
      <h2>{winner}</h2>
    </>
  );
}

export default App;
