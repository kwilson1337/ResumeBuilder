import './styles.scss'

export default function Card({ children, border, noPadding }) {
    const hasBorder = border ? '--border' : ''

    return (
        <>
            <div className={`card ${hasBorder}`}>                
                <div className={`card__inner ${noPadding ? '--no-padding' : ''}`}>
                    {children}
                </div>
            </div>
        </>
    )
}