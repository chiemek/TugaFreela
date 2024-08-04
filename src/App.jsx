// import Footer from "./components/Footer/Footer";
import "./Index.css";
import { ModalProvider } from "../public/ModalContext";
// import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Change from "./pages/Password/Change/Change";
import Confirm from "./pages/Password/Confirm/Confirm";
import Email from "./pages/Password/Email/Email";
import Privacy from "./pages/Privacy/Privacy";
import Basic from "./pages/SignUp/Basic/Basic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Customer from "./pages/SignUp/Customer/Customer";
// import FreelancerLogin from "./pages/SignUp/Freelancer/FreelancerLogin";
import Terms from "./pages/Terms/Terms";
import ContactUs from "./pages/ContactUs/ContactUs";
import Freelance from "./pages/Freelance/Freelance";
import FAQ from "./pages/FAQ/FAQ";
import ThankYou from "./pages/Password/ThankYou/ThankYou";
import NotFound from "./components/NotFound/NotFound";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Footer2 from "./components/Footer/Footer2/Footer2";

function App() {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Change" element={<Change />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Basic" element={<Basic />} />
          {/* <Route path="/Customer" element={<Customer />} /> */}
          {/* <Route path="/FreelancerLogin" element={<FreelancerLogin />} /> */}
          <Route path="/Terms" element={<Terms />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Freelance" element={<Freelance />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Header /> */}
        <Privacy />
        {/* <Footer /> */}
      </ModalProvider>
      <ToastContainer />
    </>
  );
}

export default App;
