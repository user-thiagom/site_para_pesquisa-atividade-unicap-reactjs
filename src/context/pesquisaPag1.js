import React, {createContext, useState, useContext, useEffect} from 'react'

const PesquisaPag1Context = createContext()

export default function PesquisaPag1Provider({children}){
    const [inputValue,setInputValue] = useState('Theguera')
    const [answerValue,setAnswerValue] = useState('Não sei kkk')
    
    useEffect(()=>{

    },[]) 

    return(
        <PesquisaPag1Context.Provider value={{inputValue,setInputValue, answerValue,setAnswerValue}}>
            {children}
        </PesquisaPag1Context.Provider>
    )
}

export function usePesquisaPag1(){
    const context = useContext(PesquisaPag1Context)
    const { inputValue, setInputValue, answerValue, setAnswerValue } = context
    return { inputValue, setInputValue, answerValue, setAnswerValue }
}