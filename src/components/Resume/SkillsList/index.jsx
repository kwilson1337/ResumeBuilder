import './styles.scss'

export default function SkillsList({ list }) {     
    return (
        <>                
            <div className="skills-list">
                <div className="skills-list__inner">
                    <h2>Professional Skills</h2>
                    <div className="skills-list__list">
                        <ul>
                            {
                            list.map(item => (
                                    
                                <li key={item.id}>{item.copy}</li>
                            ))
                            }       
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}