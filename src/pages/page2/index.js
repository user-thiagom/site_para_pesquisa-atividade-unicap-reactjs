import React from 'react'
import QuestionBoxRadio from '../../components/questionBoxRadio'
import QuestionBox from '../../components/questionBox'
import If from '../../components/if'
import Button from '../../components/button'
import { usePesquisa } from '../../context/pesquisaPag1'
import { Link } from 'react-router-dom';


const Page2 = ()=>{
    const {pergunta2Radio, setPergunta2Radio} = usePesquisa()
    const {pergunta3Aberta,setPergunta3Aberta} = usePesquisa()
    const {pergunta4Aberta,setPergunta4Aberta} = usePesquisa()

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Página Anterior!')
    }

    return(
        <div className='pagina2'>
            <QuestionBoxRadio pergunta='Você mora no Brasil?' opcoes={['Sim', 'Não']} context={pergunta2Radio} setContext={setPergunta2Radio}/>
            <If test={pergunta2Radio.resposta === 'Sim'}>
                <QuestionBox pergunta='Qual a sua opinião sobre a primeira revolução industrial?' context={pergunta3Aberta} setContext={setPergunta3Aberta}/>
            </If>

            <If test={pergunta2Radio.resposta === 'Não'}>
                <QuestionBox pergunta='Então está esperando o que para se mudar?' context={pergunta4Aberta} setContext={setPergunta4Aberta}/>
            </If>

            <Link to='/page3'>
                <Button tipo='button' nome='Próxima página' handleButton={handleNextButton}/>
            </Link>

            <Link to='/page1'>
                <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
            </Link>
            
            
        </div>
    )
}

export default Page2