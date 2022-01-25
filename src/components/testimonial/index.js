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
                <img src={`${process.env.PUBLIC_URL}/images/test1.jpeg`} />
              </div>
              <div className={style.desc}>
              Wonderful career growth opportunity for college graduates. Our students look forward with excitement to entering IAM school program.
              </div>
              <div className={style.name}>Sohit Shukla</div>
              <div className={style.designation}>PhD Pursuing (cloud computing)</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/test2.jpeg`} />
              </div>
              <div className={style.desc}>
              I am finding that the knowledge students will gain with this program adds up to their professional growth. We are / I am positive that IAM school program will facilitate freshers and college grads to Kick start their career journey.
              </div>
              <div className={style.name}>Gagan Saxena</div>
              <div className={style.designation}>Founder & CEO - GreenNinja | HQbe</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/test3.jpeg`} />
              </div>
              <div className={style.desc}>
              With Global industry professionals and a dedicated team we are sure this IAM school program will be a great success for both students and the university. 
specialization in cloud computing
              </div>
              <div className={style.name}>Ashish kumar Trivedi</div>
              <div className={style.designation}>Phd computer science, specialisation in cloud computing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
