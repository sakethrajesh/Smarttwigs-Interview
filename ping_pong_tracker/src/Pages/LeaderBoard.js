import React from 'react'
import { useEffect, useState } from 'react';
import Winner from '../Components/Winner';

function LeaderBoard() {
    const[users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/").then(response => {return response.json()}).then(data => { setUsers(data) });
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Winner/>
            <div>
                <h2>Leaderboard</h2>
                <div>
                    {users.length > 0 && (
                    <ol>
                    {users.map(user => (
                        <li key={user.id}>name: {user.name} | wins: {user.wins}</li>
                    ))}
                    </ol>
                    )}
                </div>
            
            </div>
        </>
        
    )
}

export default LeaderBoard