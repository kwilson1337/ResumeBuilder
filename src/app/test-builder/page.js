'use client'

import './builder.scss'
import Accordion from '@/components/Accordion';
import Card from '@/components/Card';
import PersonalInfoForm from '@/components/Forms/PersonalInformation'
import EducationForm from '@/components/Forms/Education'
import ProfessionalSkills from '@/components/Forms/ProfessionalSkills'

export default function Builder() {
    const getFormData = (data) => {
        console.log(data)
    }

    const conactInfo = {
        header: 'Contact information for employer',
        content: <PersonalInfoForm />,
        initialEntered: true
    }

    const jobInformation = {
        header: 'Job information',
        content: 'Company name, Location, Job title, start date - end date'
    }

    const education = {
        header: 'Education',
        content: <EducationForm />
    }

    const professionalSkills = {
        header: 'Profession skills',
        content: <ProfessionalSkills recieveFormData={getFormData} />
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
                        <div className="resume-builder__col">hello</div>
                    </div>
                </div>
            </div>
        </>
    )
}