import React from 'react'
/* import {usePesquisa} from '../../context/pesquisa' */

const QuestionBox = ({pergunta, answerValue, setAnswerValue}) => {

    function handleChange(event){
        setAnswerValue(event.target.value)
    }

    return(
        <div>
            <label>{pergunta}</label><br/>
            <textarea value={answerValue} onChange={handleChange}></textarea>
        </div>
    )
}

export default QuestionBox