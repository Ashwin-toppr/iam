import logo from './logo.svg';
import Home from './components/home';
import CommonSection from "./components/commonSection";
import Stats from './components/stats';
import Oppotunities from './components/jobOpportunities';
import IndustryLeaders from './components/industryLeaders';
import Testimonial from './components/testimonial';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Home />
      <CommonSection isTrainingSection={true} />
      <CommonSection isTrainingSection={false} />
      <Stats/>
      <Oppotunities/>
      <IndustryLeaders/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
