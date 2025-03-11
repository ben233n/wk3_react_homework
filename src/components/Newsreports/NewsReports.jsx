import React from 'react'
import styles from './NewsReports.module.css'
const NewsReports = ({img,title,pp}) => {
  return (
    <div className={styles.box}>
    <img src={img} alt="" className={styles.img}/>
    <div className={styles.text}>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.p}>
        {pp}
      </p>
    </div>
  </div>
  )
}

export default NewsReports