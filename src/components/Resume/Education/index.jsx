import './styles.scss'

export default function ResumeEducation({ educationLevel }) {
    const getInfoById = (id) => {
        const found = educationLevel.filter(item => item.id === id)
        
        if(found.length) return found[0].copy
        return ''
    }

    return (
        <>
            <div className="resume-education">
                <div className="resume-education__inner">
                    <div className="resume-education__heading">
                        <h2>Education</h2>
                    </div>

                    <div className="resume-education__flex">
                        <div className="resume-education__school">
                            {getInfoById('schoolName')} {`- ${getInfoById('schoolLocation')}`}                        
                        </div>

                        <div className="resume-education__year">
                            {getInfoById('yearGraduated')}
                        </div>
                    </div>

                    <div className="resume-education__degree">
                        {getInfoById('degreeName')}
                    </div>
                </div>
            </div>
        </>
    )
}