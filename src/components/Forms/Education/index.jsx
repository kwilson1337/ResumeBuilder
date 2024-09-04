'use client'

import '../styles.scss'
import { useState } from 'react'
import Input from '@/components/Inputs/Input.jsx'

export default function stepOneForm({ submitContactInfo }) {
    const [formData, setFormData] = useState({
        'School name': '',
        'Degree name': '',
        'Year graduated': '',       
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
                        <p>Information the employer can use to see your education level.</p>
                    </div>   

                    <form onSubmit={submitForm} className='resume-info__form'>
                        <Input
                            placeHolder={'School name'}
                            sendData={recieveFormData}
                        />
                        <Input
                            placeHolder={'Degree name'}
                            sendData={recieveFormData}
                        />

                        <div className="span-2">
                            <Input
                                placeHolder={'Year graduated'}
                                sendData={recieveFormData}
                            />
                        </div>                                          
                    </form>
                </div>
            </div>
        </>
    )
}