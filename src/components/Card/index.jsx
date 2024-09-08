import './styles.scss'

export default function Card({ children, border, noPadding }) {
    const hasBorder = border ? '--border' : ''    
    const styles = ['card__inner', `${noPadding ? '--no-padding' : ''}`]

    return (
        <>
            <div className={`card ${hasBorder}`}>
                <div                     
                    className={styles.join(' ')}
                >
                    {children}
                </div>
            </div>
        </>
    )
}