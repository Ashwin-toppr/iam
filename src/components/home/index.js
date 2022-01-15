import React from 'react'
import style from './index.module.css'
import { Carousel } from 'react-responsive-carousel';
import './index.module.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {


  const navigate = useNavigate();

    return (
      <div className={style.container}>
        <div className={style.section1}>
            <Carousel showArrows={false} showStatus={false} autoPlay={true} className={style.caroPack}  >
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
                    {/* <iframe src='https://digitaikenuk-my.sharepoint.com/:v:/g/personal/anjalit_digitaiken_com/EblU05fueV5HrjoAxqdZMksBQ3cw0vyIFozWRbnzf6bT7A?e=tpxcAr' /> */}
                      <video width="100%" height="100%" controls>
                          <source src="src=https://digitaikenuk-my.sharepoint.com/:v:/g/personal/anjalit_digitaiken_com/EblU05fueV5HrjoAxqdZMksBQ3cw0vyIFozWRbnzf6bT7A?e=tpxcAr" type="video/mp4"/>
                      </video>
                  </div>
                </div>
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
                          <button className={style.primaryCta} onClick={()=>navigate('/course')} >Get Started Now</button>
                          <button className={style.secondaryCta} >Demo Class</button>
                      </div>
                    </div>
                  <div className={style.videoContet}>
                      <video width="100%" height="100%" controls>
                          <source src="src=http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
                      </video>
                  </div>
                </div>

                
                
            </Carousel>
        </div>
      </div>
    );
}
