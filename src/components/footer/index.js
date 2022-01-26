import React, { useState } from 'react'
import style from './index.module.css'
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [loading, setloading] = useState(false)
  const [showErrMsg, setshowErrMsg] = useState(false)
  const [email, setEmail] = useState('')
  const [showSuccessMsg, setshowSuccessMsg] = useState("")

  const navigate = useNavigate();


  const handleSubmit = () => {

    setloading(true)

    axios.post('https://admin.digitaikenacademy.com/api/candidate/android/add-subscribe',{email : email})
    .then((res)=>{
      setloading(false)
      setshowSuccessMsg(res.data.message)
      // debugger
    })

    .catch((err)=>{
      setloading(false)
      console.log(err);
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
                <div className={style.errMsg} >{showSuccessMsg}</div>
              }
            </div>
            <div className={style.redirections}>
              <ul className={style.redirectionWrapper} >
                <li onClick={()=>navigate('/aboutus')} >About Us</li>
                <li onClick={()=>navigate('/team')} >Team</li>
                <li onClick={()=>navigate('/course')} >Course</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
              </ul>
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
        </div>
          <div className={style.socialFooter}>
            <div className=''>ALL RIGHTS RESERVED BY DIGITAIKEN</div>
            <ul className={style.legal}  >
              <li><a href='https://admin.digitaikenacademy.com/asset/privacy_policy.pdf' target="_blank" >Privacy Policy</a></li>
              <li><a href='https://admin.digitaikenacademy.com/asset/terms_conditions.pdf' target="_blank" >Term of Use</a></li>
              <li onClick={()=>navigate("/contact")} >Contact Us</li>
            </ul>
            <div className={style.socialWrap}>
              <a href='https://www.linkedin.com/company/digitaiken/mycompany/?viewAsMember=true' target="_blank">
                <img src={`${process.env.PUBLIC_URL}/images/linkedIn.svg`} />
              </a>
              <a href='https://www.youtube.com/channel/UCg39zTOwf6BwYxx-H54xDgA' target="_blank" >
                <img src={`${process.env.PUBLIC_URL}/images/youtube.svg`} />
              </a>
            </div>
          </div>
      </div>
    );
}
