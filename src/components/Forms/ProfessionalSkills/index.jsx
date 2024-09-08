'use client'

import '../styles.scss'
import Form from '@/components/Forms/Form'
import Input from '@/components/Inputs/Input'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function professionalSkillsForm({ sendFormData, userLoadedInputs }) {           
    const input = {
        id: 'defaultId',
        placeholder: `Skill`,
        copy: ''
    }
    
    const [inputs, setInputs] = useState(userLoadedInputs || [input])
    const [inputCount, setInputCount] = useState(inputs.length)    

    const setInputCopy = (data) => {        
        const objectKey = Object.keys(data)[0]
        const foundInput = inputs.find(item =>item.id === objectKey)
        foundInput.copy = data[objectKey]            

        setInputs([...new Set([...inputs, foundInput])])
    }
   
    const repeatInput = (e) => {
        e.preventDefault()        

        const newInput = {...input}                
        newInput.id = nanoid()
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
                    <div className='input-repeater span-2' key={input.id}>
                        <button onClick={repeatInput} className='button --rounded'>+</button>
                        {
                            inputCount > 1 
                                ? <button onClick={(e) => removeInput(e, input.id)} className='button --rounded'>-</button>
                                : ''
                        }
                        <Input                              
                            placeHolder={`${input.placeholder}`}    
                            sendData={setInputCopy}     
                            inputId={input.id}         
                            userLoadedValue={input.copy}
                        /> 
                    </div>
                )
            })
        }
    }
    return (
        <>         
            <Form                 
                description={'A bulleted list of all your skills.'} 
                submitForm={() => sendFormData({ proSkills: inputs })}
            >
                {renderInputs(inputs)}
            </Form>            
        </>
    )
}