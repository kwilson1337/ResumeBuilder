'use client'

import '../styles.scss'
import { useEffect, useState } from 'react'
import Input from '@/components/Inputs/Input.jsx'
import Form from '@/components/Forms/Form'

export default function personalInfoForm({ sendFormData, userLoadedInputs}) {       
    const defaultInputs = [
        {
            id: 'firstName',
            placeholder: 'First name',
            copy: ''
        },
        {
            id: 'lastname',
            placeholder: 'Last name',
            copy: ''
        },
        {
            id: 'jobTitle',
            placeholder: 'Job title',
            copy: ''
        },
        {
            id: 'emailAdress',
            placeholder: 'Email adress',
            copy: ''
        },
        {
            id: 'phoneNumber',
            placeholder: 'Phone Number',
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

    const updateInputsOnSubmit = () => {        
        sendFormData({ personalInfo: inputs })
        setInputs(inputs)
    }

    const renderInputs = (inputs) => {        
        if(inputs.length) {
            return inputs.map(input => {
                return (
                    <div 
                        className={input.id === 'jobTitle' ? 'span-2' : '' }
                        key={input.id}
                    >
                        <Input                                                             
                            inputId={input.id}
                            placeHolder={input.placeholder}
                            userLoadedValue={input.copy}
                            sendData={setInputCopy}
                        />
                    </div>
                )
            })
        }
    }
              
    return (
        <>
            <Form                
                description={'Your personal information that the employer can use to reach out to you.'}
                submitForm={updateInputsOnSubmit}
            >
                {renderInputs(inputs)}
            </Form>            
        </>
    )
}