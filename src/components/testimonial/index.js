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
                <img src={`${process.env.PUBLIC_URL}/images/profilepic2.png`} />
              </div>
              <div className={style.desc}>
                Lorem Ipsum has been the industry’s stand dummy text ever since
                the 1500s, when unknown printer took.
              </div>
              <div className={style.name}>Madely Pondor</div>
              <div className={style.designation}>IT Specialist</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/profilepic2.png`} />
              </div>
              <div className={style.desc}>
                Lorem Ipsum has been the industry’s stand dummy text ever since
                the 1500s, when unknown printer took.
              </div>
              <div className={style.name}>Madely Pondor</div>
              <div className={style.designation}>IT Specialist</div>
            </div>
            <div className={style.carocard}>
              <div className={style.profilePic}>
                <img src={`${process.env.PUBLIC_URL}/images/profilepic2.png`} />
              </div>
              <div className={style.desc}>
                Lorem Ipsum has been the industry’s stand dummy text ever since
                the 1500s, when unknown printer took.
              </div>
              <div className={style.name}>Madely Pondor</div>
              <div className={style.designation}>IT Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
