export default function ResumeForms({ description, children }) {             
    return (
        <>
            <div className="resume-info">
                <div className="resume-info__inner">
                    <div className="resume-info__desc">
                        <p>{description}</p>                        
                    </div>                    

                    <form className='resume-info__form'>
                        <div className="span-2">                            
                            {children}
                        </div>                                                                     
                    </form>
                </div>
            </div>
        </>
    )
}