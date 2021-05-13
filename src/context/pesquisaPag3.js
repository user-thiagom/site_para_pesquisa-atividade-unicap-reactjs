import React, {createContext, useState, useContext, useEffect} from 'react'

const PesquisaPag3Context = createContext()

export default function PesquisaPag3Provider({children}){
    const [answerValue,setAnswerValue] = useState('')
    
    /* useEffect(()=>{

    },[]) */

    return(
        <PesquisaPag3Context.Provider value={{answerValue,setAnswerValue}}>
            {children}
        </PesquisaPag3Context.Provider>
    )
}

export function usePesquisaPag3(){
    const context = useContext(PesquisaPag3Context)
    const { answerValue, setAnswerValue } = context
    return { answerValue, setAnswerValue }
}