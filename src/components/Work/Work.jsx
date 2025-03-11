import React from 'react'
import styles from './work.module.css'
const Work = ({pp,img}) => {
  return (
    <div className={styles.bg}>
        <img src={img} alt="" className={styles.img}/>
        <p className={styles.p}>{pp}</p>
    </div>
  )
}

export default Work