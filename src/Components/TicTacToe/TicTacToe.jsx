import './TicTacToe.css';
import circle_icon from '../../assets/circle.png';
import cross_icon from '../../assets/close.png';
import { useState, useRef } from 'react';

export const TicTacToe = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [gameStatus, setGameStatus] = useState("Tic Tac Toe Game In React");
    const titleRef = useRef(null);
    const boxRefs = useRef([]);

    const toggleIcon = (num) => {
        if(lock || data[num] !== "") return;
        
        const newData = [...data];
        const currentPlayer = count % 2 === 0 ? "x" : "o";
        newData[num] = currentPlayer;
        
        setData(newData);
        setCount(count + 1);
        
        // Update the box display
        if(boxRefs.current[num]) {
            boxRefs.current[num].innerHTML = currentPlayer === "x" 
                ? `<img src="${cross_icon}" class="icon" />` 
                : `<img src="${circle_icon}" class="icon" />`;
        }
        
        checkWin(newData, count + 1);
    }

    const checkWin = (currentData, currentCount) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        for(let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if(currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
                won(currentData[a]);
                return;
            }
        }
        
        // Check for tie
        if(currentCount === 9) {
            setLock(true);
            setGameStatus("It's a Tie! 🤝");
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner === "x") {
            setGameStatus("🎉 Cross Wins! 🎉");
        } else {
            setGameStatus("🎉 Circle Wins! 🎉");
        }
    }
    
    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);
        setGameStatus("Tic Tac Toe Game In React");
        // Clear all boxes
        boxRefs.current.forEach(box => {
            if(box) box.innerHTML = "";
        });
    }
  return (
    <div className="container">
      <div className="title" ref={titleRef}>
        <h1>{gameStatus.includes('React') ? (
          <>Tic Tac Toe Game In<span> React</span></>
        ) : (
          gameStatus
        )}</h1>
      </div>
      
      <div className="game-info">
        <div className="current-player">
          {!lock && !gameStatus.includes('Tie') && !gameStatus.includes('Wins') ? (
            <>Current Player: <span className={count % 2 === 0 ? 'player-x' : 'player-o'}>
              {count % 2 === 0 ? '✖️ Cross' : '⭕ Circle'}
            </span></>
          ) : null}
        </div>
      </div>

      <div className="gameBoard">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div 
            key={index}
            className="box" 
            ref={el => boxRefs.current[index] = el}
            onClick={() => toggleIcon(index)}
          ></div>
        ))}
      </div>
      
      <button className='reset-btn' onClick={resetGame}>
        🔄 Reset Game
      </button>
    </div>
  )
}
