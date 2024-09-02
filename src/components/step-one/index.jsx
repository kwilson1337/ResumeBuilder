'use client'

import './step-one-form.scss'
import { useState } from 'react'
import Input from '@/components/Input'

export default function stepOneForm({ submitContactInfo }) {
    const [formData, setFormData] = useState({
        'First name': '',
        'Last name': '',
        'Email address': '',
        'Phone number': ''
    })   
    const [canSubmit, setCanSubmit] = useState(false)    
            
    const recieveFormData = (data) => {   
        const setData = {...formData, ...data}             
        setFormData(setData)  
        
        if(!isEmpty(setData)) {
            setCanSubmit(true)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()        
        submitContactInfo(formData)
    }

    const isEmpty = (obj) => {            
        return Object.values(obj).some(item => item === '')
    }    

    return (
        <>
            <div className="step-one-form">
                <div className="step-one-form__inner">
                    <form onSubmit={submitForm} className='step-one-form__form'>
                        <Input
                            placeHolder={'First name'}
                            sendData={recieveFormData}
                        />
                        <Input
                            placeHolder={'Last name'}
                            sendData={recieveFormData}
                        />
                        <Input
                            placeHolder={'Email address'}    
                            sendData={recieveFormData}
                            type={'email'}
                            required                            
                        />
                        <Input
                            placeHolder={'Phone number'}     
                            sendData={recieveFormData}                       
                        />

                        <div className="step-one-form__submit">                            
                            <button disabled={!canSubmit} className="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}