import React from 'react'
import styles from './New.module.css'
import NewsReports from '../Newsreports/NewsReports'
import one from '../../../public/第一張.png'
import two from '../../../public/第二張.png'
import there from '../../../public/第三張.png'
import right from '../../../public/右.svg'
import left from '../../../public/左.svg'
const New = () => {
  return (
    <>
      <div className={styles.bg_up}>
        <h2 className={styles.up_h2}>最新消息</h2>
        <p className={styles.up_p}>迅速掌握每一則關於嘉大的相關訊息及獲獎紀錄</p>
      </div>
      <div className={styles.down}>
        <img src={left} alt="" className={styles.arrow}/>
        <div className={styles.container}>
          <NewsReports 
            img={one}
            title="榮獲大獎 | 2077年台灣景觀大獎"
            pp="恭喜嘉大景觀設計於2077年榮獲台灣景觀大獎，這是對其在景觀設計領域卓越表現的高度肯定。該公司憑藉其創新、環保且符合…"
          />
          <NewsReports
            img={two}
            title="榮獲大獎 | 2035年國際景觀大獎"
            pp="賀！嘉大景觀設計公司於2035年榮獲國際景觀大獎，這一成就標誌著該公司在全球景觀設計領域的卓越地位。該公司憑藉其突破…"
          />
          <NewsReports
            img={there}
            title="媒體報導 | Gardening Australia"
            pp="嘉大景觀近日榮登澳大利亞知名園藝與景觀設計節目《Gardening Australia》，展示其在景觀設計領域的創新成就。在節目中…"
          />
        </div>
        <img src={right} alt="" className={styles.arrow}/>
      </div>
    </>
  )
}

export default New