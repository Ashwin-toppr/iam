import React from 'react'
import style from './index.module.css'


export default function IndustryLeaders() {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.miniTitle}>More about our faculty</div>
          <div className={style.title}>
            our OKTA Professional Industry Leaders
          </div>
          <div className={style.card}>
            <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/profilepic1.png`} />
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
      </div>
    );
}
