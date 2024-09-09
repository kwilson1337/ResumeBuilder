import "./styles.scss"

export default function ResumeHeader({ headerInfo }) {
    const getInfoById = (id) => {
        const found = headerInfo.filter(item => item.id === id)
        
        if(found.length) return found[0].copy
        return ''
    }

    const contactInfo = [
        getInfoById('phoneNumber') || null, 
        getInfoById('emailAddress') || null, 
        getInfoById('address') || null
    ]
    return (
        <>
            <div className="resume-header">
                <div className="resume-header__inner">                    
                    <div className="resume-header__name">
                        <h2>{getInfoById('firstName')} {getInfoById('lastName')}</h2>
                    </div>

                    <div className="resume-header__title">
                        <h3>{getInfoById('jobTitle')}</h3>
                    </div>

                    <div className="resume-header__contact">  
                        {/* {contactInfo}                       */}
                        {
                            contactInfo.some(item => item !== null)
                                ? contactInfo.join(' | ')
                                : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}