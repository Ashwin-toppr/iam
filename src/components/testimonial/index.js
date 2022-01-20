import React from "react";
import style from "./index.module.css";

export default function Testimonial() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>Testimonial</div>
        <div className={style.subTitle}>our success story</div>
        <div>
          <div className={style.caroContainer}>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/profilepic1.png`} />
              </div>
              <div className={style.desc}>
              Wonderful career growth opportunity for college graduates. Our students look forward with excitement to enter into IAM school program.
              </div>
              <div className={style.name}>Madely Pondor</div>
              <div className={style.designation}>TPO</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/profilepic2.png`} />
              </div>
              <div className={style.desc}>
              I am finding the knowledge that students will gain with this program adds up to their professional growth. We are / I am definite that IAM school program will facilitate freshers and college grads to Kick start their career journey.
              </div>
              <div className={style.name}>Katleen Stone</div>
              <div className={style.designation}>HOD</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/testmonial-3.png`} />
              </div>
              <div className={style.desc}>
              With Global industry professionals and a dedicated team we are sure this IAM school program will be a great success for both students and the university.
              </div>
              <div className={style.name}>Alexa Janthaon</div>
              <div className={style.designation}>Lecturer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
