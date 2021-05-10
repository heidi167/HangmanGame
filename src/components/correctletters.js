export default function CorrectLetters (props) {
  const wordToDisplay = [];
  for (let i = 0; i < props.selectedWord.length; i++) {
    if (props.correctLetters.includes(props.selectedWord[i])) {
      wordToDisplay.push(' ' + props.selectedWord[i] + ' ');
    } else {
      wordToDisplay.push(' _ ');
    }
  }
  return (
    <>
    <h3 className="correct-word">
      {wordToDisplay}
    </h3>
    
    </>
  )
}