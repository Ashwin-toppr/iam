import React from 'react'
import style from './index.module.css'
import { Carousel } from 'react-responsive-carousel';


export default function IndustryLeaders() {
    return (
      <div className={style.container}>
        <Carousel showArrows={false} showStatus={false} autoPlay={true} className={style.caroPack} infiniteLoop={true} >
          <div className={style.content}>
            <div className={style.miniTitle}>More about our faculty</div>
            <div className={style.title}>
              our OKTA Professional Industry Leaders
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                  <img src={`${process.env.PUBLIC_URL}/images/profilepic1.png`} />
                  <div className={style.quote}>
                    <img src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`} />
                  </div>
              </div>
              <div className={style.name}>Jijo Jospeh</div>
              <div className={style.experince}>16 Years+ Experince</div>
              <div className={style.desc}>
                Jijo leads DigiTaiken’s identity and Access Management practices
                across globe. He is an experienced security leader with over 16+
                years’ experience in helping some of the largest global and
                regional companies transform their security programs. Deep
                knowledge in the fields of Identity and Access Management.
              </div>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.miniTitle}>More about our faculty</div>
            <div className={style.title}>
              our OKTA Professional Industry Leaders
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                  <img src={`${process.env.PUBLIC_URL}/images/leader-2.png`} />
                  <div className={style.quote}>
                    <img src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`} />
                  </div>
              </div>
              <div className={style.name}>Riya Mariyam Raju</div>
              <div className={style.experince}>Trainer</div>
              <div className={style.desc}>
              Riya is a dynamic young Okta profession and responsible for managing multiple Identity Environment. She is one of the key pillars in Digitaiken’s digital journey driving new initiatives around Identity and access management building her knowledge and expertise at the same time.
              </div>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.miniTitle}>More about our faculty</div>
            <div className={style.title}>
              our OKTA Professional Industry Leaders
            </div>
            <div className={style.card}>
              <div className={style.profilePic}>
                  <img src={`${process.env.PUBLIC_URL}/images/leader-3.png`} />
                  <div className={style.quote}>
                    <img src={`${process.env.PUBLIC_URL}/images/testimonial-quote.svg`} />
                  </div>
              </div>
              <div className={style.name}>Maria Martin Pognante</div>
              <div className={style.experince}>Trainer</div>
              <div className={style.desc}>
              María is a native Spanish speaker, proficient in English, living in Argentina. She is a University Professor in Letters and Teacher Aide at National University of Rosario. She is currently working as Content Specialist and Corporate Training Facilitator at DigiTaiken, training students as well as gaining knowledge herself.
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
}
