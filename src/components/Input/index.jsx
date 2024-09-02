'use client'

import './input.scss'
import { useState } from 'react'

export default function Input({ placeHolder, sendData, inputType }) {        
    const [copy, setCopy] = useState('')
    const getInputData = (e) => {        
        setCopy(e.target.value)
        sendData({ [placeHolder]: e.target.value })
    }

    const type = inputType ?? 'text'

    return (
        <>
            <div className="kw-input">
                <div className="kw-input__inner">
                    <input 
                        type={type} 
                        value={copy}
                        onChange={getInputData}
                        placeholder={placeHolder}                        
                    />
                </div>
            </div>
        </>
    )    
}