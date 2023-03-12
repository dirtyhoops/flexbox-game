import {useState} from 'react';

const Input = ( {setShipStyling} ) => {
    const [inputValue, setInputValue] = useState("")
    const possibleAnswers = {
        "flex-start": "ships-alignment-2",
        "flex-end": "ships-alignment-1",
        "center": "ships-alignment-4",
        "space-between": "ships-alignment-3",
        "space-around": "ships-alignment-6",
        "space-evenly": "ships-alignment-5"
    }
    function updateUserInput(e){
        if(!possibleAnswers[e.target.value]){
            setInputValue(e.target.value)
        }else{
            setShipStyling(possibleAnswers[e.target.value])
            setInputValue(e.target.value)
        }
    }
    return (
        <div>
            <p className="user-prompt">Which 'justify-content' setting <br/>will move the boats around the rocks?</p>
            <textarea type="text" className="user-input" onChange={updateUserInput} value={inputValue}></textarea>
        </div>
    )
}

export default Input;