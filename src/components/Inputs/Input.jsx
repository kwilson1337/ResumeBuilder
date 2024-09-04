'use client'

import './input.scss'
import { useState } from 'react'

export default function Input({ placeHolder, sendData }) {        
    const [copy, setCopy] = useState('')
    const getInputData = (e) => {        
        setCopy(e.target.value)
        sendData({ [placeHolder]: e.target.value })
    }

    return (
        <>
            <input 
                className='kw-input'
                type="text" 
                value={copy}
                onChange={getInputData}
                placeholder={placeHolder}                        
            />
        </>
    )    
}