import styles from "./Loading.module.css"
import airplane_loading from "../../assets/airplane_loading.gif"


const Loading = () => {
  return (
    <div className={styles.mainContainer}> 
        <img src={airplane_loading} className={styles.gif} />
    </div>
    
  )
}

export default Loading