'use client'

import './builder.scss'
import Accordion from '@/components/Accordion';
import Card from '@/components/Card';
import PersonalInfoForm from '@/components/Forms/PersonalInformation'
import EducationForm from '@/components/Forms/Education'
import ProfessionalSkills from '@/components/Forms/ProfessionalSkills'
import WorkXp from '@/components/Forms/WorkXp';

export default function Builder() {
    const getFormData = (data) => {
        console.log(data)
    }

    const conactInfo = {
        header: 'Contact information for employer',
        content: <PersonalInfoForm sendFormData={getFormData} />,
        initialEntered: true
    }

    const jobInformation = {
        header: 'Job information',
        content: <WorkXp />        
    }

    const education = {
        header: 'Education',
        content: <EducationForm sendFormData={getFormData} />
    }

    const professionalSkills = {
        header: 'Profession skills',
        content: <ProfessionalSkills sendFormData={getFormData} />
    }
    
    return (
        <>
            <div className="resume-builder">
                <div className="container">
                    <div className="resume-builder__inner">
                        <div className="resume-builder__col">
                            <Card>
                                <Accordion accordionData={[conactInfo]} />
                                <Accordion accordionData={[education]} />
                                <Accordion accordionData={[professionalSkills]} />
                                <Accordion accordionData={[jobInformation]} />                                

                                <div className='resume-builder__save'>                                    
                                    <button className='button'>Save</button>
                                    <button className='button --outline'>Cancel</button>
                                </div>
                            </Card>                            
                        </div>
                        <div className="resume-builder__col">
                            <div className='resume-builder__sticky'>
                                <Card noPadding>
                                    <div className='resume-builder__preview'>
                                        hello
                                    </div>
                                </Card>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}