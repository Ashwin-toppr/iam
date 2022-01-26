import React from 'react'
import CommonSection from '../../components/commonSection'
import Footer from '../../components/footer';
import Header from '../../components/Header';
import Home from '../../components/home'
import IndustryLeaders from '../../components/industryLeaders';
import Oppotunities from '../../components/jobOpportunities';
import Stats from '../../components/stats';
import Testimonial from '../../components/testimonial';

export default function HomeLanding() {
    return (
      <div>
        <Header/>
        <Home />
        <CommonSection isTrainingSection={true} />
        <CommonSection isTrainingSection={false} />
        <Stats/>
        <Oppotunities/>
        <IndustryLeaders/>
        <Testimonial/>
        <Footer/>
      </div>
    );
}
