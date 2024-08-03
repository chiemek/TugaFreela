import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import EmailLogo from "../../../assets/icons/emailLogo.png";
import { HashLink } from "react-router-hash-link";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="container90">
        <img src={EmailLogo} alt="logo email" />
        <h2>Obrigado por confirmar seu cadastro</h2>
        <p>Agora já pode continuar seu cadastro</p>
        <HashLink to="/Login" id="link">
          <button>Entrar</button>
        </HashLink>
      </div>
      <Footer2 />
    </>
  );
};

export default ThankYou;
