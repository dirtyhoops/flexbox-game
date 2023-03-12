const Input = ( {updateAnswer, currentAnswer} ) => {
    const updateUserInput = (e) => {
        updateAnswer(e.target.value)
    }
    return (
        <input onChange={updateUserInput} value={currentAnswer}></input>
    )
}

export default Input;