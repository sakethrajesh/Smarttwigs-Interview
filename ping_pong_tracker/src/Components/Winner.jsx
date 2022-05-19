import React from 'react'
import { useParams } from 'react-router-dom';

function Winner() {
    let params = useParams();


    return (
        <div>{params.w} has won the game</div>
    )
}

export default Winner