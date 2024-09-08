'use client'

import './builder.scss'
import Accordion from '@/components/Accordion';
import Card from '@/components/Card';
import PersonalInfoForm from '@/components/Forms/PersonalInformation'
import EducationForm from '@/components/Forms/Education'
import ProfessionalSkills from '@/components/Forms/ProfessionalSkills'
import WorkXp from '@/components/Forms/WorkXp';
import Resume from '@/components/Resume';
import { useState } from 'react';

export default function Builder() {
    const [resumeData, setResumeData] = useState({})

    const getFormData = (data) => {                
        const ObjKey = Object.keys(data)[0]
        setResumeData({
            ...resumeData,
            [ObjKey] : data[ObjKey]
        })                
    }

    const conactInfo = {
        id: 'personalInfo',
        header: 'Contact information for employer',
        initialEntered: true,
        content: <PersonalInfoForm 
                    sendFormData={getFormData} 
                    userLoadedInputs={resumeData?.personalInfo ?? false}
                />        
    }

    const jobInformation = {
        id: 'workXp',
        header: 'Job information',
        initialEntered: false,
        content: <WorkXp 
                    sendFormData={getFormData} 
                    userLoadedInputs={resumeData?.workXp ?? false}
                />        
    }    
    const education = {
        id: 'education',
        header: 'Education',
        initialEntered: false,
        content: <EducationForm 
                    sendFormData={getFormData}
                    userLoadedInputs={resumeData?.education ?? false}
                />
    }

    const professionalSkills = {
        id: 'proSkills',
        header: 'Profession skills',
        initialEntered: false,
        content: <ProfessionalSkills
                    sendFormData={getFormData} 
                    userLoadedInputs={resumeData?.proSkills ?? false}
                />
    }
   
    const accordions = [
        conactInfo,        
        education,
        professionalSkills,
        jobInformation
    ]
        
    return (
        <>
            <div className="resume-builder">
                <div className="container">
                    <div className="resume-builder__inner">
                        <div className="resume-builder__col">                            
                            <Card noPadding>
                                <Accordion allowMultiple accordionData={accordions} />

                                <div className='resume-builder__save'>
                                    <button className='button'>Save</button>
                                    <button className='button --outline'>Cancel</button>
                                </div>
                            </Card>                            
                        </div>
                        <div className="resume-builder__col --purp">
                            <div className='resume-builder__preview'>
                                <Resume resumeData={resumeData} />
                            </div>                                                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}