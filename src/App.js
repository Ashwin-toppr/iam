import logo from "./logo.svg";
import Home from "./components/home";
import CommonSection from "./components/commonSection";
import Stats from "./components/stats";
import Oppotunities from "./components/jobOpportunities";
import IndustryLeaders from "./components/industryLeaders";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import HomeLanding from "./pages/Home";
import Courses from "./pages/courses";
import CourseItem from "./pages/courseItem";
import Payment from "./pages/payment";
import ContactUs from "./pages/contactus";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'pure-react-carousel/dist/react-carousel.es.css';
  import 'react-toastify/dist/ReactToastify.css';
import PaymentStatus from "./pages/pyamentStatus";
import 'antd/dist/antd.css';
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <>
      < HashRouter>
        <Routes>
          <Route exact path="/" element={<HomeLanding />} />
          <Route exact path="/iam" element={<HomeLanding />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course/:id" element={<CourseItem />} />
          <Route path="/payment/:id" element={<Payment/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/paymentStatus" element={<PaymentStatus />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/team" element={<HomeLanding />} />
        </Routes>
      </ HashRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
