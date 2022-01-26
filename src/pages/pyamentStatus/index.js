import React, { useEffect,useState } from 'react'
import { Modal, Skeleton } from 'antd';
import s from './index.module.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PaymentStatus() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsloading] = useState(true)
    const [msg,setMsg] = useState('')
    
    useEffect(()=>{
        const booking_code = localStorage.getItem('BOOKING_CODE')
        axios.get(`https://admin.digitaikenacademy.com/api/candidate/android/verifybookingpaymentstatus?booking_code=${booking_code}`)
        .then((res)=>{
            setIsSuccess(true)
            setIsloading(false)
            setMsg(res.data.message)
            // debugger
        })
        .catch((res)=>{
            debugger
            setIsSuccess(false)
            setIsloading(false)
        })
    },[])

    const handleRetry = () => {
       const link =  localStorage.getItem("payment_link")
       window.location.href = link
    }

    const navigate = useNavigate()

    const handleClose_R_home = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            {!isLoading ? (
                <Modal visible={true} closable={true} maskClosable={true} onCancel={handleClose_R_home}  footer={false} >
                    <div className={s.content}>
                        <img src={`${process.env.PUBLIC_URL}/images/payment_${isSuccess ? "success":"failure"}.png`} />
                        <div className={s.title}>
                            {msg}
                        </div>
                        <div className={s.subTitle} >
                            {isSuccess ? "Thank you! Your payment has been received.":"You can retry the payment below to continue this"}
                        </div>
                        {isSuccess ? (
                            <div className={s.footer}>
                                <button onClick={handleClose_R_home} className={s.primary}>Go to Home</button>
                            </div>
                        ):(
                            <div className={s.footer}>
                                <button onClick={handleRetry} className={s.primary}>Retry</button>
                                <button onClick={handleClose_R_home}  className={s.outline}>Home</button>
                            </div>
                        )}
                    </div>
                </Modal>
            ):<Skeleton/>}
        </div>
    )
}
