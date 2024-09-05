export default function ResumeForms({ description, children, submitForm, disableSubmit = false, hideSubmit = false }) {             
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

                    <form className='resume-info__form'>
                        {children}                                                                   
                    </form>

                    {
                        !hideSubmit
                            ? (
                                <div className="resume-info__submit">
                                    <button onClick={submitForm} disabled={disableSubmit} className="button">Submit</button>
                                </div>
                            )
                            : ''                        
                    }                    
                </div>
            </div>
        </>
    )
}