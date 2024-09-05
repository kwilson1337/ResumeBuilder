'use client'

import '../styles.scss'
import './styles.scss'

import Form from '@/components/Forms/Form'
import Input from '@/components/Inputs/Input'
import { useState } from 'react'

export default function WorkXp() {       
    const defaultForm = [
        {
            id: 0,
            inputs: [
                {
                    id: 'companyName',
                    placeholder: 'Company name',
                    copy: ''
                },
                {
                    id: 'jobLocation',
                    placeholder: 'Job location',
                    copy: ''
                },
                {
                    id: 'jobTitle',
                    placeholder: 'Job title',
                    copy: ''
                },
                {
                    id: 'startDate',
                    placeholder: 'Start date',
                    copy: ''
                },
                {
                    id: 'endDate',
                    placeholder: 'End date',
                    copy: ''
                },
                {
                    id: 'jobResponsibilities',
                    placeholder: 'Job responsibilities:',
                    inputs: [
                        {
                            id: 0,
                            copy: ''
                        }
                    ]
                },
            ]
        }
    ]
    
    const [forms, setForms] = useState(defaultForm)
    const [formCount, setFormCount] = useState(1)

    const renderInputs = (inputs, form) => {
        if(inputs.length) {
            return inputs.map((input) => {
                return (
                    <div                         
                        className={
                            input.id === 'jobResponsibilities' || input.id === 'jobTitle'
                                ? 'span-2' 
                                : '' 
                        }
                        key={input.id + form.id}
                    >
                        <Input                                 
                            inputId={input.id}
                            placeHolder={input.placeholder}  
                            sendData={(e) => setDataInForm({...e, form})}
                        />
                    </div>
                )
            })
        }
    }

    const renderForms = (data) => {
        if(data?.length) {
            return data.map((form) => {
                return (
                   <div className="form-repeater" key={form.id}>
                        <div className='input-repeater'>                            
                            <button onClick={duplicareForm} className='button --rounded'>+</button>
                            {
                                formCount > 1
                                    ? <button onClick={(e) => removeForm(e, form.id)} className='button --rounded'>-</button>
                                    : ''
                            }
                        </div>                        
                        <Form hideSubmit={true}>
                            {renderInputs(form.inputs, form)}
                        </Form>
                   </div>
                )                
            })
        }
    }

    const duplicareForm = (e) => {
        e.preventDefault()
        setFormCount(formCount + 1)

        const singleForm = defaultForm[0]
        singleForm.id = formCount

        setForms([...forms, singleForm])
    }

    const removeForm = (e, id) => {
        e.preventDefault()
        setFormCount(formCount - 1)

        const removeId = forms.findIndex(item => item.id === id)        
        const newArray = forms.toSpliced(removeId, 1)

        setForms(newArray)
    }
    
    const setDataInForm = (data) => {
        const inputKey = Object.keys(data)[0]
        const formId = data.form.id
        const foundForm = forms.find(form => form.id === formId)
        const foundInput = foundForm.inputs.find(input => input.id === inputKey)
                
        foundInput.copy = data[inputKey]
        
        setForms([...new Set([...forms, foundForm])])
    }

    const sendForms = () => {
        console.log(forms)
    }

    return (
        <>
            <div className="work-xp-form">
                <div className="work-xp-form__form">
                    {renderForms(forms)}
                </div>

                <div className="work-xp-form__submit">
                    <button onClick={sendForms} className='button --full'>Submit</button>
                </div>
            </div>            
        </>
    )
}