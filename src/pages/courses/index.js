import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer';
import Header from '../../components/Header';
import { useNavigate } from "react-router-dom";
import style from './index.module.css'
import { Skeleton } from 'antd';
import { tuple } from 'antd/lib/_util/type';

export default function Courses() {


    const [data, setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://admin.digitaikenacademy.com/api/candidate/android/getcourses')
        .then((res)=>{
            console.log(res.data)
            setData(res.data.data.courses)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const navigate = useNavigate();;

    const handleCtaClick = (id) => {
        navigate(`/course/${id}`);
    }


    return (
      <div>
        <Header />
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.lhs}>
              <div className={style.heading}>
                OKTA Training and Certification Course Online
              </div>
              <div className={style.subHeading}>
                The Okta Course includes concepts like Amalgamating Okta into
                our organization for simple user access to data and
                applications, Hosting Applications in Okta.
              </div>
            </div>
            <div className={style.rhs}>
              <img
                className={style.bannerImage}
                src={`${process.env.PUBLIC_URL}/images/courses-banner.png`}
              />
            </div>
          </div>

          <div className={style.curriculumContainer}>
            <div className={style.miniTitle}>Learning options</div>
            <div className={style.miniSubTitle}>
              Choose your own comfortable learning experince
            </div>
            <div className={style.curriculumContent}>
              {loading ? <Skeleton/> : 
              
                data.map((item, i) => (
                  <div key={item.id} className={style.curriculimCard}>
                    <div className={style.currImage}>
                      <img style={{ width: "100%" }} src={item.image} />
                    </div>
                    <div className={style.currDesc}>
                      <div className={style.cardContent}>
                        <div className={style.cardTitle}>{item.name}</div>
                        <div className={style.cardSubTitle}>
                          {item.key_highlights.join(",")}
                        </div>
                        <div>
                          <div className={style.bullet}>
                            <span>
                              <img
                                style={{ width: "24px", marginRight: "10px" }}
                                src={`${process.env.PUBLIC_URL}/images/calendar-black.svg`}
                              />
                            </span>
                            <span>{item.duration} weeks</span>
                          </div>
                          <div className={style.bullet}>
                            <span>
                              <img
                                style={{ width: "24px", marginRight: "10px" }}
                                src={`${process.env.PUBLIC_URL}/images/wallet.svg`}
                              />
                            </span>
                            <span>{item.price.toLocaleString()} INR(+18% GST)</span>
                          </div>
                        </div>
                        {item.status ? 
                          <div>
                            <button
                              className={style.buyNow}
                              onClick={() => handleCtaClick(item.id)}
                            >
                              Buy Now
                            </button>
                          </div>:null
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
