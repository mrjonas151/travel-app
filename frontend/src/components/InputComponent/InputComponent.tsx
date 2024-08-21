import styles from './InputComponent.module.css'

interface InputComponentProps {
  imgSrc: string
  imgAlt: string
}

const InputComponent = ({ imgSrc, imgAlt }: InputComponentProps) => {
  return (
    <div className={styles.inputContainer}>
        <img src={imgSrc} alt={imgAlt} className={styles.icon} />
        <input type="text" className={styles.input} placeholder='Where to go?' />
    </div>
  )
}

export default InputComponent