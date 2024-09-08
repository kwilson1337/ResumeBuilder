export default function ResumeForms({ description, children, submitForm, disableSubmit = false, hideSubmit = false }) {             
    const preventFormDefault = (e) => {
        e.preventDefault()
        submitForm()
    }
    return (
        <>
            <div className="resume-info">
                <div className="resume-info__inner">
                    {
                        description
                         ? (
                            <div className="resume-info__desc">
                                <p>{description}</p>                        
                            </div>   
                         )
                         : ''
                    }                                     

                    <div className='resume-info__form'>
                        {children}                                                                   
                    </div>

                    {
                        !hideSubmit
                            ? (
                                <div className="resume-info__submit">
                                    <button onClick={(e) => preventFormDefault(e)} disabled={disableSubmit} className="button">Submit</button>
                                </div>
                            )
                            : ''                        
                    }                    
                </div>
            </div>
        </>
    )
}