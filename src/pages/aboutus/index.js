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
          <div className={s.title}>We have 3 key plans!</div>
          <div className={s.desc}>
            One of our central plans is to work intimately with Okta, which is
            our trusted professional partner, and execute it (Okta) for clients
            worldwide. Further more, we aim to become the experts helps for Okta
            so we can extend the stability and development of Okta as an
            identity for their clients and our clients.
          </div>
          <div className={s.desc}>
            The second goal what we are really going after is to set up an
            identity lab as a service where world clients who are struggling to
            have their capability and identity issues solved can now get them
            rapidly off the rack. Additionally, clients who do not have the
            ability to test some of Okta’s functionalities can do so now in our
            lab on the fly, and clients who need short term progression plans
            can develop them on our platform. <br />
            <br />
            That is the force of IAM lab as a service, where we make and
            re-enact the eco-system of our clients, helping them implement their
            Identity capabilities and troubleshoot problems.
          </div>
          <div className={s.desc}>
            The third arm of DigiTaiken’s IAM capability is our school, which is
            a part of DigiTaiken Academy.
            <br />
            <br />
            We are aware that there is a stretch of IAM experts in the world. We
            want to empower the growth of talented identity experts, and with
            that purpose in mind we have developt this industry ready identity
            program, where our certified industry experts will be driving the
            training for those aspirants who are ready to learn identity
            management, providing the capability of Okta environment through
            which they can tackle the real life projects and situations which
            most likely they will find in couple of years in ordinary
            conditions.
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
