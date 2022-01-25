import React from "react";
import style from "./index.module.css";

export default function CommonSection({ isTrainingSection }) {
  return (
    <div className={style.container}>
      <div
        className={style.sectionContent}
        style={{ backgroundColor: isTrainingSection ? "#F2F2F2" : "#F2FAFF" }}
      >
        <div
          className={style.contentWrapper}
          style={{ flexDirection: isTrainingSection ? "row" : "row-reverse" }}
        >
          <div>
            <img
              className={style.image}
              style={{ marginRight: isTrainingSection ? "6.6vw" : "" }}
              src={
                isTrainingSection
                  ? `${process.env.PUBLIC_URL}/images/benfits.svg`
                  : `${process.env.PUBLIC_URL}/images/projects.svg`
              }
            />
          </div>
          <div
            className={style.cardsConatiner}
            style={{ marginRight: isTrainingSection ? "" : "6.6vw" }}
          >
            <h2 className={style.heading}>
              {isTrainingSection
                ? "What is there during and after training for you?"
                : "Work on live projects and get the opportunity to be part global assignments."}
            </h2>
            {isTrainingSection && (
              <p className={style.para}>
                DETAILS ABOUT OUR 5 WEEKS INDUSTRY DESIGNED TRAINING PROGRAM
              </p>
            )}
            <div className={style.cardsBody}>
              <div className={style.card}>
                <div className={style.cardIcon}>
                  <img
                    src={
                      isTrainingSection
                        ? `${process.env.PUBLIC_URL}/images/card1-icon.svg`
                        : `${process.env.PUBLIC_URL}/images/project-card1.svg`
                    }
                  />
                </div>
                <div className={style.cardText}>
                  {isTrainingSection
                    ? "Gain knowledge on Secure Identity Management and mobility concepts"
                    : "You will get the opportunity to work with OKta professionals on live projects during and after training programmes."}
                </div>
              </div>
              <div className={style.card}>
                <div className={style.cardIcon}>
                  <img
                    src={
                      isTrainingSection
                        ? `${process.env.PUBLIC_URL}/images/card2-icon.svg`
                        : `${process.env.PUBLIC_URL}/images/project-card2.svg`
                    }
                  />
                </div>
                <div className={style.cardText}>
                  {isTrainingSection
                    ? "Gain knowledge on Secure Identity Management and mobility concepts"
                    : "You can be one of the OKTA professionals to be working with Digitaiken Tech Corporation"}
                </div>
              </div>
              <div className={style.card}>
                <div className={style.cardIcon}>
                  <img
                    src={
                      isTrainingSection
                        ? `${process.env.PUBLIC_URL}/images/card-icon3.svg`
                        : `${process.env.PUBLIC_URL}/images/card-icon3.svg`
                    }
                  />
                </div>
                <div className={style.cardText}>
                  {isTrainingSection
                    ? "Gain knowledge on Secure Identity Management and mobility concepts"
                    : "Get assistance from Digitaiken’s team to get placed with some of the top brands"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
