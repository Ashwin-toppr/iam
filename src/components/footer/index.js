import React, { useState } from 'react'
import style from './index.module.css'
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';

export default function Footer() {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [loading, setloading] = useState(false)
  const [showErrMsg, setshowErrMsg] = useState(false)
  const [email, setEmail] = useState('')
  const [showSuccessMsg, setshowSuccessMsg] = useState(false)


  const handleSubmit = () => {

    setloading(true)

    axios.post('https://admin.digitaikenacademy.com/api/candidate/android/add-subscribe',{email : email})
    .then((res)=>{
      setloading(false)
      setshowSuccessMsg(true)
    })

    .catch(()=>{
      setloading(false)
    })

  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    if(!e.target.value.match(validRegex)){
      setshowErrMsg(true)
    }else{
      setshowErrMsg(false)
    }
  }

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
              Building the Next with passion
              </div>
              <div className={style.inputWrapper}>
                <input className={style.input} onChange={handleChange} type={"text"} placeholder='Please enter a mail' />
                <button className={style.button} onClick={handleSubmit} >Subscribe {loading && <LoadingOutlined  />} </button>
              </div>
              {showErrMsg && 
                <div className={style.errMsg} >The input is not valid E-mail!</div>
              }
              {showSuccessMsg && 
                <div className={style.errMsg} >Successfully Subscribed!</div>
              }
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
                  DigiTaiken Tech Corporation Ltd <br/> 79 College Road, Harrow
                  Middlesex, HA1 1BD,United Kingdom
                </div>
              </div>
              <div className={style.locationWrap}>
                <img
                  className={style.flag}
                  src={`${process.env.PUBLIC_URL}/images/canada.png`}
                />
                <div>DigiTaiken Tech Corporation <br/> Toronto, Canada</div>
              </div>
              <div className={style.locationWrap}>
                <img
                  className={style.flag}
                  src={`${process.env.PUBLIC_URL}/images/india.png`}
                />
                <div>
                  DigiTaiken Tech LLP <br/> 38/3, H N Halli Lake Road, Off Sarjapura
                  Road, Doddakanelli, <br/> Bangalore, Karnataka, 560035, India
                </div>
              </div>
            </div>
          </div>
          <div className={style.socialFooter}></div>
        </div>
      </div>
    );
}
