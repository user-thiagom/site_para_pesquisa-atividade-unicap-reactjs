import React from 'react'

import Button from '../../components/button'
import If from '../../components/if'
import { usePesquisa } from '../../context/pesquisaPag1'


const Page4 = ()=>{
    const {inputValue,pergunta1Aberta,pergunta2Radio,pergunta3Aberta,
           pergunta4Aberta,pergunta5Selecao} = usePesquisa()

    function handleNewButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina4'>
            <h2>Resposta do formulário</h2>
            <div className='repostas'>
                <h4>Nome</h4>
                <p>{inputValue}</p>
                <h4>{pergunta1Aberta.pergunta}</h4>
                <p>{pergunta1Aberta.resposta}</p>
                <h4>{pergunta2Radio.pergunta}</h4>
                <p>{pergunta2Radio.opcaoSelecionada}</p>
                <If test={pergunta2Radio.opcaoSelecionada === 'Sim'}>
                    <h4>{pergunta3Aberta.pergunta}</h4>
                    <p>{pergunta3Aberta.resposta}</p>
                </If>
                <If test={pergunta2Radio.opcaoSelecionada === 'Não'}>
                    <h4>{pergunta4Aberta.pergunta}</h4>
                    <p>{pergunta4Aberta.resposta}</p>
                </If>
                <h4>{pergunta5Selecao.pergunta}</h4>
                <p>{pergunta5Selecao.resposta}</p>
            </div>
            <Button tipo='button' nome='Nova Pesquisa' handleButton={handleNewButton}/>
        </div>
    )
}

export default Page4