import styles from './Greeting.module.css'

function Greetings() {
    console.log(styles)
  return <>
    <h1 className={styles.App}>Geetings Human</h1>
    <p className={styles.Para}>Wsup!</p>
  </>
}

export default Greetings;