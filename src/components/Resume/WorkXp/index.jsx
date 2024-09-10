import './styles.scss'

export default function ResumeWorkXp({ workXp }) {    

    const getDataById = (data, id) => {
        if(data.id === id) {            
            return data.copy
        }

        return ''
    }

    const loopResponsibilities = (data) => {        
        const resps = data.inputs.find(resp => resp.id === 'jobResponsibilities')        

        if(!resps) return ''
        
        return resps.inputs.map(item => (
            <li key={item.id} className="resume-work-xp__single-resp">
                {item.copy}
            </li>
        ))
    }

    const findItemSingleInput = (data, id) => {
        if(!data.inputs.length) return 

        return data.inputs.find(item => item.id === id)?.copy
    }       
    return (
        <>
            <div className="resume-work-xp">
                <div className="resume-work-xp__inner">
                    <div className="resume-work-xp__header">
                        <h2>Work experience</h2>
                    </div>    
                    {workXp.map(xp => (
                        <div key={xp.id} className="resume-work-xp__block">                             
                            <div className="resume-work-xp__flex">
                                <div className="resume-work-xp__company-info --gap-0">                                    
                                    <span><strong>{findItemSingleInput(xp, 'companyName')}</strong></span>
                                    <span>, {findItemSingleInput(xp, 'jobLocation')}</span>
                                </div>         

                                <div className="resume-work-xp__work-length">
                                    <span>{findItemSingleInput(xp, 'startDate')}</span>                                    
                                    <span>- {findItemSingleInput(xp, 'endDate')}</span>
                                </div>
                            </div>     

                            <div className="resume-work-xp__job-title">
                                {findItemSingleInput(xp, 'jobTitle')}
                            </div>                        

                            <div className="resume-work-xp__responsbilities">
                                {/* <span>Responsibilities:</span> */}
                                <ul>
                                    {loopResponsibilities(xp)}
                                </ul>    
                            </div>                       
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}