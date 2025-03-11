import React from 'react'
import styles from './Big.module.css'
const Big = () => {
  return (
    <div className={styles.big_img}>
      <div className={`container ${styles.container} `}>
          <h2 className={styles.la_h2}>LANDSCAOE</h2>
          <h2 className={styles.la_h2}>DESIGN</h2>
          <p className={styles.la_p}>”Gardens are not made by sitting in the shade ”</p>

      </div>
    </div>
  )
}

export default Big