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
// import html2canvas from 'html2canvas';
import html2PDF from 'jspdf-html2canvas';

export default function Builder() {
    const [resumeData, setResumeData] = useState({})
    const [resumeLink, setResumeLink] = useState('')

    const getFormData = (data) => {                
        const ObjKey = Object.keys(data)[0]

        console.log(ObjKey, data)

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

    const saveAsPdf = async () => {   
        const resume = document.querySelector('.resume-bones')
        const newDiv = document.createElement("div");
        newDiv.classList.add(...['resume-bones', '--print'])

        newDiv.innerHTML = resume.innerHTML
        document.body.appendChild(newDiv)

        html2PDF(newDiv, {
            jsPDF: {
                format: 'a4',
              },
              imageType: 'image/jpeg',
              output: './pdf/generate.pdf'
        })        
    }
           
    return (
        <>
            <div className="resume-builder">
                <div className="container">
                    <div className="resume-builder__inner">
                        <div className="resume-builder__col">                            
                            <Card noPadding>
                                <Accordion allowMultiple accordionData={accordions} />

                                <div className='resume-builder__save'>
                                    <button onClick={saveAsPdf} className='button'>Save</button>
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