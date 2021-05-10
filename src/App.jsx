import './App.css';
import React, { useState, useEffect } from 'react';
import CorrectLetters from './components/correctletters';
import WrongLetters from './components/wrongletters';
import Figure from './components/figure';
import { Modal, Button } from 'react-bootstrap';

// Figure & some parts based on https://github.com/codeSTACKr/hangman-react
function App() {
  const words = ['application', 'programming', 'interface', 'wizard', 'amazing', 
                'misanthrope', 'speaker', 'exciting', 'popcorn', 'megahertz', 
                'incomprehensible', 'abruptly', 'participate'];
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const winningNumber = unique_char(selectedWord);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    newWord();
  }
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
    newWord();
  }
  const handleShow2 = () => setShow2(true);

// https://stackoverflow.com/questions/61740073/how-to-detect-keydown-anywhere-on-page-in-a-react-app
useEffect(() => {
  function handleKeyDown(e) {
    //ignore if not letters 
    if (e.keyCode < 65 || e.keyCode > 122) {
      return;
    }
    const letter = e.key.toLowerCase();
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        let newCorrectLetters = correctLetters.slice();
        newCorrectLetters.push(letter)
        setCorrectLetters(newCorrectLetters);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        let newWrongLetters = wrongLetters.slice();
        newWrongLetters.push(letter)
        setWrongLetters(newWrongLetters);
      }
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  return function cleanup() {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [correctLetters, wrongLetters, selectedWord]);

useEffect(() => {
  if (correctLetters.length === 0) {
    return;
  }

  if (correctLetters.length === winningNumber) {
    setGameWon(true);
    handleShow();
  }

}, [correctLetters, winningNumber])  

useEffect(() => {
  if (wrongLetters.length === 10) {
    setGameLost(true);
    handleShow2();
  }
}, [wrongLetters])

function newWord () {
  setSelectedWord(words[Math.floor(Math.random() * words.length)]);
  setCorrectLetters([]);
  setWrongLetters([]);
  setGameWon(false);
}

 // https://www.w3resource.com/javascript-exercises/javascript-function-exercise-16.php
function unique_char(str) {
  let uniqueStr="";
  for (let x = 0; x < str.length; x++) {
    if (uniqueStr.indexOf(str.charAt(x)) === -1) { //if the current letter in the string does NOT exist in unique string yet, add it
      uniqueStr += str[x];  
    }
  }
  return uniqueStr.length;  
}  

return (
    <>
    <div className="container">
    <h1>really ugly hangman game</h1>
    <h6>(You die on the 10th wrong letter - ez right?)</h6>
    <div className="tophalf"> 
      <div>
        <Figure wrongLetters={wrongLetters}/>
      </div>
      <div className="wrongletters">
        <h3>Wrong Letters:</h3>
        <div><WrongLetters wrongLetters={wrongLetters} /></div>
      </div>
    </div>
    <div><CorrectLetters correctLetters={correctLetters} selectedWord={selectedWord}/> </div>
    <br />
    <button onClick={newWord} className='newword-button'>New Word</button>
    </div>
    {gameWon && 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>You won!</Modal.Body>
        <Modal.Footer>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>    
    } 
    {gameLost && 
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>You lost :(. The word was: {selectedWord}</Modal.Body>
        <Modal.Footer>
          <button className="close-button" onClick={handleClose2}>
            Close
          </button>
        </Modal.Footer>
      </Modal>   
    }
    </>
  );
}

export default App;
