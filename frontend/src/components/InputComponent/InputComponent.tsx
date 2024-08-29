import styles from './InputComponent.module.css'

interface InputComponentProps {
  imgSrc: string;
  imgAlt: string;
  placeholder: string;
  type: string;
  min?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({ imgSrc, imgAlt, placeholder, type, min, value, onChange }: InputComponentProps) => {
  return (
    <div className={styles.inputContainer}>
      <img src={imgSrc} alt={imgAlt} className={styles.icon} />
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        min={min}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent