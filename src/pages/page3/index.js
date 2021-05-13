import React from 'react'

import QuestionBoxSelection from '../../components/questionBoxSelection'
import Button from '../../components/button'
import { usePesquisa } from '../../context/pesquisaPag1'


const Page3 = ()=>{
    const {pergunta5Selecao,setPergunta5Selecao} = usePesquisa()

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina3'>
            <QuestionBoxSelection pergunta='Qual o seu suco de fruta favorito?' context={pergunta5Selecao} setContext={setPergunta5Selecao} options={['Cajá','Maracujá','Pitanga','Abacaxi','Laranja']}/>
            <Button tipo='button' nome='Finalizar' handleButton={handleNextButton}/>
            <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
        </div>
    )
}

export default Page3