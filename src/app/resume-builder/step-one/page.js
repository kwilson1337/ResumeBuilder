'use client'

import './step-one.scss'
import StepOneForm from '@/components/step-one'

export default function stepOne() {
    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="step-one">
                <div className='step-one__inner'>
                    <div className="container">
                        <div className="step-one__intro">
                            <h1>Let's get started</h1>
                            <p>First let's collect some contact information.</p>
                            <p>Your employer will need to get in touch with you!</p>
                        </div>

                        <div className='step-one__form'>
                            <StepOneForm 
                                submitContactInfo={submitForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}