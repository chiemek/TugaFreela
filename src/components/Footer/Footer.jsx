import "./Footer.css";
import Logo from "../../assets/icons/new-logo.png";
import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/Facebook.png";
import Instagram from "../../assets/icons/instagramLogo.png";
import Twitter from "../../assets/icons/twitterLogo.png";
import { useModal } from "../../../public/ModalContext";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const { openModal } = useModal();
  return (
    <footer>
      <div className="logo">
        <HashLink to="/#here">
          <img src={Logo} alt="logo" />
        </HashLink>
        <ul>
          <li>
            <HashLink to="/#How-it-works">Como Funciona?</HashLink>
          </li>
          <li>
            <HashLink to="/Terms#terme">Termos de Serviço</HashLink>
          </li>
          <li>
            <Link to="/Privacy" onClick={openModal}>
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link to="/Basic">Una-se a Nossa Equipe</Link>
          </li>
        </ul>
      </div>
      <div className="freelancer">
        <ul>
          <li>
            <Link to="/Basic">Para Freelancer</Link>
          </li>
          <li>
            <Link to="/Basic">Projetos</Link>
          </li>
          <li>
            <HashLink to="/ContactUs#cont">Contato</HashLink>
          </li>
          <li>
            <HashLink to="/FAQ#faq">F.A.Q</HashLink>
          </li>
        </ul>
      </div>
      <div className="customer">
        <ul>
          <li>
            <Link to="/Basic">Para Clientes</Link>
          </li>
          <li>
            <HashLink to="/Freelance#free">Freelancers</HashLink>
          </li>
          <li>
            <HashLink to="/FAQ#faq">F.A.Q</HashLink>
          </li>
        </ul>
      </div>
      <div className="follow-us">
        <h3>Siga-nos</h3>

        <div className="icons">
          <Link>
            <img src={Twitter} alt="twitter logo" />
          </Link>
          <Link>
            <img src={Instagram} alt="instagram logo" />
          </Link>
          <Link>
            <img src={Facebook} alt="facebook logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
