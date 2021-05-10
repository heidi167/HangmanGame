export default function WrongLetters (props) {
  const wordToDisplay = props.wrongLetters.toString();
  wordToDisplay.split("").join(",  ");
  
  return (
    <>
    <h4 className="wrong-letters">
      {wordToDisplay}
    </h4>
    </>
  )
}