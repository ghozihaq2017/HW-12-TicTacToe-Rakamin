import { useState } from 'react';
import Board from '../components/Board';
import Navbar from '../components/Navbar';

function GamePage() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = move + '. Go to move #' + move;
    } else {
      description = 'Start New Game';
    }
    return (
      <li key={move} className="mb-2 hover:font-bold first:hover:font-medium">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <section className="game-page min-h-screen bg-[url('../assets/img/pattern2.png')]">
      <Navbar />
      <div className="game-content flex justify-center pt-36">
        <div className="card w-10/12  shadow-xl mb-20 md:w-8/12 xl:md:w-5/12">
          <figure className="px-10 pt-10">
            <div className="game-board">
              <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <div className="game-info">
              <ol className="moves-list ">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamePage;
