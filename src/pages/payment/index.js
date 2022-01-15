import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import s from "./index.module.css";
import axios from "axios";
import cx from 'classnames'
import {  toast } from 'react-toastify';
import { Skeleton } from 'antd';

export default function Payment() {

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [courseData, setCourseData] = useState({})
    const [prices,setPrices] = useState({})
    const [activeSlot,setActiveSlot] = useState(0)
    const [paymentLink, setPaymentLink] = useState('')


    const id = window.location.href.split('/').slice(-1)[0]
    useEffect(()=>{
        axios
          .get(
            `https://admin.digitaikenacademy.com/api/candidate/android/getcourse?id=${id}`
          )
          .then((res) => {

            const data = res.data.data.courses
            setCourseData(data);
            const discount = ((data.price * 50) / 100).toFixed()
            const gst = ((+data.price * 18) / 100).toFixed();
            const subTotal = +discount + +gst
            const total = subTotal 
            const prices = {
                gst,
                subTotal,
                discount,
                total
            }
            setPrices({...prices})
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    },[])


    const handleOnchange =(e) => {
        const data = {
            ...userData,
            [e.target.name] : e.target.value
        }
        setUserData({...data})
        console.log(data)
    }

    const handlePostUserData = () => {
        axios.post('https://admin.digitaikenacademy.com/api/candidate/android/candidate-enroll',{
            ...userData,
            course_id : id,
            batch_id : activeSlot
        })
        .then((res)=>{
            const data = res.data.data.res
            window.location.href = data.payment_link
            localStorage.setItem("BOOKING_CODE",data.booking_code)
        })
        .catch((res)=>{
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
          console.log(res.response.data)
        })
        
    }


  return (
    <div>
      <Header />
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.lhs}>
            <div className={s.loginCard}>
              <div className={s.cardTitle}>Please provide your details</div>
              <div className={s.inputFields}>
                <input className={cx(s.loginInput,s.mr_10)} name="candidate_name" placeholder="Full Name" onChange={handleOnchange}  />
                <input className={s.loginInput} name="candidate_mobile_no" placeholder="Mobile" onChange={handleOnchange} />
              </div>
              <div className={s.inputFields}>
                <input className={s.loginInput} name="candidate_email" placeholder="Email" onChange={handleOnchange} />
              </div>
            </div>
            <div className={s.loginCard}>
              <div className={s.cardTitle}>Next Upcoming batches</div>
              <div className={s.slotsContainer}>
                {loading ? (<Skeleton/>):(
                  courseData?.batch?.map((batch,i)=>(
                        <div key={batch?.id} onClick={()=>setActiveSlot(batch?.id)} className={cx(s.slotCard,{[s.activeSlot]: activeSlot == batch.id})}>{`${batch.start_date} (${batch.name})`} <span><img src={`${process.env.PUBLIC_URL}/images/clock-black.svg`} /></span></div>
                  )))
                
                }
              </div>
              <button className={s.buyNow} onClick={handlePostUserData} >Pay Now</button>
            </div>
          </div>
          <div className={s.rhs}>
              {!loading ? (
                <div className={s.paymentDetailsCard}>
                    <div className={s.courseDesc}>
                        <div>{courseData.name}</div>
                        <div className={s.courseSubTitle} >
                            <div>Management</div>
                            <div>INR {courseData.price}</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.courseDesc}>
                        <div className={cx(s.courseSubTitle, s.semibold)} >
                            <div>Discount 50%</div>
                            <div>{prices.discount}</div>
                        </div>
                        </div>
                        <div className={s.courseDesc}>
                        
                        <div className={s.courseSubTitle} >
                            <div>GST 18%</div>
                            <div>{prices.gst}</div>
                        </div>
                        </div>
                        <div className={cx(s.courseDesc, s.borderNone, s.bold)}>
                        <div className={cx(s.courseSubTitle)} >
                            <div>Total</div>
                            <div>{prices.total}</div>
                        </div>
                        </div>
                    </div>
                </div>
              ):(<div className={s.paymentDetailsCard} >
                  <Skeleton/>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
