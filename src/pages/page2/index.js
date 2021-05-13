import React from 'react'
import QuestionBoxRadio from '../../components/questionBoxRadio'
import QuestionBox from '../../components/questionBox'
import If from '../../components/if'
import Button from '../../components/button'
import { usePesquisa } from '../../context/pesquisaPag1'


const Page2 = ()=>{
    const {pergunta2Radio, setPergunta2Radio} = usePesquisa()
    const {pergunta3Aberta,setPergunta3Aberta} = usePesquisa()
    const {pergunta4Aberta,setPergunta4Aberta} = usePesquisa()

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina2'>
            <QuestionBoxRadio pergunta='Você mora no Brasil?' opcoes={['Sim', 'Não']} context={pergunta2Radio} setContext={setPergunta2Radio}/>
            <If test={pergunta2Radio.opcaoSelecionada === 'Sim'}>
                <QuestionBox pergunta='Qual a sua opnião sobre quem joga de MT no console?' context={pergunta3Aberta} setContext={setPergunta3Aberta}/>
            </If>

            <If test={pergunta2Radio.opcaoSelecionada === 'Não'}>
                <QuestionBox pergunta='Então está esperando o que para se mudar?' context={pergunta4Aberta} setContext={setPergunta4Aberta}/>
            </If>
            <Button tipo='button' nome='Próxima página' handleButton={handleNextButton}/>
            <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
        </div>
    )
}

export default Page2