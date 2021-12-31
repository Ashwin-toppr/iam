import React from "react";
import style from './index.module.css'

export default function Oppotunities() {
  return (
    <div className={style.container}>
      <div className={style.section1}>
        <div className={style.contentWrapper}>
          <div>
            <img className={style.image} src={`${process.env.PUBLIC_URL}/images/jobOppo.svg`} />
          </div>
          <div className={style.descContent}>
            <h1 className={style.heading} >Job Opportunities In Identity and Access Management Domain</h1>
            <div>
              <p className={style.para} >
                Identity and access Management Market, valued at US$ 9,526.0 Mn
                in 2018, is projected to reach US$ 24,757.8 Mn by the end of
                2026.
              </p>
              <p className={style.para} >
                This will result in steady increase of demand of skilled
                professiona by 15% every year.
              </p>
              <p className={style.para} >
                IAM skills are hard to find, number of open position for IAM
                have increased over 50% in last 5 years.
              </p>
            </div>
            <button className={style.primaryCta} >Get Started Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
