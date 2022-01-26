import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import s from "./index.module.css";
import axios from "axios";
import cx from 'classnames'
import {  toast } from 'react-toastify';
import { Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Payment() {

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [courseData, setCourseData] = useState({})
    const [prices,setPrices] = useState({})
    const [activeSlot,setActiveSlot] = useState(0)
    const [paymentLink, setPaymentLink] = useState('')
    const [showErrMsg,setshowErrMsg] = useState({
      candidate_mobile_no : false,
      candidate_email : false
    })

    const [paymentLoading, setpaymentLoading] = useState(false)


    const id = window.location.href.split('/').slice(-1)[0]
    const regex = {
      candidate_mobile_no : /^[6-9]\d{9}$/gi,
      candidate_email :  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    }

    useEffect(()=>{
        axios
          .get(
            `https://admin.digitaikenacademy.com/api/candidate/android/getcourse?id=${id}`
          )
          .then((res) => {

            const data = res.data.data.courses
            setCourseData(data);
            const discount = +((data.price * 50) / 100).toFixed()
            const gst = +((+discount * 18) / 100).toFixed();
            const subTotal = +discount + +gst
            const total = +subTotal 
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
      const {value,name} = e.target
        if(["candidate_email","candidate_mobile_no"].includes(name) && !regex[name].test(value)){
          setshowErrMsg({...showErrMsg,[name]:!regex[name].test(value)})
          // debugger
          return;
        }
        console.log({...showErrMsg,[name]:!regex[name]?.test(value)})
        setshowErrMsg({...showErrMsg,[name]:!regex[name]?.test(value)})
        const data = {
            ...userData,
            [name] : value
        }
        console.log({
          ...userData,
          [name] : value
      })
        setUserData({...data})
    }

    const handlePostUserData = () => {
      setpaymentLoading(true)
      if(showErrMsg.candidate_email || showErrMsg.candidate_mobile_no) return;
        axios.post('https://admin.digitaikenacademy.com/api/candidate/android/candidate-enroll',{
            ...userData,
            course_id : id,
            batch_id : activeSlot
        })
        .then((res)=>{
            const data = res.data.data.res
            window.location.href = data.payment_link
            localStorage.setItem("BOOKING_CODE",data.booking_code)
            localStorage.setItem("payment_link",data.payment_link)
            setpaymentLoading(false)
        })
        .catch((res)=>{
          setpaymentLoading(false)
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
                <div  className={s.inputWrap}>
                  <input className={cx(s.loginInput,s.mr_10)} name="candidate_name" autoComplete="off" placeholder="Full Name" onChange={handleOnchange}  />
                </div>
                <div className={s.inputWrap} >
                  <span>+91</span>
                  <input className={cx(s.loginInput,s.mblInput)} name="candidate_mobile_no" autoComplete="off" placeholder="Mobile" onChange={handleOnchange} />
                  {showErrMsg.candidate_mobile_no ? <div className={s.errMsg} >Please enter a valid mobile number</div>:null}
                </div>
              </div>
              <div className={s.inputFields}>
                <div style={{width : "100%"}} className={s.inputWrap} >
                  <input className={s.loginInput} name="candidate_email" autoComplete="off"  placeholder="Email" onChange={handleOnchange} />
                  {showErrMsg.candidate_email ? <div className={s.errMsg} >Please enter a valid email</div>:null}
                </div>
              </div>
              <div className={s.inputFields}>
                <div style={{width : "100%"}} className={s.inputWrap} >
                  <input className={s.loginInput} name="candidate_address" autoComplete="off"  placeholder="Address" onChange={handleOnchange} />
                </div>
              </div>
              <div className={s.inputFields}>
                <div  className={s.inputWrap}>
                  <input className={cx(s.loginInput,s.mr_10)} name="candidate_city" autoComplete="off" placeholder="City" onChange={handleOnchange}  />
                </div>
                <div className={s.inputWrap} >
                  <input className={s.loginInput} name="candidate_state" autoComplete="off" placeholder="State" onChange={handleOnchange} />
                </div>
              </div>
              <div className={s.inputFields}>
                <div  className={s.inputWrap}>
                  <input className={cx(s.loginInput,s.mr_10)} name="candidate_pincode" autoComplete="off" placeholder="Pincode" onChange={handleOnchange}  />
                </div>
              </div>
            </div>
            <div className={s.loginCard}>
              <div className={s.cardTitle}>Next Upcoming batches</div>
              <div className={s.slotsContainer}>
                {loading ? (<Skeleton/>):(
                  courseData?.batch?.map((batch,i)=>(
                        <div key={batch?.id} onClick={()=>setActiveSlot(batch?.id)} className={cx(s.slotCard,{[s.activeSlot]: activeSlot == batch.id})}>{`${batch.start_date} (${batch.name})`} <span><img src={`${process.env.PUBLIC_URL}/images/${activeSlot == batch.id ? 'clock':'clock-black'}.svg`} /></span></div>
                  )))
                
                }
              </div>
              <button className={s.buyNow} onClick={handlePostUserData} >Pay Now {paymentLoading && <LoadingOutlined  />} </button>
            </div>
          </div>
          <div className={s.rhs}>
              {!loading ? (
                <div className={s.paymentDetailsCard}>
                    <div className={s.courseDesc}>
                        <div className={s.fw_300} >{courseData.name}</div>
                        <div className={s.courseSubTitle} >
                            <div className={s.fw_300} >Management</div>
                            <div className={s.fw_700}>INR {courseData.price.toLocaleString()}</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.courseDesc}>
                        <div className={cx(s.courseSubTitle, s.fw_600)} >
                            <div>Discount (Launch price)</div>
                            <div>INR -{prices.discount.toLocaleString()}</div>
                        </div>
                        </div>
                        <div className={s.courseDesc}>
                        
                        <div className={s.courseSubTitle} >
                            <div>GST 18%</div>
                            <div>INR {prices.gst.toLocaleString()}</div>
                        </div>
                        {/* <div className={s.courseSubTitle} >
                            <div>Sub Total</div>
                            <div>{prices.gst}</div>
                        </div> */}
                        </div>
                        <div className={cx(s.courseDesc, s.borderNone, s.fw_700)}>
                        <div className={cx(s.courseSubTitle,s.fw_700)} >
                            <div>Total Amount</div>
                            <div>INR {prices.total.toLocaleString()}</div>
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
