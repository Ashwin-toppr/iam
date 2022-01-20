import React from 'react'
import style from './index.module.css'
// import { Carousel } from 'react-responsive-carousel';
import './index.module.css'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';

export default function Home() {


  const navigate = useNavigate();

    return (
      <div className={style.container}>
            <Carousel autoplay={true}  >
              <div className={style.section1}>
                <div className={style.contentWrapper}>
                    <div className={style.caroContentBody}>
                      <div className={style.caroContentHeading}>IAM School</div>
                      <div className={style.caroContentDesc}>
                      Digitaiken is digital solution company working on product Development, digital workplace solution and Identity and Access management.
                      </div>
                      <div className={style.dFlex}>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="clock" />
                          <div className={style.gunpointText}>5 Weeks</div>
                        </div>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="calendar" />                    
                          <div className={style.gunpointText}>26, Feb 2022</div>
                        </div>
                      </div>
                      <div className={style.ctaWrapper}>
                          <button className={style.primaryCta} onClick={()=> navigate('/course')} >Get Started Now</button>
                          <button className={style.secondaryCta} >Demo Class</button>
                      </div>
                    </div>
                  <div className={style.videoContet}>
                      <video width="100%" height="100%" controls>
                          <source src="https://dms.licdn.com/playlist/C4E05AQHgNMK-Ox-mwQ/mp4-640p-30fp-crf28/0/1641487605950?e=1642582800&v=beta&t=5ZqQun3qQ0Ds0wa7UvWFBYyAEjjrNxB-zGcvYE-gVFg" type="video/mp4"/>
                      </video>
                  </div>
                </div>
              </div>
              <div className={style.section1}>
                <div className={style.contentWrapper}>
                    <div className={style.caroContentBody}>
                      <div className={style.caroContentHeading}>Who we are ?</div>
                      <div className={style.caroContentDesc}>
                      IAM School is a craft by Industry’s best Identity professionals to develop talented skills in the area of secure Identity and Access Management.
                      </div>
                      <div className={style.dFlex}>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="clock" />
                          <div className={style.gunpointText}>5 Weeks</div>
                        </div>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="calendar" />                    
                          <div className={style.gunpointText}>26, Feb 2022</div>
                        </div>
                      </div>
                      <div className={style.ctaWrapper}>
                          <button className={style.primaryCta} onClick={()=> navigate('/course')} >Get Started Now</button>
                          <button className={style.secondaryCta} >Demo Class</button>
                      </div>
                    </div>
                  <div className={style.videoContet}>
                      <video width="100%" height="100%" controls>
                          <source src="https://dms.licdn.com/playlist/C4D05AQGpxSTCUhv0AA/mp4-720p-30fp-crf28/0/1641822996591?e=1642582800&v=beta&t=zSnsWI69KIYkb1fQmxswy8arBQ0BpWL-UNol9clptP0" type="video/mp4"/>
                      </video>
                  </div>
                </div>
              </div>
              <div className={style.section1}>
                <div className={style.contentWrapper}>
                    <div className={style.caroContentBody}>
                      <div className={style.caroContentHeading}>Lab as a Service</div>
                      <div className={style.caroContentDesc}>
                      IAM Lab is a customised cloud based infrastructure on identity solution which is aligned to the real identity environment of business empowered with Digitaiken IAM experts to help mitigate risk and seamless identity solution rollout.
                      </div>
                      <div className={style.dFlex}>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="clock" />
                          <div className={style.gunpointText}>5 Weeks</div>
                        </div>
                        <div className={style.gunPointWrapper}>
                            <img className={style.icon} src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="calendar" />                    
                          <div className={style.gunpointText}>26, Feb 2022</div>
                        </div>
                      </div>
                      <div className={style.ctaWrapper}>
                          <button className={style.primaryCta} onClick={()=> navigate('/course')} >Get Started Now</button>
                          <button className={style.secondaryCta} >Demo Class</button>
                      </div>
                    </div>
                  <div className={style.videoContet}>
                      <video width="100%" height="100%" controls>
                          <source src="https://dms.licdn.com/playlist/C4D05AQED3PiUgmNGMA/mp4-720p-30fp-crf28/0/1642427114575?e=1642582800&v=beta&t=5PneaDiYS5H8lJE3X5nrMASQ7nUUyMaTu28aoB2EB98" type="video/mp4"/>
                      </video>
                  </div>
                </div>
              </div>
            </Carousel>
      </div>
    );
}
