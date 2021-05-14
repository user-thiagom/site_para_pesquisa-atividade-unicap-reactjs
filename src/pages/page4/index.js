import React from 'react'

import Button from '../../components/button'
import If from '../../components/if'
import { usePesquisa } from '../../context/pesquisaPag1'
import { Link } from 'react-router-dom';


const Page4 = ()=>{
    const {inputValue,pergunta1Aberta,pergunta2Radio,pergunta3Aberta,
           pergunta4Aberta,pergunta5Selecao,reset} = usePesquisa()

    function handleNewButton(){
        console.log('Próxima Página')
        reset()
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
                <p>{pergunta2Radio.resposta}</p>
                <If test={pergunta2Radio.resposta === 'Sim'}>
                    <h4>{pergunta3Aberta.pergunta}</h4>
                    <p>{pergunta3Aberta.resposta}</p>
                </If>
                <If test={pergunta2Radio.resposta === 'Não'}>
                    <h4>{pergunta4Aberta.pergunta}</h4>
                    <p>{pergunta4Aberta.resposta}</p>
                </If>
                <h4>{pergunta5Selecao.pergunta}</h4>
                <p>{pergunta5Selecao.resposta}</p>
            </div>
            <Link to='/'>
                <Button tipo='button' nome='Nova Pesquisa' handleButton={handleNewButton}/>
            </Link>
        </div>
    )
}

export default Page4