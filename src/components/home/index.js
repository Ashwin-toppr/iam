import React from 'react'
import style from './index.module.css'
// import CLOCK from `${process.env.PUBLIC_URL}/images/clock.svg`;
// import CALENDAR from ${process.env.PUBLIC_URL}/images/calendar.svg";

export default function Home() {
    return (
      <div className={style.container}>
        <div className={style.section1}>
          <div className={style.contentWrapper}>
              <div className={style.caroContentBody}>
                <div className={style.caroContentHeading}>IAM School</div>
                <div className={style.caroContentDesc}>
                  IAM School is a craft by Industry’s best Identity
                  professionals to develop talented skills in the area of secure
                  Identity and Access Management.
                </div>
                <div className={style.dFlex}>
                  <div className={style.gunPointWrapper}>
                      <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="clock" />
                    <div className={style.gunpointText}>5 Weeks</div>
                  </div>
                  <div className={style.gunPointWrapper}>
                      <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="calendar" />                    
                    <div className={style.gunpointText}>21, Feb 2022</div>
                  </div>
                </div>
                <div className={style.ctaWrapper}>
                    <button className={style.primaryCta}>Get Started Now</button>
                    <button className={style.secondaryCta} >Demo Class</button>
                </div>
              </div>
            <div className={style.videoContet}>
                <video width="100%" height="100%" controls>
                    <source src="src=http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
                </video>
            </div>
          </div>
        </div>
      </div>
    );
}
