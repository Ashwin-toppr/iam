import React, { useEffect, useRef } from "react";
import style from "./index.module.css";
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from "antd";

export default function IndustryLeaders() {
  const industryRef = useRef()

  const url = window.location.href;
  useEffect(()=>{
    if(url.includes("team")){
      industryRef.current.scrollIntoView() 
    }
  },[url])

  return (
    <div ref={industryRef} className={style.container}>

      <Carousel  >
        <div>
          <div className={style.contentWrap}>
            <div className={style.content}>
              <div className={style.miniTitle}>More about our faculty</div>
              <div className={style.title}>
                Our OKTA Professional Industry Leaders
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/jijo.png`} />
                <div className={style.quote}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`}
                  />
                </div>
              </div>
              <div className={style.name}>Jijo Joseph</div>
              <div className={style.experince}>Okta Consultant & Trainer</div>
              <div className={style.desc}>
              Jijo leads DigiTaiken’s identity and Access Management practices across the globe. He is an experienced security leader with over 16+ years’ experience in helping some of the largest global and regional companies transform their security programs. He has deep knowledge in the fields of Identity and Access Management.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.contentWrap}>
            <div className={style.content}>
              <div className={style.miniTitle}>More about our faculty</div>
              <div className={style.title}>
                Our OKTA Professional Industry Leaders
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/riya.png`} />
                <div className={style.quote}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`}
                  />
                </div>
              </div>
              <div className={style.name}>Riya Mariyam Raju</div>
              <div className={style.experince}>Okta Professional & Trainer</div>
              <div className={style.desc}>
              Riya is a dynamic young Okta professional, responsible for managing multiple Identity Environments. She is one of the key pillars in Digitaiken’s digital journey, driving new initiatives around Identity and Access Management building her knowledge and expertise at the same time.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.contentWrap}>
            <div className={style.content}>
              <div className={style.miniTitle}>More about our faculty</div>
              <div className={style.title}>
                Our OKTA Professional Industry Leaders
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/leader-3.png`} />
                <div className={style.quote}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`}
                  />
                </div>
              </div>
              <div className={style.name}>Maria Martin Pognante</div>
              <div className={style.experince}>Training Facilitator</div>
              <div className={style.desc}>
              María is a native Spanish speaker, proficient in English, living in Argentina. She is a University Professor in Letters and Teacher Aide at National University of Rosario. She is currently working as Content Specialist and Corporate Training Facilitator at DigiTaiken, training students as well as gaining knowledge herself.
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
