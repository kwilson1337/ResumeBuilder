'use client'

import './input.scss'
import { useState } from 'react'

export default function TextArea({ placeholder }) {
    const [copy, setCopy] = useState('')
    const getInputData = (e) => {        
        setCopy(e.target.value)
        sendData({ [placeHolder]: e.target.value })
    }

    return (
        <>
            <textarea 
                className="kw-textarea kw-input" 
                placeholder={placeholder}
                value={copy}
                onChange={getInputData}
            ></textarea>
        </>
    )
}