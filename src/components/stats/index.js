import React from 'react'
import style from './index.module.css'

export default function Stats() {
  return (
    <div className={style.container} >
      <img
        style={{ width: "100vw" }}
        src={`${process.env.PUBLIC_URL}/images/stats.png`}
      />
      <div className={style.content}>
        <div className={style.contentWrapper}>
          <div className={style.item}>
            <div className={style.itemicon}>
              <img src={`${process.env.PUBLIC_URL}/images/stats1.svg`} />
            </div>
            <div className={style.itemTextContainer}>
              <div className={style.itemTextBold}>1000+</div>
              <div className={style.itemText}>Success Stories</div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemicon}>
              <img src={`${process.env.PUBLIC_URL}/images/stats2.svg`} />
            </div>
            <div className={style.itemTextContainer}>
              <div className={style.itemTextBold}>10+</div>
              <div className={style.itemText}>Trusted Tutors</div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemicon}>
              <img src={`${process.env.PUBLIC_URL}/images/stats3.svg`} />
            </div>
            <div className={style.itemTextContainer}>
              <div className={style.itemTextBold}>50+</div>
              <div className={style.itemText}>Schedules</div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemicon}>
              <img src={`${process.env.PUBLIC_URL}/images/stats4.svg`} />
            </div>
            <div className={style.itemTextContainer}>
              <div className={style.itemTextBold}>5+</div>
              <div className={style.itemText}>Courses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
