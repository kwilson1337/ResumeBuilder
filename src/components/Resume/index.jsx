'use client'
import './styles.scss'
import SkillsList from './SkillsList'
import ResumeHeader from './Header'
import ResumeEducation from './Education'
import ResumeWorkXp from './WorkXp'

export default function Resume({ resumeData }) {    
    const personalInfo = resumeData.personalInfo || []
    const educationData = resumeData.education || []   
    const proSkills = resumeData.proSkills || []
    const workXp = resumeData.workXp || []
    return (
        <>
            <div className="resume-bones">
                <div className="resume-bones__inner">
                    <div className="resume-bones__header">
                        {
                            personalInfo.length
                                ? <ResumeHeader headerInfo={personalInfo} />
                                : ''
                        }
                    </div>
                    <div className="resume-bones__body">
                        {
                            educationData.length
                                ? <ResumeEducation educationLevel={educationData} />
                                : ''
                        }
                        {
                            proSkills.length
                                ? <SkillsList list={proSkills} />
                                : ''
                        }       
                        {
                            workXp.length
                                ? <ResumeWorkXp workXp={workXp} />
                                : ''
                        }                 
                    </div>                    
                </div>
            </div>
        </>
    )
}