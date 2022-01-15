import React, { useEffect } from 'react'
import { Modal } from 'antd';
import s from './index.module.css'
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function PaymentStatus() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsloading] = useState(true)
    
    useEffect(()=>{
        const booking_code = localStorage.getItem('BOOKING_CODE')
        axios.get(`https://admin.digitaikenacademy.com/api/candidate/android/verifybookingpaymentstatus?booking_code=${booking_code}`)
        .then((res)=>{
            setIsSuccess(true)
            setIsloading(false)
        })
        .catch((res)=>{
            setIsSuccess(false)
            setIsloading(false)
        })
    })
    return (
        <div>
            {!isLoading && (
                <Modal visible={true} closable={true} footer={false} >
                    <div className={s.content}>
                        <img src={`${process.env.PUBLIC_URL}/images/payment_${isSuccess ? "success":"failure"}.png`} />
                        <div className={s.title}>
                            {isSuccess ? "Payment Successful!" : "Your Payment has failed"}
                        </div>
                        <div className={s.subTitle} >
                            {isSuccess ? "Thank you! Your payment has been received.":"You can retry the payment below to continue this"}
                        </div>
                        {isSuccess ? (
                            <div className={s.footer}>
                                <button className={s.primary}>Go to Dashboard</button>
                            </div>
                        ):(
                            <div className={s.footer}>
                                <button className={s.primary}>Retry</button>
                                <button className={s.outline}>Home</button>
                            </div>
                        )}
                    </div>
                </Modal>
            )}
        </div>
    )
}
