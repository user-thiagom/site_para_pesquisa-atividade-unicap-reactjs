import React from 'react'
import { usePesquisaPag2 } from '../../context/pesquisaPag2'
import QuestionBoxRadio from '../../components/questionBoxRadio'
import QuestionBox from '../../components/questionBox'
import If from '../../components/if'
import Button from '../../components/button'


const Page2 = ()=>{
    const {selectedOption, setSelectedOption} = usePesquisaPag2()
    const {answer1Value, setAnswer1Value} = usePesquisaPag2()
    const {answer2Value, setAnswer2Value} = usePesquisaPag2()

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina2'>
            <QuestionBoxRadio pergunta='Você mora no Brasil?' opcoes={['Sim', 'Não']} opcaoSelecionada={selectedOption} setOpcaoSelecionada={setSelectedOption}/>
            <If test={selectedOption === 'Sim'}>
                <QuestionBox pergunta='Qual a sua opnião sobre quem joga de MT no console?' answerValue={answer1Value} setAnswerValue={setAnswer1Value}/>
            </If>

            <If test={selectedOption === 'Não'}>
                <QuestionBox pergunta='Então está esperando o que para se mudar?' answerValue={answer2Value} setAnswerValue={setAnswer2Value}/>
            </If>
            <Button tipo='button' nome='Próxima página' handleButton={handleNextButton}/>
            <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
        </div>
    )
}

export default Page2