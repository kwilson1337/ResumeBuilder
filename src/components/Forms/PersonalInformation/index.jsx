'use client'

import '../styles.scss'
import { useState } from 'react'
import Input from '@/components/Inputs/Input.jsx'

export default function stepOneForm({ submitContactInfo }) {
    const [formData, setFormData] = useState({
        'First name': '',
        'Last name': '',
        'Job title': '',
        'Email address': '',
        'Phone number': ''        
    })       
           
    const recieveFormData = (data) => {   
        const setData = {...formData, ...data}             
        setFormData(setData)             
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
            <div className="resume-info">
                <div className="resume-info__inner">
                    <div className="resume-info__desc">
                        <p>Your personal information that the employer can use to reach out to you.</p>
                    </div>                    

                    <form onSubmit={submitForm} className='resume-info__form'>
                        <Input
                            placeHolder={'First name'}
                            sendData={recieveFormData}
                        />
                        <Input
                            placeHolder={'Last name'}
                            sendData={recieveFormData}
                        />

                        <div className="span-2">
                            <Input
                                placeHolder={'Job title'}
                                sendData={recieveFormData}
                            />
                        </div>

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
                    </form>
                </div>
            </div>
        </>
    )
}