'use client'

import './step-one-form.scss'
import { useState } from 'react'
import Input from '@/components/Input'

export default function stepOneForm({ submitContactInfo }) {
    const [firstName, setFirstName] = useState({})
    const [lastName, setLastName] = useState({})
    const [emailAddress, setEmailAddress] = useState({})
    const [phoneNumber, setPhoneNumber] = useState({})    
    
    const recieveFirstName = (data) => {            
        setFirstName(data)        
    }

    const recieveLastName = (data)=> {
        setLastName(data)        
    }

    const recieveEmailAddress = (data) => {
        setEmailAddress(data)
    }

    const recievePhoneNumber = (data) => {
        setPhoneNumber(data)
    }

    const submitForm = (e) => {
        e.preventDefault()

        submitContactInfo({
            ...firstName,
            ...lastName,
            ...emailAddress,
            ...phoneNumber
        })
    }

    return (
        <>
            <div className="step-one-form">
                <div className="step-one-form__inner">
                    <form onSubmit={submitForm} className='step-one-form__form'>
                        <Input
                            placeHolder={'First name'}
                            sendData={recieveFirstName}
                        />
                        <Input
                            placeHolder={'Last name'}
                            sendData={recieveLastName}
                        />
                        <Input
                            placeHolder={'Email address'}    
                            sendData={recieveEmailAddress}
                        />
                        <Input
                            placeHolder={'Phone number'}     
                            sendData={recievePhoneNumber}                       
                        />

                        <div className="step-one-form__submit">
                            <button className="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}