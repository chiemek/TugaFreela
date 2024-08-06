import "./Index.css";
import { ModalProvider } from "../public/ModalContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Change from "./pages/Password/Change/Change";
import Confirm from "./pages/Password/Confirm/Confirm";
import Email from "./pages/Password/Email/Email";
import Privacy from "./pages/Privacy/Privacy";
import Basic from "./pages/SignUp/Basic/Basic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Terms from "./pages/Terms/Terms";
import ContactUs from "./pages/ContactUs/ContactUs";
import Freelance from "./pages/Freelance/Freelance";
import FAQ from "./pages/FAQ/FAQ";
import ThankYou from "./pages/Password/ThankYou/ThankYou";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Change" element={<Change />} />
          <Route path="/forgot-password" element={<Email />} />
          <Route path="/reset-password/:token" element={<Change />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Basic" element={<Basic />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Freelance" element={<Freelance />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Privacy />
      </ModalProvider>
      <ToastContainer />
    </>
  );
}

export default App;
