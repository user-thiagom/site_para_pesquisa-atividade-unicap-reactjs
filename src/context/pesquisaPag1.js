import React, {createContext, useState, useContext, useEffect} from 'react'

const PesquisaContext = createContext()

export default function PesquisaProvider({children}){
    const [inputValue,setInputValue] = useState('')
    const [pergunta1Aberta,setPergunta1Aberta] = useState({
        pergunta: '',
        resposta: ''
    })
    const [pergunta2Radio,setPergunta2Radio] = useState({
        pergunta: '',
        opcaoSelecionada: ''
    })
    const [pergunta3Aberta,setPergunta3Aberta] = useState({
        pergunta: '',
        resposta: ''
    })
    const [pergunta4Aberta,setPergunta4Aberta] = useState({
        pergunta: '',
        resposta: ''
    })
    const [pergunta5Selecao,setPergunta5Selecao] = useState({
        pergunta: '',
        resposta: ''
    })
    
    useEffect(()=>{

    },[]) 

    return(
        <PesquisaContext.Provider value={{
            inputValue,setInputValue, pergunta1Aberta,setPergunta1Aberta,
            pergunta2Radio,setPergunta2Radio,pergunta3Aberta,setPergunta3Aberta,
            pergunta4Aberta,setPergunta4Aberta,pergunta5Selecao,setPergunta5Selecao
        }}>
            {children}
        </PesquisaContext.Provider>
    )
}

export function usePesquisa(){
    const context = useContext(PesquisaContext)
    const {
        inputValue,setInputValue, pergunta1Aberta,setPergunta1Aberta,
        pergunta2Radio,setPergunta2Radio,pergunta3Aberta,setPergunta3Aberta,
        pergunta4Aberta,setPergunta4Aberta,pergunta5Selecao,setPergunta5Selecao
    } = context
    return {
        inputValue,setInputValue, pergunta1Aberta,setPergunta1Aberta,
        pergunta2Radio,setPergunta2Radio,pergunta3Aberta,setPergunta3Aberta,
        pergunta4Aberta,setPergunta4Aberta,pergunta5Selecao,setPergunta5Selecao
    }
}