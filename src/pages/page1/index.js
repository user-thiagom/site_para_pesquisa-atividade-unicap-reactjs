import React from 'react'
import Button from '../../components/button'
import QuestionBox from '../../components/questionBox'
import Input from '../../components/input'
import {usePesquisa} from '../../context/pesquisaPag1'
import { Link } from 'react-router-dom';


const Page1 = ()=>{
    const { pergunta1Aberta,setPergunta1Aberta, inputValue, setInputValue } = usePesquisa()

    function handleButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina1'>
            <h1>Site para pesquisa</h1>
            <Input labelInput='Nome' inputValue={inputValue} setInputValue={setInputValue}/>
            <QuestionBox pergunta='Qual o nome da sua mãe?' context={pergunta1Aberta} setContext={setPergunta1Aberta}/>
            <Link to='/page2'>
                <Button tipo='button' nome='Próxima Página' handleButton={handleButton}/>
            </Link>
            
        </div>
    )
}

export default Page1