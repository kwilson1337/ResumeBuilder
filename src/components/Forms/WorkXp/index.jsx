'use client'

import '../styles.scss'
import './styles.scss'

import Form from '@/components/Forms/Form'
import Input from '@/components/Inputs/Input'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function WorkXp({ sendFormData, userLoadedInputs }) {     
    const buildIds = () => nanoid()
    
    const defaultInput = {
        id: 'defaultId',
        placeholder: 'Job responsibilities',
        copy: ''
    }
    const defaultForm = [
        {
            id: buildIds(),
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
                    placeholder: 'Job responsibilities',
                    inputs: [ defaultInput ]
                },
            ]
        }
    ]
    
    const [forms, setForms] = useState(userLoadedInputs || defaultForm)
    const [formCount, setFormCount] = useState(userLoadedInputs ? userLoadedInputs.length : 1)

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
                        {
                            /**
                             * Job Responsibilities input 
                             * repeater
                             */
                            input.id === 'jobResponsibilities'
                                ? input.inputs.map(item => (
                                    <div key={item.id} className="input-repeater --col">
                                         <div className='input-repeater --col --gap-5'>
                                            <button onClick={(e) => duplicateRespInput(e, { form })} className="button --rounded">+</button>
                                            { 
                                                input.inputs.length > 1 
                                                    ? (
                                                        <button onClick={(e) => removeRespInput(e, { item, form })} className='button --rounded'>-</button>
                                                    ) 
                                                    : '' 
                                            }
                                        </div>
                                        <Input                                                                             
                                            placeHolder={item.placeholder}
                                            sendData={(e) => setResponsibilityInputs({...e, form})}
                                            inputId={item.id}
                                            userLoadedValue={item.copy}
                                        />
                                    </div>
                                ))
                                : (
                                    <Input                                 
                                        inputId={input.id}
                                        placeHolder={input.placeholder}  
                                        sendData={(e) => setDataInForm({...e, form})}
                                        userLoadedValue={input.copy}
                                    />
                                )
                        }                       
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
        singleForm.id = buildIds()

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
        const foundForm = forms.find(form => form.id === data.form.id)
        const foundInput = foundForm.inputs.find(input => input.id === inputKey)                        

        foundInput.copy = data[inputKey]                
        setForms([...new Set([...forms, foundForm])])
    }

    const setResponsibilityInputs = (data) => {
        const inputKey = Object.keys(data)[0]    
        const foundForm = forms.find(form => form.id === data.form.id)        
        const respInputs = foundForm.inputs.find(input => input.id === 'jobResponsibilities')
        const singleInput = respInputs.inputs.find(item => item.id === inputKey)
        const respInputKey = respInputs.inputs.findIndex(item => item.id === singleInput.id)
        
        singleInput.copy = data[inputKey]
        respInputs.inputs.toSpliced(respInputKey, 1 ,singleInput)
        
        setForms([...new Set([...forms, foundForm])])
    }

    const duplicateRespInput = (e, { form }) => {
        e.preventDefault()
        const foundForm = forms.find(item => item.id === form.id)
        const foundFormIndex = forms.findIndex(item => item.id === form.id)
        const foundInputs = foundForm.inputs.find(input => input.id === 'jobResponsibilities')

        defaultInput.id = buildIds()
        foundInputs.inputs.push(defaultInput)

        setForms(forms.toSpliced(foundFormIndex, 1, foundForm))       
    }

    const removeRespInput = (e, { item, form }) => {
        e.preventDefault()
        const foundForm = forms.find(item => item.id === form.id)
        const foundFormIndex = forms.findIndex(item => item.id === form.id)
        const foundInputs = foundForm.inputs.find(input => input.id === 'jobResponsibilities')
        const foundInputIndex = foundInputs.inputs.findIndex(input => input.id === item.id)
        
        foundInputs.inputs = foundInputs.inputs.toSpliced(foundInputIndex, 1)                        

        setForms(forms.toSpliced(foundFormIndex, 1, foundForm))
    }

    const sendForms = (e) => {
        e.preventDefault()
        sendFormData({ workXp: forms })    
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