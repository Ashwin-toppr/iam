import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import s from './index.module.css'
import cx from 'classnames'
import Footer from '../../components/footer'
import axios from 'axios'
import {  toast } from 'react-toastify';

import { LoadingOutlined } from '@ant-design/icons';

export default function ContactUs() {
    const [data,setData] = useState({
        name:'',
        email:'',
        message:''
    })
    const [showErrMsg, setshowErrMsg] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        axios.post('https://admin.digitaikenacademy.com/api/candidate/android/save-contact-enquiry',{
            ...data
        })
        .then((res)=>{
            setData({
                name:'',
                email:'',
                message:''
            })
            setLoading(false)
            debugger
            toast(res.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:"success"
            });
        })
        .catch((res)=>{
            console.log(res.data)
            setLoading(false)
            toast(res.response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:"error"
                });
        })
    }



    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name=="email"){
            const candidate_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            setshowErrMsg(!candidate_email.test(value))
            

        }
        const payload = {
            ...data,
            [name]:value
        }
        setData({...payload})
    }

    return (
        <div>
            <Header/>
            <div className={s.container}>
                <div className={s.bgImage}>
                    <img src={`${process.env.PUBLIC_URL}/images/contactus-bg.png`} />
                </div>
                <div className={s.content}>
                    <div className={s.title}>Contact us</div>
                    {/* <div className={s.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.</div> */}
                    <div className={s.cardsContainer}>
                        <div className={s.detailsCard} >
                            <div className={s.detailTitle}>Contact us</div>
                            <div className={s.detailsWrap} >
                                <div className={s.flex} >
                                    <span className={s.mr_10} ><img src={`${process.env.PUBLIC_URL}/images/phone-ic.svg`} /></span>
                                    <span>+ 91 9876 54 3210</span>
                                </div>
                                <div className={s.flex} >
                                    <span className={s.mr_10} ><img src={`${process.env.PUBLIC_URL}/images/email-ic.svg`} /></span>
                                    <span>iamschool@digitaiken.com</span>
                                </div>
                            </div>
                            <div className={s.timing} > Reach us 24 Hours / 7 Days a week <br></br> (Open Office hours 10 AM - 5:30 PM) </div>
                        </div>
                        <div className={s.useInput}>
                            <div className={s.detailTitle}>
                            Get in Touch
                            </div>
                            <input  className={s.input} autoComplete='off' onChange={handleChange} value={data?.name} name='name' placeholder='Full Name' />
                            <input  className={s.input} onChange={handleChange} value={data?.email} name='email' autoComplete="off" placeholder='Email' />
                            {showErrMsg && <div className={s.errMsg} >Please enter valid email!</div>}
                            <textarea onChange={handleChange} value={data?.message} className={cx(s.input,s.textarea)} name='message' placeholder='Type Message' />
                            <button className={s.button} onClick={handleSubmit} >Send Message {loading && <LoadingOutlined/>} </button>
                        </div>
                    </div>
                <Footer/>
                </div>
            </div>
        </div>
    )
}
