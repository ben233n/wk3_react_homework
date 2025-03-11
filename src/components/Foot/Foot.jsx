import React from 'react'
import styles from './Foot.module.css'
import logo from './../../../public/logo.svg'
import fb from './../../../public/fb.svg'
import ig from './../../../public/ig.svg'
import line from './../../../public/line.svg'
const Foot = () => {
  return (
    <>
      <div className={styles.up}>
        <div className={`${styles.container} container `}>
          <div className={styles.call}>
            <img src={logo} alt="" className={styles.logo}/>
            <div className={styles.dividing_line}></div>
            <div className={styles.text}>
              <p>服務時間 周一至周五 09:00 - 18:00</p>
              <p>連絡電話 02-4129-8890</p>
              <p>電子信箱 ncyula@gmail.com</p>
            </div>
            <div className={styles.icon}>
              <img src={fb} alt="" className={styles.icon_img}/>
              <img src={ig} alt="" className={styles.icon_img}/>
              <img src={line} alt="" className={styles.icon_img}/>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322274.7177771004!2d9.674332642134189!3d17.07031329802395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1199ec7ac6a1af5d%3A0xc933920a158e24d4!2z5bC85pel!5e0!3m2!1szh-TW!2stw!4v1741659567239!5m2!1szh-TW!2stw"   allowfullscreen="" loading="lazy" className={styles.map}></iframe>
        </div>
      </div>
      <div className={styles.down}>
        <p>©Copyright All rights reserved.</p>
      </div>
    </>
  )
}

export default Foot