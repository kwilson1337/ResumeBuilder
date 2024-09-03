'use client'

import './builder.scss'
import Accordion from '@/components/Accordion';
import StepOneForm from '@/components/step-one';
import Card from '@/components/Card';

export default function Builder() {

    const items = [
        {
            header: 'Contact information',
            content: <StepOneForm />,
            initialEntered: true
        },
        {
            header: 'Where does it come from?',
            content: 'Quisque eget luctus mi, vehicula mollis lorem...'
        },
        {
            header: 'Why do we use it?',
            content: 'Suspendisse massa risus, pretium id interdum in...'
        }
    ];

    return (
        <>
            <div className="resume-builder">
                <div className="container">
                    <div className="resume-builder__inner">
                        <div className="resume-builder__col">
                            <Card>
                                <Accordion accordionData={items} />                             
                            </Card>                            
                        </div>
                        <div className="resume-builder__col">hello</div>
                    </div>
                </div>
            </div>
        </>
    )
}