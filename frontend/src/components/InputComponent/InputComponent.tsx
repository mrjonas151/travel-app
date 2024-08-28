import styles from './InputComponent.module.css'

interface InputComponentProps {
  imgSrc: string;
  imgAlt: string;
  placeholder: string;
  type: string;
  min?: number;
}

const InputComponent = ({ imgSrc, imgAlt, placeholder, type, min }: InputComponentProps) => {
  return (
    <div className={styles.inputContainer}>
        <img src={imgSrc} alt={imgAlt} className={styles.icon} />
        <input type={type} className={styles.input} placeholder={placeholder} min={min}/>
    </div>
  )
}

export default InputComponent