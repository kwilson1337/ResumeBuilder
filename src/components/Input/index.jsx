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
            <div className="kw-input">
                <div className="kw-input__inner">
                    <input 
                        type="text" 
                        value={copy}
                        onChange={getInputData}
                        placeholder={placeHolder}                        
                    />
                </div>
            </div>
        </>
    )    
}