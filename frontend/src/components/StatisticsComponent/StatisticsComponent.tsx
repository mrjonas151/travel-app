import styles from './StatisticsComponent.module.css'

interface StatisticsComponentProps {
    number: string
    text: string
}

const StatisticsComponent = ({number, text}:StatisticsComponentProps) => {
  return (
    <div className={styles.mainContainer}>
        <h1>{number}</h1>
        <p>{text}</p>
    </div>
  )
}

export default StatisticsComponent