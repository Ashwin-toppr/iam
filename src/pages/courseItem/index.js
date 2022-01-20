import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function CourseItem() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = window.location.href.split('/').slice(-1)[0]
  useEffect(() => {

    axios
      .get(
        `https://admin.digitaikenacademy.com/api/candidate/android/getcourse?id=${id}`
      )
      .then((res) => {
        setItem(res.data.data.courses);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const navigate = useNavigate();;

  const handleCtaClick = () => {
      navigate(`/payment/${id}`);
  }
  
  return (
    <div>
        <Header/>
      {!loading && 
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}>
            <img
              src={item.image}
            />
          </div>
          <div className={s.cardWrapper}>
            <div className={s.cardContent}>
              <div className={s.title}>{item.name}</div>
              {/* <div className={s.detail} dangerouslySetInnerHTML={{__html: item.course_details}} >
                            </div> */}
              <p className={s.desc}>
                {item.course_details}
              </p>
              <div className={s.subTitle}>Participants will learn how to:</div>
              <ul className={s.list} >
                  {item.participants_will_learn_how_to.map((item)=>(
                      <li className={s.listItem} >{item}</li>
                  ))}
              </ul>
              <div className={s.subTitle}>Who this course is for:</div>
              <ul className={s.list} >
                  {item.who_this_course_is_for.map((item)=>(
                      <li className={s.listItem} >{item}</li>
                  ))}
              </ul>
              <div className={s.subTitle}>Setup Requirements:</div>
              <ul className={s.list} >
                  {item.setup_requirements.map((item)=>(
                      <li className={s.listItem} >{item}</li>
                  ))}
              </ul>
              <div style={{display: "flex", justifyContent:'center'}} >
                <button onClick={handleCtaClick} className={s.buyNow} >Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
}
