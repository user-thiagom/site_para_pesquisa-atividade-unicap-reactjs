import React from 'react'

const QuestionBoxRadio = ({pergunta, opcoes, opcaoSelecionada, setOpcaoSelecionada}) => {
    const opt = opcoes
    const radiosButton = opt.map((option)=>
        <div className='opcoes'>
                <label>
                    <input
                        type='radio'
                        name='teste'
                        value={option}
                        checked={opcaoSelecionada === option}
                        onChange={handleChange}
                        />
                    {option}
                </label>
            </div>
    )

    function handleChange(event){
        setOpcaoSelecionada(event.target.value)
    }

    return(
        <div className='questionBox'>
            <label>{pergunta}</label><br/>
            {radiosButton}
        </div>
    )
}

export default QuestionBoxRadio