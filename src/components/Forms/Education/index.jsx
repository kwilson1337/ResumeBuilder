'use client'

import '../styles.scss'
import { useState } from 'react'
import Input from '@/components/Inputs/Input.jsx'
import Form from '@/components/Forms/Form'

export default function stepOneForm({ sendFormData }) {          
    const [inputs, setInputs] = useState([
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
    ])
               
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
                submitForm={() => sendFormData({ personalInfo: inputs })}
            >
                {renderInputs(inputs)}
            </Form>
            {/* <div className="resume-info">
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
            </div> */}
        </>
    )
}