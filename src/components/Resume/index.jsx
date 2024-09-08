'use client'
import './styles.scss'
import SkillsList from './SkillsList'

export default function Resume({ resumeData }) {       
    return (
        <>
            <div className="resume-bones">
                <div className="resume-bones__inner">                    
                    <SkillsList list={resumeData.proSkills || []} />
                </div>
            </div>
        </>
    )
}