'use client'

import '../styles.scss'
import { useState } from 'react'
import Input from '@/components/Inputs/Input.jsx'
import Form from '@/components/Forms/Form'

export default function stepOneForm({ sendFormData, userLoadedInputs }) {      
    const defaultInputs = [
        {
            id: 'schoolName',
            placeholder: 'School name',
            copy: ''
        },
        {
            id: 'degreeName',
            placeholder: 'Degree name',
            copy: ''
        },
        {
            id: 'yearGraduated',
            placeholder: 'Year graduated',
            copy: ''
        }    
    ]
    
    const [inputs, setInputs] = useState(userLoadedInputs || defaultInputs)
               
    const setInputCopy = (data) => {
        const objectKey = Object.keys(data)[0]
        const foundInput = inputs.find(item =>item.id === objectKey)
        foundInput.copy = data[objectKey]            
        
        setInputs([...new Set([...inputs, foundInput])])
    }

    const renderInputs = (inputs) => {
        if(inputs.length) {
            return inputs.map(input => {
                return (
                    <div 
                        className={input.id === 'yearGraduated' ? 'span-2' : '' }
                        key={input.id}
                    >
                        <Input                                 
                            inputId={input.id}
                            placeHolder={input.placeholder}
                            sendData={setInputCopy}
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
                description={'Information the employer can use to see your education level.'}
                submitForm={() => sendFormData({ education: inputs })}
            >
                {renderInputs(inputs)}
            </Form>            
        </>
    )
}