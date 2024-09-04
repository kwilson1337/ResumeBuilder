export default function ResumeForms({ description, children, submitForm, disableSubmit = false }) {             
    return (
        <>
            <div className="resume-info">
                <div className="resume-info__inner">
                    <div className="resume-info__desc">
                        <p>{description}</p>                        
                    </div>                    

                    <form className='resume-info__form'>
                        {children}                                                                   
                    </form>

                    <div className="resume-info__submit">
                        <button onClick={submitForm} disabled={disableSubmit} className="button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}