import React from 'react'
import styles from './Case.module.css'
import Work from '../Work/Work'
import w1 from '../../../public/w1.png'
import w2 from '../../../public/w2.png'
import w3 from '../../../public/w3.png'
import w4 from '../../../public/w4.png'
import w5 from '../../../public/w5.png'
import w6 from '../../../public/w6.png'

const Case = () => {
  return (
    <>
      <div className={styles.bg_up}>
          <h2 className={styles.up_h2}>精選案例</h2>
          <p className={styles.up_p}>家的故事在庭園綻放，成就每一個經典的案例</p>
      </div>
      <div className={styles.down}>
          <div className={`${styles.container} container `}>
              <Work
                img={w1}
                pp="春山秋水/簡物之禪"
              />
              <Work
                img={w2}
                pp="砂與石的靜謐之美"
              />
              <Work
                img={w3}
                pp="古松盤旋/禪意庭園"
              />
              <Work
                img={w4}
                pp="水鏡映樹/靜美如畫"
              />
              <Work
                img={w5}
                pp="綠樹春邊河"
              />
              <Work
               img={w6}
               pp="枯山水/靜謐中的自然美學"
              />
          </div>
        </div>
    </>
  )
}

export default Case