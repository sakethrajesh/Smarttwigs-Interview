import React from 'react'

function StartGame() {
  return (
    <>
        <form>
            <input type="text">Player 1</input>
            <input type="text">Player 2</input>
            <input type="text">Who is serving?</input>
        </form>
        <button>Start New Game</button>
    </>
  )
}

export default StartGame