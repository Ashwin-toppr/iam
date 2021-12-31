import React from 'react'
import style from './index.module.css'

export default function Footer() {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.wrapper}>
            <div className={style.firmContent}>
              <div>
                <img
                  className={style.logo}
                  src={`${process.env.PUBLIC_URL}/images/logo.png`}
                />
              </div>
              <div className={style.desc}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Please enter email"
                />
                <button className={style.button}>Subscribe</button>
              </div>
            </div>
            <div className={style.redirections}>
              <div className={style.redirectionWrapper} >
                <a href="google.com">About Us</a>
                <a href="google.com">Team</a>
                <a href="google.com">Pricing</a>
                <a href="google.com">Contact</a>
              </div>
            </div>
            <div className={style.locations}>
              <div className={style.locationWrap}>
                <img
                  className={style.flag}
                  src={`${process.env.PUBLIC_URL}/images/uk.png`}
                />
                <div>
                  DigiTaiken Tech Corporation Ltd 79 College Road, Harrow
                  Middlesex, HA1 1BD,United Kingdom
                </div>
              </div>
              <div className={style.locationWrap}>
                <img
                  className={style.flag}
                  src={`${process.env.PUBLIC_URL}/images/canada.png`}
                />
                <div>DigiTaiken Tech Corporation Toronto, Canada</div>
              </div>
              <div className={style.locationWrap}>
                <img
                  className={style.flag}
                  src={`${process.env.PUBLIC_URL}/images/india.png`}
                />
                <div>
                  DigiTaiken Tech LLP 38/3, H N Halli Lake Road, Off Sarjapura
                  Road, Doddakanelli, Bangalore, Karnataka, 560035, India
                </div>
              </div>
            </div>
          </div>
          <div className={style.socialFooter}></div>
        </div>
      </div>
    );
}
