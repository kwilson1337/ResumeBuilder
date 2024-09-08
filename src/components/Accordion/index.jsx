import './styles.scss'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import Image from "next/image";

export default function AccordionWrapper({ allowMultiple, accordionData }) {
    const multiple = allowMultiple ?? ''

    const AccordionItem = ({ header, ...rest }) => (
        <Item
          {...rest}
          header={
            <>
                <Image 
                className='chevron-down'
                src="/chevron-down.svg"
                alt="Chevron Down"
                width={20}
                height={20}                
                />     
                
                {header}                       
            </>
          }
        />
    )

    return (
        <>
            <Accordion allowMultiple={multiple} transition transitionTimeout={250}>
                {accordionData.map(({ header, content, initialEntered }, i) => (                                        
                    <AccordionItem header={header} key={i} initialEntered={initialEntered}>
                        {content}
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}