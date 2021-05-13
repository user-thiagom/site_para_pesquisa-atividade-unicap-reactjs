import React from 'react'

const QuestionBoxRadio = ({pergunta, opcoes, context, setContext}) => {
    const opt = opcoes
    const radiosButton = opt.map((option)=>
        <div className='opcoes'>
                <label>
                    <input
                        type='radio'
                        name='teste'
                        value={option}
                        checked={context.opcaoSelecionada === option}
                        onChange={handleChange}
                        />
                    {option}
                </label>
            </div>
    )

    function handleChange(event){
        const copyContext = Object({},context)
        copyContext.pergunta = pergunta
        copyContext.opcaoSelecionada = event.target.value
        setContext(copyContext)
    }

    return(
        <div className='questionBox'>
            <label>{pergunta}</label><br/>
            {radiosButton}
        </div>
    )
}

export default QuestionBoxRadio