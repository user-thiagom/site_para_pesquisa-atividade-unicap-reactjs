import React from 'react'
import Button from '../../components/button'
import QuestionBox from '../../components/questionBox'
import Input from '../../components/input'
import {usePesquisaPag1} from '../../context/pesquisaPag1'


const Page1 = ()=>{
    const { answerValue, setAnswerValue, inputValue, setInputValue } = usePesquisaPag1()

    function handleButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina1'>
            <h1>Site para pesquisa</h1>
            <Input labelInput='Nome' inputValue={inputValue} setInputValue={setInputValue}/>
            <QuestionBox pergunta='Qual o nome da sua mãe?' answerValue={answerValue} setAnswerValue={setAnswerValue}/>
            <Button tipo='button' nome='Próxima Página' handleButton={handleButton}/>
        </div>
    )
}

export default Page1