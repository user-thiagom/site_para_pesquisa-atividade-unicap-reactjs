import React from 'react'
/* import {usePesquisa} from '../../context/pesquisa' */

const QuestionBoxSelection = ({pergunta, answerValue, setAnswerValue, options}) => {
    const showOptions = options.map((elemento)=>
        <>
            <option value={elemento}>{elemento}</option>
        </>
    )

    function handleChange(event){
        setAnswerValue(event.target.value)
    }

    return(
        <div className='question-selection'>
            <label>{pergunta}
                <select value={answerValue} onChange={handleChange}>
                    {showOptions}
                </select>
            </label><br/>
        </div>
    )
}

export default QuestionBoxSelection