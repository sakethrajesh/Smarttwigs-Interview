import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StartGame from '../Components/StartGame'

function Home() {
    const [users, setUsers] = useState([]);
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/").then(response => {return response.json()}).then(data => { setUsers(data) });
    }

    useEffect(() => {
        fetchData()
    }, []);

    let navigate = useNavigate();

    let handleSubmit = async (e) => {
        navigate(`/game/${player1}/${player2}`);
    }

    return (
        <>
            <div>
                {users.length > 0 && (
                <ol>
                  {users.map(user => (
                      <li key={user.id}>name: {user.name} | wins: {user.wins}</li>
                  ))}
                </ol>
                )}
            </div>
            <div>
                <h5>Enter Player (Player 1 will serve first)</h5>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Player 1" onChange={(e) => setPlayer1(e.target.value)}/>
                    <br></br>
                    <input type="text" placeholder="Enter Player 2" onChange={(e) => setPlayer2(e.target.value)}/>
                    <br></br>
                    <button type="submit" onSubmit={ handleSubmit }>Start Game</button>
                </form>
            </div>
        </>
  )
}

export default Home