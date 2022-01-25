import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import s from "./index.module.css";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className={s.content}>
        <div className={s.wrapper}>
          <div className={s.bannerImg}>
            <img src={`${process.env.PUBLIC_URL}/images/aboutus.svg`} />
          </div>
          <div className={s.title}>We have 3 key goals!</div>
          <div className={s.desc}>
          One of our central plans is to work intimately with Okta, which is our trusted professional partner, and execute it (Okta) for clients worldwide. Furthermore, we aim to become the experts helps for Okta so we can extend the stability and development of Okta as an identity for their clients and our clients. 
          </div>
          <div className={s.desc}>
          Additionally, clients who do not have the ability to test some of Okta’s functionalities can do so now in our lab on the fly, and clients who need short term progression plans can develop them on our platform.   <br />
            <br />
            That is the force of IAM lab as a service, where we make and re-enact the eco-system of our clients, helping them implement their Identity capabilities and troubleshoot problems. 
          </div>
          <div className={s.desc}>
          The third arm of DigiTaiken’s IAM capability is our school, which is a part of DigiTaiken Academy. 
            <br />
            <br />
            We are aware that there is a lack of IAM experts in the world, so we want to empower the growth of talented identity experts. With that purpose in mind, we have developed this industry ready identity program, where aspirants will be trained in Identity Management by our certified industry experts. They will learn Okta environment capabilities by tackling real-life projects and situations which they’re most likely to face in ordinary conditions throughout their future working years.
            <br />
            <br />
            This is an exceptionally strong stage that we are building to improve the capability of Identity world.
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
