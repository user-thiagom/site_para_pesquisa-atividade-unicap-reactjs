import React from 'react'

import QuestionBoxSelection from '../../components/questionBoxSelection'
import Button from '../../components/button'
import { usePesquisaPag3 } from '../../context/pesquisaPag3'


const Page3 = ()=>{
    const {answerValue, setAnswerValue} = usePesquisaPag3()

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina3'>
            <QuestionBoxSelection pergunta='Qual o seu suco de fruta favorito?' answerValue={answerValue} setAnswerValue={setAnswerValue} options={['Cajá','Maracujá','Pitanga','Abacaxi','Laranja']}/>
            <Button tipo='button' nome='Finalizar' handleButton={handleNextButton}/>
            <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
        </div>
    )
}

export default Page3