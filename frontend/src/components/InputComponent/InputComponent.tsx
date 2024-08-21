import styles from './InputComponent.module.css'
import telegrama from '../../assets/telegrama.png'

const InputComponent = () => {
  return (
    <div className={styles.inputContainer}>
        <img src={telegrama} alt="telegrama logo" className={styles.icon} />
        <input type="text" className={styles.input} placeholder='Where to go?' />
    </div>
  )
}

export default InputComponent