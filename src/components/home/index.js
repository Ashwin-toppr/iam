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
            <Carousel autoplay={false}  >
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
                          {/* <button className={style.secondaryCta} >Demo Class</button> */}
                      </div>
                    </div>
                  <div className={style.videoContet}>
                      <iframe class="mw-youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/rzl_yG5ofbY?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          {/* <button className={style.secondaryCta} >Demo Class</button> */}
                      </div>
                    </div>
                  <div className={style.videoContet}>
                    <iframe class="mw-youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/uH8v47EQ9H8?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          {/* <button className={style.secondaryCta} >Demo Class</button> */}
                      </div>
                    </div>
                  <div className={style.videoContet}>
                  <iframe class="mw-youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/0whdVuoLLNs?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  </div>
                </div>
              </div>
            </Carousel>
      </div>
    );
}
