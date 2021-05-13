import React, {createContext, useState, useContext, useEffect} from 'react'

const PesquisaPag2Context = createContext()

export default function PesquisaPag2Provider({children}){
    const [selectedOption,setSelectedOption] = useState('')
    const [optionsRadio, setOptionsRadio] = useState([])
    const [answer1Value,setAnswer1Value] = useState('')
    const [answer2Value,setAnswer2Value] = useState('')
    
    /* useEffect(()=>{

    },[]) */

    return(
        <PesquisaPag2Context.Provider 
            value={
                    {selectedOption,setSelectedOption, 
                     optionsRadio, setOptionsRadio,
                     answer1Value,setAnswer1Value,
                     answer2Value,setAnswer2Value}
                }>
            {children}
        </PesquisaPag2Context.Provider>
    )
}

export function usePesquisaPag2(){
    const context = useContext(PesquisaPag2Context)
    const { selectedOption,setSelectedOption, 
            optionsRadio, setOptionsRadio,
            answer1Value,setAnswer1Value,
            answer2Value,setAnswer2Value } = context
    
    return { selectedOption,setSelectedOption,
             optionsRadio, setOptionsRadio,
             answer1Value,setAnswer1Value,
             answer2Value,setAnswer2Value }
}