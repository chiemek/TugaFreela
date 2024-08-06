import Logo from "../../assets/icons/new-logo.png";
import SearchIcon from "../../assets/icons/searchIcon.png";
import Button from "../Button/Button";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="search">
        <input type="text" placeholder="buscar por profissionals" />
        <button>
          <img src={SearchIcon} alt="search button" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <HashLink to="/#How-it-works">Como Funciona?</HashLink>
          </li>
          <li>
            <Link to="/Basic">Cadastre-se </Link>
          </li>
          <li>
            <Link to="/Login">Entrar</Link>
          </li>
        </ul>
        <Link to="/Basic">
          <div className="b">
            <Button textColor="#fff" bgColor="rgba(214, 184, 255, 1)">
              PUBLIQUE UM PROJETO
            </Button>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
