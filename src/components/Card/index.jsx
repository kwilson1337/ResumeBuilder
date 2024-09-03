import './styles.scss'

export default function Card({ children, border }) {
    const hasBorder = border ? '--border' : ''

    return (
        <>
            <div className={`card ${hasBorder}`}>                
                <div className="card__inner">
                    {children}
                </div>
            </div>
        </>
    )
}