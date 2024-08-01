import { HashLink } from "react-router-hash-link";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import Header from "../../../components/Header/Header";
import EmailLogo from "../../../assets/icons/emailLogo.png";
import "./Confirm.css";

const Confirm = () => {
  return (
    <>
      <Header />
      <div className="container9">
        <img src={EmailLogo} alt="logo email" />
        <h2>Cheque seu email</h2>
        <p>
          Enviamos um email para {`<Email>`} <br />
          com instruções para redefinir sua senha.
        </p>
        <HashLink to="/Change" id="link">
          <span>&larr; </span>Voltar a Home
        </HashLink>
      </div>
      <Footer2 />
    </>
  );
};

export default Confirm;
