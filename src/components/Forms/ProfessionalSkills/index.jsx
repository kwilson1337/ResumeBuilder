'use client'

import '../styles.scss'
import Form from '@/components/Forms/Form'
import Input from '@/components/Inputs/Input'
import { useState } from 'react'

export default function stepOneForm({ recieveFormData }) {           
    const input = {
        id: 0,
        placeholder: `Skill`
    }

    const [IdCount, setIdCount] = useState(1)
    const [inputs, setInputs] = useState([input])
    const [inputCount, setInputCount] = useState(inputs.length)
   
    const repeatInput = (e) => {
        e.preventDefault()        

        setIdCount(IdCount + 1)
        const newInput = {...input}                
        newInput.id = IdCount
        const newArray = [...inputs, newInput]

        setInputs(newArray)    
        setInputCount(newArray.length)    
    }

    const removeInput = (e, id) => {
        e.preventDefault()
        
        const removeId = inputs.findIndex(item => item.id === id)        
        const newArray = inputs.toSpliced(removeId, 1)
        
        setInputs(newArray)
        setInputCount(newArray.length)  
    }
        
    const renderInputs = (inputs)  => {
        if(inputs?.length) {
            return inputs.map(input => {
                return (
                    <div className='input-repeater' key={input.id}>
                        <button onClick={repeatInput} className='button --rounded'>+</button>
                        {
                            inputCount > 1 
                                ? <button onClick={(e) => removeInput(e, input.id)} className='button --rounded'>-</button>
                                : ''
                        }
                        <Input                              
                            placeHolder={input.placeholder + ' ' + input.id}    
                            sendData={recieveFormData}                    
                        /> 
                    </div>
                )
            })
        }
    }
    return (
        <>         
            <Form description={'A bulleted list of all your skills.'} >
                {renderInputs(inputs)}
            </Form>
        </>
    )
}