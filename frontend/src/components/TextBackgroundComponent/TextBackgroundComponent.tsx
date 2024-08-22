import styles from './TextBackgroundComponent.module.css'

interface TextBackgroundComponentProps {
    title: string;
    country?: string;
}

const TextBackgroundComponent = ({title, country}:TextBackgroundComponentProps) => {
  return (
    <div className={styles.mainContainer}>
        <h1>{title}</h1>
        <div className={styles.rowComponent}>
            <p>Home</p>
            <p>/</p>
            <p className={!country ? styles.changeColor : ''}>{title}</p>
            {country && (
                <>
                    <p>/</p>
                    <p className={styles.changeColor}>{country}</p>
                </>
            )}
        </div>
    </div>
  )
}

export default TextBackgroundComponent