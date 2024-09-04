'use client'

import './input.scss'
import { useState } from 'react'

export default function Input({ placeHolder, sendData, inputId }) {        
    const [copy, setCopy] = useState('')
    const getInputData = (e) => {        
        setCopy(e.target.value)
        sendData({ [inputId]: e.target.value })
    }

    return (
        <>
            <input 
                className='kw-input'
                type="text" 
                value={copy}
                data-id={inputId}
                onChange={getInputData}
                placeholder={placeHolder}                        
            />
        </>
    )    
}