import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import s from './index.module.css'
import cx from 'classnames'
import Footer from '../../components/footer'
import axios from 'axios'
import {  toast } from 'react-toastify';

export default function ContactUs() {
    const [data,setData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleSubmit = () => {
        axios.post('https://admin.digitaikenacademy.com/api/candidate/android/save-contact-enquiry',{
            ...data
        })
        .then((res)=>{
            setData({
                name:'',
                email:'',
                message:''
            })
        })
        .catch((res)=>{
            console.log(res.data)
            toast(res.response.data.message, {
                position: "top-bottom",
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
                    <div className={s.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.</div>
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
                            <div className={s.timing} >24 Hours / 7 Days Open Office time: 10 AM - 5:30 PM</div>
                        </div>
                        <div className={s.useInput}>
                            <div className={s.detailTitle}>
                            Get in Touch
                            </div>
                            <input  className={s.input} onChange={handleChange} value={data?.name} name='name' placeholder='Full Name' />
                            <input  className={s.input} onChange={handleChange} value={data?.email} name='email' placeholder='Email' />
                            <textarea onChange={handleChange} value={data?.message} className={cx(s.input,s.textarea)} name='message' placeholder='Type Message' />
                            <button className={s.button} onClick={handleSubmit} >Send Message</button>
                        </div>
                    </div>
                <Footer/>
                </div>
            </div>
        </div>
    )
}
