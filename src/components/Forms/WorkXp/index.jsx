'use client'

import '../styles.scss'
import './styles.scss'

import Form from '@/components/Forms/Form'
import Input from '@/components/Inputs/Input'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function WorkXp() {     
    const buildIds = () => nanoid()
    
    const defaultInput = {
        id: buildIds(),
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
                        {
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
                                            sendData={(e) => setDataInForm({...e, form})}
                                        />
                                    </div>
                                ))
                                : (
                                    <Input                                 
                                        inputId={input.id}
                                        placeHolder={input.placeholder}  
                                        sendData={(e) => setDataInForm({...e, form})}
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
        const formId = data.form.id
        const foundForm = forms.find(form => form.id === formId)
        const foundInput = foundForm.inputs.find(input => input.id === inputKey)
                
        foundInput.copy = data[inputKey]
        
        setForms([...new Set([...forms, foundForm])])
    }

    const duplicateRespInput = (e, { form }) => {
        e.preventDefault()
        const foundForm = forms.find(item => item.id === form.id)
        const foundInputs = foundForm.inputs.find(input => input.id === 'jobResponsibilities')
        defaultInput.id = buildIds()
        foundInputs.inputs.push(defaultInput)

        const unique = [...new Map(forms.map(item => [item['id'], item])).values()]        
        setForms(unique)
    }

    const removeRespInput = (e, { item, form }) => {
        e.preventDefault()
        console.log(item, form)
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